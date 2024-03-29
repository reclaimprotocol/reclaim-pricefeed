/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace Reclaim {
  export type WitnessStruct = { addr: AddressLike; host: string };

  export type WitnessStructOutput = [addr: string, host: string] & {
    addr: string;
    host: string;
  };

  export type EpochStruct = {
    id: BigNumberish;
    timestampStart: BigNumberish;
    timestampEnd: BigNumberish;
    witnesses: Reclaim.WitnessStruct[];
    minimumWitnessesForClaimCreation: BigNumberish;
  };

  export type EpochStructOutput = [
    id: bigint,
    timestampStart: bigint,
    timestampEnd: bigint,
    witnesses: Reclaim.WitnessStructOutput[],
    minimumWitnessesForClaimCreation: bigint
  ] & {
    id: bigint;
    timestampStart: bigint;
    timestampEnd: bigint;
    witnesses: Reclaim.WitnessStructOutput[];
    minimumWitnessesForClaimCreation: bigint;
  };
}

export declare namespace Claims {
  export type ClaimInfoStruct = {
    provider: string;
    parameters: string;
    context: string;
  };

  export type ClaimInfoStructOutput = [
    provider: string,
    parameters: string,
    context: string
  ] & { provider: string; parameters: string; context: string };

  export type CompleteClaimDataStruct = {
    identifier: BytesLike;
    owner: AddressLike;
    timestampS: BigNumberish;
    epoch: BigNumberish;
  };

  export type CompleteClaimDataStructOutput = [
    identifier: string,
    owner: string,
    timestampS: bigint,
    epoch: bigint
  ] & { identifier: string; owner: string; timestampS: bigint; epoch: bigint };
}

export interface ReclaimInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addAsWitness"
      | "addNewEpoch"
      | "assertValidEpochAndSignedClaim"
      | "currentEpoch"
      | "epochDurationS"
      | "epochs"
      | "fetchEpoch"
      | "fetchWitnessesForClaim"
      | "initialize"
      | "minimumWitnessesForClaimCreation"
      | "owner"
      | "proxiableUUID"
      | "removeAsWitness"
      | "renounceOwnership"
      | "transferOwnership"
      | "updateWitnessWhitelist"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "witnesses"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "BeaconUpgraded"
      | "EpochAdded"
      | "Initialized"
      | "OwnershipTransferred"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addAsWitness",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addNewEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assertValidEpochAndSignedClaim",
    values: [
      BigNumberish,
      Claims.ClaimInfoStruct,
      Claims.CompleteClaimDataStruct,
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "currentEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochDurationS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "epochs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchEpoch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchWitnessesForClaim",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumWitnessesForClaimCreation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeAsWitness",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWitnessWhitelist",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "witnesses",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAsWitness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addNewEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assertValidEpochAndSignedClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochDurationS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "epochs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fetchEpoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fetchWitnessesForClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumWitnessesForClaimCreation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAsWitness",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateWitnessWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "witnesses", data: BytesLike): Result;
}

export namespace AdminChangedEvent {
  export type InputTuple = [previousAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [previousAdmin: string, newAdmin: string];
  export interface OutputObject {
    previousAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BeaconUpgradedEvent {
  export type InputTuple = [beacon: AddressLike];
  export type OutputTuple = [beacon: string];
  export interface OutputObject {
    beacon: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EpochAddedEvent {
  export type InputTuple = [epoch: Reclaim.EpochStruct];
  export type OutputTuple = [epoch: Reclaim.EpochStructOutput];
  export interface OutputObject {
    epoch: Reclaim.EpochStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Reclaim extends BaseContract {
  connect(runner?: ContractRunner | null): Reclaim;
  waitForDeployment(): Promise<this>;

  interface: ReclaimInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addAsWitness: TypedContractMethod<
    [witnessAddress: AddressLike, host: string],
    [void],
    "nonpayable"
  >;

  addNewEpoch: TypedContractMethod<[], [void], "nonpayable">;

  assertValidEpochAndSignedClaim: TypedContractMethod<
    [
      epochNum: BigNumberish,
      claimInfo: Claims.ClaimInfoStruct,
      claimData: Claims.CompleteClaimDataStruct,
      signatures: BytesLike[]
    ],
    [void],
    "view"
  >;

  currentEpoch: TypedContractMethod<[], [bigint], "view">;

  epochDurationS: TypedContractMethod<[], [bigint], "view">;

  epochs: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        id: bigint;
        timestampStart: bigint;
        timestampEnd: bigint;
        minimumWitnessesForClaimCreation: bigint;
      }
    ],
    "view"
  >;

  fetchEpoch: TypedContractMethod<
    [epoch: BigNumberish],
    [Reclaim.EpochStructOutput],
    "view"
  >;

  fetchWitnessesForClaim: TypedContractMethod<
    [epoch: BigNumberish, identifier: BytesLike, timestampS: BigNumberish],
    [Reclaim.WitnessStructOutput[]],
    "view"
  >;

  initialize: TypedContractMethod<[], [void], "nonpayable">;

  minimumWitnessesForClaimCreation: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  removeAsWitness: TypedContractMethod<
    [witnessAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updateWitnessWhitelist: TypedContractMethod<
    [addr: AddressLike, isWhitelisted: boolean],
    [void],
    "nonpayable"
  >;

  upgradeTo: TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  witnesses: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, string] & { addr: string; host: string }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addAsWitness"
  ): TypedContractMethod<
    [witnessAddress: AddressLike, host: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addNewEpoch"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "assertValidEpochAndSignedClaim"
  ): TypedContractMethod<
    [
      epochNum: BigNumberish,
      claimInfo: Claims.ClaimInfoStruct,
      claimData: Claims.CompleteClaimDataStruct,
      signatures: BytesLike[]
    ],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "currentEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "epochDurationS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "epochs"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, bigint, bigint, bigint] & {
        id: bigint;
        timestampStart: bigint;
        timestampEnd: bigint;
        minimumWitnessesForClaimCreation: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "fetchEpoch"
  ): TypedContractMethod<
    [epoch: BigNumberish],
    [Reclaim.EpochStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "fetchWitnessesForClaim"
  ): TypedContractMethod<
    [epoch: BigNumberish, identifier: BytesLike, timestampS: BigNumberish],
    [Reclaim.WitnessStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "minimumWitnessesForClaimCreation"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeAsWitness"
  ): TypedContractMethod<[witnessAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateWitnessWhitelist"
  ): TypedContractMethod<
    [addr: AddressLike, isWhitelisted: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeTo"
  ): TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "witnesses"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, string] & { addr: string; host: string }],
    "view"
  >;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<
    BeaconUpgradedEvent.InputTuple,
    BeaconUpgradedEvent.OutputTuple,
    BeaconUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "EpochAdded"
  ): TypedContractEvent<
    EpochAddedEvent.InputTuple,
    EpochAddedEvent.OutputTuple,
    EpochAddedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "AdminChanged(address,address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;

    "BeaconUpgraded(address)": TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;
    BeaconUpgraded: TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;

    "EpochAdded(tuple)": TypedContractEvent<
      EpochAddedEvent.InputTuple,
      EpochAddedEvent.OutputTuple,
      EpochAddedEvent.OutputObject
    >;
    EpochAdded: TypedContractEvent<
      EpochAddedEvent.InputTuple,
      EpochAddedEvent.OutputTuple,
      EpochAddedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
