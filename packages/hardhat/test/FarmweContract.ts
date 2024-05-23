import { expect } from "chai";
import { ethers } from "hardhat";

describe("FarmerContract", function () {
  let farmerContract: any; // 这里需要替换为正确的合约类型
  let owner: any; // 应替换为 ethers.Signer
  let producer: any; // 应替换为 ethers.Signer
  let cropId: number;
  let cropHash: string; // 确保变量名和类型正确

  beforeEach(async function () {
    // 部署 FarmerContract 合约
    const FarmerContract = await ethers.getContractFactory("FarmerContract");
    [owner, producer] = await ethers.getSigners();

    // 假设 owner 是合约的部署者
    farmerContract = await FarmerContract.connect(owner).deploy();
    await farmerContract.deployed(); // 确保合约被部署

    // 为测试准备作物数据
    cropId = 1; // 正确的变量名和类型注解
    cropHash = "unique_hash_for_crop"; // 正确的变量名和类型注解
  });

  describe("Add Crop", function () {
    it("Should add a new crop", async function () {
      const cropName = "Rice";
      const cropImage = "ipfs://Qm..."; // 假设的 IPFS 哈希值
      const plantingTime = new Date("2024-01-01").getTime() / 1000; // 假设的种植时间
      const source = "Seed Bank";
      const fertilizerType = "Organic";
      const pesticideUse = "None";

      await expect(
        farmerContract
          .connect(producer)
          .addCrop(cropName, cropHash, cropImage, plantingTime, source, fertilizerType, pesticideUse),
      ).to.emit(farmerContract, "CropAdded");

      // 验证作物是否添加成功
      const crop = await farmerContract.getCropById(cropId);
      expect(crop.id).to.equal(cropId);
      expect(crop.name).to.equal(cropName);
      expect(crop.hash).to.equal(cropHash);
      // ... 其他属性的断言
    });

    it("Should prevent adding a crop with an existing hash", async function () {
      await farmerContract
        .connect(producer)
        .addCrop("Rice", cropHash, "ipfs://Qm...", new Date().getTime() / 1000, "Seed Bank", "Organic", "None");

      await expect(
        farmerContract.connect(producer).addCrop(
          "Wheat",
          cropHash, // 故意使用相同的哈希
          "ipfs://Qm...",
          new Date().getTime() / 1000,
          "Seed Bank",
          "Organic",
          "None",
        ),
      ).to.be.revertedWith("Error: Crop with this hash already exists");
    });
  });

  describe("Harvest Crop", function () {
    it("Should harvest a crop", async function () {
      // 首先添加作物
      await farmerContract
        .connect(producer)
        .addCrop("Rice", cropHash, "ipfs://Qm...", new Date().getTime() / 1000, "Seed Bank", "Organic", "None");

      // 然后收获作物
      await expect(farmerContract.connect(producer).harvestCrop(cropId)).to.emit(farmerContract, "CropHarvested");

      // 验证作物状态是否更新为已收获
      const crop = await farmerContract.getCropById(cropId);
      expect(crop.status).to.equal(2);
      // 验证收获时间是否被设置
      expect(crop.harvestTime).to.not.equal(0);
    });

    it("Should prevent harvesting a non-existing crop", async function () {
      const nonExistingCropId = 999;

      await expect(farmerContract.connect(producer).harvestCrop(nonExistingCropId)).to.be.revertedWith(
        "Error: Crop does not exist",
      );
    });
  });
});
