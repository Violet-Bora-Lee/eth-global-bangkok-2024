/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDelayedMessageProvider,
  IDelayedMessageProviderInterface,
} from "../../../src/bridge/IDelayedMessageProvider";

const _abi = [
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
] as const;

export class IDelayedMessageProvider__factory {
  static readonly abi = _abi;
  static createInterface(): IDelayedMessageProviderInterface {
    return new utils.Interface(_abi) as IDelayedMessageProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDelayedMessageProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IDelayedMessageProvider;
  }
}
