import { task } from 'hardhat/config'
import { Wallet } from "zksync-ethers"
import { Deployer } from "@matterlabs/hardhat-zksync-deploy"

task('deploy')
	.setAction(async({}, hre) => {
		const wallet = new Wallet(process.env.PRIVATE_KEY!)
		// Create deployer object and load the artifact of the contract we want to deploy.
		const deployer = new Deployer(hre, wallet)
		// Load contract
		const artifact = await deployer.loadArtifact("Pricefeed")
		// `greeting` is an argument for contract constructor.
		const contract = await hre.zkUpgrades.deployProxy(
			deployer.zkWallet,
			artifact,
			[]
		)
		// Wait for contract to be deployed.
		// address is logged automatically.
		await contract.waitForDeployment()
	})