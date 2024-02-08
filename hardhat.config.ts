import dotenv from 'dotenv'
dotenv.config()

import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@openzeppelin/hardhat-upgrades'
import "@matterlabs/hardhat-zksync-deploy"
import "@matterlabs/hardhat-zksync-solc"
import "@matterlabs/hardhat-zksync-verify"
import "@matterlabs/hardhat-zksync-upgradable"
import './tasks'

const { PRIVATE_KEY, ALCHEMY_API_KEY, NETWORK } = process.env
const hasCustomNetwork = NETWORK && NETWORK !== 'hardhat'

const API_CONFIG: { [_: string]: () => { url: string, zksync?: boolean } } = {
	hardhat: () => ({ url: 'http://localhost:8545' }),
	'opt-goerli': () => {
		const API_TEMPLATE = 'https://{{network}}.g.alchemy.com/v2/{{key}}'
		if(!ALCHEMY_API_KEY) {
			throw new Error('ALCHEMY_API_KEY not set')
		}
		
		return {
			url: API_TEMPLATE
				.replace('{{network}}', 'goerli')
				.replace('{{key}}', ALCHEMY_API_KEY)
		}
	},
	'zk-sync-sepolia': () => ({
		url: 'https://sepolia.era.zksync.dev',
		zksync: true
	})
} 

if(hasCustomNetwork) {
	if(!PRIVATE_KEY) {
		throw new Error('PRIVATE_KEY not set')
	}

	if(!API_CONFIG[NETWORK]) {
		throw new Error(`${NETWORK} not set`)
	}
}

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.17',
		settings: {
			viaIR: true,
			optimizer: {
			  enabled: true,
			  runs: 200,
			},
		},
	},
	defaultNetwork: NETWORK,
	networks: {
		hardhat: {},
		...(hasCustomNetwork
			? {
				[NETWORK]: {
					// uncomment to make tx go faster
					// gasPrice: 450000000000,
					accounts: [PRIVATE_KEY],
					...API_CONFIG[NETWORK](),
				},
			}
			: {}
		)
	},
	zksolc: {
		version: "latest",
		settings: {
		  // find all available options in the official documentation
		  // https://era.zksync.io/docs/tools/hardhat/hardhat-zksync-solc.html#configuration
		},
	},
	typechain: {
		outDir: 'src/types',
		target: 'ethers-v6',
	},
}

export default config
