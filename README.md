### 项目概述

- **目标**: 提供一个开源的、最新的工具包，帮助开发者更容易地创建和部署智能合约，以及构建与这些合约交互的用户界面。

### 技术栈和特性
- **NextJS**: 用于构建用户界面的React框架。
- **RainbowKit**: 一套工具，用于简化与智能合约的交互。
- **Hardhat**: 一个以太坊开发框架，用于编译、部署、测试和调试智能合约。
- **Wagmi**: 用于构建以太坊应用的React库。
- **Viem**: 一个用于管理以太坊账户的库。
- **Typescript**: 一种静态类型脚本语言，用于增强JavaScript的编程能力。
- **Contract Hot Reload**: 智能合约编辑时前端自动适应。
- **Custom hooks**: 简化与智能合约交互的React钩子集合。
- **Components**: 快速构建前端的常用Web3组件集合。
- **Burner Wallet & Local Faucet**: 使用一次性钱包和本地水龙头快速测试应用。
- **Integration with Wallet Providers**: 与不同的钱包提供商集成，与以太坊网络交互。

### 快速开始
- **要求**: 需要安装Node (>= v18.17)、Yarn (v1或v2+)和Git。
- **步骤**:
  1. 克隆仓库并安装依赖。
  2. 在一个终端运行本地网络。
  3. 在第二个终端部署测试合约。
  4. 在第三个终端启动NextJS应用。

### 后续步骤
- 修改智能合约 `YourContract.sol`。
- 修改前端主页。
- 编辑部署脚本。
- 编辑智能合约测试并运行测试。


**启动项目的步骤：**

### 1. 安装先决条件
确保安装了以下工具：
- **Node.js** (版本 >= v18.17)
- **Yarn** (版本 v1 或 v2+)
- **Git**

### 2. 克隆仓库
打开终端或命令提示符，克隆 Scaffold-ETH 2 仓库到本地机器：
```sh
git clonehttps://github.com/qianfude/Agricultural-product-traceability-system-.git
```
这会将项目代码复制到本地目录 `Agricultural-product-traceability-system-`。

### 3. 进入项目目录
```sh
cd Agricultural-product-traceability-system-
```


### 4. 安装依赖
在项目目录中，运行以下命令来安装所有必要的依赖项：
```sh
yarn install
```
这将根据 `package.json` 文件安装项目所需的所有包。

### 5. 运行本地以太坊网络
在第一个终端窗口中，运行以下命令来启动本地以太坊网络（使用 Hardhat）：
```sh
yarn chain
```
这个命令会启动一个本地的 Ethereum 网络，用于测试和开发。

### 6. 部署测试合约
在第二个终端窗口中，运行以下命令来部署测试智能合约到本地网络：
```sh
yarn deploy
```
这个命令会使用 `packages/hardhat/deploy` 目录下的部署脚本来部署智能合约。

### 7. 启动 NextJS 应用
在第三个终端窗口中，运行以下命令来启动 NextJS 应用：
```sh
yarn start
```
这将启动前端应用，可以通过访问 `http://localhost:3000` 来查看和与之交互。

### 8. 后续操作
- 可以编辑智能合约 `YourContract.sol`，该文件位于 `packages/hardhat/contracts` 目录下。
- 可以编辑前端主页，位于 `packages/nextjs/app/page.tsx` 目录下。
- 可以编辑部署脚本，位于 `packages/hardhat/deploy` 目录下。
- 可以编辑智能合约测试，并使用 `yarn hardhat:test` 命令来运行测试。



1. **Solidity**: 这是编写智能合约的编程语言，它运行在以太坊虚拟机（EVM）上。您需要了解 Solidity 的语法和特性，以及如何编写、编译和部署智能合约。

2. **Hardhat**: 这是一个以太坊开发环境，用于编译、部署、测试和调试智能合约。您应该熟悉 Hardhat 的配置和命令行工具。

3. **Next.js**: 这是一个基于 React 的框架，用于构建用户界面。了解 Next.js 的基本概念，如页面路由、组件生命周期和API路由，将有助于您理解前端代码。

4. **TypeScript**: 这是一个静态类型扩展 JavaScript 的语言。学习 TypeScript 可以帮助您编写更健壮和可维护的代码。

5. **React**: 作为构建用户界面的库，React 是前端开发的基础。您应该熟悉 JSX、组件状态和生命周期等概念。

6. **Web3 和 Ethereum**: 理解以太坊的基本概念，包括账户、交易、区块、Gas 以及如何与智能合约交互。

7. **wagmi**: 这是一个构建以太坊 dApp 的 React 库，提供了一套 Hooks 来简化与智能合约的交互。

8. **Viem**: 这是一个用于管理以太坊账户的库。

9. **RainbowKit**: 这是一个用于构建 Web3 应用的 React 组件库。

10. **IPFS**: 学习如何使用星际文件系统（InterPlanetary File System）来存储和检索文件。

11. **ENS**: 以太坊域名服务（Ethereum Name Service）允许您将人类可读的名称映射到机器可读的地址。

12. **NFT 和代币化**: 理解非同质化代币（NFT）的概念以及如何将资产代币化。

13. **智能合约的安全措施**: 学习常见的智能合约安全问题和最佳实践。

14. **单元测试和集成测试**: 学习如何为智能合约编写测试，确保它们按预期工作。

15. **CI/CD**: 持续集成和持续部署的概念，以及如何自动化测试和部署流程。



### 项目根目录常见文件和目录

- **README.md**: 项目的说明文件，通常包含项目的介绍、安装步骤、使用方法等。
- **LICENSE**: 项目使用的许可证。
- **.gitignore**: 指定 Git 忽略跟踪的文件和文件夹列表。
- **node_modules/**: Node.js 项目中存放依赖项的目录。
- **packages/**: 包含项目各个包的源代码，可能是按功能模块划分的。
- **public/**: 包含静态资源文件，如 HTML、图片等，这些文件将被复制到构建输出中。
- **scripts/**: 包含用于构建、部署或其他自动化任务的脚本。
- **test/**: 包含项目测试代码。
- **.github/**: 包含 GitHub 相关的配置文件，如 issue 模板、workflows 等。

### Hardhat 相关文件

- **hardhat.config.js/ts**: Hardhat 的配置文件，定义了编译器设置、网络配置、部署脚本等。
- **packages/hardhat/contracts/**: 包含智能合约的 Solidity 源文件。
- **packages/hardhat/deploy/**: 包含部署智能合约的脚本和配置。
- **packages/hardhat/test/**: 包含智能合约的测试脚本。

### Next.js 相关文件

- **next.config.js**: Next.js 的配置文件，用于自定义服务器、构建设置等。
- **packages/nextjs/**: 包含 Next.js 应用的源代码。
- **packages/nextjs/pages/**: 包含 Next.js 页面组件，每个页面对应一个路由。
- **packages/nextjs/components/**: 包含可复用的 React 组件。
- **packages/nextjs/public/**: 包含 Next.js 应用的静态资源文件。
- **packages/nextjs/scaffold.config.ts**: 应用配置文件，用于自定义应用设置。

### TypeScript 和 ESLint 配置文件

- **tsconfig.json**: TypeScript 的配置文件，定义了编译选项和包含/排除规则。
- **.eslintrc.json** 或 **.eslintrc.js**: ESLint 的配置文件，定义了代码质量和代码风格规则。

### 其他配置文件

- **package.json**: 定义项目的依赖项、脚本和元数据。
- **yarn.lock**: Yarn 的依赖锁定文件，确保在不同环境中安装相同的依赖版本。




> Written with [StackEdit中文版](https://stackedit.cn/).
