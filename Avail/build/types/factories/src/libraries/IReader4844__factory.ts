/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IReader4844,
  IReader4844Interface,
} from "../../../src/libraries/IReader4844";

const _abi = [
  {
    inputs: [],
    name: "getBlobBaseFee",
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
    name: "getDataHashes",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IReader4844__factory {
  static readonly abi = _abi;
  static createInterface(): IReader4844Interface {
    return new utils.Interface(_abi) as IReader4844Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IReader4844 {
    return new Contract(address, _abi, signerOrProvider) as IReader4844;
  }
}