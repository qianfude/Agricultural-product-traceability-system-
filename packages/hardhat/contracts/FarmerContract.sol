// SPDX-License-Identifier: MIT
// 指定许可证标识符，表明该合约遵循MIT许可证。

pragma solidity ^0.8.0;
// 指定编译器的版本范围，以确保兼容性。

contract FarmerContract {
    // 定义作物结构体，包含作物的各种属性。
    struct Crop {
        uint256 id;                     // 作物的唯一编号。
        string name;                    // 作物的种类，例如水稻。
        string hash;                    // 作物的唯一哈希，可能代表其DNA序列或批次标识。
        string image;                   // 作物的图片，以字符串形式存储，可能需要使用IPFS等存储解决方案。
        uint256 plantingTime;           // 育种时间，记录作物的种植日期。
        uint256 harvestTime;            // 收获时间，记录作物的收获日期。
        string source;                  // 种源，记录作物的种子来源或育种信息。
        string fertilizerType;          // 记录是否使用化肥以及化肥的类型。
        string pesticideUse;           // 记录是否使用农药以及农药的类型。
        uint8 status;                   // 作物状态，1 表示种植中，2 表示已收获。
    }

    address public owner; // 定义合约所有者的地址。

    // 使用映射存储作物信息，通过作物编号访问。
    mapping(uint256 => Crop) public crops;
    // 使用映射存储作物哈希，确保每个作物哈希的唯一性。
    mapping(string => bool) public cropHashExists;
    // 农产品编号计数器，用于生成作物的唯一编号。
    uint256 public cropIdCounter;

    // 定义事件，用于记录作物添加和收获的关键操作。
    event CropAdded(uint256 indexed id, string name, string hash, uint256 plantingTime);
    event CropHarvested(uint256 indexed id, uint256 harvestTime);

    // 只有合约所有者才能执行的修饰符。
    modifier onlyOwner() {
        require(msg.sender == owner, "Access denied: Only owner can perform this action");
        _;
    }
    // 只有种植商（合约所有者）才能执行的修饰符。
    modifier onlyProducer() {
        require(msg.sender == owner, "Access denied: Only producer can perform this action");
        _;
    }

    // 构造函数，初始化合约所有者。
    constructor() {
        owner = msg.sender;
    }

    // 添加新的作物到合约的作物信息存储中。
    function addCrop(string memory _name, string memory _hash, string memory _image, uint256 _plantingTime, string memory _source, string memory _fertilizerType, string memory _pesticideUse) public onlyProducer {
        require(!cropHashExists[_hash], "Error: Crop with this hash already exists");
        uint256 cropId = cropIdCounter++;
        Crop memory newCrop = Crop(cropId, _name, _hash, _image, _plantingTime, 0, _source, _fertilizerType, _pesticideUse, 1);
        crops[cropId] = newCrop;
        cropHashExists[_hash] = true;
        emit CropAdded(cropId, _name, _hash, _plantingTime);
    }

    // 更新作物的收获时间，并改变作物状态为已收获。
    function harvestCrop(uint256 _id) public onlyProducer {
        Crop storage crop = crops[_id];
        require(crop.id != 0, "Error: Crop does not exist");
        require(crop.status == 1, "Error: Crop has already been harvested");
        crop.harvestTime = block.timestamp;
        crop.status = 2;
        emit CropHarvested(_id, crop.harvestTime);
    }

    // 根据作物编号获取作物的详细信息。
    function getCropById(uint256 _id) public view returns (Crop memory crop) {
        crop = crops[_id];
    }
}