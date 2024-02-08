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
import type { NonPayableOverrides } from "../../../../common";
import type {
  Reclaim,
  ReclaimInterface,
} from "../../../../@reclaimprotocol/reclaim-contracts/contracts/Reclaim";

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
        components: [
          {
            internalType: "uint32",
            name: "id",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "timestampStart",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "timestampEnd",
            type: "uint32",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "string",
                name: "host",
                type: "string",
              },
            ],
            internalType: "struct Reclaim.Witness[]",
            name: "witnesses",
            type: "tuple[]",
          },
          {
            internalType: "uint8",
            name: "minimumWitnessesForClaimCreation",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct Reclaim.Epoch",
        name: "epoch",
        type: "tuple",
      },
    ],
    name: "EpochAdded",
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
    inputs: [
      {
        internalType: "address",
        name: "witnessAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "host",
        type: "string",
      },
    ],
    name: "addAsWitness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addNewEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "epochNum",
        type: "uint32",
      },
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
      {
        internalType: "bytes[]",
        name: "signatures",
        type: "bytes[]",
      },
    ],
    name: "assertValidEpochAndSignedClaim",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentEpoch",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epochDurationS",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "epochs",
    outputs: [
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "timestampStart",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "timestampEnd",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "minimumWitnessesForClaimCreation",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "epoch",
        type: "uint32",
      },
    ],
    name: "fetchEpoch",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "id",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "timestampStart",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "timestampEnd",
            type: "uint32",
          },
          {
            components: [
              {
                internalType: "address",
                name: "addr",
                type: "address",
              },
              {
                internalType: "string",
                name: "host",
                type: "string",
              },
            ],
            internalType: "struct Reclaim.Witness[]",
            name: "witnesses",
            type: "tuple[]",
          },
          {
            internalType: "uint8",
            name: "minimumWitnessesForClaimCreation",
            type: "uint8",
          },
        ],
        internalType: "struct Reclaim.Epoch",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "epoch",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "timestampS",
        type: "uint32",
      },
    ],
    name: "fetchWitnessesForClaim",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "string",
            name: "host",
            type: "string",
          },
        ],
        internalType: "struct Reclaim.Witness[]",
        name: "",
        type: "tuple[]",
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
    name: "minimumWitnessesForClaimCreation",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    inputs: [
      {
        internalType: "address",
        name: "witnessAddress",
        type: "address",
      },
    ],
    name: "removeAsWitness",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "addr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool",
      },
    ],
    name: "updateWitnessWhitelist",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "witnesses",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "host",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a08060405234610031573060805261324d90816100378239608051818181610326015281816107ef01526109050152f35b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c80630e272c4e1461018f57806310abbe5614610186578063289989fd1461017d5780633659cfe6146101745780633d3c3e071461016b57806348863471146101625780634f1ef2861461015957806352d1902d14610150578063571e2c02146101475780635eda55381461013e578063670a8cb714610135578063715018a61461012c57806376671808146101235780638129fc1c1461011a5780638da5cb5b1461011157806390c11b36146101085780639cf56f5b146100ff578063c6b61e4c146100f65763f2fde38b146100ee57600080fd5b61000e611202565b5061000e6111a3565b5061000e610faf565b5061000e610edd565b5061000e610d99565b5061000e610cb5565b5061000e610c8e565b5061000e610c2c565b5061000e610b80565b5061000e610a2f565b5061000e6109b7565b5061000e6108f1565b5061000e6107b1565b5061000e610549565b5061000e61046c565b5061000e610302565b5061000e6102c7565b5061000e61021f565b503461000e57600036600319011261000e57602060ff60ca5416604051908152f35b6004359063ffffffff8216820361000e57565b6044359063ffffffff8216820361000e57565b60005b8381106101ea5750506000910152565b81810151838201526020016101da565b90602091610213815180928185528580860191016101d7565b601f01601f1916010190565b503461000e57606036600319011261000e5761024e61023c6101b1565b6102446101c4565b9060243590611ba2565b604090815190602080830181845282518091528484019180868360051b8701019401926000965b8388106102825786860387f35b909192939483806102b6600193603f198b820301875285838b51878060a01b038151168452015191818582015201906101fa565b970193019701969093929193610275565b503461000e57600036600319011261000e57602063ffffffff60cd5416604051908152f35b600435906001600160a01b038216820361000e57565b503461000e57602036600319011261000e5761031c6102ec565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116919061035530841415611331565b6103726000805160206131f8833981519152938285541614611392565b61037a611290565b60405190602082018281106001600160401b0382111761045f575b604052600082527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156103d45750506103d291506114fc565b005b6020600491604094939451928380926352d1902d60e01b825286165afa6000918161042f575b5061041c5760405162461bcd60e51b815280610418600482016114ad565b0390fd5b6103d29361042a911461144f565b611672565b61045191925060203d8111610458575b61044981836106f5565b810190611440565b90386103fa565b503d61043f565b610467610680565b610395565b503461000e5760208060031936011261000e5761048f61048a6101b1565b611a1d565b9060409081519181835260c0830163ffffffff8086511684860152808487015116838601528286015116606085015260608501519260a06080860152835180925260e08501928160e08460051b8801019501936000915b84831061050457608089015160ff1660a089015287870388f35b0390f35b909192939495848061053960019360df198c820301875285838c51878060a01b038151168452015191818582015201906101fa565b98019301930191949392906104e6565b503461000e57604036600319011261000e576105636102ec565b602435906001600160401b0380831161000e573660238401121561000e57826004013590811161000e57366024828501011161000e576001600160a01b038216600090815260cb602052604090205460ff1680610649575b6105c490612733565b60c9546001600160a01b038381169060005b838110610614576103d28661060a89886106006105f1610725565b6001600160a01b039095168552565b602436920161075c565b60208201526127ea565b8061063f848461063761062961064496610a68565b50546001600160a01b031690565b1614156127a5565b611e2a565b6105d6565b50609754610667906001600160a01b03165b6001600160a01b031690565b3314806105bb57506001600160a01b03821633146105bb565b50634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b038211176106b257604052565b6106ba610680565b604052565b604081019081106001600160401b038211176106b257604052565b60a081019081106001600160401b038211176106b257604052565b90601f801991011681019081106001600160401b038211176106b257604052565b60405190610723826106da565b565b60405190610723826106bf565b6020906001600160401b03811161074f575b601f01601f19160190565b610757610680565b610744565b92919261076882610732565b9161077660405193846106f5565b82948184528183011161000e578281602093846000960137010152565b9080601f8301121561000e578160206107ae9335910161075c565b90565b50604036600319011261000e576107c66102ec565b6024356001600160401b03811161000e576107e5903690600401610793565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811692919061081f30851415611331565b61083c6000805160206131f8833981519152948286541614611392565b610844611290565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561087a5750506103d291506114fc565b6020600491604094939451928380926352d1902d60e01b825286165afa600091816108d1575b506108be5760405162461bcd60e51b815280610418600482016114ad565b6103d2936108cc911461144f565b61158c565b6108ea91925060203d81116104585761044981836106f5565b90386108a0565b503461000e57600036600319011261000e577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316300361094c576040516000805160206131f88339815191528152602090f35b60405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608490fd5b503461000e57604036600319011261000e576109d16102ec565b602435801515810361000e576109e5611290565b15610a0e576001600160a01b0316600090815260cb60205260409020805460ff19166001179055005b6001600160a01b0316600090815260cb60205260409020805460ff19169055005b503461000e57602036600319011261000e576103d2610a4c6102ec565b61265b565b50634e487b7160e01b600052603260045260246000fd5b60c954811015610aa3575b60c960005260011b7f66be4f155c5ef2ebd3772b228f2f00681e4ed5826cdb3b1943cc11ad15ad1d280190600090565b610aab610a51565b610a73565b90600182811c92168015610ae0575b6020831014610aca57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610abf565b9060009291805491610afb83610ab0565b918282526001938481169081600014610b5d5750600114610b1d575b50505050565b90919394506000526020928360002092846000945b838610610b49575050505001019038808080610b17565b805485870183015294019385908201610b32565b9294505050602093945060ff191683830152151560051b01019038808080610b17565b503461000e57602036600319011261000e5760043560c95481101561000e577f66be4f155c5ef2ebd3772b228f2f00681e4ed5826cdb3b1943cc11ad15ad1d299060c960005260011b610c1060018060a01b03827f66be4f155c5ef2ebd3772b228f2f00681e4ed5826cdb3b1943cc11ad15ad1d2801541691610c096040518095819301610aea565b03836106f5565b61050060405192839283526040602084015260408301906101fa565b503461000e57600080600319360112610c8b57610c47611290565b609780546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b503461000e57600036600319011261000e57602060cd5463ffffffff60405191831c168152f35b503461000e57600080600319360112610c8b578054610ceb60ff8260081c161580928193610d8b575b8115610d6b575b5061175f565b80610cfe600160ff196000541617600055565b610d52575b610d0b6117c2565b610d125780f35b610d2261ff001960005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a180f35b610d6661010061ff00196000541617600055565b610d03565b303b15915081610d7d575b5038610ce5565b6001915060ff161438610d76565b600160ff8216109150610cde565b503461000e57600036600319011261000e576097546040516001600160a01b039091168152602090f35b608090604319011261000e5760405190608082018281106001600160401b03821117610e2a575b6040526044358252816064356001600160a01b038116810361000e57602082015260843563ffffffff8116810361000e576040820152606060a435910152565b610e32610680565b610dea565b6020906001600160401b038111610e50575b60051b0190565b610e58610680565b610e49565b9080601f8301121561000e57813590610e7582610e37565b92610e8360405194856106f5565b828452602092838086019160051b8301019280841161000e57848301915b848310610eb15750505050505090565b82356001600160401b03811161000e578691610ed284848094890101610793565b815201920191610ea1565b503461000e5760031960e03682011261000e57610ef86101b1565b6024356001600160401b039283821161000e57606090823603011261000e5760405190610f2482610697565b806004013584811161000e57610f409060043691840101610793565b8252602481013584811161000e57610f5e9060043691840101610793565b602083015260448101359084821161000e576004610f7f9236920101610793565b6040820152610f8d36610dc3565b9060c43593841161000e57610fa96103d2943690600401610e5d565b92611e86565b503461000e57600036600319011261000e57610fc9611290565b6110ba63ffffffff80610fe160cd5463ffffffff1690565b161561113e575b60cc5480611103575b5061103361101061100b60cd5463ffffffff9060201c1690565b611f94565b67ffffffff0000000060cd549160201b169067ffffffff0000000019161760cd55565b6110b560cd549161105861104f82808660201c16951642611b95565b63ffffffff1690565b6110a66110648561282c565b916110996110706128fa565b9461108861107c610716565b63ffffffff9099168952565b4216602088019063ffffffff169052565b63ffffffff166040860152565b606084015260ff166080830152565b6121b4565b7fb2a1462b8d912a9fe495da7a1188c48bb87bac4644a0931aa4ce2dd7017ce3656110fe6110f16110ec60cc54611880565b61115a565b506040519182918261234b565b0390a1005b6111126110ec61113892611880565b5080546bffffffff0000000000000000191642841660401b63ffffffff60401b16179055565b38610ff1565b6111556201518063ffffffff1960cd54161760cd55565b610fe8565b60039060cc54811015611196575b60cc600052027f47197230e1e4b29fc0bd84d7d78966c0925452aff72a2a121538b102457e9ebe0190600090565b61119e610a51565b611168565b503461000e57602036600319011261000e5760043560cc5481101561000e576111cd60809161115a565b5060ff60028254920154166040519163ffffffff908181168452818160201c16602085015260401c1660408301526060820152f35b503461000e57602036600319011261000e5761121c6102ec565b611224611290565b6001600160a01b0381161561123c576103d2906112e8565b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b6097546001600160a01b031633036112a457565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b609780546001600160a01b039283166001600160a01b0319821681179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3565b1561133857565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b1561139957565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b6040519061140082610697565b602882526040366020840137565b9061141882610732565b61142560405191826106f5565b8281528092611436601f1991610732565b0190602036910137565b9081602091031261000e575190565b1561145657565b60405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608490fd5b60809060208152602e60208201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960408201526d6f6e206973206e6f74205555505360901b60608201520190565b803b15611531576000805160206131f883398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b90611596826114fc565b60006001600160a01b0383167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8280a281511580159061166a575b6115da57505050565b61165e928180604051946115ed86610697565b602786527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c6020870152660819985a5b195960ca1b6040870152602081519101845af4903d15611661573d61164181610732565b9061164f60405192836106f5565b8152809360203d92013e6116c6565b50565b606092506116c6565b5060016115d1565b9061167c826114fc565b60006001600160a01b0383167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b8280a28151158015906116bf576115da57505050565b50806115d1565b9192901561172857508151156116da575090565b3b156116e35790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b82519091501561173b5750805190602001fd5b60405162461bcd60e51b8152602060048201529081906104189060248301906101fa565b1561176657565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b6117dc60ff60005460081c166117d781611809565b611809565b6117e5336112e8565b600560ff1960ca54161760ca55620151806001600160401b031960cd54161760cd55565b1561181057565b60405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608490fd5b50634e487b7160e01b600052601160045260246000fd5b60001981019190821161188f57565b610723611869565b601303906013821161188f57565b60c954906118b282610e37565b9160406118c1815194856106f5565b8184528360208091019160c96000527f66be4f155c5ef2ebd3772b228f2f00681e4ed5826cdb3b1943cc11ad15ad1d28906000935b85851061190557505050505050565b6002846001928451611916816106bf565b848060a01b038754168152855161193a8161193381898c01610aea565b03826106f5565b838201528152019301940193916118f6565b9060409182519061195c826106da565b8193815463ffffffff80821685526020918181841c1683870152831c168285015260019081840180549161198f83610e37565b9461199c815196876106f5565b8386526000928352818320908287015b8585106119dc57505050505050506119d4600284936080936060610723970152015460ff1690565b60ff16910152565b600284889284516119ec816106bf565b86546001600160a01b031681528551611a0b8161193381898c01610aea565b838201528152019301940193916119ac565b60006080604051611a2d816106da565b828152826020820152826040820152606080820152015263ffffffff8091168015611a78576107ae91611a6a9160001901908111611a705761115a565b5061194c565b6110ec611869565b50506107ae611a6a60cc546000198101908111611a705761115a565b90611aa7602092828151948592016101d7565b0190565b90611ab582610e37565b6040611ac3815192836106f5565b8382528193611ad4601f1991610e37565b0191600091825b848110611ae9575050505050565b6020908251611af7816106bf565b85815282606081830152828601015201611adb565b60019063ffffffff809116908114611b22570190565b611aa7611869565b50634e487b7160e01b600052601260045260246000fd5b8115611b4b570690565b611b53611b2a565b0690565b6020918151811015611b6c575b60051b010190565b611b74610a51565b611b64565b906004820180921161188f57565b906001820180921161188f57565b9190820180921161188f57565b611bab81611a1d565b60408051602080820195909552938452601f199390611bca90826106f5565b611bd390612fda565b63ffffffff809316611be490613133565b946080830195848751611bf79060ff1690565b60ff16611c0390613133565b9216611c0e90613133565b604051928392602084019586611c2391611a94565b600560f91b8152600101611c3691611a94565b600560f91b8152600101611c4991611a94565b600560f91b8152600101611c5c91611a94565b038581018252611c6c90826106f5565b5190209260405180946020820190611c879160209181520190565b039081018452611c9790846106f5565b60600180518451611caa9060ff16611aab565b91815193600097885b611cc7611cc18a5160ff1690565b60ff1690565b838b1690811015611d6f57611d65611d5f611d59611d5185611d4b611cc1968f8f8f8f928f92611d37611d4494611cc79f611d1184611d0c611d2f93611d3d98612919565b611b41565b988996611d1e888b611b57565b51611d298383611b57565b52611b57565b505191611880565b90611b57565b5192611b57565b528c611b57565b50611b79565b8c5190611b41565b99611880565b9b611b0c565b9a97915050611cb3565b505097505050509250505090565b15611d8457565b60405162461bcd60e51b815260206004820152600d60248201526c4e6f207369676e61747572657360981b6044820152606490fd5b1561000e57565b15611dc757565b60405162461bcd60e51b815260206004820152603560248201527f4e756d626572206f66207369676e617475726573206e6f7420657175616c20746044820152746f206e756d626572206f66207769746e657373657360581b6064820152608490fd5b6001906000198114611b22570190565b15611e4157565b60405162461bcd60e51b815260206004820152601960248201527f5369676e6174757265206e6f7420617070726f707269617465000000000000006044820152606490fd5b611edd90611ee39293959495611e9e87511515611d7d565b611ed76040611ebe611eae610725565b97848952602089019a8b52612e70565b92611ecc8151948514611db9565b015163ffffffff1690565b91611ba2565b916129c2565b611ef08151835114611dc0565b6000925b845151841015611f8d57600094855b8451811015611f7d57611f26611f198786611b57565b516001600160a01b031690565b611f4461065b611f368489611b57565b51516001600160a01b031690565b6001600160a01b0390911614611f6257611f5d90611e2a565b611f03565b5093611f759192955061063f6001611e3a565b929390611ef4565b509361063f611f75929396611e3a565b9350505050565b90600163ffffffff8093160191821161188f57565b50634e487b7160e01b600052600060045260246000fd5b600381901b91906001600160fd1b0381160361188f57565b600181901b91906001600160ff1b0381160361188f57565b908160011b918083046002149015171561188f57565b818110612011575050565b60008155600101612006565b6001600091828155016120308154610ab0565b8061203a57505050565b601f8111600114612049575055565b8183526020832061206591601f0160051c810190600101612006565b8160208120915555565b9190601f811161207e57505050565b610723926000526020600020906020601f840160051c830193106120aa575b601f0160051c0190612006565b909150819061209d565b815181546001600160a01b0319166001600160a01b0391909116178155600180910191602080910151908151916001600160401b0383116121a7575b612104836120fe8754610ab0565b8761206f565b81601f841160011461213d5750928293918392600094612132575b50501b916000199060031b1c1916179055565b01519250388061211f565b919083601f19811661215488600052602060002090565b946000905b8883831061218d5750505010612174575b505050811b019055565b015160001960f88460031b161c1916905538808061216a565b858701518855909601959485019487935090810190612159565b6121af610680565b6120f0565b60cc5490600160401b918281101561233e575b6121d860019182810160cc5561115a565b939093612331575b8251845460208086015160408088015163ffffffff60401b911b166bffffffffffffffffffffffff1990931663ffffffff9094169390931767ffffffff0000000093821b93909316929092171785558285019060608501518051938411612324575b8183548585558086106122b4575b50612262910192600052602060002090565b6000925b84841061229857505050505050906002612287608061072394015160ff1690565b91019060ff1660ff19825416179055565b600283826122a8899451866120b4565b01920193019290612266565b90506001600160ff1b038082168203612317575b8516850361230a575b8290846000528160002090871b81019086881b015b8181106122f35750612250565b60029192506123018161201d565b019083916122e6565b612312611869565b6122d1565b61231f611869565b6122c8565b61232c610680565b612242565b612339611fa9565b6121e0565b612346610680565b6121c7565b60209182825260c0820181549063ffffffff808316868601526040928181881c1684870152831c1660608501526001908184019560a06080870152865480925260e086019360e08360051b8801019760005281600020946000915b8483106123c857505050505050509060a06119d460026107ae94015460ff1690565b90919293948460026123fc898486819c9f8f60df19908203018a5260018060a01b0384541681528187820152019101610aea565b9b01930193019195949392906123a6565b1561241457565b60405162461bcd60e51b815260206004820152602760248201527f4f6e6c79206f776e6572206f72207769746e6573732063616e2072656d6f76656044820152661034ba39b2b63360c91b6064820152608490fd5b91909182811461255f5761247d8354610ab0565b6001600160401b038111612552575b6124a08161249a8454610ab0565b8461206f565b600093601f82116001146124dc5793819293946000926124d1575b50508160011b916000199060031b1c1916179055565b0154905038806124bb565b6124f0601f19831691600052602060002090565b9461250084600052602060002090565b91815b81811061253a5750958360019596971061252157505050811b019055565b015460001960f88460031b161c1916905538808061216a565b87830154845560019384019390920191602001612503565b61255a610680565b61248c565b509050565b906125a2575b818103612575575050565b815481546001600160a01b0319166001600160a01b03919091161781556107239160019081019101612469565b6125aa611fa9565b61256a565b60c9548015612645576000190160016125c782610a68565b612638575b60008155016125db8154610ab0565b90816125e9575b505060c955565b601f82116001146126015760009150555b38806125e2565b61262361263392826000526001601f6020600020920160051c82019101612006565b6000908082528160208120915555565b6125fa565b612640611fa9565b6125cc565b634e487b7160e01b600052603160045260246000fd5b609754612670906001600160a01b031661065b565b33148015612721575b6126829061240d565b60005b60c954808210156126eb5761269c61062983610a68565b6001600160a01b038481169116146126bd57506126b890611e2a565b612685565b6126e392506126d66126d16126dd92611880565b610a68565b5091610a68565b90612564565b6107236125af565b60405162461bcd60e51b815260206004820152600e60248201526d4e6f7420616e207769746e65737360901b6044820152606490fd5b50336001600160a01b03821614612679565b1561273a57565b60405162461bcd60e51b815260206004820152603760248201527f4f6e6c79206f776e6572206f72207468652077686974656c697374656420776160448201527f6c6c65742063616e2061646420616e207769746e6573730000000000000000006064820152608490fd5b156127ac57565b60405162461bcd60e51b81526020600482015260166024820152755769746e65737320616c72656164792065786973747360501b6044820152606490fd5b6107239061280d60c954600160401b81101561281f575b6001810160c955610a68565b156120b45761281a611fa9565b6120b4565b612827610680565b612801565b906128356118a5565b60c9549061284282611aab565b918151946000955b60ff8716838110156128f057816128bb82612896612879600196611d0c6128c1978a01808b116128e357612eee565b91612884838b611b57565b5161288f828d611b57565b528a611b57565b506128a96128a384611880565b89611b57565b516128b4828a611b57565b5287611b57565b50611880565b9660ff8091169081146128d6575b019561284a565b6128de611869565b6128cf565b6128eb611869565b612eee565b5093955050505050565b60ff8060ca541660c95480821060001461291357501690565b90501690565b6004820180831161298d575b81511061293a57016004015163ffffffff1690565b60405162461bcd60e51b815260206004820152602560248201527f4f6666736574202b2034206d7573742062652077697468696e206461746120626044820152646f756e647360d81b6064820152608490fd5b612995611869565b612925565b906129a482610e37565b6129b160405191826106f5565b8281528092611436601f1991610e37565b908151918251906129e7604051602093848201528381526129e2816106bf565b612fda565b828501516001600160a01b031694906129fe6113f3565b9560005b60148110612b215750506040518096858201612a279060029061060f60f31b81520190565b612a3091611a94565b0391601f19928381018852612a4590886106f5565b6040810151612a599063ffffffff16613133565b9060600151612a6790613133565b90604051978893878501612a7a91611a94565b600560f91b8152600101612a8d91611a94565b600560f91b8152600101612aa091611a94565b600560f91b8152600101612ab391611a94565b039081018552612ac390856106f5565b0191825151612ad19061299a565b9160005b84518051821015612b19579061063f612afb612af483612b1495611b57565b5186612bdd565b612b058388611b57565b6001600160a01b039091169052565b612ad5565b505092505090565b80612bb3612b69612b63612b53611cc1612b4d612b48612b43612bd899611897565b611fc0565b612f35565b88612f50565b60f81b6001600160f81b03191690565b60f81c90565b612b96612b87612b53612b81600f8560041c16612f66565b84612f7b565b9160f41b600f60f81b166130e4565b612bad612ba285611fd8565b9160001a918d612f8f565b536130e4565b612bd2612bc7612bc284611fd8565b611b87565b9160001a918b612f8f565b53611e2a565b612a02565b6107ae91612c6191612bef8151613133565b90612c59603a604051809360208201957f19457468657265756d205369676e6564204d6573736167653a0a0000000000008752612c3581518092602087870191016101d7565b8201612c4a82518093602087850191016101d7565b0103601a8101845201826106f5565b519020612da9565b919091612c89565b60051115612c7357565b634e487b7160e01b600052602160045260246000fd5b612c9281612c69565b80612c9a5750565b612ca381612c69565b60018103612cf05760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b612cf981612c69565b60028103612d465760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b80612d52600392612c69565b14612d5957565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b906041815114600014612dd757612dd3916020820151906060604084015193015160001a90612de1565b9091565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311612e645791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15612e575781516001600160a01b03811615612e51579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b612ed9612ee8602283519360209060408282015191015190604051958380612ea2899687019a8b8151938492016101d7565b850192600560f91b938483820152612ec382518093856021850191016101d7565b01926021840152835193849187850191016101d7565b010360028101845201826106f5565b51902090565b6040516020810191448352426040830152606082015260608152608081018181106001600160401b03821117612f28575b60405251902090565b612f30610680565b612f1f565b60019060ff8111612f44571b90565b612f4c611869565b1b90565b8115612f5a570490565b612f62611b2a565b0490565b60041b90610ff060f083169216820361188f57565b9060ff8091169116039060ff821161188f57565b906020918051821015612fa157010190565b612fa9610a51565b010190565b60405190612fbb826106bf565b601082526f181899199a1a9b1b9c1cb0b131b232b360811b6020830152565b90612fed612fe88351611ff0565b61140e565b612ff5612fae565b600093845b815181101561309d578061307f61302061307961302e612b636130206130989789612f8f565b516001600160f81b03191690565b6130496130206130438a5160ff809516612f50565b8a612f8f565b61305f61305587611ff0565b918d1a918b612f8f565b53613070612b63613020878a612f8f565b88519116611b41565b86612f8f565b612bd261308e612bc284611ff0565b91891a9187612f8f565b612ffa565b505060405161060f60f31b60208201529293506107ae918391506130c5906022830190611a94565b03601f1981018352826106f5565b60ff166030019060ff821161188f57565b60f81c600a8110156131185760300160ff811161310b5760f81b6001600160f81b03191690565b613113611869565b612b53565b60570160ff811161310b5760f81b6001600160f81b03191690565b80156131d9578060008281935b6131c557508161314f8461140e565b93905b61315c5750505090565b61316590611880565b91826131a361319a612b5360ff600a95868104968088029088820414881517156131b8575b81039081116131ab575b166130d3565b841a9186612f8f565b539182613152565b6131b3611869565b613194565b6131c0611869565b61318a565b926131d1600a91611e2a565b930480613140565b506040516131e6816106bf565b60018152600360fc1b60208201529056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca264697066735822122058da8cab3a55e456f2c4dba66cb5d5d3c1094a14523014270b3d60e1862c9b4b64736f6c63430008110033";

type ReclaimConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReclaimConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Reclaim__factory extends ContractFactory {
  constructor(...args: ReclaimConstructorParams) {
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
      Reclaim & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Reclaim__factory {
    return super.connect(runner) as Reclaim__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReclaimInterface {
    return new Interface(_abi) as ReclaimInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Reclaim {
    return new Contract(address, _abi, runner) as unknown as Reclaim;
  }
}
