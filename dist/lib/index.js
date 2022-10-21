"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ethers = exports.useWalletConnect = exports.useMetamask = exports.useContract = void 0;
var ethers_1 = require("ethers");
var _metamask_1 = require("./Auth/_metamask");
var _walletConnect_1 = require("./Auth/_walletConnect");
function useContract(contractAddress, abi, provider) {
    var contract = new ethers_1.ethers.Contract(contractAddress, abi, provider);
    return contract;
}
exports.useContract = useContract;
exports.useMetamask = _metamask_1.Metamask;
exports.useWalletConnect = _walletConnect_1.WalletConnect;
exports.ethers = ethers_1.ethers;
//# sourceMappingURL=index.js.map