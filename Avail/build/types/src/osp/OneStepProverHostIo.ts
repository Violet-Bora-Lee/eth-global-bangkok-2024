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

export type ValueStruct = {
  valueType: PromiseOrValue<BigNumberish>;
  contents: PromiseOrValue<BigNumberish>;
};

export type ValueStructOutput = [number, BigNumber] & {
  valueType: number;
  contents: BigNumber;
};

export type ValueArrayStruct = { inner: ValueStruct[] };

export type ValueArrayStructOutput = [ValueStructOutput[]] & {
  inner: ValueStructOutput[];
};

export type ValueStackStruct = {
  proved: ValueArrayStruct;
  remainingHash: PromiseOrValue<BytesLike>;
};

export type ValueStackStructOutput = [ValueArrayStructOutput, string] & {
  proved: ValueArrayStructOutput;
  remainingHash: string;
};

export type MultiStackStruct = {
  inactiveStackHash: PromiseOrValue<BytesLike>;
  remainingHash: PromiseOrValue<BytesLike>;
};

export type MultiStackStructOutput = [string, string] & {
  inactiveStackHash: string;
  remainingHash: string;
};

export type StackFrameStruct = {
  returnPc: ValueStruct;
  localsMerkleRoot: PromiseOrValue<BytesLike>;
  callerModule: PromiseOrValue<BigNumberish>;
  callerModuleInternals: PromiseOrValue<BigNumberish>;
};

export type StackFrameStructOutput = [
  ValueStructOutput,
  string,
  number,
  number
] & {
  returnPc: ValueStructOutput;
  localsMerkleRoot: string;
  callerModule: number;
  callerModuleInternals: number;
};

export type StackFrameWindowStruct = {
  proved: StackFrameStruct[];
  remainingHash: PromiseOrValue<BytesLike>;
};

export type StackFrameWindowStructOutput = [
  StackFrameStructOutput[],
  string
] & { proved: StackFrameStructOutput[]; remainingHash: string };

export type MachineStruct = {
  status: PromiseOrValue<BigNumberish>;
  valueStack: ValueStackStruct;
  valueMultiStack: MultiStackStruct;
  internalStack: ValueStackStruct;
  frameStack: StackFrameWindowStruct;
  frameMultiStack: MultiStackStruct;
  globalStateHash: PromiseOrValue<BytesLike>;
  moduleIdx: PromiseOrValue<BigNumberish>;
  functionIdx: PromiseOrValue<BigNumberish>;
  functionPc: PromiseOrValue<BigNumberish>;
  recoveryPc: PromiseOrValue<BytesLike>;
  modulesRoot: PromiseOrValue<BytesLike>;
};

export type MachineStructOutput = [
  number,
  ValueStackStructOutput,
  MultiStackStructOutput,
  ValueStackStructOutput,
  StackFrameWindowStructOutput,
  MultiStackStructOutput,
  string,
  number,
  number,
  number,
  string,
  string
] & {
  status: number;
  valueStack: ValueStackStructOutput;
  valueMultiStack: MultiStackStructOutput;
  internalStack: ValueStackStructOutput;
  frameStack: StackFrameWindowStructOutput;
  frameMultiStack: MultiStackStructOutput;
  globalStateHash: string;
  moduleIdx: number;
  functionIdx: number;
  functionPc: number;
  recoveryPc: string;
  modulesRoot: string;
};

export type ModuleMemoryStruct = {
  size: PromiseOrValue<BigNumberish>;
  maxSize: PromiseOrValue<BigNumberish>;
  merkleRoot: PromiseOrValue<BytesLike>;
};

export type ModuleMemoryStructOutput = [BigNumber, BigNumber, string] & {
  size: BigNumber;
  maxSize: BigNumber;
  merkleRoot: string;
};

export type ModuleStruct = {
  globalsMerkleRoot: PromiseOrValue<BytesLike>;
  moduleMemory: ModuleMemoryStruct;
  tablesMerkleRoot: PromiseOrValue<BytesLike>;
  functionsMerkleRoot: PromiseOrValue<BytesLike>;
  extraHash: PromiseOrValue<BytesLike>;
  internalsOffset: PromiseOrValue<BigNumberish>;
};

export type ModuleStructOutput = [
  string,
  ModuleMemoryStructOutput,
  string,
  string,
  string,
  number
] & {
  globalsMerkleRoot: string;
  moduleMemory: ModuleMemoryStructOutput;
  tablesMerkleRoot: string;
  functionsMerkleRoot: string;
  extraHash: string;
  internalsOffset: number;
};

export type InstructionStruct = {
  opcode: PromiseOrValue<BigNumberish>;
  argumentData: PromiseOrValue<BigNumberish>;
};

export type InstructionStructOutput = [number, BigNumber] & {
  opcode: number;
  argumentData: BigNumber;
};

export interface OneStepProverHostIoInterface extends utils.Interface {
  functions: {
    "executeOneStep((uint256,address),(uint8,(((uint8,uint256)[]),bytes32),(bytes32,bytes32),(((uint8,uint256)[]),bytes32),(((uint8,uint256),bytes32,uint32,uint32)[],bytes32),(bytes32,bytes32),bytes32,uint32,uint32,uint32,bytes32,bytes32),(bytes32,(uint64,uint64,bytes32),bytes32,bytes32,bytes32,uint32),(uint16,uint256),bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "executeOneStep"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "executeOneStep",
    values: [
      ExecutionContextStruct,
      MachineStruct,
      ModuleStruct,
      InstructionStruct,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeOneStep",
    data: BytesLike
  ): Result;

  events: {};
}

export interface OneStepProverHostIo extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OneStepProverHostIoInterface;

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
    executeOneStep(
      execCtx: ExecutionContextStruct,
      startMach: MachineStruct,
      startMod: ModuleStruct,
      inst: InstructionStruct,
      proof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [MachineStructOutput, ModuleStructOutput] & {
        mach: MachineStructOutput;
        mod: ModuleStructOutput;
      }
    >;
  };

  executeOneStep(
    execCtx: ExecutionContextStruct,
    startMach: MachineStruct,
    startMod: ModuleStruct,
    inst: InstructionStruct,
    proof: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [MachineStructOutput, ModuleStructOutput] & {
      mach: MachineStructOutput;
      mod: ModuleStructOutput;
    }
  >;

  callStatic: {
    executeOneStep(
      execCtx: ExecutionContextStruct,
      startMach: MachineStruct,
      startMod: ModuleStruct,
      inst: InstructionStruct,
      proof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [MachineStructOutput, ModuleStructOutput] & {
        mach: MachineStructOutput;
        mod: ModuleStructOutput;
      }
    >;
  };

  filters: {};

  estimateGas: {
    executeOneStep(
      execCtx: ExecutionContextStruct,
      startMach: MachineStruct,
      startMod: ModuleStruct,
      inst: InstructionStruct,
      proof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeOneStep(
      execCtx: ExecutionContextStruct,
      startMach: MachineStruct,
      startMod: ModuleStruct,
      inst: InstructionStruct,
      proof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
