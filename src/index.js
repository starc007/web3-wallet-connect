import WalletConnect from "./Auth/_walletConnect";
import Metamask from "./Auth/_metamask";
import { ethers } from "ethers";

const _connectContract = (contractAddress, abi, provider) => {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return contract;
};

export {
  WalletConnect as useWalletConnect,
  Metamask as useMetamask,
  ethers,
  _connectContract as useContract,
};
