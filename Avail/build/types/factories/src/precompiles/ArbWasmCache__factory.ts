/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ArbWasmCache,
  ArbWasmCacheInterface,
} from "../../../src/precompiles/ArbWasmCache";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "codehash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "cached",
        type: "bool",
      },
    ],
    name: "UpdateProgramCache",
    type: "event",
  },
  {
    inputs: [],
    name: "allCacheManagers",
    outputs: [
      {
        internalType: "address[]",
        name: "managers",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "codehash",
        type: "bytes32",
      },
    ],
    name: "cacheCodehash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "cacheProgram",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "codehash",
        type: "bytes32",
      },
    ],
    name: "codehashIsCached",
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
        internalType: "bytes32",
        name: "codehash",
        type: "bytes32",
      },
    ],
    name: "evictCodehash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "isCacheManager",
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

export class ArbWasmCache__factory {
  static readonly abi = _abi;
  static createInterface(): ArbWasmCacheInterface {
    return new utils.Interface(_abi) as ArbWasmCacheInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbWasmCache {
    return new Contract(address, _abi, signerOrProvider) as ArbWasmCache;
  }
}