import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/config";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
/* module.exports = {
  solidity: "0.8.9",
}; */

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: true,
      //blockGasLimit: 0x1fffffffffffff,
    },
    localhost: {
      chainId: 31337,
      //allowUnlimitedContractSize: true,
      //blockGasLimit: 0x1fffffffffffff,
    },
  },
  solidity: "0.8.8",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
