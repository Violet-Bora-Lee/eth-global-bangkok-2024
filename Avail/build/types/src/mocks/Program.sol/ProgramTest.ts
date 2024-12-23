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
} from "../../../common";

export interface ProgramTestInterface extends utils.Interface {
  functions: {
    "callKeccak(address,bytes)": FunctionFragment;
    "checkRevertData(address,bytes,bytes)": FunctionFragment;
    "mathTest(address)": FunctionFragment;
    "staticcallEvmData(address,address,uint64,bytes)": FunctionFragment;
    "staticcallProgram(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "callKeccak"
      | "checkRevertData"
      | "mathTest"
      | "staticcallEvmData"
      | "staticcallProgram"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "callKeccak",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkRevertData",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mathTest",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "staticcallEvmData",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "staticcallProgram",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "callKeccak", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkRevertData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mathTest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "staticcallEvmData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "staticcallProgram",
    data: BytesLike
  ): Result;

  events: {
    "Hash(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Hash"): EventFragment;
}

export interface HashEventObject {
  result: string;
}
export type HashEvent = TypedEvent<[string], HashEventObject>;

export type HashEventFilter = TypedEventFilter<HashEvent>;

export interface ProgramTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProgramTestInterface;

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
    callKeccak(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkRevertData(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      expected: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mathTest(
      program: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    staticcallEvmData(
      program: PromiseOrValue<string>,
      fundedAccount: PromiseOrValue<string>,
      gas: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    staticcallProgram(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  callKeccak(
    program: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkRevertData(
    program: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    expected: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mathTest(
    program: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  staticcallEvmData(
    program: PromiseOrValue<string>,
    fundedAccount: PromiseOrValue<string>,
    gas: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  staticcallProgram(
    program: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    callKeccak(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    checkRevertData(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      expected: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    mathTest(
      program: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    staticcallEvmData(
      program: PromiseOrValue<string>,
      fundedAccount: PromiseOrValue<string>,
      gas: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    staticcallProgram(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Hash(bytes32)"(result?: null): HashEventFilter;
    Hash(result?: null): HashEventFilter;
  };

  estimateGas: {
    callKeccak(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkRevertData(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      expected: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mathTest(
      program: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    staticcallEvmData(
      program: PromiseOrValue<string>,
      fundedAccount: PromiseOrValue<string>,
      gas: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    staticcallProgram(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callKeccak(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkRevertData(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      expected: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mathTest(
      program: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    staticcallEvmData(
      program: PromiseOrValue<string>,
      fundedAccount: PromiseOrValue<string>,
      gas: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    staticcallProgram(
      program: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
