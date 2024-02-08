/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../../../../common";
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from "../../../../../../@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol/TransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60406080815262000cbb8038038062000018816200030b565b9283398101906060818303126200030657620000348162000347565b916020926200004584840162000347565b8584015190936001600160401b0391908282116200030657019280601f850112156200030657835193620000836200007d866200035c565b6200030b565b948086528786019288828401011162000306578288620000a4930162000378565b823b15620002ac577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b03199081166001600160a01b0386811691821790935590959194600093909290917fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8580a2805115801590620002a4575b620001f5575b50505050507fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103937f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f86865493815196818616885216958684820152a18315620001a3575016179055516108649081620004578239f35b60849086519062461bcd60e51b82526004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b895194606086019081118682101762000290578a52602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c89860152660819985a5b195960ca1b8a860152516200027a9493929183918291845af4903d1562000286573d6200026a6200007d826200035c565b90815280938a3d92013e6200039d565b5038808080806200012d565b606092506200039d565b634e487b7160e01b85526041600452602485fd5b508362000127565b865162461bcd60e51b815260048101879052602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200033157604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036200030657565b6001600160401b0381116200033157601f01601f191660200190565b60005b8381106200038c5750506000910152565b81810151838201526020016200037b565b91929015620004025750815115620003b3575090565b3b15620003bd5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015620004165750805190602001fd5b6044604051809262461bcd60e51b82526020600483015262000448815180928160248601526020868601910162000378565b601f01601f19168101030190fdfe60806040523615610015575b610013610142565b005b6000805160206107ef833981519152546001600160a01b03163303610135576000356001600160e01b031916631b2ce7f360e11b81036100605750610058610427565b602081519101f35b63278f794360e11b810361007c57506100776105c9565b610058565b6308f2839760e41b81036100935750610077610351565b6303e1469160e61b81036100aa5750610077610248565b635c60da1b60e01b036100bf57610077610281565b60405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a490fd5b61013d61018f565b61000b565b6000805160206107ef833981519152546001600160a01b03163303610185576000356001600160e01b031916631b2ce7f360e11b81036100605750610058610427565b61018d61018f565b565b5060008051602061080f83398151915254600090819081906001600160a01b0316368280378136915af43d82803e156101c6573d90f35b3d90fd5b50634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff8211176101fd57604052565b6102056101ca565b604052565b6020810190811067ffffffffffffffff8211176101fd57604052565b90601f8019910116810190811067ffffffffffffffff8211176101fd57604052565b61025061065a565b60018060a01b036000805160206107ef83398151915254166040519060208201526020815261027e816101e1565b90565b61028961065a565b60018060a01b0360008051602061080f83398151915254166040519060208201526020815261027e816101e1565b600435906001600160a01b03821682036102cd57565b600080fd5b60209060031901126102cd576004356001600160a01b03811681036102cd5790565b60209067ffffffffffffffff8111610312575b601f01601f19160190565b61031a6101ca565b610307565b604051906020820182811067ffffffffffffffff821117610344575b60405260008252565b61034c6101ca565b61033b565b61035961065a565b366004116102cd576001600160a01b0380610373366102d2565b166000805160206107ef833981519152917f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f604084549281519084168152846020820152a181156103d3576001600160a01b03191617905561027e61031f565b60405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b61042f61065a565b366004116102cd576001600160a01b03610448366102d2565b16604051906104568261020a565b60008252803b156104ed5760008051602061080f83398151915280546001600160a01b03191682179055807fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28151158015906104e5575b6104cb575b50506040516104c48161020a565b6000815290565b6104dd916104d7610661565b916106c9565b5038806104b6565b5060006104b1565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b803b156104ed5760008051602061080f83398151915280546001600160a01b0319166001600160a01b0383169081179091557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28151158015906105c1575b6105b2575050565b6105be916104d7610661565b50565b5060016105aa565b366004116102cd5760403660031901126102cd576105e56102b7565b6024359067ffffffffffffffff82116102cd57366023830112156102cd57816004013590610612826102f4565b916106206040519384610226565b80835236602482860101116102cd576020816000926024610652970183870137840101526001600160a01b0316610548565b61027e61031f565b346102cd57565b604051906060820182811067ffffffffffffffff8211176106bc575b60405260278252660819985a5b195960ca1b6040837f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208201520152565b6106c46101ca565b61067d565b60008061027e9493602081519101845af43d15610708573d916106eb836102f4565b926106f96040519485610226565b83523d6000602085013e61075c565b60609161075c565b1561071757565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b9192901561077c5750815115610770575090565b61027e903b1515610710565b82519091501561078f5750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b8285106107d5575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506107b256feb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca26469706673582212205430932df2b4228aa1aa5d08a5779d2cf5326305e6295e92af79505e14408aa864736f6c63430008110033";

type TransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: TransparentUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _logic: AddressLike,
    admin_: AddressLike,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override deploy(
    _logic: AddressLike,
    admin_: AddressLike,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_logic, admin_, _data, overrides || {}) as Promise<
      TransparentUpgradeableProxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TransparentUpgradeableProxy__factory {
    return super.connect(runner) as TransparentUpgradeableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TransparentUpgradeableProxy;
  }
}
