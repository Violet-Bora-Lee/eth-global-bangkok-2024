/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface IReader4844Interface extends utils.Interface {
  functions: {
    "getBlobBaseFee()": FunctionFragment;
    "getDataHashes()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getBlobBaseFee" | "getDataHashes"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBlobBaseFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDataHashes",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getBlobBaseFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDataHashes",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IReader4844 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IReader4844Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getBlobBaseFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDataHashes(overrides?: CallOverrides): Promise<[string[]]>;
  };

  getBlobBaseFee(overrides?: CallOverrides): Promise<BigNumber>;

  getDataHashes(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    getBlobBaseFee(overrides?: CallOverrides): Promise<BigNumber>;

    getDataHashes(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    getBlobBaseFee(overrides?: CallOverrides): Promise<BigNumber>;

    getDataHashes(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getBlobBaseFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDataHashes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
