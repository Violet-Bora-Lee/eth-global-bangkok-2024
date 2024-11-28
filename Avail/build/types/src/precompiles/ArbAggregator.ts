/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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
  PromiseOrValue,
} from "../../common";

export interface ArbAggregatorInterface extends utils.Interface {
  functions: {
    "addBatchPoster(address)": FunctionFragment;
    "getBatchPosters()": FunctionFragment;
    "getDefaultAggregator()": FunctionFragment;
    "getFeeCollector(address)": FunctionFragment;
    "getPreferredAggregator(address)": FunctionFragment;
    "getTxBaseFee(address)": FunctionFragment;
    "setFeeCollector(address,address)": FunctionFragment;
    "setTxBaseFee(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBatchPoster"
      | "getBatchPosters"
      | "getDefaultAggregator"
      | "getFeeCollector"
      | "getPreferredAggregator"
      | "getTxBaseFee"
      | "setFeeCollector"
      | "setTxBaseFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBatchPoster",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBatchPosters",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDefaultAggregator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeCollector",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPreferredAggregator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTxBaseFee",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeCollector",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTxBaseFee",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBatchPoster",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBatchPosters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDefaultAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFeeCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPreferredAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTxBaseFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTxBaseFee",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ArbAggregator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ArbAggregatorInterface;

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
    addBatchPoster(
      newBatchPoster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBatchPosters(overrides?: CallOverrides): Promise<[string[]]>;

    getDefaultAggregator(overrides?: CallOverrides): Promise<[string]>;

    getFeeCollector(
      batchPoster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPreferredAggregator(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;

    getTxBaseFee(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setFeeCollector(
      batchPoster: PromiseOrValue<string>,
      newFeeCollector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTxBaseFee(
      aggregator: PromiseOrValue<string>,
      feeInL1Gas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addBatchPoster(
    newBatchPoster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBatchPosters(overrides?: CallOverrides): Promise<string[]>;

  getDefaultAggregator(overrides?: CallOverrides): Promise<string>;

  getFeeCollector(
    batchPoster: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPreferredAggregator(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, boolean]>;

  getTxBaseFee(
    aggregator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setFeeCollector(
    batchPoster: PromiseOrValue<string>,
    newFeeCollector: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTxBaseFee(
    aggregator: PromiseOrValue<string>,
    feeInL1Gas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBatchPoster(
      newBatchPoster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getBatchPosters(overrides?: CallOverrides): Promise<string[]>;

    getDefaultAggregator(overrides?: CallOverrides): Promise<string>;

    getFeeCollector(
      batchPoster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPreferredAggregator(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>;

    getTxBaseFee(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFeeCollector(
      batchPoster: PromiseOrValue<string>,
      newFeeCollector: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTxBaseFee(
      aggregator: PromiseOrValue<string>,
      feeInL1Gas: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addBatchPoster(
      newBatchPoster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBatchPosters(overrides?: CallOverrides): Promise<BigNumber>;

    getDefaultAggregator(overrides?: CallOverrides): Promise<BigNumber>;

    getFeeCollector(
      batchPoster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPreferredAggregator(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTxBaseFee(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFeeCollector(
      batchPoster: PromiseOrValue<string>,
      newFeeCollector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTxBaseFee(
      aggregator: PromiseOrValue<string>,
      feeInL1Gas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBatchPoster(
      newBatchPoster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBatchPosters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDefaultAggregator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeeCollector(
      batchPoster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPreferredAggregator(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTxBaseFee(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFeeCollector(
      batchPoster: PromiseOrValue<string>,
      newFeeCollector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTxBaseFee(
      aggregator: PromiseOrValue<string>,
      feeInL1Gas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}