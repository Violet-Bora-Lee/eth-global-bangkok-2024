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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface OutboxWithoutOptTesterInterface extends utils.Interface {
  functions: {
    "OUTBOX_VERSION()": FunctionFragment;
    "bridge()": FunctionFragment;
    "calculateItemHash(address,address,uint256,uint256,uint256,uint256,bytes)": FunctionFragment;
    "calculateMerkleRoot(bytes32[],uint256,bytes32)": FunctionFragment;
    "executeTransaction(bytes32[],uint256,address,address,uint256,uint256,uint256,uint256,bytes)": FunctionFragment;
    "executeTransactionSimulation(uint256,address,address,uint256,uint256,uint256,uint256,bytes)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isSpent(uint256)": FunctionFragment;
    "l2ToL1BatchNum()": FunctionFragment;
    "l2ToL1Block()": FunctionFragment;
    "l2ToL1EthBlock()": FunctionFragment;
    "l2ToL1OutputId()": FunctionFragment;
    "l2ToL1Sender()": FunctionFragment;
    "l2ToL1Timestamp()": FunctionFragment;
    "postUpgradeInit()": FunctionFragment;
    "rollup()": FunctionFragment;
    "roots(bytes32)": FunctionFragment;
    "spent(uint256)": FunctionFragment;
    "updateRollupAddress()": FunctionFragment;
    "updateSendRoot(bytes32,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "OUTBOX_VERSION"
      | "bridge"
      | "calculateItemHash"
      | "calculateMerkleRoot"
      | "executeTransaction"
      | "executeTransactionSimulation"
      | "initialize"
      | "isSpent"
      | "l2ToL1BatchNum"
      | "l2ToL1Block"
      | "l2ToL1EthBlock"
      | "l2ToL1OutputId"
      | "l2ToL1Sender"
      | "l2ToL1Timestamp"
      | "postUpgradeInit"
      | "rollup"
      | "roots"
      | "spent"
      | "updateRollupAddress"
      | "updateSendRoot"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "OUTBOX_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateItemHash",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateMerkleRoot",
    values: [
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransactionSimulation",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isSpent",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "l2ToL1BatchNum",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "l2ToL1Block",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "l2ToL1EthBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "l2ToL1OutputId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "l2ToL1Sender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "l2ToL1Timestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "postUpgradeInit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rollup", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "roots",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "spent",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRollupAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateSendRoot",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "OUTBOX_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateItemHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransactionSimulation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l2ToL1BatchNum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2ToL1Block",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2ToL1EthBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2ToL1OutputId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2ToL1Sender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2ToL1Timestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "postUpgradeInit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rollup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateRollupAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSendRoot",
    data: BytesLike
  ): Result;

  events: {
    "OutBoxTransactionExecuted(address,address,uint256,uint256)": EventFragment;
    "SendRootUpdated(bytes32,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OutBoxTransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SendRootUpdated"): EventFragment;
}

export interface OutBoxTransactionExecutedEventObject {
  to: string;
  l2Sender: string;
  zero: BigNumber;
  transactionIndex: BigNumber;
}
export type OutBoxTransactionExecutedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  OutBoxTransactionExecutedEventObject
>;

export type OutBoxTransactionExecutedEventFilter =
  TypedEventFilter<OutBoxTransactionExecutedEvent>;

export interface SendRootUpdatedEventObject {
  outputRoot: string;
  l2BlockHash: string;
}
export type SendRootUpdatedEvent = TypedEvent<
  [string, string],
  SendRootUpdatedEventObject
>;

export type SendRootUpdatedEventFilter = TypedEventFilter<SendRootUpdatedEvent>;

export interface OutboxWithoutOptTester extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OutboxWithoutOptTesterInterface;

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
    OUTBOX_VERSION(overrides?: CallOverrides): Promise<[BigNumber]>;

    bridge(overrides?: CallOverrides): Promise<[string]>;

    calculateItemHash(
      l2Sender: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      l2Block: PromiseOrValue<BigNumberish>,
      l1Block: PromiseOrValue<BigNumberish>,
      l2Timestamp: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    calculateMerkleRoot(
      proof: PromiseOrValue<BytesLike>[],
      path: PromiseOrValue<BigNumberish>,
      item: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    executeTransaction(
      proof: PromiseOrValue<BytesLike>[],
      index: PromiseOrValue<BigNumberish>,
      l2Sender: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      l2Block: PromiseOrValue<BigNumberish>,
      l1Block: PromiseOrValue<BigNumberish>,
      l2Timestamp: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeTransactionSimulation(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BigNumberish>,
      arg6: PromiseOrValue<BigNumberish>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    initialize(
      _bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isSpent(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    l2ToL1BatchNum(overrides?: CallOverrides): Promise<[BigNumber]>;

    l2ToL1Block(overrides?: CallOverrides): Promise<[BigNumber]>;

    l2ToL1EthBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    l2ToL1OutputId(overrides?: CallOverrides): Promise<[string]>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<[string]>;

    l2ToL1Timestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    postUpgradeInit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rollup(overrides?: CallOverrides): Promise<[string]>;

    roots(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    spent(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    updateRollupAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateSendRoot(
      root: PromiseOrValue<BytesLike>,
      l2BlockHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  OUTBOX_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

  bridge(overrides?: CallOverrides): Promise<string>;

  calculateItemHash(
    l2Sender: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    l2Block: PromiseOrValue<BigNumberish>,
    l1Block: PromiseOrValue<BigNumberish>,
    l2Timestamp: PromiseOrValue<BigNumberish>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  calculateMerkleRoot(
    proof: PromiseOrValue<BytesLike>[],
    path: PromiseOrValue<BigNumberish>,
    item: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  executeTransaction(
    proof: PromiseOrValue<BytesLike>[],
    index: PromiseOrValue<BigNumberish>,
    l2Sender: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    l2Block: PromiseOrValue<BigNumberish>,
    l1Block: PromiseOrValue<BigNumberish>,
    l2Timestamp: PromiseOrValue<BigNumberish>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeTransactionSimulation(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<string>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BigNumberish>,
    arg5: PromiseOrValue<BigNumberish>,
    arg6: PromiseOrValue<BigNumberish>,
    arg7: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  initialize(
    _bridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isSpent(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  l2ToL1BatchNum(overrides?: CallOverrides): Promise<BigNumber>;

  l2ToL1Block(overrides?: CallOverrides): Promise<BigNumber>;

  l2ToL1EthBlock(overrides?: CallOverrides): Promise<BigNumber>;

  l2ToL1OutputId(overrides?: CallOverrides): Promise<string>;

  l2ToL1Sender(overrides?: CallOverrides): Promise<string>;

  l2ToL1Timestamp(overrides?: CallOverrides): Promise<BigNumber>;

  postUpgradeInit(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rollup(overrides?: CallOverrides): Promise<string>;

  roots(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  spent(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  updateRollupAddress(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateSendRoot(
    root: PromiseOrValue<BytesLike>,
    l2BlockHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    OUTBOX_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    bridge(overrides?: CallOverrides): Promise<string>;

    calculateItemHash(
      l2Sender: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      l2Block: PromiseOrValue<BigNumberish>,
      l1Block: PromiseOrValue<BigNumberish>,
      l2Timestamp: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    calculateMerkleRoot(
      proof: PromiseOrValue<BytesLike>[],
      path: PromiseOrValue<BigNumberish>,
      item: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    executeTransaction(
      proof: PromiseOrValue<BytesLike>[],
      index: PromiseOrValue<BigNumberish>,
      l2Sender: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      l2Block: PromiseOrValue<BigNumberish>,
      l1Block: PromiseOrValue<BigNumberish>,
      l2Timestamp: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransactionSimulation(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BigNumberish>,
      arg6: PromiseOrValue<BigNumberish>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _bridge: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isSpent(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    l2ToL1BatchNum(overrides?: CallOverrides): Promise<BigNumber>;

    l2ToL1Block(overrides?: CallOverrides): Promise<BigNumber>;

    l2ToL1EthBlock(overrides?: CallOverrides): Promise<BigNumber>;

    l2ToL1OutputId(overrides?: CallOverrides): Promise<string>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<string>;

    l2ToL1Timestamp(overrides?: CallOverrides): Promise<BigNumber>;

    postUpgradeInit(overrides?: CallOverrides): Promise<void>;

    rollup(overrides?: CallOverrides): Promise<string>;

    roots(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    spent(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    updateRollupAddress(overrides?: CallOverrides): Promise<void>;

    updateSendRoot(
      root: PromiseOrValue<BytesLike>,
      l2BlockHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OutBoxTransactionExecuted(address,address,uint256,uint256)"(
      to?: PromiseOrValue<string> | null,
      l2Sender?: PromiseOrValue<string> | null,
      zero?: PromiseOrValue<BigNumberish> | null,
      transactionIndex?: null
    ): OutBoxTransactionExecutedEventFilter;
    OutBoxTransactionExecuted(
      to?: PromiseOrValue<string> | null,
      l2Sender?: PromiseOrValue<string> | null,
      zero?: PromiseOrValue<BigNumberish> | null,
      transactionIndex?: null
    ): OutBoxTransactionExecutedEventFilter;

    "SendRootUpdated(bytes32,bytes32)"(
      outputRoot?: PromiseOrValue<BytesLike> | null,
      l2BlockHash?: PromiseOrValue<BytesLike> | null
    ): SendRootUpdatedEventFilter;
    SendRootUpdated(
      outputRoot?: PromiseOrValue<BytesLike> | null,
      l2BlockHash?: PromiseOrValue<BytesLike> | null
    ): SendRootUpdatedEventFilter;
  };

  estimateGas: {
    OUTBOX_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    calculateItemHash(
      l2Sender: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      l2Block: PromiseOrValue<BigNumberish>,
      l1Block: PromiseOrValue<BigNumberish>,
      l2Timestamp: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateMerkleRoot(
      proof: PromiseOrValue<BytesLike>[],
      path: PromiseOrValue<BigNumberish>,
      item: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeTransaction(
      proof: PromiseOrValue<BytesLike>[],
      index: PromiseOrValue<BigNumberish>,
      l2Sender: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      l2Block: PromiseOrValue<BigNumberish>,
      l1Block: PromiseOrValue<BigNumberish>,
      l2Timestamp: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeTransactionSimulation(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BigNumberish>,
      arg6: PromiseOrValue<BigNumberish>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isSpent(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    l2ToL1BatchNum(overrides?: CallOverrides): Promise<BigNumber>;

    l2ToL1Block(overrides?: CallOverrides): Promise<BigNumber>;

    l2ToL1EthBlock(overrides?: CallOverrides): Promise<BigNumber>;

    l2ToL1OutputId(overrides?: CallOverrides): Promise<BigNumber>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<BigNumber>;

    l2ToL1Timestamp(overrides?: CallOverrides): Promise<BigNumber>;

    postUpgradeInit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rollup(overrides?: CallOverrides): Promise<BigNumber>;

    roots(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    spent(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateRollupAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateSendRoot(
      root: PromiseOrValue<BytesLike>,
      l2BlockHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    OUTBOX_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateItemHash(
      l2Sender: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      l2Block: PromiseOrValue<BigNumberish>,
      l1Block: PromiseOrValue<BigNumberish>,
      l2Timestamp: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateMerkleRoot(
      proof: PromiseOrValue<BytesLike>[],
      path: PromiseOrValue<BigNumberish>,
      item: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeTransaction(
      proof: PromiseOrValue<BytesLike>[],
      index: PromiseOrValue<BigNumberish>,
      l2Sender: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      l2Block: PromiseOrValue<BigNumberish>,
      l1Block: PromiseOrValue<BigNumberish>,
      l2Timestamp: PromiseOrValue<BigNumberish>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeTransactionSimulation(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BigNumberish>,
      arg5: PromiseOrValue<BigNumberish>,
      arg6: PromiseOrValue<BigNumberish>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isSpent(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    l2ToL1BatchNum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2ToL1Block(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2ToL1EthBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2ToL1OutputId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2ToL1Timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    postUpgradeInit(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rollup(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roots(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    spent(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateRollupAddress(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateSendRoot(
      root: PromiseOrValue<BytesLike>,
      l2BlockHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
