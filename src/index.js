const { ethers } = require("ethers");
const { useWalletConnect } = require("./Auth/_walletConnect");
const { useMetamask } = require("./Auth/_metamask");

function _connectContract(contractAddress, abi, provider) {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return contract;
}

module.exports = {
  useWalletConnect,
  useMetamask,
  ethers: ethers,
  useContract: _connectContract,
};
