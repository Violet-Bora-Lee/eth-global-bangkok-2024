/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ArbInfo,
  ArbInfoInterface,
} from "../../../src/precompiles/ArbInfo";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getBalance",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ArbInfo__factory {
  static readonly abi = _abi;
  static createInterface(): ArbInfoInterface {
    return new utils.Interface(_abi) as ArbInfoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbInfo {
    return new Contract(address, _abi, signerOrProvider) as ArbInfo;
  }
}
