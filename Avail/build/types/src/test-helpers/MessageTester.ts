/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
  PromiseOrValue,
} from "../../common";

export interface MessageTesterInterface extends utils.Interface {
  functions: {
    "accumulateInboxMessage(bytes32,bytes32)": FunctionFragment;
    "messageHash(uint8,address,uint64,uint64,uint256,uint256,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "accumulateInboxMessage" | "messageHash"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accumulateInboxMessage",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "messageHash",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "accumulateInboxMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageHash",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MessageTester extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MessageTesterInterface;

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
    accumulateInboxMessage(
      inbox: PromiseOrValue<BytesLike>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    messageHash(
      messageType: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      timestamp: PromiseOrValue<BigNumberish>,
      inboxSeqNum: PromiseOrValue<BigNumberish>,
      gasPriceL1: PromiseOrValue<BigNumberish>,
      messageDataHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  accumulateInboxMessage(
    inbox: PromiseOrValue<BytesLike>,
    message: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  messageHash(
    messageType: PromiseOrValue<BigNumberish>,
    sender: PromiseOrValue<string>,
    blockNumber: PromiseOrValue<BigNumberish>,
    timestamp: PromiseOrValue<BigNumberish>,
    inboxSeqNum: PromiseOrValue<BigNumberish>,
    gasPriceL1: PromiseOrValue<BigNumberish>,
    messageDataHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    accumulateInboxMessage(
      inbox: PromiseOrValue<BytesLike>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    messageHash(
      messageType: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      timestamp: PromiseOrValue<BigNumberish>,
      inboxSeqNum: PromiseOrValue<BigNumberish>,
      gasPriceL1: PromiseOrValue<BigNumberish>,
      messageDataHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    accumulateInboxMessage(
      inbox: PromiseOrValue<BytesLike>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    messageHash(
      messageType: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      timestamp: PromiseOrValue<BigNumberish>,
      inboxSeqNum: PromiseOrValue<BigNumberish>,
      gasPriceL1: PromiseOrValue<BigNumberish>,
      messageDataHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accumulateInboxMessage(
      inbox: PromiseOrValue<BytesLike>,
      message: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    messageHash(
      messageType: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      blockNumber: PromiseOrValue<BigNumberish>,
      timestamp: PromiseOrValue<BigNumberish>,
      inboxSeqNum: PromiseOrValue<BigNumberish>,
      gasPriceL1: PromiseOrValue<BigNumberish>,
      messageDataHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
