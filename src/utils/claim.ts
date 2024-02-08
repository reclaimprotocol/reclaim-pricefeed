import { Logger, createClaim, getBeacon } from "@reclaimprotocol/witness-sdk";
import { BeaconType } from "@reclaimprotocol/witness-sdk/lib/proto/api";
import { HTTPProviderParamsV2 } from "@reclaimprotocol/witness-sdk/lib/providers/http-provider";
import { defaultChainId } from '../config.json'

const CLAIM_PARAMS_TEMPLATE: HTTPProviderParamsV2 = {
	"method": "GET",
	"url": "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids={{coinId}}",
	"responseMatches": [
		{
			"type": "contains",
			// replace with response body
			"value": '{{price}}'
		}
	],
	responseRedactions: []
}

/**
 * Create reclaim proof of the price of a coin.
 * @param coinId The coin id to create a reclaim proof for.
 */
export async function createReclaimClaim(
	coinId: string,
	logger: Logger
) {
	logger = logger.child({ coinId })
	// first we get the price of the coin
	// and then create a claim proof based on that price
	const price = await getPriceFromCoinGecko(coinId)

	logger.info({ price }, 'got price, creating claim proof...')

	const paramsReplaced = getClaimParamsFromCoinIdAndPrice(coinId, price)
	const claim = await createClaim({
		name: 'http',
		params: paramsReplaced,
		secretParams: {
			cookieStr: 'abcd=xyz'
		},
		ownerPrivateKey: process.env.PRIVATE_KEY!,
		logger,
		beacon: getBeacon({
			type: BeaconType.BEACON_TYPE_SMART_CONTRACT,
			id: defaultChainId
		})
	})

	logger.info({ id: claim.identifier }, 'claim created')

	return claim
}

export function getClaimParamsFromCoinIdAndPrice(coinId: string, price: number) {
	const paramsReplaced = JSON.stringify(CLAIM_PARAMS_TEMPLATE)
		.replace('{{coinId}}', coinId)
		.replace('{{price}}', price.toString())

	return JSON.parse(paramsReplaced) as HTTPProviderParamsV2
}

async function getPriceFromCoinGecko(coinId: string) {
	const url = CLAIM_PARAMS_TEMPLATE.url.replace('{{coinId}}', coinId)
	const response = await fetch(url)
	const data = await response.json()

	return data[coinId].usd as number
}