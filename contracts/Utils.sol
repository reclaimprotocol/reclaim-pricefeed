// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./JsmnSolLib.sol";

library PricefeedLib {

	/** Price will be multiplied by 10^N, where N is this variable */
	uint public constant PRICE_DECIMALS = 6;
	string public constant API_URL_PREFIX = "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=";

	/**
	 * Extracts the coin id and proof from a JSON string.
	 * Expects the JSON to be "HTTPProviderParamsV2" type
	 */
	function extractCoinIdAndProof(string memory json) internal pure returns (string memory coinId, uint priceUsd) {
		// parse JSON & extract price
		uint returnValue;
		JsmnSolLib.Token[] memory tokens;
		uint actualNum;

		(returnValue, tokens, actualNum) = JsmnSolLib.parse(json, 30);
		require(returnValue == JsmnSolLib.RETURN_SUCCESS, "Failed to parse JSON");
		// find URL, that'll contain the coin ID
		uint urlIdx = _getTokenIndex(json, tokens, "url", 0);
		string memory url = JsmnSolLib.getBytes(
			json,
			tokens[urlIdx].start,
			tokens[urlIdx].end
		);
		// verify URL was expected & extract coin ID
		require(_stringStartsWith(url, API_URL_PREFIX), "URL is not valid CoinGecko URL");
		coinId = JsmnSolLib.getBytes(
			url,
			bytes(API_URL_PREFIX).length,
			bytes(url).length
		);

		uint resMatchesIdx = _getTokenIndex(json, tokens, "responseMatches", 0);
		require(tokens[resMatchesIdx].jsmnType == JsmnSolLib.JsmnType.ARRAY, "Array expected for responseMatches");
		// first object in responseMatches
		uint priceValueIdx = _getTokenIndex(json, tokens, "value", resMatchesIdx + 1);
		string memory priceStr = JsmnSolLib.getBytes(
			json,
			tokens[priceValueIdx].start,
			tokens[priceValueIdx].end
		);

		int price = JsmnSolLib.parseInt(priceStr, PRICE_DECIMALS);
		require(price >= 0, "Price somehow is negative");

		priceUsd = uint(price);
	}

	function _stringStartsWith(
		string memory big,
		string memory small
	) private pure returns (bool) {
		bytes memory bigBytes = bytes(big);
		bytes memory smallBytes = bytes(small);
		if(bigBytes.length < smallBytes.length) {
			return false;
		}
		for(uint i = 0; i < smallBytes.length; i++) {
			if(bigBytes[i] != smallBytes[i]) {
				return false;
			}
		}
		return true;
	}

	/**
	 * Get the value of a key in a JSON object. Not perfect, kinda relies
	 * on the JSON being one level deep.
	 */
	function _getTokenIndex(
		string memory str,
		JsmnSolLib.Token[] memory tokens,
		string memory key,
		uint startIdx
	) private pure returns (uint returnIdx) {
		string memory keyStr;
		require(tokens[0].jsmnType == JsmnSolLib.JsmnType.OBJECT, "Object expected");
		// iterate through keys
		for(uint i = startIdx + 1; i < tokens.length; i+= 2) {
			if(tokens[i].jsmnType != JsmnSolLib.JsmnType.STRING) {
				continue;
			}
			keyStr = JsmnSolLib.getBytes(str, tokens[i].start, tokens[i].end);
			
			if(JsmnSolLib.strCompare(keyStr, key) == 0) {
				returnIdx = i+1;
				return returnIdx;
			}
		}

		require(false, "Key not found");
	}
}