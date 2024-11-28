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

export interface GasRefunderInterface extends utils.Interface {
  functions: {
    "allowContracts(address[])": FunctionFragment;
    "allowRefundees(address[])": FunctionFragment;
    "allowedContracts(address)": FunctionFragment;
    "allowedRefundees(address)": FunctionFragment;
    "commonParams()": FunctionFragment;
    "disallowContracts(address[])": FunctionFragment;
    "disallowRefundees(address[])": FunctionFragment;
    "disallower()": FunctionFragment;
    "onGasSpent(address,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setCalldataCost(uint8)": FunctionFragment;
    "setDisallower(address)": FunctionFragment;
    "setExtraGasMargin(uint32)": FunctionFragment;
    "setMaxGasCost(uint64)": FunctionFragment;
    "setMaxGasTip(uint64)": FunctionFragment;
    "setMaxRefundeeBalance(uint128)": FunctionFragment;
    "setMaxSingleGasUsage(uint32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowContracts"
      | "allowRefundees"
      | "allowedContracts"
      | "allowedRefundees"
      | "commonParams"
      | "disallowContracts"
      | "disallowRefundees"
      | "disallower"
      | "onGasSpent"
      | "owner"
      | "renounceOwnership"
      | "setCalldataCost"
      | "setDisallower"
      | "setExtraGasMargin"
      | "setMaxGasCost"
      | "setMaxGasTip"
      | "setMaxRefundeeBalance"
      | "setMaxSingleGasUsage"
      | "transferOwnership"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowContracts",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "allowRefundees",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedContracts",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedRefundees",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "commonParams",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disallowContracts",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "disallowRefundees",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "disallower",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onGasSpent",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCalldataCost",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDisallower",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setExtraGasMargin",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxGasCost",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxGasTip",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxRefundeeBalance",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxSingleGasUsage",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "allowContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowRefundees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedRefundees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commonParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disallowContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disallowRefundees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "disallower", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onGasSpent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCalldataCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDisallower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExtraGasMargin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxGasCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxGasTip",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxRefundeeBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxSingleGasUsage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "CommonParameterSet(uint8,uint256)": EventFragment;
    "ContractAllowedSet(address,bool)": EventFragment;
    "Deposited(address,uint256)": EventFragment;
    "DisallowerSet(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RefundGasCostsDenied(address,address,uint8,uint256)": EventFragment;
    "RefundedGasCosts(address,address,bool,uint256,uint256,uint256)": EventFragment;
    "RefundeeAllowedSet(address,bool)": EventFragment;
    "Withdrawn(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CommonParameterSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractAllowedSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisallowerSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundGasCostsDenied"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundedGasCosts"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundeeAllowedSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export interface CommonParameterSetEventObject {
  parameter: number;
  value: BigNumber;
}
export type CommonParameterSetEvent = TypedEvent<
  [number, BigNumber],
  CommonParameterSetEventObject
>;

export type CommonParameterSetEventFilter =
  TypedEventFilter<CommonParameterSetEvent>;

export interface ContractAllowedSetEventObject {
  addr: string;
  allowed: boolean;
}
export type ContractAllowedSetEvent = TypedEvent<
  [string, boolean],
  ContractAllowedSetEventObject
>;

export type ContractAllowedSetEventFilter =
  TypedEventFilter<ContractAllowedSetEvent>;

export interface DepositedEventObject {
  sender: string;
  amount: BigNumber;
}
export type DepositedEvent = TypedEvent<
  [string, BigNumber],
  DepositedEventObject
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export interface DisallowerSetEventObject {
  addr: string;
}
export type DisallowerSetEvent = TypedEvent<[string], DisallowerSetEventObject>;

export type DisallowerSetEventFilter = TypedEventFilter<DisallowerSetEvent>;

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

export interface RefundGasCostsDeniedEventObject {
  refundee: string;
  contractAddress: string;
  reason: number;
  gas: BigNumber;
}
export type RefundGasCostsDeniedEvent = TypedEvent<
  [string, string, number, BigNumber],
  RefundGasCostsDeniedEventObject
>;

export type RefundGasCostsDeniedEventFilter =
  TypedEventFilter<RefundGasCostsDeniedEvent>;

export interface RefundedGasCostsEventObject {
  refundee: string;
  contractAddress: string;
  success: boolean;
  gas: BigNumber;
  gasPrice: BigNumber;
  amountPaid: BigNumber;
}
export type RefundedGasCostsEvent = TypedEvent<
  [string, string, boolean, BigNumber, BigNumber, BigNumber],
  RefundedGasCostsEventObject
>;

export type RefundedGasCostsEventFilter =
  TypedEventFilter<RefundedGasCostsEvent>;

export interface RefundeeAllowedSetEventObject {
  addr: string;
  allowed: boolean;
}
export type RefundeeAllowedSetEvent = TypedEvent<
  [string, boolean],
  RefundeeAllowedSetEventObject
>;

export type RefundeeAllowedSetEventFilter =
  TypedEventFilter<RefundeeAllowedSetEvent>;

export interface WithdrawnEventObject {
  initiator: string;
  destination: string;
  amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawnEventObject
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface GasRefunder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GasRefunderInterface;

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
    allowContracts(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allowRefundees(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allowedContracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    allowedRefundees(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    commonParams(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, BigNumber, BigNumber, number] & {
        maxRefundeeBalance: BigNumber;
        extraGasMargin: number;
        calldataCost: number;
        maxGasTip: BigNumber;
        maxGasCost: BigNumber;
        maxSingleGasUsage: number;
      }
    >;

    disallowContracts(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disallowRefundees(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disallower(overrides?: CallOverrides): Promise<[string]>;

    onGasSpent(
      refundee: PromiseOrValue<string>,
      gasUsed: PromiseOrValue<BigNumberish>,
      calldataSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCalldataCost(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDisallower(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExtraGasMargin(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxGasCost(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxGasTip(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxRefundeeBalance(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxSingleGasUsage(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  allowContracts(
    addresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allowRefundees(
    addresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allowedContracts(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  allowedRefundees(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  commonParams(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, BigNumber, BigNumber, number] & {
      maxRefundeeBalance: BigNumber;
      extraGasMargin: number;
      calldataCost: number;
      maxGasTip: BigNumber;
      maxGasCost: BigNumber;
      maxSingleGasUsage: number;
    }
  >;

  disallowContracts(
    addresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disallowRefundees(
    addresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disallower(overrides?: CallOverrides): Promise<string>;

  onGasSpent(
    refundee: PromiseOrValue<string>,
    gasUsed: PromiseOrValue<BigNumberish>,
    calldataSize: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCalldataCost(
    newValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDisallower(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExtraGasMargin(
    newValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxGasCost(
    newValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxGasTip(
    newValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxRefundeeBalance(
    newValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxSingleGasUsage(
    newValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    destination: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowContracts(
      addresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    allowRefundees(
      addresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    allowedContracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    allowedRefundees(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    commonParams(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, BigNumber, BigNumber, number] & {
        maxRefundeeBalance: BigNumber;
        extraGasMargin: number;
        calldataCost: number;
        maxGasTip: BigNumber;
        maxGasCost: BigNumber;
        maxSingleGasUsage: number;
      }
    >;

    disallowContracts(
      addresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    disallowRefundees(
      addresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    disallower(overrides?: CallOverrides): Promise<string>;

    onGasSpent(
      refundee: PromiseOrValue<string>,
      gasUsed: PromiseOrValue<BigNumberish>,
      calldataSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setCalldataCost(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDisallower(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setExtraGasMargin(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxGasCost(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxGasTip(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxRefundeeBalance(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxSingleGasUsage(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CommonParameterSet(uint8,uint256)"(
      parameter?: PromiseOrValue<BigNumberish> | null,
      value?: null
    ): CommonParameterSetEventFilter;
    CommonParameterSet(
      parameter?: PromiseOrValue<BigNumberish> | null,
      value?: null
    ): CommonParameterSetEventFilter;

    "ContractAllowedSet(address,bool)"(
      addr?: PromiseOrValue<string> | null,
      allowed?: PromiseOrValue<boolean> | null
    ): ContractAllowedSetEventFilter;
    ContractAllowedSet(
      addr?: PromiseOrValue<string> | null,
      allowed?: PromiseOrValue<boolean> | null
    ): ContractAllowedSetEventFilter;

    "Deposited(address,uint256)"(
      sender?: null,
      amount?: null
    ): DepositedEventFilter;
    Deposited(sender?: null, amount?: null): DepositedEventFilter;

    "DisallowerSet(address)"(
      addr?: PromiseOrValue<string> | null
    ): DisallowerSetEventFilter;
    DisallowerSet(
      addr?: PromiseOrValue<string> | null
    ): DisallowerSetEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RefundGasCostsDenied(address,address,uint8,uint256)"(
      refundee?: PromiseOrValue<string> | null,
      contractAddress?: PromiseOrValue<string> | null,
      reason?: PromiseOrValue<BigNumberish> | null,
      gas?: null
    ): RefundGasCostsDeniedEventFilter;
    RefundGasCostsDenied(
      refundee?: PromiseOrValue<string> | null,
      contractAddress?: PromiseOrValue<string> | null,
      reason?: PromiseOrValue<BigNumberish> | null,
      gas?: null
    ): RefundGasCostsDeniedEventFilter;

    "RefundedGasCosts(address,address,bool,uint256,uint256,uint256)"(
      refundee?: PromiseOrValue<string> | null,
      contractAddress?: PromiseOrValue<string> | null,
      success?: PromiseOrValue<boolean> | null,
      gas?: null,
      gasPrice?: null,
      amountPaid?: null
    ): RefundedGasCostsEventFilter;
    RefundedGasCosts(
      refundee?: PromiseOrValue<string> | null,
      contractAddress?: PromiseOrValue<string> | null,
      success?: PromiseOrValue<boolean> | null,
      gas?: null,
      gasPrice?: null,
      amountPaid?: null
    ): RefundedGasCostsEventFilter;

    "RefundeeAllowedSet(address,bool)"(
      addr?: PromiseOrValue<string> | null,
      allowed?: PromiseOrValue<boolean> | null
    ): RefundeeAllowedSetEventFilter;
    RefundeeAllowedSet(
      addr?: PromiseOrValue<string> | null,
      allowed?: PromiseOrValue<boolean> | null
    ): RefundeeAllowedSetEventFilter;

    "Withdrawn(address,address,uint256)"(
      initiator?: null,
      destination?: null,
      amount?: null
    ): WithdrawnEventFilter;
    Withdrawn(
      initiator?: null,
      destination?: null,
      amount?: null
    ): WithdrawnEventFilter;
  };

  estimateGas: {
    allowContracts(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allowRefundees(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allowedContracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedRefundees(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    commonParams(overrides?: CallOverrides): Promise<BigNumber>;

    disallowContracts(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disallowRefundees(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disallower(overrides?: CallOverrides): Promise<BigNumber>;

    onGasSpent(
      refundee: PromiseOrValue<string>,
      gasUsed: PromiseOrValue<BigNumberish>,
      calldataSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCalldataCost(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDisallower(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExtraGasMargin(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxGasCost(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxGasTip(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxRefundeeBalance(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxSingleGasUsage(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowContracts(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allowRefundees(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allowedContracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedRefundees(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    commonParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disallowContracts(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disallowRefundees(
      addresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disallower(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onGasSpent(
      refundee: PromiseOrValue<string>,
      gasUsed: PromiseOrValue<BigNumberish>,
      calldataSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCalldataCost(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDisallower(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExtraGasMargin(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxGasCost(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxGasTip(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxRefundeeBalance(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxSingleGasUsage(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}