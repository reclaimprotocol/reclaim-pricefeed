// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@reclaimprotocol/reclaim-contracts/contracts/lib/Claims.sol";
import "@reclaimprotocol/reclaim-contracts/contracts/lib/StringUtils.sol";
import "@reclaimprotocol/reclaim-contracts/contracts/Reclaim.sol";
import "./Utils.sol";

/**
 * Pricefeed contract
 */
contract Pricefeed is Initializable, UUPSUpgradeable, OwnableUpgradeable {

	struct PriceData {
		uint256 updatedAt;
		uint256 priceUsd;
	}

	/** whitelist of addresses that can become witnesses */
	mapping(string => PriceData) private priceData;

	Reclaim public reclaimContract;

	event PriceUpdated(string coinId, PriceData epoch);

	/**
	 * @notice Calls initialize on the base contracts
	 *
	 * @dev This acts as a constructor for the upgradeable proxy contract
	 */
	function initialize() external initializer {
		__Ownable_init();
		reclaimContract = Reclaim(0xf6456411FD72927451e8432d4664022d190f8b5A);
	}

	/**
	 * @notice Override of UUPSUpgradeable virtual function
	 *
	 * @dev Function that should revert when `msg.sender` is not authorized to upgrade the contract. Called by
	 * {upgradeTo} and {upgradeToAndCall}.
	 */
	function _authorizeUpgrade(address) internal view override onlyOwner {}

	function getPrice(string memory pairId) external view returns (PriceData memory) {
		return priceData[pairId];
	}

	function setReclaimContract(address addr) external onlyOwner {
		reclaimContract = Reclaim(addr);
	}

	/**
	 * Update a price pair with a Reclaim proof
	 */
	function updatePriceWithProof(
		Claims.ClaimInfo memory claimInfo,
		Claims.CompleteClaimData memory claimData,
		bytes[] memory signatures
	) external {
		require(keccak256(abi.encodePacked((claimInfo.provider))) == keccak256(abi.encodePacked("http")), "Provider 'http' required");
		reclaimContract.assertValidEpochAndSignedClaim(
			uint32(claimData.epoch),
			claimInfo,
			claimData,
			signatures
		);

		// parse JSON & extract price
		string memory coinId;
		uint price;
		(coinId, price) = PricefeedLib.extractCoinIdAndProof(claimInfo.parameters);
		_updatePrice(coinId, price);
	}

	function _updatePrice(string memory coinId, uint256 priceUsd) private {
		priceData[coinId] = PriceData({updatedAt: block.timestamp, priceUsd: priceUsd});
		emit PriceUpdated(coinId, priceData[coinId]);
	}
}
