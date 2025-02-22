/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOpenQ, IOpenQInterface } from "../../../contracts/OpenQ/IOpenQ";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "bountyId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "closer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyClosedTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "BountyClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "bountyId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "issuerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyMintTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "BountyCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "claimTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "ClaimSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "depositId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newExpiration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "DepositExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "depositId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "bountyId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "refundTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "DepositRefunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "depositId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "bountyId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receiveTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "NFTDepositReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "bountyId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "closer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payoutTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "TokenBalanceClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "depositId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "bountyId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receiveTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "TokenDepositReceived",
    type: "event",
  },
];

export class IOpenQ__factory {
  static readonly abi = _abi;
  static createInterface(): IOpenQInterface {
    return new utils.Interface(_abi) as IOpenQInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IOpenQ {
    return new Contract(address, _abi, signerOrProvider) as IOpenQ;
  }
}
