/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  PricefeedLib,
  PricefeedLibInterface,
} from "../../../contracts/Utils.sol/PricefeedLib";

const _abi = [
  {
    inputs: [],
    name: "API_URL_PREFIX",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRICE_DECIMALS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001a576101699081610020823930815050f35b600080fdfe60806040818152600436101561001457600080fd5b600091823560e01c908163eb350be814610051575063f1a640f81461003857600080fd5b8160031936011261004d576020905160068152f35b5080fd5b90508260031936011261012f576080810181811067ffffffffffffffff82111761011b578252604481526020907f68747470733a2f2f6170692e636f696e6765636b6f2e636f6d2f6170692f7633828201527f2f73696d706c652f70726963653f76735f63757272656e636965733d7573642683820152636964733d60e01b606082015282519382859384528251928382860152825b84811061010557505050828201840152601f01601f19168101030190f35b81810183015188820188015287955082016100e7565b634e487b7160e01b84526041600452602484fd5b8280fdfea2646970667358221220b1af22c69e099edbc96294f1ee7079c1e7cfa979996db2e1944ff3f28731294164736f6c63430008110033";

type PricefeedLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PricefeedLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PricefeedLib__factory extends ContractFactory {
  constructor(...args: PricefeedLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PricefeedLib & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PricefeedLib__factory {
    return super.connect(runner) as PricefeedLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PricefeedLibInterface {
    return new Interface(_abi) as PricefeedLibInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PricefeedLib {
    return new Contract(address, _abi, runner) as unknown as PricefeedLib;
  }
}
