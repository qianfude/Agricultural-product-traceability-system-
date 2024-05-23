import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

export const deployContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // 部署 YourContract 合约
  await deploy("YourContract", {
    from: deployer,
    args: [deployer],
    log: true,
    autoMine: true,
  });

  // 部署 FarmerContract 合约
  await deploy("FarmerContract", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  // 获取部署后的合约实例
  const yourContract = await hre.ethers.getContract<Contract>("YourContract", deployer);
  const farmerContract = await hre.ethers.getContract<Contract>("FarmerContract", deployer);

  // 打印合约地址
  console.log("YourContract address:", yourContract.address);
  console.log("FarmerContract address:", farmerContract.address);
};

deployContracts.tags = ["YourContract", "FarmerContract"];

export default deployContracts;
