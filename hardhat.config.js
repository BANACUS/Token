require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    bnbtestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: { mnemonic: process.env.mnemonic },
      chainId: 97,
      gasPrice: "auto",
    },
    bnb: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: { mnemonic: process.env.mnemonic },
      chainId: 56,
      gasPrice: "auto",
    },
  },
  etherscan: {
    apiKey: {},
  },
};
