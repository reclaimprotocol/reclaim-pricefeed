/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface PricefeedLibInterface extends Interface {
  getFunction(
    nameOrSignature: "API_URL_PREFIX" | "PRICE_DECIMALS"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "API_URL_PREFIX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PRICE_DECIMALS",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "API_URL_PREFIX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PRICE_DECIMALS",
    data: BytesLike
  ): Result;
}

export interface PricefeedLib extends BaseContract {
  connect(runner?: ContractRunner | null): PricefeedLib;
  waitForDeployment(): Promise<this>;

  interface: PricefeedLibInterface;

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

  API_URL_PREFIX: TypedContractMethod<[], [string], "view">;

  PRICE_DECIMALS: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "API_URL_PREFIX"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PRICE_DECIMALS"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
