import { chains } from '../src/config.json'

export function getContractAddress(networkName: string) {
	for(const { chainName, address } of Object.values(chains)) {
		if(chainName === networkName) {
			return address
		}
	}

	throw new Error(`No contract address found for network "${networkName}"`)
}