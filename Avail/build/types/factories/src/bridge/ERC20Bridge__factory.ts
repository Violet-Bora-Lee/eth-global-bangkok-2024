/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20Bridge,
  ERC20BridgeInterface,
} from "../../../src/bridge/ERC20Bridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stored",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "received",
        type: "uint256",
      },
    ],
    name: "BadSequencerMessageNumber",
    type: "error",
  },
  {
    inputs: [],
    name: "CallNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "CallTargetNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "outbox",
        type: "address",
      },
    ],
    name: "InvalidOutboxSet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "InvalidTokenSet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "NativeTokenDecimalsTooLarge",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "NotContract",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotDelayedInbox",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotOutbox",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "rollup",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NotRollupOrOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotSequencerInbox",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "outbox",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "BridgeCallTriggered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "inbox",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "InboxToggle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "messageIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "beforeInboxAcc",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inbox",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "kind",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "messageDataHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseFeeL1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "timestamp",
        type: "uint64",
      },
    ],
    name: "MessageDelivered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "outbox",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "OutboxToggle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "rollup",
        type: "address",
      },
    ],
    name: "RollupUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSequencerInbox",
        type: "address",
      },
    ],
    name: "SequencerInboxUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptFundsFromOldBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "activeOutbox",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "allowedDelayedInboxList",
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
        name: "inbox",
        type: "address",
      },
    ],
    name: "allowedDelayedInboxes",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allowedOutboxList",
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
        name: "outbox",
        type: "address",
      },
    ],
    name: "allowedOutboxes",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "delayedInboxAccs",
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
    name: "delayedMessageCount",
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
        internalType: "uint8",
        name: "kind",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "messageDataHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "tokenFeeAmount",
        type: "uint256",
      },
    ],
    name: "enqueueDelayedMessage",
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
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "afterDelayedMessagesRead",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prevMessageCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newMessageCount",
        type: "uint256",
      },
    ],
    name: "enqueueSequencerMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "seqMessageIndex",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "beforeAcc",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "delayedAcc",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "acc",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeCall",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOwnable",
        name: "rollup_",
        type: "address",
      },
      {
        internalType: "address",
        name: "nativeToken_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nativeToken",
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
    name: "nativeTokenDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rollup",
    outputs: [
      {
        internalType: "contract IOwnable",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "sequencerInboxAccs",
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
    name: "sequencerMessageCount",
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
    name: "sequencerReportedSubMessageCount",
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
        name: "inbox",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setDelayedInbox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "outbox",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setOutbox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sequencerInbox",
        type: "address",
      },
    ],
    name: "setSequencerInbox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMsgCount",
        type: "uint256",
      },
    ],
    name: "setSequencerReportedSubMessageCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "messageDataHash",
        type: "bytes32",
      },
    ],
    name: "submitBatchSpendingReport",
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
        internalType: "contract IOwnable",
        name: "_rollup",
        type: "address",
      },
    ],
    name: "updateRollupAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50608051611ec161003060003960006108840152611ec16000f3fe6080604052600436106101555760003560e01c80639e5d4c49116100c1578063d5719dc21161007a578063d5719dc2146103e9578063e1758bd814610409578063e76f5c8d14610429578063e77145f4146101ee578063eca067ad14610449578063ee35f3271461045e578063f81ff3b31461047e57600080fd5b80639e5d4c4914610313578063ab5d894314610341578063ad48cb5e14610356578063ae60bd1314610389578063cb23bcb5146103a9578063cee3d728146103c957600080fd5b80635fca4a16116101135780635fca4a161461023057806375d81e25146102465780637a88b1071461026657806386598a5614610286578063919cc706146102c6578063945e1147146102e657600080fd5b806284120c1461015a57806316bf55791461017e578063413b35bd1461019e57806347fb24c5146101ce578063485cc955146101f05780634f61f85014610210575b600080fd5b34801561016657600080fd5b506007545b6040519081526020015b60405180910390f35b34801561018a57600080fd5b5061016b610199366004611abf565b61049e565b3480156101aa57600080fd5b506101be6101b9366004611aed565b6104bf565b6040519015158152602001610175565b3480156101da57600080fd5b506101ee6101e9366004611b18565b6104e0565b005b3480156101fc57600080fd5b506101ee61020b366004611b51565b6107d5565b34801561021c57600080fd5b506101ee61022b366004611aed565b610a44565b34801561023c57600080fd5b5061016b600a5481565b34801561025257600080fd5b5061016b610261366004611b8e565b610b69565b34801561027257600080fd5b5061016b610281366004611bd4565b610b80565b34801561029257600080fd5b506102a66102a1366004611c00565b610bc6565b604080519485526020850193909352918301526060820152608001610175565b3480156102d257600080fd5b506101ee6102e1366004611aed565b610d2d565b3480156102f257600080fd5b50610306610301366004611abf565b610e47565b6040516101759190611c32565b34801561031f57600080fd5b5061033361032e366004611c46565b610e71565b604051610175929190611d27565b34801561034d57600080fd5b50610306610fa6565b34801561036257600080fd5b5060335461037790600160a01b900460ff1681565b60405160ff9091168152602001610175565b34801561039557600080fd5b506101be6103a4366004611aed565b610fcc565b3480156103b557600080fd5b50600854610306906001600160a01b031681565b3480156103d557600080fd5b506101ee6103e4366004611b18565b610fee565b3480156103f557600080fd5b5061016b610404366004611abf565b611307565b34801561041557600080fd5b50603354610306906001600160a01b031681565b34801561043557600080fd5b50610306610444366004611abf565b611317565b34801561045557600080fd5b5060065461016b565b34801561046a57600080fd5b50600954610306906001600160a01b031681565b34801561048a57600080fd5b506101ee610499366004611abf565b611327565b600781815481106104ae57600080fd5b600091825260209091200154905081565b6001600160a01b031660009081526002602052604090206001015460ff1690565b6008546001600160a01b031633146105b85760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561053757600080fd5b505afa15801561054b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056f9190611d42565b9050336001600160a01b038216146105b657600854604051630739600760e01b81526105ad9133916001600160a01b03909116908490600401611d5f565b60405180910390fd5b505b6001600160a01b0382166000818152600160208181526040928390209182015492518515158152919360ff90931692917f6675ce8882cb71637de5903a193d218cc0544be9c0650cb83e0955f6aa2bf521910160405180910390a282151581151514156106255750505050565b82156106b357604080518082018252600380548252600160208084018281526001600160a01b038a166000818152928490529582209451855551938201805460ff1916941515949094179093558154908101825591527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b03191690911790556107cf565b600380546106c390600190611d82565b815481106106d3576106d3611da7565b6000918252602090912001548254600380546001600160a01b0390931692909190811061070257610702611da7565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816000015460016000600385600001548154811061075057610750611da7565b60009182526020808320909101546001600160a01b03168352820192909252604001902055600380548061078657610786611dbd565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526001908190526040822091825501805460ff191690555b50505050565b600054610100900460ff166107f05760005460ff16156107f4565b303b155b6108575760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105ad565b600054610100900460ff16158015610879576000805461ffff19166101011790555b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156109075760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b60648201526084016105ad565b6001600160a01b038216610930578160405163036ffb6b60e11b81526004016105ad9190611c32565b603380546001600160a01b038085166001600160a01b031992831681179093556005805483168217905560088054918716919092161790556040805163313ce56760e01b8152905163313ce56791600480820192602092909190829003018186803b15801561099e57600080fd5b505afa9250505080156109ce575060408051601f3d908101601f191682019092526109cb91810190611dd3565b60015b6109e4576033805460ff60a01b19169055610a2d565b602460ff82161115610a0e5760405163070613b160e11b815260ff821660048201526024016105ad565b6033805460ff909216600160a01b0260ff60a01b199092169190911790555b8015610a3f576000805461ff00191690555b505050565b6008546001600160a01b03163314610b135760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610a9b57600080fd5b505afa158015610aaf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad39190611d42565b9050336001600160a01b03821614610b1157600854604051630739600760e01b81526105ad9133916001600160a01b03909116908490600401611d5f565b505b600980546001600160a01b0319166001600160a01b0383161790556040517f8c1e6003ed33ca6748d4ad3dd4ecc949065c89dceb31fdf546a5289202763c6a90610b5e908390611c32565b60405180910390a150565b6000610b77858585856113fb565b95945050505050565b6009546000906001600160a01b03163314610bb0573360405163223e13c160e21b81526004016105ad9190611c32565b610bbf600d8443424887611440565b9392505050565b6009546000908190819081906001600160a01b03163314610bfc573360405163223e13c160e21b81526004016105ad9190611c32565b85600a5414158015610c0d57508515155b8015610c1a5750600a5415155b15610c4657600a5460405163e2051feb60e01b81526004810191909152602481018790526044016105ad565b600a85905560075493508315610c845760078054610c6690600190611d82565b81548110610c7657610c76611da7565b906000526020600020015492505b8615610cb5576006610c97600189611d82565b81548110610ca757610ca7611da7565b906000526020600020015491505b60408051602081018590529081018990526060810183905260800160408051601f198184030181529190528051602090910120600780546001810182556000919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688018190559398929750909550919350915050565b6008546001600160a01b03163314610dfc5760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b158015610d8457600080fd5b505afa158015610d98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dbc9190611d42565b9050336001600160a01b03821614610dfa57600854604051630739600760e01b81526105ad9133916001600160a01b03909116908490600401611d5f565b505b600880546001600160a01b0319166001600160a01b0383161790556040517fae1f5aa15f6ff844896347ceca2a3c24c8d3a27785efdeacd581a0a95172784a90610b5e908390611c32565b60048181548110610e5757600080fd5b6000918252602090912001546001600160a01b0316905081565b60006060610e7e336104bf565b610e9d57336040516332ea82ab60e01b81526004016105ad9190611c32565b8215801590610eb457506001600160a01b0386163b155b15610ed4578560405163b5cf5b8f60e01b81526004016105ad9190611c32565b600580546001600160a01b031981163317909155604080516020601f87018190048102820181019092528581526001600160a01b0390921691610f35918991899189908990819084018382808284376000920191909152506115cf92505050565b600580546001600160a01b0319166001600160a01b038581169190911790915560405192955090935088169033907f2d9d115ef3e4a606d698913b1eae831a3cdfe20d9a83d48007b0526749c3d46690610f94908a908a908a90611df0565b60405180910390a35094509492505050565b6005546000906001600160a01b0390811690811415610fc757600091505090565b919050565b6001600160a01b03166000908152600160208190526040909120015460ff1690565b6008546001600160a01b031633146110bd5760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561104557600080fd5b505afa158015611059573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107d9190611d42565b9050336001600160a01b038216146110bb57600854604051630739600760e01b81526105ad9133916001600160a01b03909116908490600401611d5f565b505b6001600160a01b0382811614156110e9578160405163077abed160e41b81526004016105ad9190611c32565b6001600160a01b038216600081815260026020908152604091829020600181015492518515158152909360ff90931692917f49477e7356dbcb654ab85d7534b50126772d938130d1350e23e2540370c8dffa910160405180910390a282151581151514156111575750505050565b82156111e657604080518082018252600480548252600160208084018281526001600160a01b038a16600081815260029093529582209451855551938201805460ff1916941515949094179093558154908101825591527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b03191690911790556107cf565b600480546111f690600190611d82565b8154811061120657611206611da7565b6000918252602090912001548254600480546001600160a01b0390931692909190811061123557611235611da7565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816000015460026000600485600001548154811061128357611283611da7565b60009182526020808320909101546001600160a01b0316835282019290925260400190205560048054806112b9576112b9611dbd565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03861682526002905260408120908155600101805460ff1916905550505050565b600681815481106104ae57600080fd5b60038181548110610e5757600080fd5b6008546001600160a01b031633146113f65760085460408051638da5cb5b60e01b815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561137e57600080fd5b505afa158015611392573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b69190611d42565b9050336001600160a01b038216146113f457600854604051630739600760e01b81526105ad9133916001600160a01b03909116908490600401611d5f565b505b600a55565b600061140633610fcc565b611425573360405163b6c60ea360e01b81526004016105ad9190611c32565b6000611435868643428589611440565b9050610b77836117b6565b600654604080516001600160f81b031960f88a901b166020808301919091526bffffffffffffffffffffffff1960608a901b1660218301526001600160c01b031960c089811b8216603585015288901b16603d830152604582018490526065820186905260858083018690528351808403909101815260a5909201909252805191012060009190600082156114fa5760066114dc600185611d82565b815481106114ec576114ec611da7565b906000526020600020015490505b6040805160208082018490528183018590528251808303840181526060830180855281519190920120600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f015533905260ff8c1660808201526001600160a01b038b1660a082015260c0810187905260e0810188905267ffffffffffffffff89166101008201529051829185917f5e3c1311ea442664e8b1611bfabef659120ea7a0a2cfc0667700bebc69cbffe1918190036101200190a3509098975050505050505050565b6033546000906060906001600160a01b039081169086168114156116085780604051631c2d9a4160e31b81526004016105ad9190611c32565b61161c6001600160a01b03821687876117d1565b835160019350156117ad576040516370a0823160e01b81526000906001600160a01b038316906370a0823190611656903090600401611c32565b60206040518083038186803b15801561166e57600080fd5b505afa158015611682573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a69190611e26565b9050866001600160a01b0316856040516116c09190611e3f565b6000604051808303816000865af19150503d80600081146116fd576040519150601f19603f3d011682016040523d82523d6000602084013e611702565b606091505b506040516370a0823160e01b815291955093506000906001600160a01b038416906370a0823190611737903090600401611c32565b60206040518083038186803b15801561174f57600080fd5b505afa158015611763573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117879190611e26565b9050818110156117aa576040516315dace2d60e21b815260040160405180910390fd5b50505b50935093915050565b6033546117ce906001600160a01b0316333084611834565b50565b6040516001600160a01b038316602482015260448101829052610a3f90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261186c565b6040516001600160a01b03808516602483015283166044820152606481018290526107cf9085906323b872dd60e01b906084016117fd565b60006118c1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661193e9092919063ffffffff16565b805190915015610a3f57808060200190518101906118df9190611e5b565b610a3f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016105ad565b606061194d8484600085611955565b949350505050565b6060824710156119b65760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016105ad565b6001600160a01b0385163b611a0d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105ad565b600080866001600160a01b03168587604051611a299190611e3f565b60006040518083038185875af1925050503d8060008114611a66576040519150601f19603f3d011682016040523d82523d6000602084013e611a6b565b606091505b5091509150611a7b828286611a86565b979650505050505050565b60608315611a95575081610bbf565b825115611aa55782518084602001fd5b8160405162461bcd60e51b81526004016105ad9190611e78565b600060208284031215611ad157600080fd5b5035919050565b6001600160a01b03811681146117ce57600080fd5b600060208284031215611aff57600080fd5b8135610bbf81611ad8565b80151581146117ce57600080fd5b60008060408385031215611b2b57600080fd5b8235611b3681611ad8565b91506020830135611b4681611b0a565b809150509250929050565b60008060408385031215611b6457600080fd5b8235611b6f81611ad8565b91506020830135611b4681611ad8565b60ff811681146117ce57600080fd5b60008060008060808587031215611ba457600080fd5b8435611baf81611b7f565b93506020850135611bbf81611ad8565b93969395505050506040820135916060013590565b60008060408385031215611be757600080fd5b8235611bf281611ad8565b946020939093013593505050565b60008060008060808587031215611c1657600080fd5b5050823594602084013594506040840135936060013592509050565b6001600160a01b0391909116815260200190565b60008060008060608587031215611c5c57600080fd5b8435611c6781611ad8565b935060208501359250604085013567ffffffffffffffff80821115611c8b57600080fd5b818701915087601f830112611c9f57600080fd5b813581811115611cae57600080fd5b886020828501011115611cc057600080fd5b95989497505060200194505050565b60005b83811015611cea578181015183820152602001611cd2565b838111156107cf5750506000910152565b60008151808452611d13816020860160208601611ccf565b601f01601f19169290920160200192915050565b821515815260406020820152600061194d6040830184611cfb565b600060208284031215611d5457600080fd5b8151610bbf81611ad8565b6001600160a01b0393841681529183166020830152909116604082015260600190565b600082821015611da257634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b600060208284031215611de557600080fd5b8151610bbf81611b7f565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b600060208284031215611e3857600080fd5b5051919050565b60008251611e51818460208701611ccf565b9190910192915050565b600060208284031215611e6d57600080fd5b8151610bbf81611b0a565b602081526000610bbf6020830184611cfb56fea264697066735822122091963107a777c0d32ffa65597bdd85339d9270ef6f424e94ea7874e8bb13e6f464736f6c63430008090033";

type ERC20BridgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20BridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Bridge__factory extends ContractFactory {
  constructor(...args: ERC20BridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Bridge> {
    return super.deploy(overrides || {}) as Promise<ERC20Bridge>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Bridge {
    return super.attach(address) as ERC20Bridge;
  }
  override connect(signer: Signer): ERC20Bridge__factory {
    return super.connect(signer) as ERC20Bridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20BridgeInterface {
    return new utils.Interface(_abi) as ERC20BridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Bridge {
    return new Contract(address, _abi, signerOrProvider) as ERC20Bridge;
  }
}
