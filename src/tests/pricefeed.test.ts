import { HDNodeWallet, ethers, toBigInt, toNumber } from "ethers"
import { expect } from 'chai'
import { Pricefeed, Reclaim } from "../types"
import { deployContract, randomWallet } from "./utils"
import { CompleteClaimData, createSignDataForClaim, getIdentifierFromClaimInfo } from "@reclaimprotocol/witness-sdk"
import { getClaimParamsFromCoinIdAndPrice } from "../utils/claim"

const PRICE_DECIMALS = 6

describe('Pricefeed Tests', () => {

	let reclaimContract: Reclaim
	let contract: Pricefeed

	let witnessWallet: HDNodeWallet

	beforeEach(async () => {
		witnessWallet = await randomWallet()
		reclaimContract = await deployContract('Reclaim')
		await reclaimContract.updateWitnessWhitelist(witnessWallet.address, true)
		await reclaimContract.addAsWitness(witnessWallet.address, 'http://abcd.com')
		await reclaimContract.addNewEpoch()

		contract = await deployContract('Pricefeed')
		const tx = await contract
			.setReclaimContract(reclaimContract.getAddress())
		await tx.wait()
	})

	it('should push price updates', async() => {
		const coinId = 'oxbitcoin'
		
		let prevPriceUpdate: Pricefeed.PriceDataStruct | undefined
		for(let i = 0;i < 3;i++) {
			const priceUsd = Math.random()
			const claim = await getClaimData(coinId, priceUsd)
			const tx = await contract.updatePriceWithProof(
				claim.claimInfo, claim.claimData, claim.signatures
			)
			await tx.wait()

			const price = await contract.getPrice(coinId)
			const priceDecimals = Math.floor(priceUsd * (10 ** PRICE_DECIMALS))
			expect(price.priceUsd).eq(toBigInt(priceDecimals))

			if(prevPriceUpdate) {
				expect(toNumber(price.updatedAt))
					.gt(toNumber(prevPriceUpdate.updatedAt))
			}

			prevPriceUpdate = price
		}
	})

	async function getClaimData(coinId: string, price: number = 1000) {
		const user = await randomWallet()
		const provider = 'http'
		const parameters = JSON.stringify(
			getClaimParamsFromCoinIdAndPrice(coinId, price)
		)
		const context = ''

		const claimInfo = { provider, parameters, context }
		const infoHash = getIdentifierFromClaimInfo(claimInfo)

		const currentEpoch = await reclaimContract.currentEpoch()

		const timestampS = Math.floor(Date.now() / 1000)

		const claimData: CompleteClaimData = {
			identifier: infoHash,
			owner: user.address,
			timestampS,
			epoch: ethers.getNumber(currentEpoch),
		}
		const claimDataStr = createSignDataForClaim(claimData)
		const signatures = [
			await witnessWallet.signMessage(claimDataStr)
		]

		return {
			currentEpoch,
			claimInfo,
			claimData,
			signatures
		}
	}
})