import { ethers } from "ethers";
import Metamask from "./Auth/_metamask";
import WalletConnect from "./Auth/_walletConnect";

function _connectContract(contractAddress, abi, provider) {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return contract;
}

export {
  Metamask as useMetamask,
  WalletConnect as useWalletConnect,
  _connectContract as useContract,
  ethers,
};
