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

export type ExecutionContextStruct = {
  maxInboxMessagesRead: PromiseOrValue<BigNumberish>;
  bridge: PromiseOrValue<string>;
};

export type ExecutionContextStructOutput = [BigNumber, string] & {
  maxInboxMessagesRead: BigNumber;
  bridge: string;
};

export interface IOneStepProofEntryInterface extends utils.Interface {
  functions: {
    "getEndMachineHash(uint8,bytes32)": FunctionFragment;
    "getStartMachineHash(bytes32,bytes32)": FunctionFragment;
    "proveOneStep((uint256,address),uint256,bytes32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getEndMachineHash"
      | "getStartMachineHash"
      | "proveOneStep"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getEndMachineHash",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStartMachineHash",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "proveOneStep",
    values: [
      ExecutionContextStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEndMachineHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStartMachineHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proveOneStep",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IOneStepProofEntry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOneStepProofEntryInterface;

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
    getEndMachineHash(
      status: PromiseOrValue<BigNumberish>,
      globalStateHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getStartMachineHash(
      globalStateHash: PromiseOrValue<BytesLike>,
      wasmModuleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    proveOneStep(
      execCtx: ExecutionContextStruct,
      machineStep: PromiseOrValue<BigNumberish>,
      beforeHash: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { afterHash: string }>;
  };

  getEndMachineHash(
    status: PromiseOrValue<BigNumberish>,
    globalStateHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getStartMachineHash(
    globalStateHash: PromiseOrValue<BytesLike>,
    wasmModuleRoot: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  proveOneStep(
    execCtx: ExecutionContextStruct,
    machineStep: PromiseOrValue<BigNumberish>,
    beforeHash: PromiseOrValue<BytesLike>,
    proof: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getEndMachineHash(
      status: PromiseOrValue<BigNumberish>,
      globalStateHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getStartMachineHash(
      globalStateHash: PromiseOrValue<BytesLike>,
      wasmModuleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    proveOneStep(
      execCtx: ExecutionContextStruct,
      machineStep: PromiseOrValue<BigNumberish>,
      beforeHash: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getEndMachineHash(
      status: PromiseOrValue<BigNumberish>,
      globalStateHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStartMachineHash(
      globalStateHash: PromiseOrValue<BytesLike>,
      wasmModuleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proveOneStep(
      execCtx: ExecutionContextStruct,
      machineStep: PromiseOrValue<BigNumberish>,
      beforeHash: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEndMachineHash(
      status: PromiseOrValue<BigNumberish>,
      globalStateHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStartMachineHash(
      globalStateHash: PromiseOrValue<BytesLike>,
      wasmModuleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proveOneStep(
      execCtx: ExecutionContextStruct,
      machineStep: PromiseOrValue<BigNumberish>,
      beforeHash: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}