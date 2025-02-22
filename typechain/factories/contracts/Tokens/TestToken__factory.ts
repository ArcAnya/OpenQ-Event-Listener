/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestToken,
  TestTokenInterface,
} from "../../../contracts/Tokens/TestToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "initDecimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MINT_LIMIT",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000cc838038062000cc88339810160408190526200003491620001f7565b8251839083906200004d90600390602085019062000084565b5080516200006390600490602084019062000084565b50506005805460ff191660ff939093169290921790915550620002b8915050565b82805462000092906200027c565b90600052602060002090601f016020900481019282620000b6576000855562000101565b82601f10620000d157805160ff191683800117855562000101565b8280016001018555821562000101579182015b8281111562000101578251825591602001919060010190620000e4565b506200010f92915062000113565b5090565b5b808211156200010f576000815560010162000114565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200015257600080fd5b81516001600160401b03808211156200016f576200016f6200012a565b604051601f8301601f19908116603f011681019082821181831017156200019a576200019a6200012a565b81604052838152602092508683858801011115620001b757600080fd5b600091505b83821015620001db5785820183015181830184015290820190620001bc565b83821115620001ed5760008385830101525b9695505050505050565b6000806000606084860312156200020d57600080fd5b83516001600160401b03808211156200022557600080fd5b620002338783880162000140565b945060208601519150808211156200024a57600080fd5b50620002598682870162000140565b925050604084015160ff811681146200027157600080fd5b809150509250925092565b600181811c908216806200029157607f821691505b602082108103620002b257634e487b7160e01b600052602260045260246000fd5b50919050565b610a0080620002c86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b41146101b2578063a457c2d7146101ba578063a9059cbb146101cd578063dd62ed3e146101e057600080fd5b8063395093511461016357806340c10f191461017657806370a082311461018957600080fd5b806302775240146100d457806306fdde03146100fb578063095ea7b31461011057806318160ddd1461013357806323b872dd1461013b578063313ce5671461014e575b600080fd5b6100e86c0c9f2c9cd04674edea4000000081565b6040519081526020015b60405180910390f35b6101036101f3565b6040516100f29190610828565b61012361011e366004610899565b610285565b60405190151581526020016100f2565b6002546100e8565b6101236101493660046108c3565b61029d565b60055460405160ff90911681526020016100f2565b610123610171366004610899565b6102c1565b610123610184366004610899565b6102e3565b6100e86101973660046108ff565b6001600160a01b031660009081526020819052604090205490565b610103610315565b6101236101c8366004610899565b610324565b6101236101db366004610899565b6103a4565b6100e86101ee366004610921565b6103b2565b60606003805461020290610954565b80601f016020809104026020016040519081016040528092919081815260200182805461022e90610954565b801561027b5780601f106102505761010080835404028352916020019161027b565b820191906000526020600020905b81548152906001019060200180831161025e57829003601f168201915b5050505050905090565b6000336102938185856103dd565b5060019392505050565b6000336102ab858285610501565b6102b685858561057b565b506001949350505050565b6000336102938185856102d483836103b2565b6102de919061098e565b6103dd565b60006c0c9f2c9cd04674edea40000000821115610302576103026109b4565b61030c8383610749565b50600192915050565b60606004805461020290610954565b6000338161033282866103b2565b9050838110156103975760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102b682868684036103dd565b60003361029381858561057b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03831661043f5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161038e565b6001600160a01b0382166104a05760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161038e565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061050d84846103b2565b9050600019811461057557818110156105685760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161038e565b61057584848484036103dd565b50505050565b6001600160a01b0383166105df5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161038e565b6001600160a01b0382166106415760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161038e565b6001600160a01b038316600090815260208190526040902054818110156106b95760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161038e565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106f090849061098e565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161073c91815260200190565b60405180910390a3610575565b6001600160a01b03821661079f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161038e565b80600260008282546107b1919061098e565b90915550506001600160a01b038216600090815260208190526040812080548392906107de90849061098e565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b8181101561085557858101830151858201604001528201610839565b81811115610867576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461089457600080fd5b919050565b600080604083850312156108ac57600080fd5b6108b58361087d565b946020939093013593505050565b6000806000606084860312156108d857600080fd5b6108e18461087d565b92506108ef6020850161087d565b9150604084013590509250925092565b60006020828403121561091157600080fd5b61091a8261087d565b9392505050565b6000806040838503121561093457600080fd5b61093d8361087d565b915061094b6020840161087d565b90509250929050565b600181811c9082168061096857607f821691505b60208210810361098857634e487b7160e01b600052602260045260246000fd5b50919050565b600082198211156109af57634e487b7160e01b600052601160045260246000fd5b500190565b634e487b7160e01b600052600160045260246000fdfea2646970667358221220a74eb390ede9f823471684ec3c3059d8a07e3fd817093453f2c4f45c4787e44d64736f6c634300080d0033";

type TestTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestToken__factory extends ContractFactory {
  constructor(...args: TestTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initDecimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestToken> {
    return super.deploy(
      name,
      symbol,
      initDecimals,
      overrides || {}
    ) as Promise<TestToken>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initDecimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initDecimals,
      overrides || {}
    );
  }
  override attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  override connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new utils.Interface(_abi) as TestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}
