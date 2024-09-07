import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    polygonAmoy: {
      url: process.env.AMOY_URL,
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
  },
  etherscan: {
    apiKey: {
      polygonAmoy: process.env.OKLINK_API_KEY || "",
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL: "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
          browserURL: "https://www.oklink.com/amoy",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
