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
import type { NonPayableOverrides } from "../../common";
import type { Pricefeed, PricefeedInterface } from "../../contracts/Pricefeed";

const _abi = [
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
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "pairId",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Pricefeed.PriceData",
        name: "epoch",
        type: "tuple",
      },
    ],
    name: "PriceUpdated",
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "provider",
            type: "string",
          },
          {
            internalType: "string",
            name: "parameters",
            type: "string",
          },
          {
            internalType: "string",
            name: "context",
            type: "string",
          },
        ],
        internalType: "struct Claims.ClaimInfo",
        name: "claimInfo",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "identifier",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "timestampS",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "epoch",
            type: "uint256",
          },
        ],
        internalType: "struct Claims.CompleteClaimData",
        name: "claimData",
        type: "tuple",
      },
    ],
    name: "UpdatePriceWithProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "pairId",
        type: "string",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct Pricefeed.PriceData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a080604052346100315730608052610f8f9081610037823960805181818161044c015281816105d701526108810152f35b600080fdfe6040608081526004908136101561001557600080fd5b600091823560e01c80633659cfe61461085a5780634f1ef28614610587578063524f3889146104f957806352d1902d14610437578063715018a6146103d75780638129fc1c146102a65780638da5cb5b1461027d578063ed2e1bd914610143578063f1a640f8146101235763f2fde38b1461008f57600080fd5b3461011f57602036600319011261011f576100a8610b14565b916100b1610c10565b6001600160a01b038316156100cd57836100ca84610c68565b80f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b50503461013f578160031936011261013f576020905160068152f35b5080fd5b50903461011f5760031960a03682011261024757823567ffffffffffffffff918282116102795760609082360301126102755782519060608201828110848211176102625784528085013583811161025e576101a490863691840101610bf2565b8252602481013583811161025e576101c190863691840101610bf2565b6020830152604481013583811161025e578491866101e29236920101610bf2565b910152608036602319011261024757815192608084019182118483101761024b5750815260243582526044356001600160a01b03811681036102475760208301526064359063ffffffff821682036102475782015260606084359101526100ca610c10565b8380fd5b634e487b7160e01b855260419052602484fd5b8680fd5b634e487b7160e01b875260418652602487fd5b8480fd5b8580fd5b50503461013f578160031936011261013f5760975490516001600160a01b039091168152602090f35b503461011f578260031936011261011f57825460ff8160081c1615918280936103ca575b80156103b3575b15610359575060ff198116600117845581610348575b5061030160ff845460081c166102fc81610ed9565b610ed9565b61030a33610c68565b610312575080f35b60207f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989161ff001984541684555160018152a180f35b61ffff1916610101178355386102e7565b608490602085519162461bcd60e51b8352820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152fd5b50303b1580156102d15750600160ff8316146102d1565b50600160ff8316106102ca565b83346104345780600319360112610434576103f0610c10565b609780546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b508234610434578060031936011261043457507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031630036104915760208251600080516020610f3a8339815191528152f35b6020608492519162461bcd60e51b8352820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152fd5b508234610434576020918260031936011261013f57803567ffffffffffffffff811161011f5791610531849261055594369101610bf2565b9082865161053e81610b2f565b828152015281855193828580945193849201610eb6565b810160c981520301902090825161056b81610b2f565b8160018454948584520154910190815283519283525190820152f35b50908060031936011261011f5761059c610b14565b9060243567ffffffffffffffff81116102755736602382011215610275576105cd9036906024818701359101610bbb565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811692919061060730851415610cb1565b610624600080516020610f3a833981519152948286541614610d12565b61062c610c10565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561066457505050506100ca9150610d73565b82516352d1902d60e01b81526020959394918416919086818981865afa899181610827575b506106e857855162461bcd60e51b8152808901889052602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608490fd5b96919295949396036107d257506106fe85610d73565b7fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8680a28251158015906107ca575b610739575b5050505080f35b6107b693858083519561074b87610b61565b602787527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c86880152660819985a5b195960ca1b858801528581519101845af4913d156107c0573d6107a861079f82610b9f565b92519283610b7d565b81528681943d92013e610e03565b5038808080610732565b5060609250610e03565b50600161072d565b825162461bcd60e51b8152908101849052602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608490fd5b9091508781813d8311610853575b61083f8183610b7d565b8101031261084f57519038610689565b8980fd5b503d610835565b50903461011f5760208060031936011261024757610876610b14565b916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166108ae30821415610cb1565b6108cb600080516020610f3a833981519152918383541614610d12565b6108d3610c10565b8251908482019282841067ffffffffffffffff851117610b01578385528883527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561092d575050505050506100ca9150610d73565b869293949596169085516352d1902d60e01b815287818a81865afa8a9181610ace575b506109af57865162461bcd60e51b8152808a01899052602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608490fd5b979192939695949703610a7957506109c682610d73565b7fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8780a285845115801590610a72575b610a04575b50505050505080f35b80610a6696845196610a1588610b61565b602788527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c87890152660819985a5b195960ca1b868901525190845af4913d156107c0573d6107a861079f82610b9f565b503880808080856109fb565b50806109f6565b835162461bcd60e51b8152908101859052602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608490fd5b9091508881813d8311610afa575b610ae68183610b7d565b81010312610af657519038610950565b8a80fd5b503d610adc565b634e487b7160e01b895260418852602489fd5b600435906001600160a01b0382168203610b2a57565b600080fd5b6040810190811067ffffffffffffffff821117610b4b57604052565b634e487b7160e01b600052604160045260246000fd5b6060810190811067ffffffffffffffff821117610b4b57604052565b90601f8019910116810190811067ffffffffffffffff821117610b4b57604052565b67ffffffffffffffff8111610b4b57601f01601f191660200190565b929192610bc782610b9f565b91610bd56040519384610b7d565b829481845281830111610b2a578281602093846000960137010152565b9080601f83011215610b2a57816020610c0d93359101610bbb565b90565b6097546001600160a01b03163303610c2457565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b609780546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3565b15610cb857565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b15610d1957565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b803b15610da857600080516020610f3a83398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b91929015610e655750815115610e17575090565b3b15610e205790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015610e785750805190602001fd5b6044604051809262461bcd60e51b825260206004830152610ea88151809281602486015260208686019101610eb6565b601f01601f19168101030190fd5b60005b838110610ec95750506000910152565b8181015183820152602001610eb9565b15610ee057565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fdfe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca264697066735822122013ef1d46830bd006c0b0c884f026ea4d13b618cd8a9595207d438cc4a40775af64736f6c63430008110033";

type PricefeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PricefeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Pricefeed__factory extends ContractFactory {
  constructor(...args: PricefeedConstructorParams) {
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
      Pricefeed & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Pricefeed__factory {
    return super.connect(runner) as Pricefeed__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PricefeedInterface {
    return new Interface(_abi) as PricefeedInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Pricefeed {
    return new Contract(address, _abi, runner) as unknown as Pricefeed;
  }
}
