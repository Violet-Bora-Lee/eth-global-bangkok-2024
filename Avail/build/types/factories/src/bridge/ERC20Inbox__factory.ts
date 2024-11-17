/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20Inbox,
  ERC20InboxInterface,
} from "../../../src/bridge/ERC20Inbox";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxDataSize",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountTooLarge",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dataLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxDataLength",
        type: "uint256",
      },
    ],
    name: "DataTooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "GasLimitTooLarge",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
    ],
    name: "InsufficientSubmissionCost",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
    ],
    name: "InsufficientValue",
    type: "error",
  },
  {
    inputs: [],
    name: "L1Forked",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "origin",
        type: "address",
      },
    ],
    name: "NotAllowedOrigin",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOrigin",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "l2CallValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "excessFeeRefundAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "callValueRefundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "RetryableData",
    type: "error",
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
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "AllowListAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isEnabled",
        type: "bool",
      },
    ],
    name: "AllowListEnabledUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "messageNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "InboxMessageDelivered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "messageNum",
        type: "uint256",
      },
    ],
    name: "InboxMessageDeliveredFromOrigin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "allowListEnabled",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "calculateRetryableSubmissionFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
        name: "l2CallValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "excessFeeRefundAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "callValueRefundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenTotalFeeAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "createRetryableTicket",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositERC20",
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
    inputs: [],
    name: "getProxyAdmin",
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
        internalType: "contract IBridge",
        name: "_bridge",
        type: "address",
      },
      {
        internalType: "contract ISequencerInbox",
        name: "_sequencerInbox",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "isAllowed",
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
    name: "maxDataSize",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
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
    name: "sendContractTransaction",
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
        internalType: "bytes",
        name: "messageData",
        type: "bytes",
      },
    ],
    name: "sendL2Message",
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
        internalType: "bytes",
        name: "messageData",
        type: "bytes",
      },
    ],
    name: "sendL2MessageFromOrigin",
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
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
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
    name: "sendUnsignedTransaction",
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
        internalType: "address[]",
        name: "user",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "val",
        type: "bool[]",
      },
    ],
    name: "setAllowList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_allowListEnabled",
        type: "bool",
      },
    ],
    name: "setAllowListEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
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
        name: "l2CallValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "excessFeeRefundAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "callValueRefundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenTotalFeeAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "unsafeCreateRetryableTicket",
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
] as const;

const _bytecode =
  "0x60e0604052306080524660c05234801561001857600080fd5b506040516200276f3803806200276f83398101604081905261003991610041565b60a05261005a565b60006020828403121561005357600080fd5b5051919050565b60805160a05160c0516126c2620000ad600039600081816103820152610be50152600081816102ba015281816103e10152818161041d0152818161169001526116d00152600061069a01526126c26000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063a66b327d116100ad578063e3de72a511610071578063e3de72a51461028f578063e78cea92146102a2578063e8eb1dc3146102b5578063ee35f327146102dc578063efeadb6d146102ef57600080fd5b8063a66b327d1461021d578063b75436bb14610233578063b79092fd14610246578063b9b9a68814610259578063babcc5391461026c57600080fd5b8063549e8426116100f4578063549e8426146101ab5780635c975abb146101be5780638456cb59146101c95780638a631aa6146101d15780638b3240a0146101e457600080fd5b80631fe927cf1461013157806322bd5c1c146101575780633f4ba83a1461017b578063485cc955146101855780635075788b14610198575b600080fd5b61014461013f366004611d51565b610302565b6040519081526020015b60405180910390f35b60665461016b90600160a01b900460ff1681565b604051901515815260200161014e565b6101836104a7565b005b610183610193366004611da7565b6105e7565b6101446101a6366004611de0565b6107db565b6101446101b9366004611e5c565b6108c8565b60335460ff1661016b565b61018361095d565b6101446101df366004611f0b565b610a9a565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103546001600160a01b03165b60405161014e9190611f7d565b61014461022b366004611f91565b600092915050565b610144610241366004611d51565b610b6e565b610144610254366004611fb3565b610c6b565b610144610267366004611e5c565b610d61565b61016b61027a366004611fcc565b60676020526000908152604090205460ff1681565b61018361029d3660046120d4565b610de7565b606554610210906001600160a01b031681565b6101447f000000000000000000000000000000000000000000000000000000000000000081565b606654610210906001600160a01b031681565b6101836102fd366004612195565b611067565b600061031060335460ff1690565b156103365760405162461bcd60e51b815260040161032d906121b2565b60405180910390fd5b606654600160a01b900460ff16801561035f57503260009081526067602052604090205460ff16155b1561037f5732604051630f51ed7160e41b815260040161032d9190611f7d565b467f0000000000000000000000000000000000000000000000000000000000000000146103bf5760405163c6ea680360e01b815260040160405180910390fd5b3332146103df5760405163feb3d07160e01b815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000082111561044957604051634634691b60e01b8152600481018390527f0000000000000000000000000000000000000000000000000000000000000000602482015260440161032d565b600061047060033386866040516104619291906121dc565b60405180910390206000611246565b60405190915081907fab532385be8f1005a4b6ba8fa20a2245facb346134ac739fe9a5198dc1580b9c90600090a290505b92915050565b6065546040805163cb23bcb560e01b815290516000926001600160a01b03169163cb23bcb5916004808301926020929190829003018186803b1580156104ec57600080fd5b505afa158015610500573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052491906121ec565b9050336001600160a01b038216146105dc576000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561057157600080fd5b505afa158015610585573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a991906121ec565b9050336001600160a01b038216146105da57338282604051630739600760e01b815260040161032d93929190612209565b505b6105e461142b565b50565b600054610100900460ff166106025760005460ff161561060a565b61060a6114b8565b61066d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161032d565b600054610100900460ff1615801561068f576000805461ffff19166101011790555b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561071d5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b606482015260840161032d565b61072783836114c9565b60655460408051631c2eb17b60e31b815290516000926001600160a01b03169163e1758bd8916004808301926020929190829003018186803b15801561076c57600080fd5b505afa158015610780573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a491906121ec565b6065549091506107c3906001600160a01b038084169116600019611535565b5080156107d6576000805461ff00191690555b505050565b60006107e960335460ff1690565b156108065760405162461bcd60e51b815260040161032d906121b2565b606654600160a01b900460ff16801561082f57503260009081526067602052604090205460ff16155b1561084f5732604051630f51ed7160e41b815260040161032d9190611f7d565b6001600160401b038811156108775760405163107c527b60e01b815260040160405180910390fd5b6108bc60033360008b8b8b8b6001600160a01b03168b8b8b6040516020016108a698979695949392919061222c565b604051602081830303815290604052600061168c565b98975050505050505050565b60006108d660335460ff1690565b156108f35760405162461bcd60e51b815260040161032d906121b2565b606654600160a01b900460ff16801561091c57503260009081526067602052604090205460ff16155b1561093c5732604051630f51ed7160e41b815260040161032d9190611f7d565b61094e8b8b8b8b8b8b8b8b8b8b611754565b9b9a5050505050505050505050565b6065546040805163cb23bcb560e01b815290516000926001600160a01b03169163cb23bcb5916004808301926020929190829003018186803b1580156109a257600080fd5b505afa1580156109b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109da91906121ec565b9050336001600160a01b03821614610a92576000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a2757600080fd5b505afa158015610a3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5f91906121ec565b9050336001600160a01b03821614610a9057338282604051630739600760e01b815260040161032d93929190612209565b505b6105e4611825565b6000610aa860335460ff1690565b15610ac55760405162461bcd60e51b815260040161032d906121b2565b606654600160a01b900460ff168015610aee57503260009081526067602052604090205460ff16155b15610b0e5732604051630f51ed7160e41b815260040161032d9190611f7d565b6001600160401b03871115610b365760405163107c527b60e01b815260040160405180910390fd5b610b6360033360018a8a8a6001600160a01b03168a8a8a6040516020016108a69796959493929190612272565b979650505050505050565b6000610b7c60335460ff1690565b15610b995760405162461bcd60e51b815260040161032d906121b2565b606654600160a01b900460ff168015610bc257503260009081526067602052604090205460ff16155b15610be25732604051630f51ed7160e41b815260040161032d9190611f7d565b467f000000000000000000000000000000000000000000000000000000000000000014610c225760405163c6ea680360e01b815260040160405180910390fd5b610c6460033385858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250925061168c915050565b9392505050565b6000610c7960335460ff1690565b15610c965760405162461bcd60e51b815260040161032d906121b2565b606654600160a01b900460ff168015610cbf57503260009081526067602052604090205460ff16155b15610cdf5732604051630f51ed7160e41b815260040161032d9190611f7d565b33610ce98161187d565b80610cf45750323314155b15610d0757503361111161111160901b01015b6000610d128461188c565b6040516bffffffffffffffffffffffff19606085901b16602082015260348101829052909150610d5990600c9033906054016040516020818303038152906040528761168c565b949350505050565b6000610d6f60335460ff1690565b15610d8c5760405162461bcd60e51b815260040161032d906121b2565b606654600160a01b900460ff168015610db557503260009081526067602052604090205460ff16155b15610dd55732604051630f51ed7160e41b815260040161032d9190611f7d565b61094e8b8b8b8b8b8b8b8b8b8b61195a565b6065546040805163cb23bcb560e01b815290516000926001600160a01b03169163cb23bcb5916004808301926020929190829003018186803b158015610e2c57600080fd5b505afa158015610e40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6491906121ec565b9050336001600160a01b03821614610f1c576000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610eb157600080fd5b505afa158015610ec5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee991906121ec565b9050336001600160a01b03821614610f1a57338282604051630739600760e01b815260040161032d93929190612209565b505b8151835114610f5d5760405162461bcd60e51b815260206004820152600d60248201526c1253959053125117d253941555609a1b604482015260640161032d565b60005b835181101561106157828181518110610f7b57610f7b6122b1565b602002602001015160676000868481518110610f9957610f996122b1565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff021916908315150217905550838181518110610fea57610fea6122b1565b60200260200101516001600160a01b03167fd9739f45a01ce092c5cdb3d68f63d63d21676b1c6c0b4f9cbc6be4cf5449595a84838151811061102e5761102e6122b1565b6020026020010151604051611047911515815260200190565b60405180910390a280611059816122dd565b915050610f60565b50505050565b6065546040805163cb23bcb560e01b815290516000926001600160a01b03169163cb23bcb5916004808301926020929190829003018186803b1580156110ac57600080fd5b505afa1580156110c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e491906121ec565b9050336001600160a01b0382161461119c576000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561113157600080fd5b505afa158015611145573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116991906121ec565b9050336001600160a01b0382161461119a57338282604051630739600760e01b815260040161032d93929190612209565b505b606660149054906101000a900460ff16151582151514156111ed5760405162461bcd60e51b815260206004820152600b60248201526a1053149150511657d4d15560aa1b604482015260640161032d565b60668054831515600160a01b0260ff60a01b199091161790556040517f16435b45f7482047f839a6a19d291442627200f52cad2803c595150d0d440eb39061123a90841515815260200190565b60405180910390a15050565b600080606560009054906101000a90046001600160a01b03166001600160a01b031663e1758bd86040518163ffffffff1660e01b815260040160206040518083038186803b15801561129757600080fd5b505afa1580156112ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cf91906121ec565b90506000816001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016112ff9190611f7d565b60206040518083038186803b15801561131757600080fd5b505afa15801561132b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134f91906122f8565b90508381101561137e5760006113658286612311565b905061137c6001600160a01b038416333084611a2f565b505b6065546001600160a01b03166375d81e258861111161111160901b0189016040516001600160e01b031960e085901b16815260ff90921660048301526001600160a01b031660248201526044810188905260648101879052608401602060405180830381600087803b1580156113f357600080fd5b505af1158015611407573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6391906122f8565b60335460ff166114745760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161032d565b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516114ae9190611f7d565b60405180910390a1565b60006114c33061187d565b15905090565b600054610100900460ff166114f05760405162461bcd60e51b815260040161032d90612328565b606580546001600160a01b038085166001600160a01b031990921691909117909155606680546001600160a81b031916918316919091179055611531611a67565b5050565b8015806115be5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561158457600080fd5b505afa158015611598573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115bc91906122f8565b155b6116295760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606482015260840161032d565b6040516001600160a01b0383166024820152604481018290526107d690849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611a98565b60007f0000000000000000000000000000000000000000000000000000000000000000835111156116fc578251604051634634691b60e01b815260048101919091527f0000000000000000000000000000000000000000000000000000000000000000602482015260440161032d565b60006117118686868051906020012086611246565b9050807fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b8560405161174391906123cb565b60405180910390a295945050505050565b6000806117608561188c565b905061176c86886123de565b6117768c8c6123fd565b61178091906123fd565b8110156117c95761179186886123de565b61179b8c8c6123fd565b6117a591906123fd565b604051631c102d6360e21b815260048101919091526024810182905260440161032d565b6117d28961187d565b156117e65761111161111160901b01890198505b6117ef8861187d565b156118035761111161111160901b01880197505b6118158c8c8c8c8c8c8c8c8c8c61195a565b9c9b505050505050505050505050565b60335460ff16156118485760405162461bcd60e51b815260040161032d906121b2565b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586114a13390565b6001600160a01b03163b151590565b600080606560009054906101000a90046001600160a01b03166001600160a01b031663ad48cb5e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156118dd57600080fd5b505afa1580156118f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119159190612415565b905060128160ff16101561194e576001600160c01b0383111561194e576040516304041d9560e11b81526004810184905260240161032d565b610c6483826012611b6a565b6000856001148061196b5750846001145b1561199f57338b8b868c8c8c8c8c8b8b6040516307c266e360e01b815260040161032d9b9a99989796959493929190612438565b6001600160401b038611156119c75760405163107c527b60e01b815260040160405180910390fd5b60006118156009338e6001600160a01b03168e6119e38a61188c565b8f8f6001600160a01b03168f6001600160a01b03168f8f8e8e90508f8f604051602001611a1a9b9a999897969594939291906124c1565b6040516020818303038152906040528861168c565b6040516001600160a01b03808516602483015283166044820152606481018290526110619085906323b872dd60e01b90608401611655565b600054610100900460ff16611a8e5760405162461bcd60e51b815260040161032d90612328565b611a96611bd4565b565b6000611aed826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c079092919063ffffffff16565b8051909150156107d65780806020019051810190611b0b919061251b565b6107d65760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161032d565b60008160ff168360ff161415611b81575082610c64565b8160ff168360ff161015611bb557611b998383612538565b611ba490600a61263f565b611bae90856123de565b9050610c64565b611bbf8284612538565b611bca90600a61263f565b611bae908561264e565b600054610100900460ff16611bfb5760405162461bcd60e51b815260040161032d90612328565b6033805460ff19169055565b6060610d59848460008585611c1b8561187d565b611c675760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161032d565b600080866001600160a01b03168587604051611c839190612670565b60006040518083038185875af1925050503d8060008114611cc0576040519150601f19603f3d011682016040523d82523d6000602084013e611cc5565b606091505b5091509150610b6382828660608315611cdf575081610c64565b825115611cef5782518084602001fd5b8160405162461bcd60e51b815260040161032d91906123cb565b60008083601f840112611d1b57600080fd5b5081356001600160401b03811115611d3257600080fd5b602083019150836020828501011115611d4a57600080fd5b9250929050565b60008060208385031215611d6457600080fd5b82356001600160401b03811115611d7a57600080fd5b611d8685828601611d09565b90969095509350505050565b6001600160a01b03811681146105e457600080fd5b60008060408385031215611dba57600080fd5b8235611dc581611d92565b91506020830135611dd581611d92565b809150509250929050565b600080600080600080600060c0888a031215611dfb57600080fd5b8735965060208801359550604088013594506060880135611e1b81611d92565b93506080880135925060a08801356001600160401b03811115611e3d57600080fd5b611e498a828b01611d09565b989b979a50959850939692959293505050565b6000806000806000806000806000806101208b8d031215611e7c57600080fd5b8a35611e8781611d92565b995060208b0135985060408b0135975060608b0135611ea581611d92565b965060808b0135611eb581611d92565b955060a08b0135945060c08b0135935060e08b013592506101008b01356001600160401b03811115611ee657600080fd5b611ef28d828e01611d09565b915080935050809150509295989b9194979a5092959850565b60008060008060008060a08789031215611f2457600080fd5b86359550602087013594506040870135611f3d81611d92565b93506060870135925060808701356001600160401b03811115611f5f57600080fd5b611f6b89828a01611d09565b979a9699509497509295939492505050565b6001600160a01b0391909116815260200190565b60008060408385031215611fa457600080fd5b50508035926020909101359150565b600060208284031215611fc557600080fd5b5035919050565b600060208284031215611fde57600080fd5b8135610c6481611d92565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561202757612027611fe9565b604052919050565b60006001600160401b0382111561204857612048611fe9565b5060051b60200190565b80151581146105e457600080fd5b600082601f83011261207157600080fd5b813560206120866120818361202f565b611fff565b82815260059290921b840181019181810190868411156120a557600080fd5b8286015b848110156120c95780356120bc81612052565b83529183019183016120a9565b509695505050505050565b600080604083850312156120e757600080fd5b82356001600160401b03808211156120fe57600080fd5b818501915085601f83011261211257600080fd5b813560206121226120818361202f565b82815260059290921b8401810191818101908984111561214157600080fd5b948201945b8386101561216857853561215981611d92565b82529482019490820190612146565b9650508601359250508082111561217e57600080fd5b5061218b85828601612060565b9150509250929050565b6000602082840312156121a757600080fd5b8135610c6481612052565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b8183823760009101908152919050565b6000602082840312156121fe57600080fd5b8151610c6481611d92565b6001600160a01b0393841681529183166020830152909116604082015260600190565b60ff60f81b8960f81b168152876001820152866021820152856041820152846061820152836081820152818360a18301376000910160a101908152979650505050505050565b60ff60f81b8860f81b16815286600182015285602182015284604182015283606182015281836081830137600091016081019081529695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156122f1576122f16122c7565b5060010190565b60006020828403121561230a57600080fd5b5051919050565b600082821015612323576123236122c7565b500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60005b8381101561238e578181015183820152602001612376565b838111156110615750506000910152565b600081518084526123b7816020860160208601612373565b601f01601f19169290920160200192915050565b602081526000610c64602083018461239f565b60008160001904831182151516156123f8576123f86122c7565b500290565b60008219821115612410576124106122c7565b500190565b60006020828403121561242757600080fd5b815160ff81168114610c6457600080fd5b6001600160a01b038c811682528b81166020830152604082018b9052606082018a90526080820189905287811660a0830152861660c082015260e0810185905261010081018490526101406101208201819052810182905260006101608385828501376000838501820152601f909301601f19169091019091019b9a5050505050505050505050565b8b81528a60208201528960408201528860608201528760808201528660a08201528560c08201528460e08201528361010082015260006101208385828501376000929093019092019081529b9a5050505050505050505050565b60006020828403121561252d57600080fd5b8151610c6481612052565b600060ff821660ff841680821015612552576125526122c7565b90039392505050565b600181815b8085111561259657816000190482111561257c5761257c6122c7565b8085161561258957918102915b93841c9390800290612560565b509250929050565b6000826125ad575060016104a1565b816125ba575060006104a1565b81600181146125d057600281146125da576125f6565b60019150506104a1565b60ff8411156125eb576125eb6122c7565b50506001821b6104a1565b5060208310610133831016604e8410600b8410161715612619575081810a6104a1565b612623838361255b565b8060001904821115612637576126376122c7565b029392505050565b6000610c6460ff84168361259e565b60008261266b57634e487b7160e01b600052601260045260246000fd5b500490565b60008251612682818460208701612373565b919091019291505056fea2646970667358221220e5cfe0c6dbb80e3dfeb6d12b50409872b3f096f42d9e126a90de5f79aeea420b64736f6c63430008090033";

type ERC20InboxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20InboxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Inbox__factory extends ContractFactory {
  constructor(...args: ERC20InboxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _maxDataSize: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Inbox> {
    return super.deploy(_maxDataSize, overrides || {}) as Promise<ERC20Inbox>;
  }
  override getDeployTransaction(
    _maxDataSize: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_maxDataSize, overrides || {});
  }
  override attach(address: string): ERC20Inbox {
    return super.attach(address) as ERC20Inbox;
  }
  override connect(signer: Signer): ERC20Inbox__factory {
    return super.connect(signer) as ERC20Inbox__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20InboxInterface {
    return new utils.Interface(_abi) as ERC20InboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Inbox {
    return new Contract(address, _abi, signerOrProvider) as ERC20Inbox;
  }
}
