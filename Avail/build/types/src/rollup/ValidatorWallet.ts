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

export interface ValidatorWalletInterface extends utils.Interface {
  functions: {
    "allowedExecutorDestinations(address)": FunctionFragment;
    "executeTransaction(bytes,address,uint256)": FunctionFragment;
    "executeTransactionWithGasRefunder(address,bytes,address,uint256)": FunctionFragment;
    "executeTransactions(bytes[],address[],uint256[])": FunctionFragment;
    "executeTransactionsWithGasRefunder(address,bytes[],address[],uint256[])": FunctionFragment;
    "executors(address)": FunctionFragment;
    "initialize(address,address,address[])": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAllowedExecutorDestinations(address[],bool[])": FunctionFragment;
    "setExecutor(address[],bool[])": FunctionFragment;
    "timeoutChallenges(address,uint64[])": FunctionFragment;
    "timeoutChallengesWithGasRefunder(address,address,uint64[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "validateExecuteTransaction(address)": FunctionFragment;
    "withdrawEth(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowedExecutorDestinations"
      | "executeTransaction"
      | "executeTransactionWithGasRefunder"
      | "executeTransactions"
      | "executeTransactionsWithGasRefunder"
      | "executors"
      | "initialize"
      | "owner"
      | "renounceOwnership"
      | "setAllowedExecutorDestinations"
      | "setExecutor"
      | "timeoutChallenges"
      | "timeoutChallengesWithGasRefunder"
      | "transferOwnership"
      | "validateExecuteTransaction"
      | "withdrawEth"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowedExecutorDestinations",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransactionWithGasRefunder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransactions",
    values: [
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransactionsWithGasRefunder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executors",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowedExecutorDestinations",
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setExecutor",
    values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "timeoutChallenges",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "timeoutChallengesWithGasRefunder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateExecuteTransaction",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEth",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "allowedExecutorDestinations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransactionWithGasRefunder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransactionsWithGasRefunder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "executors", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllowedExecutorDestinations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExecutor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeoutChallenges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeoutChallengesWithGasRefunder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateExecuteTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEth",
    data: BytesLike
  ): Result;

  events: {
    "AllowedExecutorDestinationsUpdated(address,bool)": EventFragment;
    "ExecutorUpdated(address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "AllowedExecutorDestinationsUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AllowedExecutorDestinationsUpdatedEventObject {
  destination: string;
  isSet: boolean;
}
export type AllowedExecutorDestinationsUpdatedEvent = TypedEvent<
  [string, boolean],
  AllowedExecutorDestinationsUpdatedEventObject
>;

export type AllowedExecutorDestinationsUpdatedEventFilter =
  TypedEventFilter<AllowedExecutorDestinationsUpdatedEvent>;

export interface ExecutorUpdatedEventObject {
  executor: string;
  isExecutor: boolean;
}
export type ExecutorUpdatedEvent = TypedEvent<
  [string, boolean],
  ExecutorUpdatedEventObject
>;

export type ExecutorUpdatedEventFilter = TypedEventFilter<ExecutorUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ValidatorWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ValidatorWalletInterface;

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
    allowedExecutorDestinations(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    executeTransaction(
      data: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeTransactionWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeTransactions(
      data: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeTransactionsWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      _executor: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      initialExecutorAllowedDests: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAllowedExecutorDestinations(
      destinations: PromiseOrValue<string>[],
      isSet: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExecutor(
      newExecutors: PromiseOrValue<string>[],
      isExecutor: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    timeoutChallenges(
      manager: PromiseOrValue<string>,
      challenges: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    timeoutChallengesWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      manager: PromiseOrValue<string>,
      challenges: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateExecuteTransaction(
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    withdrawEth(
      amount: PromiseOrValue<BigNumberish>,
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  allowedExecutorDestinations(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  executeTransaction(
    data: PromiseOrValue<BytesLike>,
    destination: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeTransactionWithGasRefunder(
    gasRefunder: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    destination: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeTransactions(
    data: PromiseOrValue<BytesLike>[],
    destination: PromiseOrValue<string>[],
    amount: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeTransactionsWithGasRefunder(
    gasRefunder: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>[],
    destination: PromiseOrValue<string>[],
    amount: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executors(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    _executor: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    initialExecutorAllowedDests: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAllowedExecutorDestinations(
    destinations: PromiseOrValue<string>[],
    isSet: PromiseOrValue<boolean>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExecutor(
    newExecutors: PromiseOrValue<string>[],
    isExecutor: PromiseOrValue<boolean>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  timeoutChallenges(
    manager: PromiseOrValue<string>,
    challenges: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  timeoutChallengesWithGasRefunder(
    gasRefunder: PromiseOrValue<string>,
    manager: PromiseOrValue<string>,
    challenges: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateExecuteTransaction(
    destination: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<void>;

  withdrawEth(
    amount: PromiseOrValue<BigNumberish>,
    destination: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowedExecutorDestinations(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    executeTransaction(
      data: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransactionWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransactions(
      data: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransactionsWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _executor: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      initialExecutorAllowedDests: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAllowedExecutorDestinations(
      destinations: PromiseOrValue<string>[],
      isSet: PromiseOrValue<boolean>[],
      overrides?: CallOverrides
    ): Promise<void>;

    setExecutor(
      newExecutors: PromiseOrValue<string>[],
      isExecutor: PromiseOrValue<boolean>[],
      overrides?: CallOverrides
    ): Promise<void>;

    timeoutChallenges(
      manager: PromiseOrValue<string>,
      challenges: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    timeoutChallengesWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      manager: PromiseOrValue<string>,
      challenges: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateExecuteTransaction(
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEth(
      amount: PromiseOrValue<BigNumberish>,
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AllowedExecutorDestinationsUpdated(address,bool)"(
      destination?: PromiseOrValue<string> | null,
      isSet?: null
    ): AllowedExecutorDestinationsUpdatedEventFilter;
    AllowedExecutorDestinationsUpdated(
      destination?: PromiseOrValue<string> | null,
      isSet?: null
    ): AllowedExecutorDestinationsUpdatedEventFilter;

    "ExecutorUpdated(address,bool)"(
      executor?: PromiseOrValue<string> | null,
      isExecutor?: null
    ): ExecutorUpdatedEventFilter;
    ExecutorUpdated(
      executor?: PromiseOrValue<string> | null,
      isExecutor?: null
    ): ExecutorUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    allowedExecutorDestinations(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeTransaction(
      data: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeTransactionWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeTransactions(
      data: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeTransactionsWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _executor: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      initialExecutorAllowedDests: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAllowedExecutorDestinations(
      destinations: PromiseOrValue<string>[],
      isSet: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExecutor(
      newExecutors: PromiseOrValue<string>[],
      isExecutor: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    timeoutChallenges(
      manager: PromiseOrValue<string>,
      challenges: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    timeoutChallengesWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      manager: PromiseOrValue<string>,
      challenges: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateExecuteTransaction(
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawEth(
      amount: PromiseOrValue<BigNumberish>,
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowedExecutorDestinations(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeTransaction(
      data: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeTransactionWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeTransactions(
      data: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeTransactionsWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>[],
      destination: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executors(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _executor: PromiseOrValue<string>,
      _owner: PromiseOrValue<string>,
      initialExecutorAllowedDests: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAllowedExecutorDestinations(
      destinations: PromiseOrValue<string>[],
      isSet: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExecutor(
      newExecutors: PromiseOrValue<string>[],
      isExecutor: PromiseOrValue<boolean>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    timeoutChallenges(
      manager: PromiseOrValue<string>,
      challenges: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    timeoutChallengesWithGasRefunder(
      gasRefunder: PromiseOrValue<string>,
      manager: PromiseOrValue<string>,
      challenges: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateExecuteTransaction(
      destination: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawEth(
      amount: PromiseOrValue<BigNumberish>,
      destination: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}