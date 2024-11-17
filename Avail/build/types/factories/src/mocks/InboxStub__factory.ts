/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  InboxStub,
  InboxStubInterface,
} from "../../../src/mocks/InboxStub";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "allowListEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
        name: "",
        type: "address",
      },
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "",
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
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
    stateMutability: "pure",
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
        name: "",
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
    stateMutability: "pure",
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
    stateMutability: "pure",
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
        internalType: "contract IBridge",
        name: "_bridge",
        type: "address",
      },
    ],
    name: "postUpgradeInit",
    outputs: [],
    stateMutability: "nonpayable",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
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
    stateMutability: "pure",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "sendL1FundedContractTransaction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "sendL1FundedUnsignedTransaction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "sendL1FundedUnsignedTransactionToFork",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
        name: "",
        type: "uint256",
      },
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
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
    stateMutability: "pure",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "sendUnsignedTransactionToFork",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sendWithdrawEthToFork",
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
        name: "",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "",
        type: "bool[]",
      },
    ],
    name: "setAllowList",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "setAllowListEnabled",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "",
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
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b506201cccc608052608051610c9861003360003960006103900152610c986000f3fe6080604052600436106101605760003560e01c80638456cb59116100c1578063c474d2c51161007a578063c474d2c514610320578063e3de72a51461033e578063e6bd12cf14610259578063e78cea921461035e578063e8eb1dc31461037e578063ee35f327146103b2578063efeadb6d146103d257600080fd5b80638456cb59146101dd5780638a631aa6146102825780638b3240a01461029d578063a66b327d146102ca578063b75436bb146102e5578063babcc5391461030557600080fd5b80635075788b1161011e5780635075788b146101655780635c975abb1461021c5780635e9167581461023d578063679b6ded1461024b57806367ef3ab8146102595780636e6e8a6a1461024b57806370665f141461026757600080fd5b8062f72382146101655780631fe927cf1461019857806322bd5c1c146101b85780633f4ba83a146101dd578063439370b1146101f4578063485cc955146101fc575b600080fd5b34801561017157600080fd5b506101856101803660046106b9565b6103ed565b6040519081526020015b60405180910390f35b3480156101a457600080fd5b506101856101b3366004610735565b610410565b3480156101c457600080fd5b506101cd6103ed565b604051901515815260200161018f565b3480156101e957600080fd5b506101f26104a9565b005b6101856103ed565b34801561020857600080fd5b506101f2610217366004610776565b6104e3565b34801561022857600080fd5b506001546101cd90600160a01b900460ff1681565b6101856101803660046107af565b610185610180366004610818565b6101856101803660046108bc565b34801561027357600080fd5b5061018561018036600461092e565b34801561028e57600080fd5b5061018561018036600461097b565b3480156102a957600080fd5b506102b26103ed565b6040516001600160a01b03909116815260200161018f565b3480156102d657600080fd5b506101856101803660046109cf565b3480156102f157600080fd5b50610185610300366004610735565b61054e565b34801561031157600080fd5b506101cd6101803660046109f1565b34801561032c57600080fd5b506101f261033b3660046109f1565b50565b34801561034a57600080fd5b506101f2610359366004610b05565b6105aa565b34801561036a57600080fd5b506000546102b2906001600160a01b031681565b34801561038a57600080fd5b506101857f000000000000000000000000000000000000000000000000000000000000000081565b3480156103be57600080fd5b506001546102b2906001600160a01b031681565b3480156103de57600080fd5b506101f2610359366004610bc6565b600060405162461bcd60e51b815260040161040790610be1565b60405180910390fd5b600033321461044f5760405162461bcd60e51b815260206004820152600b60248201526a6f726967696e206f6e6c7960a81b6044820152606401610407565b60006104746003338686604051610467929190610c0a565b60405180910390206105c2565b60405190915081907fab532385be8f1005a4b6ba8fa20a2245facb346134ac739fe9a5198dc1580b9c90600090a29392505050565b60405162461bcd60e51b815260206004820152600f60248201526e1393d5081253541311535153951151608a1b6044820152606401610407565b6000546001600160a01b03161561052b5760405162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b6044820152606401610407565b50600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000806105676003338686604051610467929190610c0a565b9050807fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b858560405161059b929190610c1a565b60405180910390a29392505050565b60405162461bcd60e51b815260040161040790610be1565b60008054604051638db5993b60e01b815260ff861660048201526001600160a01b0385811660248301526044820185905290911690638db5993b9034906064016020604051808303818588803b15801561061b57600080fd5b505af115801561062f573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106549190610c49565b949350505050565b6001600160a01b038116811461033b57600080fd5b60008083601f84011261068357600080fd5b5081356001600160401b0381111561069a57600080fd5b6020830191508360208285010111156106b257600080fd5b9250929050565b600080600080600080600060c0888a0312156106d457600080fd5b87359650602088013595506040880135945060608801356106f48161065c565b93506080880135925060a08801356001600160401b0381111561071657600080fd5b6107228a828b01610671565b989b979a50959850939692959293505050565b6000806020838503121561074857600080fd5b82356001600160401b0381111561075e57600080fd5b61076a85828601610671565b90969095509350505050565b6000806040838503121561078957600080fd5b82356107948161065c565b915060208301356107a48161065c565b809150509250929050565b6000806000806000608086880312156107c757600080fd5b853594506020860135935060408601356107e08161065c565b925060608601356001600160401b038111156107fb57600080fd5b61080788828901610671565b969995985093965092949392505050565b60008060008060008060008060006101008a8c03121561083757600080fd5b89356108428161065c565b985060208a0135975060408a0135965060608a01356108608161065c565b955060808a01356108708161065c565b945060a08a0135935060c08a0135925060e08a01356001600160401b0381111561089957600080fd5b6108a58c828d01610671565b915080935050809150509295985092959850929598565b60008060008060008060a087890312156108d557600080fd5b86359550602087013594506040870135935060608701356108f58161065c565b925060808701356001600160401b0381111561091057600080fd5b61091c89828a01610671565b979a9699509497509295939492505050565b600080600080600060a0868803121561094657600080fd5b85359450602086013593506040860135925060608601359150608086013561096d8161065c565b809150509295509295909350565b60008060008060008060a0878903121561099457600080fd5b863595506020870135945060408701356109ad8161065c565b93506060870135925060808701356001600160401b0381111561091057600080fd5b600080604083850312156109e257600080fd5b50508035926020909101359150565b600060208284031215610a0357600080fd5b8135610a0e8161065c565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715610a5357610a53610a15565b604052919050565b60006001600160401b03821115610a7457610a74610a15565b5060051b60200190565b80358015158114610a8e57600080fd5b919050565b600082601f830112610aa457600080fd5b81356020610ab9610ab483610a5b565b610a2b565b82815260059290921b84018101918181019086841115610ad857600080fd5b8286015b84811015610afa57610aed81610a7e565b8352918301918301610adc565b509695505050505050565b60008060408385031215610b1857600080fd5b82356001600160401b0380821115610b2f57600080fd5b818501915085601f830112610b4357600080fd5b81356020610b53610ab483610a5b565b82815260059290921b84018101918181019089841115610b7257600080fd5b948201945b83861015610b99578535610b8a8161065c565b82529482019490820190610b77565b96505086013592505080821115610baf57600080fd5b50610bbc85828601610a93565b9150509250929050565b600060208284031215610bd857600080fd5b610a0e82610a7e565b6020808252600f908201526e1393d517d253541311535153951151608a1b604082015260600190565b8183823760009101908152919050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b600060208284031215610c5b57600080fd5b505191905056fea26469706673582212207eb93dc5aacc5744ac62714bc7e6e9bcdc6ec2656a5e3ec0eda51eda83c26c4964736f6c63430008090033";

type InboxStubConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InboxStubConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InboxStub__factory extends ContractFactory {
  constructor(...args: InboxStubConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InboxStub> {
    return super.deploy(overrides || {}) as Promise<InboxStub>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InboxStub {
    return super.attach(address) as InboxStub;
  }
  override connect(signer: Signer): InboxStub__factory {
    return super.connect(signer) as InboxStub__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InboxStubInterface {
    return new utils.Interface(_abi) as InboxStubInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InboxStub {
    return new Contract(address, _abi, signerOrProvider) as InboxStub;
  }
}
