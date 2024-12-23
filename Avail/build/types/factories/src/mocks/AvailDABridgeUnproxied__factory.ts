/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AvailDABridgeUnproxied,
  AvailDABridgeUnproxiedInterface,
} from "../../../src/mocks/AvailDABridgeUnproxied";

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
        internalType: "bytes32",
        name: "blobHash",
        type: "bytes32",
      },
    ],
    name: "ValidatedBatchAttestationOverDA",
    type: "event",
  },
  {
    inputs: [],
    name: "AVAIL_MESSAGE_HEADER_FLAG",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DA_MESSAGE_HEADER_FLAG",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "verifyBatchAttestation",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506104ff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063172fa4711461004657806318beec411461006a5780635dbd16a61461008d575b600080fd5b600560f91b5b6040516001600160f81b031990911681526020015b60405180910390f35b61007d610078366004610218565b610098565b6040519015158152602001610061565b61004c600560f91b81565b6000806100a8836001818761028a565b8101906100b591906102ca565b90508060ff166002141561020e576040805160c080820183526000808352602080840182905283850182905260608085018390526080808601849052865160e0810188528481529283018490529582018390528181015293840181905260a080850182905291840152810191909152610131846001818861028a565b81019061013e91906103da565b60a0870181905260808701829052606087019290925263ffffffff928316604087015292909116602085015260ff909216835260c0909101511461020c5760405162461bcd60e51b815260206004820152605560248201527f537175656e6365722062617463682064617461206b656363616b32353648207060448201527f7265696d616765206973206e6f74206d61746368696e6720776974682074686560648201527408189b1bd8941c9bdbd98818dbdb5b5a5d1b595b9d605a1b608482015260a40160405180910390fd5b505b5060009392505050565b6000806020838503121561022b57600080fd5b823567ffffffffffffffff8082111561024357600080fd5b818501915085601f83011261025757600080fd5b81358181111561026657600080fd5b86602082850101111561027857600080fd5b60209290920196919550909350505050565b6000808585111561029a57600080fd5b838611156102a757600080fd5b5050820193919092039150565b803560ff811681146102c557600080fd5b919050565b6000602082840312156102dc57600080fd5b6102e5826102b4565b9392505050565b803563ffffffff811681146102c557600080fd5b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561033957610339610300565b60405290565b600082601f83011261035057600080fd5b8135602067ffffffffffffffff8083111561036d5761036d610300565b8260051b604051601f19603f8301168101818110848211171561039257610392610300565b6040529384528581018301938381019250878511156103b057600080fd5b83870191505b848210156103cf578135835291830191908301906103b6565b979650505050505050565b60008060008060008060c087890312156103f357600080fd5b6103fc876102b4565b955061040a602088016102ec565b9450610418604088016102ec565b9350606087013592506080870135915060a087013567ffffffffffffffff8082111561044357600080fd5b9088019060e0828b03121561045757600080fd5b61045f610316565b82358152602083013560208201526040830135604082015260608301358281111561048957600080fd5b6104958c82860161033f565b6060830152506080830135608082015260a083013560a082015260c083013560c0820152809350505050929550929550929556fea26469706673582212206176d1e2954a6ce26ba1dc4f3eacf308dddfee2d35994591603bab8bdff4d25064736f6c63430008090033";

type AvailDABridgeUnproxiedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AvailDABridgeUnproxiedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AvailDABridgeUnproxied__factory extends ContractFactory {
  constructor(...args: AvailDABridgeUnproxiedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AvailDABridgeUnproxied> {
    return super.deploy(overrides || {}) as Promise<AvailDABridgeUnproxied>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AvailDABridgeUnproxied {
    return super.attach(address) as AvailDABridgeUnproxied;
  }
  override connect(signer: Signer): AvailDABridgeUnproxied__factory {
    return super.connect(signer) as AvailDABridgeUnproxied__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AvailDABridgeUnproxiedInterface {
    return new utils.Interface(_abi) as AvailDABridgeUnproxiedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AvailDABridgeUnproxied {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AvailDABridgeUnproxied;
  }
}
