import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomicfoundation/hardhat-verify";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

// If not set, it uses the hardhat account 0 private key.
const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// If not set, it uses ours Etherscan default API key.
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";
// forking rpc url
const forkingURL = process.env.FORKING_URL || "";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            // https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options
            runs: 200,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: 0,
    },
  },
  networks: {
    // View the networks that are pre-configured.
    // If the network you are looking for is not here you can add new network settings
    hardhat: {
      forking: {
        url: forkingURL,
        enabled: process.env.MAINNET_FORKING_ENABLED === "true",
      },
    },
    // sepolia: {
    //   url: "https://1rpc.io/sepolia",
    //   accounts: [deployerPrivateKey],
    // },
    amoy: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [deployerPrivateKey],
    },
    cardona: {
      url: "https://rpc.ankr.com/polygon_zkevm_cardona",
      accounts: [deployerPrivateKey],
    },
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [deployerPrivateKey],
    },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io",
      accounts: [deployerPrivateKey],
    },
    zircuit: {
      url: "https://zircuit1-testnet.p2pify.com",
      accounts: [deployerPrivateKey],
    },
    // celo L2
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [deployerPrivateKey],
    },
    mantle: {
      url: "https://rpc.sepolia.mantle.xyz",
      accounts: [deployerPrivateKey],
    },
    rootstock: {
      url: "https://go.getblock.io/30598eb32ac247d2b34a554ea7c6d5ce",
      accounts: [deployerPrivateKey],
    },
    morphHolesky: {
      url: "https://rpc-quicknode-holesky.morphl2.io",
      accounts: [deployerPrivateKey],
    },
    lineaSepolia: {
      url: "https://linea-sepolia.public.blastapi.io",
      accounts: [deployerPrivateKey],
    },
    flow: {
      url: "https://testnet.evm.nodes.onflow.org",
      accounts: [deployerPrivateKey],
    },
    // gnosis testnet
    chiado: {
      url: "https://rpc.chiadochain.net",
      accounts: [deployerPrivateKey],
    },
  },
  // configuration for harhdat-verify plugin
  etherscan: {
    apiKey: `${etherscanApiKey}`,
  },
  // configuration for etherscan-verify from hardhat-deploy plugin
  verify: {
    etherscan: {
      apiKey: `${etherscanApiKey}`,
    },
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
