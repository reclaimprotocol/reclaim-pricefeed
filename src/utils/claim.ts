import { Logger, createClaim } from "@reclaimprotocol/witness-sdk";
import { HTTPProviderParamsV2 } from "@reclaimprotocol/witness-sdk/lib/providers/http-provider";

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

export async function createReclaimClaim(
	coinId: string,
	logger: Logger
) {
	logger = logger.child({ coinId })
	const price = await getPriceFromCoinGecko(coinId)

	logger.info({ price }, 'got price, creating claim proof...')

	const paramsReplaced = JSON.stringify(CLAIM_PARAMS_TEMPLATE)
		.replace('{{coinId}}', coinId)
		.replace('{{price}}', price.toString())
	const claim = await createClaim({
		name: 'http',
		params: JSON.parse(paramsReplaced),
		secretParams: {
			cookieStr: 'abcd=xyz'
		},
		ownerPrivateKey: '',
		logger,
	})

	logger.info({ id: claim.identifier }, 'claim created')

	return claim
}

async function getPriceFromCoinGecko(coinId: string) {
	const url = CLAIM_PARAMS_TEMPLATE.url.replace('{{coinId}}', coinId)
	const response = await fetch(url)
	const data = await response.json()

	return data[coinId].usd as number
}