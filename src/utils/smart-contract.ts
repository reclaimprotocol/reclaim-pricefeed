import { Wallet, ethers } from 'ethers'
import { chains } from '../config.json'
import { Pricefeed, Pricefeed__factory as PricefeedFactory } from '../types'

const existingContractsMap: { [chain: string]: Pricefeed } = { }

/**
 * get the Pricefeed contract for the given chain
 * @param chainId hex-encoded string prefixed by 0x
 */
export function getContract(chainKey: string) {
	if(!existingContractsMap[chainKey]) {
		const contractData = chains[chainKey as keyof typeof chains]
		if(!contractData) {
			throw new Error(`Unsupported chain: "${chainKey}"`)
		}

		const rpcProvider = new ethers.JsonRpcProvider(contractData.rpcUrl)
		const wallet = new Wallet(process.env.PRIVATE_KEY!, rpcProvider)
		existingContractsMap[chainKey] = PricefeedFactory
			.connect(contractData.address, wallet)
	}

	return existingContractsMap[chainKey]
}