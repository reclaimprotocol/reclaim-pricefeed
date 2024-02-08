import { randomBytes } from 'crypto'
import type {} from '../types/hardhat'
import { BigNumberish, Signer } from 'ethers'
import { ethers, upgrades } from 'hardhat'

export function randomEthAddress() {
	const addr = randomBytes(20) // random address
	const addrHex = `0x${addr.toString('hex')}`
	return addrHex
}

export async function randomWallet(balanceEth: BigNumberish | number = 1) {
	const wallet = ethers.Wallet.createRandom().connect(ethers.provider)
	if(balanceEth) {
		// fund the wallet so it can make transactions
		let wei = typeof balanceEth === 'number'
			? '0x' + Number(balanceEth * 1e18).toString(16)
			: ethers.toBeHex(balanceEth)
		wei = wei.replace('0x0', '0x')
		await ethers.provider.send('hardhat_setBalance', [wallet.address, wei])
	}

	return wallet
}

export async function deployContract(contractType: 'Reclaim' | 'Pricefeed', signer?: Signer) {
	const factory = await ethers.getContractFactory(contractType)
	let reclaim = await upgrades.deployProxy(factory, { kind: 'uups' })
	if(signer) {
	  reclaim = reclaim.connect(signer)
	}

	return reclaim
}