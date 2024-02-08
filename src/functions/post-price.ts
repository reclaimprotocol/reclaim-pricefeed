import { getContract } from "../utils/smart-contract";
import { createReclaimClaim } from "../utils/claim";
import LOGGER from "../utils/logger";
import { defaultChainId, coinsToPost } from "../config.json";

export async function postPrice() {
	const logger = LOGGER
	logger.info('posting prices...')

	const contract = await getContract(defaultChainId)
	await Promise.all(coinsToPost.map(async coinId => {
		const {
			claimData, identifier
		} = await createReclaimClaim(coinId, logger)
		await contract.UpdatePriceWithProof(
			{
				provider: claimData.provider,
				parameters: claimData.parameters,
				context: claimData.context,
			},
			{
				identifier,
				owner: claimData.owner,
				timestampS: claimData.timestampS,
				epoch: claimData.epoch,
			}
		)

		logger.info({ coinId, identifier }, 'price posted')
	}))

	logger.info('all prices posted')
}