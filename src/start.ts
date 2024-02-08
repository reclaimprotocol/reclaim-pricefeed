import './utils/env'
import { postIntervalS } from './config.json'
import { postPrice } from './functions/post-price'
import LOGGER from './utils/logger'

async function main() {
	let posting = false
	const interval = setInterval(
		async() => {
			if(posting) {
				LOGGER.info('already posting, skipping')
				return
			}

			try {
				posting = true
				await postPrice()
			} catch(err) {
				LOGGER.error({ err }, 'error posting price')
			}

			posting = false
		},
		postIntervalS * 1000
	)

	postPrice()

	process.on('SIGINT', () => {
		clearInterval(interval)
		process.exit(0)
	})

	LOGGER.info('started')
}

main()