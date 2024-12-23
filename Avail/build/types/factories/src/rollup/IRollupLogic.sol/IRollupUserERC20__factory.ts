/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRollupUserERC20,
  IRollupUserERC20Interface,
} from "../../../../src/rollup/IRollupLogic.sol/IRollupUserERC20";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "sendRoot",
        type: "bytes32",
      },
    ],
    name: "NodeConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "parentNodeHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "nodeHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "executionHash",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes32[2]",
                    name: "bytes32Vals",
                    type: "bytes32[2]",
                  },
                  {
                    internalType: "uint64[2]",
                    name: "u64Vals",
                    type: "uint64[2]",
                  },
                ],
                internalType: "struct GlobalState",
                name: "globalState",
                type: "tuple",
              },
              {
                internalType: "enum MachineStatus",
                name: "machineStatus",
                type: "uint8",
              },
            ],
            internalType: "struct ExecutionState",
            name: "beforeState",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes32[2]",
                    name: "bytes32Vals",
                    type: "bytes32[2]",
                  },
                  {
                    internalType: "uint64[2]",
                    name: "u64Vals",
                    type: "uint64[2]",
                  },
                ],
                internalType: "struct GlobalState",
                name: "globalState",
                type: "tuple",
              },
              {
                internalType: "enum MachineStatus",
                name: "machineStatus",
                type: "uint8",
              },
            ],
            internalType: "struct ExecutionState",
            name: "afterState",
            type: "tuple",
          },
          {
            internalType: "uint64",
            name: "numBlocks",
            type: "uint64",
          },
        ],
        indexed: false,
        internalType: "struct Assertion",
        name: "assertion",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "afterInboxBatchAcc",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "wasmModuleRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "inboxMaxCount",
        type: "uint256",
      },
    ],
    name: "NodeCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
    ],
    name: "NodeRejected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "challengeIndex",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asserter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "challenger",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "challengedNode",
        type: "uint64",
      },
    ],
    name: "RollupChallengeStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "machineHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "RollupInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "finalBalance",
        type: "uint256",
      },
    ],
    name: "UserStakeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "finalBalance",
        type: "uint256",
      },
    ],
    name: "UserWithdrawableFundsUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "stakerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "addToDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "amountStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bridge",
    outputs: [
      {
        internalType: "contract IBridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "challengeManager",
    outputs: [
      {
        internalType: "contract IChallengeManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sendRoot",
        type: "bytes32",
      },
    ],
    name: "confirmNextNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "confirmPeriodBlocks",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
    ],
    name: "countStakedZombies",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
    ],
    name: "countZombiesStakedOnChildren",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[2]",
        name: "stakers",
        type: "address[2]",
      },
      {
        internalType: "uint64[2]",
        name: "nodeNums",
        type: "uint64[2]",
      },
      {
        internalType: "enum MachineStatus[2]",
        name: "machineStatuses",
        type: "uint8[2]",
      },
      {
        components: [
          {
            internalType: "bytes32[2]",
            name: "bytes32Vals",
            type: "bytes32[2]",
          },
          {
            internalType: "uint64[2]",
            name: "u64Vals",
            type: "uint64[2]",
          },
        ],
        internalType: "struct GlobalState[2]",
        name: "globalStates",
        type: "tuple[2]",
      },
      {
        internalType: "uint64",
        name: "numBlocks",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "secondExecutionHash",
        type: "bytes32",
      },
      {
        internalType: "uint256[2]",
        name: "proposedTimes",
        type: "uint256[2]",
      },
      {
        internalType: "bytes32[2]",
        name: "wasmModuleRoots",
        type: "bytes32[2]",
      },
    ],
    name: "createChallenge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "currentChallenge",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRequiredStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "extraChallengeTimeBlocks",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sendRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "nodeHash",
        type: "bytes32",
      },
    ],
    name: "fastConfirmNextNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "firstUnresolvedNode",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
    ],
    name: "getNode",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "stateHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "challengeHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "confirmData",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "prevNum",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "deadlineBlock",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "noChildConfirmedBeforeBlock",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "stakerCount",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "childStakerCount",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "firstChildBlock",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "latestChildNumber",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "createdAtBlock",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "nodeHash",
            type: "bytes32",
          },
        ],
        internalType: "struct Node",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
    ],
    name: "getNodeCreationBlockForLogLookup",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getStaker",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amountStaked",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "latestStakedNode",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "currentChallenge",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "isStaked",
            type: "bool",
          },
        ],
        internalType: "struct IRollupCore.Staker",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "stakerNum",
        type: "uint64",
      },
    ],
    name: "getStakerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "stakeToken",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isERC20Enabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "isStaked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isValidator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "isZombie",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastStakeBlock",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestConfirmed",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestNodeCreated",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "latestStakedNode",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "loserStakeEscrow",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumAssertionPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "nodeHash",
        type: "bytes32",
      },
    ],
    name: "newStakeOnExistingNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes32[2]",
                    name: "bytes32Vals",
                    type: "bytes32[2]",
                  },
                  {
                    internalType: "uint64[2]",
                    name: "u64Vals",
                    type: "uint64[2]",
                  },
                ],
                internalType: "struct GlobalState",
                name: "globalState",
                type: "tuple",
              },
              {
                internalType: "enum MachineStatus",
                name: "machineStatus",
                type: "uint8",
              },
            ],
            internalType: "struct ExecutionState",
            name: "beforeState",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes32[2]",
                    name: "bytes32Vals",
                    type: "bytes32[2]",
                  },
                  {
                    internalType: "uint64[2]",
                    name: "u64Vals",
                    type: "uint64[2]",
                  },
                ],
                internalType: "struct GlobalState",
                name: "globalState",
                type: "tuple",
              },
              {
                internalType: "enum MachineStatus",
                name: "machineStatus",
                type: "uint8",
              },
            ],
            internalType: "struct ExecutionState",
            name: "afterState",
            type: "tuple",
          },
          {
            internalType: "uint64",
            name: "numBlocks",
            type: "uint64",
          },
        ],
        internalType: "struct Assertion",
        name: "assertion",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "expectedNodeHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "prevNodeInboxMaxCount",
        type: "uint256",
      },
    ],
    name: "newStakeOnNewNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "nodeHasStaker",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "outbox",
    outputs: [
      {
        internalType: "contract IOutbox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "target",
        type: "uint256",
      },
    ],
    name: "reduceDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "stakerAddress",
        type: "address",
      },
    ],
    name: "rejectNextNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
    ],
    name: "removeOldZombies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeWhitelistAfterFork",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeWhitelistAfterValidatorAfk",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "zombieNum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxNodes",
        type: "uint256",
      },
    ],
    name: "removeZombie",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nodeNum",
        type: "uint256",
      },
    ],
    name: "requireUnresolved",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "requireUnresolvedExists",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "firstUnresolvedNodeNum",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "latestCreatedNode",
        type: "uint64",
      },
    ],
    name: "requiredStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "stakerAddress",
        type: "address",
      },
    ],
    name: "returnOldDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rollupEventInbox",
    outputs: [
      {
        internalType: "contract IRollupEventInbox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sequencerInbox",
    outputs: [
      {
        internalType: "contract ISequencerInbox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "nodeNum",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "nodeHash",
        type: "bytes32",
      },
    ],
    name: "stakeOnExistingNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes32[2]",
                    name: "bytes32Vals",
                    type: "bytes32[2]",
                  },
                  {
                    internalType: "uint64[2]",
                    name: "u64Vals",
                    type: "uint64[2]",
                  },
                ],
                internalType: "struct GlobalState",
                name: "globalState",
                type: "tuple",
              },
              {
                internalType: "enum MachineStatus",
                name: "machineStatus",
                type: "uint8",
              },
            ],
            internalType: "struct ExecutionState",
            name: "beforeState",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "bytes32[2]",
                    name: "bytes32Vals",
                    type: "bytes32[2]",
                  },
                  {
                    internalType: "uint64[2]",
                    name: "u64Vals",
                    type: "uint64[2]",
                  },
                ],
                internalType: "struct GlobalState",
                name: "globalState",
                type: "tuple",
              },
              {
                internalType: "enum MachineStatus",
                name: "machineStatus",
                type: "uint8",
              },
            ],
            internalType: "struct ExecutionState",
            name: "afterState",
            type: "tuple",
          },
          {
            internalType: "uint64",
            name: "numBlocks",
            type: "uint64",
          },
        ],
        internalType: "struct Assertion",
        name: "assertion",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "expectedNodeHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "prevNodeInboxMaxCount",
        type: "uint256",
      },
    ],
    name: "stakeOnNewNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakerCount",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "validatorWhitelistDisabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wasmModuleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawStakerFunds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "withdrawableFunds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "zombieNum",
        type: "uint256",
      },
    ],
    name: "zombieAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zombieCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "zombieNum",
        type: "uint256",
      },
    ],
    name: "zombieLatestStakedNode",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IRollupUserERC20__factory {
  static readonly abi = _abi;
  static createInterface(): IRollupUserERC20Interface {
    return new utils.Interface(_abi) as IRollupUserERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRollupUserERC20 {
    return new Contract(address, _abi, signerOrProvider) as IRollupUserERC20;
  }
}
