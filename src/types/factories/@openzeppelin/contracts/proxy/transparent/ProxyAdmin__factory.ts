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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  ProxyAdmin,
  ProxyAdminInterface,
} from "../../../../../@openzeppelin/contracts/proxy/transparent/ProxyAdmin";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ITransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeProxyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461005b5760008054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a361060790816100618239f35b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c90848263204e1c7a146104525750508063715018a6146103f85780637eff275e1461037e5780638da5cb5b146103565780639623609d146102415783816399a88ec4146101b557508063f2fde38b146100e95763f3b7dead1461007f57600080fd5b346100e55760203660031901126100e5576001600160a01b039083908190836100a6610491565b86516303e1469160e61b815291165afa926100bf610582565b93156100e257506100da8360208080965183010191016105b2565b169051908152f35b80fd5b8280fd5b50346100e55760203660031901126100e557610103610491565b9061010c61052a565b6001600160a01b03918216928315610163575050600054826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b9290503461023d578060031936011261023d576101d0610491565b6101d86104ac565b906101e161052a565b6001600160a01b03908116803b156102395785928360249286519788958694631b2ce7f360e11b865216908401525af190811561023057506102205750f35b610229906104c2565b6100e25780f35b513d84823e3d90fd5b8580fd5b5050fd5b508290606036600319011261035257610258610491565b926102616104ac565b916044359067ffffffffffffffff821161034e573660238301121561034e57818101359161028e8361050e565b9261029b855194856104ec565b808452366024828401011161034a576024929181889260209586930183880137850101526102c761052a565b6001600160a01b0396871696873b1561034a5784519563278f794360e11b87521690850152826024850152815191826044860152855b8381106103365750505082849581606481858983819884010152601f8019910116810103019134905af190811561023057506102205750f35b8181018301518682016064015282016102fd565b8680fd5b8480fd5b5080fd5b505034610352578160031936011261035257905490516001600160a01b039091168152602090f35b5090346100e557806003193601126100e55782610399610491565b6103a16104ac565b6103a961052a565b6001600160a01b0391821690813b156103f45783602492865197889586946308f2839760e41b865216908401525af190811561023057506103e8575080f35b6103f1906104c2565b80f35b8380fd5b83346100e257806003193601126100e25761041161052a565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b91509134610352576020366003190112610352576001600160a01b03928291908461047b610491565b635c60da1b60e01b8352165afa926100bf610582565b600435906001600160a01b03821682036104a757565b600080fd5b602435906001600160a01b03821682036104a757565b67ffffffffffffffff81116104d657604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176104d657604052565b67ffffffffffffffff81116104d657601f01601f191660200190565b6000546001600160a01b0316330361053e57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b3d156105ad573d906105938261050e565b916105a160405193846104ec565b82523d6000602084013e565b606090565b908160209103126104a757516001600160a01b03811681036104a7579056fea26469706673582212209058c2f6d50e8d6e94adad7a3673f40d3eade242ee0f1293b47af19c3b8901ec64736f6c63430008110033";

type ProxyAdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyAdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyAdmin__factory extends ContractFactory {
  constructor(...args: ProxyAdminConstructorParams) {
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
      ProxyAdmin & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ProxyAdmin__factory {
    return super.connect(runner) as ProxyAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyAdminInterface {
    return new Interface(_abi) as ProxyAdminInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ProxyAdmin {
    return new Contract(address, _abi, runner) as unknown as ProxyAdmin;
  }
}
