/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ArbosTest,
  ArbosTestInterface,
} from "../../../src/precompiles/ArbosTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gasAmount",
        type: "uint256",
      },
    ],
    name: "burnArbGas",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class ArbosTest__factory {
  static readonly abi = _abi;
  static createInterface(): ArbosTestInterface {
    return new utils.Interface(_abi) as ArbosTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbosTest {
    return new Contract(address, _abi, signerOrProvider) as ArbosTest;
  }
}
