/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGasRefunder,
  IGasRefunderInterface,
} from "../../../src/libraries/IGasRefunder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "calldataSize",
        type: "uint256",
      },
    ],
    name: "onGasSpent",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IGasRefunder__factory {
  static readonly abi = _abi;
  static createInterface(): IGasRefunderInterface {
    return new utils.Interface(_abi) as IGasRefunderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGasRefunder {
    return new Contract(address, _abi, signerOrProvider) as IGasRefunder;
  }
}
