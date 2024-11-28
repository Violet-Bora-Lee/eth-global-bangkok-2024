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

export type GlobalStateStruct = {
  bytes32Vals: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>];
  u64Vals: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
};

export type GlobalStateStructOutput = [
  [string, string],
  [BigNumber, BigNumber]
] & { bytes32Vals: [string, string]; u64Vals: [BigNumber, BigNumber] };

export declare namespace ChallengeLib {
  export type ParticipantStruct = {
    addr: PromiseOrValue<string>;
    timeLeft: PromiseOrValue<BigNumberish>;
  };

  export type ParticipantStructOutput = [string, BigNumber] & {
    addr: string;
    timeLeft: BigNumber;
  };

  export type ChallengeStruct = {
    current: ChallengeLib.ParticipantStruct;
    next: ChallengeLib.ParticipantStruct;
    lastMoveTimestamp: PromiseOrValue<BigNumberish>;
    wasmModuleRoot: PromiseOrValue<BytesLike>;
    challengeStateHash: PromiseOrValue<BytesLike>;
    maxInboxMessages: PromiseOrValue<BigNumberish>;
    mode: PromiseOrValue<BigNumberish>;
  };

  export type ChallengeStructOutput = [
    ChallengeLib.ParticipantStructOutput,
    ChallengeLib.ParticipantStructOutput,
    BigNumber,
    string,
    string,
    BigNumber,
    number
  ] & {
    current: ChallengeLib.ParticipantStructOutput;
    next: ChallengeLib.ParticipantStructOutput;
    lastMoveTimestamp: BigNumber;
    wasmModuleRoot: string;
    challengeStateHash: string;
    maxInboxMessages: BigNumber;
    mode: number;
  };
}

export interface IChallengeManagerInterface extends utils.Interface {
  functions: {
    "challengeInfo(uint64)": FunctionFragment;
    "clearChallenge(uint64)": FunctionFragment;
    "createChallenge(bytes32,uint8[2],(bytes32[2],uint64[2])[2],uint64,address,address,uint256,uint256)": FunctionFragment;
    "currentResponder(uint64)": FunctionFragment;
    "getOsp(bytes32)": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "isTimedOut(uint64)": FunctionFragment;
    "osp()": FunctionFragment;
    "postUpgradeInit(address,bytes32,address)": FunctionFragment;
    "timeout(uint64)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "challengeInfo"
      | "clearChallenge"
      | "createChallenge"
      | "currentResponder"
      | "getOsp"
      | "initialize"
      | "isTimedOut"
      | "osp"
      | "postUpgradeInit"
      | "timeout"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "challengeInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "clearChallenge",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createChallenge",
    values: [
      PromiseOrValue<BytesLike>,
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [GlobalStateStruct, GlobalStateStruct],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "currentResponder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOsp",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isTimedOut",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "osp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "postUpgradeInit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "timeout",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "challengeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "clearChallenge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createChallenge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentResponder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOsp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isTimedOut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "osp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "postUpgradeInit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timeout", data: BytesLike): Result;

  events: {
    "Bisected(uint64,bytes32,uint256,uint256,bytes32[])": EventFragment;
    "ChallengeEnded(uint64,uint8)": EventFragment;
    "ExecutionChallengeBegun(uint64,uint256)": EventFragment;
    "InitiatedChallenge(uint64,tuple,tuple)": EventFragment;
    "OneStepProofCompleted(uint64)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bisected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChallengeEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionChallengeBegun"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitiatedChallenge"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OneStepProofCompleted"): EventFragment;
}

export interface BisectedEventObject {
  challengeIndex: BigNumber;
  challengeRoot: string;
  challengedSegmentStart: BigNumber;
  challengedSegmentLength: BigNumber;
  chainHashes: string[];
}
export type BisectedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string[]],
  BisectedEventObject
>;

export type BisectedEventFilter = TypedEventFilter<BisectedEvent>;

export interface ChallengeEndedEventObject {
  challengeIndex: BigNumber;
  kind: number;
}
export type ChallengeEndedEvent = TypedEvent<
  [BigNumber, number],
  ChallengeEndedEventObject
>;

export type ChallengeEndedEventFilter = TypedEventFilter<ChallengeEndedEvent>;

export interface ExecutionChallengeBegunEventObject {
  challengeIndex: BigNumber;
  blockSteps: BigNumber;
}
export type ExecutionChallengeBegunEvent = TypedEvent<
  [BigNumber, BigNumber],
  ExecutionChallengeBegunEventObject
>;

export type ExecutionChallengeBegunEventFilter =
  TypedEventFilter<ExecutionChallengeBegunEvent>;

export interface InitiatedChallengeEventObject {
  challengeIndex: BigNumber;
  startState: GlobalStateStructOutput;
  endState: GlobalStateStructOutput;
}
export type InitiatedChallengeEvent = TypedEvent<
  [BigNumber, GlobalStateStructOutput, GlobalStateStructOutput],
  InitiatedChallengeEventObject
>;

export type InitiatedChallengeEventFilter =
  TypedEventFilter<InitiatedChallengeEvent>;

export interface OneStepProofCompletedEventObject {
  challengeIndex: BigNumber;
}
export type OneStepProofCompletedEvent = TypedEvent<
  [BigNumber],
  OneStepProofCompletedEventObject
>;

export type OneStepProofCompletedEventFilter =
  TypedEventFilter<OneStepProofCompletedEvent>;

export interface IChallengeManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IChallengeManagerInterface;

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
    challengeInfo(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ChallengeLib.ChallengeStructOutput]>;

    clearChallenge(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createChallenge(
      wasmModuleRoot_: PromiseOrValue<BytesLike>,
      startAndEndMachineStatuses_: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct],
      numBlocks: PromiseOrValue<BigNumberish>,
      asserter_: PromiseOrValue<string>,
      challenger_: PromiseOrValue<string>,
      asserterTimeLeft_: PromiseOrValue<BigNumberish>,
      challengerTimeLeft_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentResponder(
      challengeIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getOsp(
      wasmModuleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      resultReceiver_: PromiseOrValue<string>,
      sequencerInbox_: PromiseOrValue<string>,
      bridge_: PromiseOrValue<string>,
      osp_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isTimedOut(
      challengeIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    osp(overrides?: CallOverrides): Promise<[string]>;

    postUpgradeInit(
      osp_: PromiseOrValue<string>,
      condRoot: PromiseOrValue<BytesLike>,
      condOsp: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    timeout(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  challengeInfo(
    challengeIndex_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ChallengeLib.ChallengeStructOutput>;

  clearChallenge(
    challengeIndex_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createChallenge(
    wasmModuleRoot_: PromiseOrValue<BytesLike>,
    startAndEndMachineStatuses_: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ],
    startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct],
    numBlocks: PromiseOrValue<BigNumberish>,
    asserter_: PromiseOrValue<string>,
    challenger_: PromiseOrValue<string>,
    asserterTimeLeft_: PromiseOrValue<BigNumberish>,
    challengerTimeLeft_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentResponder(
    challengeIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getOsp(
    wasmModuleRoot: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    resultReceiver_: PromiseOrValue<string>,
    sequencerInbox_: PromiseOrValue<string>,
    bridge_: PromiseOrValue<string>,
    osp_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isTimedOut(
    challengeIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  osp(overrides?: CallOverrides): Promise<string>;

  postUpgradeInit(
    osp_: PromiseOrValue<string>,
    condRoot: PromiseOrValue<BytesLike>,
    condOsp: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  timeout(
    challengeIndex_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    challengeInfo(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ChallengeLib.ChallengeStructOutput>;

    clearChallenge(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createChallenge(
      wasmModuleRoot_: PromiseOrValue<BytesLike>,
      startAndEndMachineStatuses_: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct],
      numBlocks: PromiseOrValue<BigNumberish>,
      asserter_: PromiseOrValue<string>,
      challenger_: PromiseOrValue<string>,
      asserterTimeLeft_: PromiseOrValue<BigNumberish>,
      challengerTimeLeft_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentResponder(
      challengeIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getOsp(
      wasmModuleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      resultReceiver_: PromiseOrValue<string>,
      sequencerInbox_: PromiseOrValue<string>,
      bridge_: PromiseOrValue<string>,
      osp_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isTimedOut(
      challengeIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    osp(overrides?: CallOverrides): Promise<string>;

    postUpgradeInit(
      osp_: PromiseOrValue<string>,
      condRoot: PromiseOrValue<BytesLike>,
      condOsp: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    timeout(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Bisected(uint64,bytes32,uint256,uint256,bytes32[])"(
      challengeIndex?: PromiseOrValue<BigNumberish> | null,
      challengeRoot?: PromiseOrValue<BytesLike> | null,
      challengedSegmentStart?: null,
      challengedSegmentLength?: null,
      chainHashes?: null
    ): BisectedEventFilter;
    Bisected(
      challengeIndex?: PromiseOrValue<BigNumberish> | null,
      challengeRoot?: PromiseOrValue<BytesLike> | null,
      challengedSegmentStart?: null,
      challengedSegmentLength?: null,
      chainHashes?: null
    ): BisectedEventFilter;

    "ChallengeEnded(uint64,uint8)"(
      challengeIndex?: PromiseOrValue<BigNumberish> | null,
      kind?: null
    ): ChallengeEndedEventFilter;
    ChallengeEnded(
      challengeIndex?: PromiseOrValue<BigNumberish> | null,
      kind?: null
    ): ChallengeEndedEventFilter;

    "ExecutionChallengeBegun(uint64,uint256)"(
      challengeIndex?: PromiseOrValue<BigNumberish> | null,
      blockSteps?: null
    ): ExecutionChallengeBegunEventFilter;
    ExecutionChallengeBegun(
      challengeIndex?: PromiseOrValue<BigNumberish> | null,
      blockSteps?: null
    ): ExecutionChallengeBegunEventFilter;

    "InitiatedChallenge(uint64,tuple,tuple)"(
      challengeIndex?: PromiseOrValue<BigNumberish> | null,
      startState?: null,
      endState?: null
    ): InitiatedChallengeEventFilter;
    InitiatedChallenge(
      challengeIndex?: PromiseOrValue<BigNumberish> | null,
      startState?: null,
      endState?: null
    ): InitiatedChallengeEventFilter;

    "OneStepProofCompleted(uint64)"(
      challengeIndex?: PromiseOrValue<BigNumberish> | null
    ): OneStepProofCompletedEventFilter;
    OneStepProofCompleted(
      challengeIndex?: PromiseOrValue<BigNumberish> | null
    ): OneStepProofCompletedEventFilter;
  };

  estimateGas: {
    challengeInfo(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    clearChallenge(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createChallenge(
      wasmModuleRoot_: PromiseOrValue<BytesLike>,
      startAndEndMachineStatuses_: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct],
      numBlocks: PromiseOrValue<BigNumberish>,
      asserter_: PromiseOrValue<string>,
      challenger_: PromiseOrValue<string>,
      asserterTimeLeft_: PromiseOrValue<BigNumberish>,
      challengerTimeLeft_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentResponder(
      challengeIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOsp(
      wasmModuleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      resultReceiver_: PromiseOrValue<string>,
      sequencerInbox_: PromiseOrValue<string>,
      bridge_: PromiseOrValue<string>,
      osp_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isTimedOut(
      challengeIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    osp(overrides?: CallOverrides): Promise<BigNumber>;

    postUpgradeInit(
      osp_: PromiseOrValue<string>,
      condRoot: PromiseOrValue<BytesLike>,
      condOsp: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    timeout(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    challengeInfo(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    clearChallenge(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createChallenge(
      wasmModuleRoot_: PromiseOrValue<BytesLike>,
      startAndEndMachineStatuses_: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct],
      numBlocks: PromiseOrValue<BigNumberish>,
      asserter_: PromiseOrValue<string>,
      challenger_: PromiseOrValue<string>,
      asserterTimeLeft_: PromiseOrValue<BigNumberish>,
      challengerTimeLeft_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentResponder(
      challengeIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOsp(
      wasmModuleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      resultReceiver_: PromiseOrValue<string>,
      sequencerInbox_: PromiseOrValue<string>,
      bridge_: PromiseOrValue<string>,
      osp_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isTimedOut(
      challengeIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    osp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    postUpgradeInit(
      osp_: PromiseOrValue<string>,
      condRoot: PromiseOrValue<BytesLike>,
      condOsp: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    timeout(
      challengeIndex_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}