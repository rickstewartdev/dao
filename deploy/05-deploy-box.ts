import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// @ts-ignore
import { ethers } from "hardhat";

const deployBox: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("Deploying Box...");
  const box = await deploy("Box", {
    from: deployer,
    args: [],
    log: true,
  });
  const boxContract = await ethers.getContract("Box", box.address);
  const timeLock = await ethers.getContract("TimeLock");
  const transferOwnerTx = await boxContract.transferOwnership(timeLock.address);
  await transferOwnerTx.wait(1);
  log("You done guud!");
};

export default deployBox;
