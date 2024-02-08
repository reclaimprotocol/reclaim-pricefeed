import { ethers } from 'ethers'
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
		existingContractsMap[chainKey] = PricefeedFactory
			.connect(contractData.address, rpcProvider)
	}

	return existingContractsMap[chainKey]
}