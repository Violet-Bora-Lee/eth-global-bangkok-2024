/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20RollupEventInbox,
  ERC20RollupEventInboxInterface,
} from "../../../src/rollup/ERC20RollupEventInbox";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyInit",
    type: "error",
  },
  {
    inputs: [],
    name: "HadZeroInit",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RollupNotChanged",
    type: "error",
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
        internalType: "contract IBridge",
        name: "_bridge",
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
    name: "rollup",
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
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "chainConfig",
        type: "string",
      },
    ],
    name: "rollupInitialized",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateRollupAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b506080516107cf61003060003960006102ff01526107cf6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80636ae71f121461005c578063c4d66de814610066578063cb23bcb514610079578063cf8d56d6146100a8578063e78cea92146100bb575b600080fd5b6100646100ce565b005b610064610074366004610644565b6102f4565b60015461008c906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6100646100b6366004610661565b610482565b60005461008c906001600160a01b031681565b600160009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561011c57600080fd5b505afa158015610130573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015491906106dd565b6001600160a01b0316336001600160a01b0316146102195760015460408051638da5cb5b60e01b8152905133926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b1580156101b057600080fd5b505afa1580156101c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e891906106dd565b604051631194af8760e11b81526001600160a01b039283166004820152911660248201526044015b60405180910390fd5b60008060009054906101000a90046001600160a01b03166001600160a01b031663cb23bcb56040518163ffffffff1660e01b815260040160206040518083038186803b15801561026857600080fd5b505afa15801561027c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a091906106dd565b6001549091506001600160a01b03808316911614156102d25760405163d054909f60e01b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156103825760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610210565b6000546001600160a01b0316156103ac57604051633bcd329760e21b815260040160405180910390fd5b6001600160a01b0381166103d357604051631ad0f74360e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b0383169081179091556040805163cb23bcb560e01b8152905163cb23bcb591600480820192602092909190829003018186803b15801561042757600080fd5b505afa15801561043b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045f91906106dd565b600180546001600160a01b0319166001600160a01b039290921691909117905550565b6001546001600160a01b031633146104ca5760405162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b6044820152606401610210565b8061050c5760405162461bcd60e51b8152602060048201526012602482015271454d5054595f434841494e5f434f4e46494760701b6044820152606401610210565b6001600080858383878760405160200161052a9594939291906106fa565b6040516020818303038152906040529050600061054682610589565b9050807fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b83604051610578919061072b565b60405180910390a250505050505050565b60008054825160208401206040516375d81e2560e01b8152600b60048201526024810184905260448101919091526064810183905282916001600160a01b0316906375d81e2590608401602060405180830381600087803b1580156105ed57600080fd5b505af1158015610601573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106259190610780565b9392505050565b6001600160a01b038116811461064157600080fd5b50565b60006020828403121561065657600080fd5b81356106258161062c565b60008060006040848603121561067657600080fd5b83359250602084013567ffffffffffffffff8082111561069557600080fd5b818601915086601f8301126106a957600080fd5b8135818111156106b857600080fd5b8760208285010111156106ca57600080fd5b6020830194508093505050509250925092565b6000602082840312156106ef57600080fd5b81516106258161062c565b85815260ff60f81b8560f81b1660208201528360218201528183604183013760009101604101908152949350505050565b600060208083528351808285015260005b818110156107585785810183015185820160400152820161073c565b8181111561076a576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561079257600080fd5b505191905056fea2646970667358221220d1ae0b5e6428157369851c6332f37e083f0cb927f82b13be199c1c9d1718870b64736f6c63430008090033";

type ERC20RollupEventInboxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20RollupEventInboxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20RollupEventInbox__factory extends ContractFactory {
  constructor(...args: ERC20RollupEventInboxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20RollupEventInbox> {
    return super.deploy(overrides || {}) as Promise<ERC20RollupEventInbox>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20RollupEventInbox {
    return super.attach(address) as ERC20RollupEventInbox;
  }
  override connect(signer: Signer): ERC20RollupEventInbox__factory {
    return super.connect(signer) as ERC20RollupEventInbox__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20RollupEventInboxInterface {
    return new utils.Interface(_abi) as ERC20RollupEventInboxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20RollupEventInbox {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20RollupEventInbox;
  }
}
