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
  PayableOverrides,
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

export interface NodeInterfaceInterface extends utils.Interface {
  functions: {
    "blockL1Num(uint64)": FunctionFragment;
    "constructOutboxProof(uint64,uint64)": FunctionFragment;
    "estimateRetryableTicket(address,uint256,address,uint256,address,address,bytes)": FunctionFragment;
    "findBatchContainingBlock(uint64)": FunctionFragment;
    "gasEstimateComponents(address,bool,bytes)": FunctionFragment;
    "gasEstimateL1Component(address,bool,bytes)": FunctionFragment;
    "getL1Confirmations(bytes32)": FunctionFragment;
    "l2BlockRangeForL1(uint64)": FunctionFragment;
    "legacyLookupMessageBatchProof(uint256,uint64)": FunctionFragment;
    "nitroGenesisBlock()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "blockL1Num"
      | "constructOutboxProof"
      | "estimateRetryableTicket"
      | "findBatchContainingBlock"
      | "gasEstimateComponents"
      | "gasEstimateL1Component"
      | "getL1Confirmations"
      | "l2BlockRangeForL1"
      | "legacyLookupMessageBatchProof"
      | "nitroGenesisBlock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "blockL1Num",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "constructOutboxProof",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateRetryableTicket",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "findBatchContainingBlock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "gasEstimateComponents",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "gasEstimateL1Component",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getL1Confirmations",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "l2BlockRangeForL1",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "legacyLookupMessageBatchProof",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "nitroGenesisBlock",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "blockL1Num", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "constructOutboxProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateRetryableTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "findBatchContainingBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasEstimateComponents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasEstimateL1Component",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getL1Confirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2BlockRangeForL1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "legacyLookupMessageBatchProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nitroGenesisBlock",
    data: BytesLike
  ): Result;

  events: {};
}

export interface NodeInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NodeInterfaceInterface;

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
    blockL1Num(
      l2BlockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { l1BlockNum: BigNumber }>;

    constructOutboxProof(
      size: PromiseOrValue<BigNumberish>,
      leaf: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string[]] & {
        send: string;
        root: string;
        proof: string[];
      }
    >;

    estimateRetryableTicket(
      sender: PromiseOrValue<string>,
      deposit: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      l2CallValue: PromiseOrValue<BigNumberish>,
      excessFeeRefundAddress: PromiseOrValue<string>,
      callValueRefundAddress: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    findBatchContainingBlock(
      blockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { batch: BigNumber }>;

    gasEstimateComponents(
      to: PromiseOrValue<string>,
      contractCreation: PromiseOrValue<boolean>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    gasEstimateL1Component(
      to: PromiseOrValue<string>,
      contractCreation: PromiseOrValue<boolean>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getL1Confirmations(
      blockHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { confirmations: BigNumber }>;

    l2BlockRangeForL1(
      blockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { firstBlock: BigNumber; lastBlock: BigNumber }
    >;

    legacyLookupMessageBatchProof(
      batchNum: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string[],
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ] & {
        proof: string[];
        path: BigNumber;
        l2Sender: string;
        l1Dest: string;
        l2Block: BigNumber;
        l1Block: BigNumber;
        timestamp: BigNumber;
        amount: BigNumber;
        calldataForL1: string;
      }
    >;

    nitroGenesisBlock(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { number: BigNumber }>;
  };

  blockL1Num(
    l2BlockNum: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  constructOutboxProof(
    size: PromiseOrValue<BigNumberish>,
    leaf: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string[]] & { send: string; root: string; proof: string[] }
  >;

  estimateRetryableTicket(
    sender: PromiseOrValue<string>,
    deposit: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    l2CallValue: PromiseOrValue<BigNumberish>,
    excessFeeRefundAddress: PromiseOrValue<string>,
    callValueRefundAddress: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  findBatchContainingBlock(
    blockNum: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  gasEstimateComponents(
    to: PromiseOrValue<string>,
    contractCreation: PromiseOrValue<boolean>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  gasEstimateL1Component(
    to: PromiseOrValue<string>,
    contractCreation: PromiseOrValue<boolean>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getL1Confirmations(
    blockHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  l2BlockRangeForL1(
    blockNum: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { firstBlock: BigNumber; lastBlock: BigNumber }
  >;

  legacyLookupMessageBatchProof(
    batchNum: PromiseOrValue<BigNumberish>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string[],
      BigNumber,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string
    ] & {
      proof: string[];
      path: BigNumber;
      l2Sender: string;
      l1Dest: string;
      l2Block: BigNumber;
      l1Block: BigNumber;
      timestamp: BigNumber;
      amount: BigNumber;
      calldataForL1: string;
    }
  >;

  nitroGenesisBlock(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    blockL1Num(
      l2BlockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    constructOutboxProof(
      size: PromiseOrValue<BigNumberish>,
      leaf: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string[]] & {
        send: string;
        root: string;
        proof: string[];
      }
    >;

    estimateRetryableTicket(
      sender: PromiseOrValue<string>,
      deposit: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      l2CallValue: PromiseOrValue<BigNumberish>,
      excessFeeRefundAddress: PromiseOrValue<string>,
      callValueRefundAddress: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    findBatchContainingBlock(
      blockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gasEstimateComponents(
      to: PromiseOrValue<string>,
      contractCreation: PromiseOrValue<boolean>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        gasEstimate: BigNumber;
        gasEstimateForL1: BigNumber;
        baseFee: BigNumber;
        l1BaseFeeEstimate: BigNumber;
      }
    >;

    gasEstimateL1Component(
      to: PromiseOrValue<string>,
      contractCreation: PromiseOrValue<boolean>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        gasEstimateForL1: BigNumber;
        baseFee: BigNumber;
        l1BaseFeeEstimate: BigNumber;
      }
    >;

    getL1Confirmations(
      blockHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    l2BlockRangeForL1(
      blockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { firstBlock: BigNumber; lastBlock: BigNumber }
    >;

    legacyLookupMessageBatchProof(
      batchNum: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string[],
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
      ] & {
        proof: string[];
        path: BigNumber;
        l2Sender: string;
        l1Dest: string;
        l2Block: BigNumber;
        l1Block: BigNumber;
        timestamp: BigNumber;
        amount: BigNumber;
        calldataForL1: string;
      }
    >;

    nitroGenesisBlock(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    blockL1Num(
      l2BlockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    constructOutboxProof(
      size: PromiseOrValue<BigNumberish>,
      leaf: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateRetryableTicket(
      sender: PromiseOrValue<string>,
      deposit: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      l2CallValue: PromiseOrValue<BigNumberish>,
      excessFeeRefundAddress: PromiseOrValue<string>,
      callValueRefundAddress: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    findBatchContainingBlock(
      blockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gasEstimateComponents(
      to: PromiseOrValue<string>,
      contractCreation: PromiseOrValue<boolean>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    gasEstimateL1Component(
      to: PromiseOrValue<string>,
      contractCreation: PromiseOrValue<boolean>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getL1Confirmations(
      blockHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    l2BlockRangeForL1(
      blockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    legacyLookupMessageBatchProof(
      batchNum: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nitroGenesisBlock(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    blockL1Num(
      l2BlockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    constructOutboxProof(
      size: PromiseOrValue<BigNumberish>,
      leaf: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimateRetryableTicket(
      sender: PromiseOrValue<string>,
      deposit: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      l2CallValue: PromiseOrValue<BigNumberish>,
      excessFeeRefundAddress: PromiseOrValue<string>,
      callValueRefundAddress: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    findBatchContainingBlock(
      blockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gasEstimateComponents(
      to: PromiseOrValue<string>,
      contractCreation: PromiseOrValue<boolean>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    gasEstimateL1Component(
      to: PromiseOrValue<string>,
      contractCreation: PromiseOrValue<boolean>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getL1Confirmations(
      blockHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    l2BlockRangeForL1(
      blockNum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    legacyLookupMessageBatchProof(
      batchNum: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nitroGenesisBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
