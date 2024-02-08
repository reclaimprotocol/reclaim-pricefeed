// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@reclaimprotocol/reclaim-contracts/contracts/lib/Claims.sol";

/**
 * Pricefeed contract
 */
contract Pricefeed is Initializable, UUPSUpgradeable, OwnableUpgradeable {
	/** Price will be multiplied by 10^N, where N is this variable */
	uint256 public constant PRICE_DECIMALS = 6;
	address public constant RECLAIM_WITNESS = 0x244897572368Eadf65bfBc5aec98D8e5443a9072;

	struct PriceData {
		uint256 updatedAt;
		uint256 priceUsd;
	}

	/** whitelist of addresses that can become witnesses */
	mapping(string => PriceData) private priceData;

	event PriceUpdated(string pairId, PriceData epoch);

	/**
	 * @notice Calls initialize on the base contracts
	 *
	 * @dev This acts as a constructor for the upgradeable proxy contract
	 */
	function initialize() external initializer {
		__Ownable_init();
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

	/**
	 * Update a price pair with a Reclaim proof
	 */
	function UpdatePriceWithProof(
		Claims.ClaimInfo memory claimInfo,
		Claims.CompleteClaimData memory claimData
	) external onlyOwner {
		
	}

	function _updatePrice(string memory pairId, uint256 priceUsd) private {
		priceData[pairId] = PriceData({updatedAt: block.timestamp, priceUsd: priceUsd});
		emit PriceUpdated(pairId, priceData[pairId]);
	}
}
