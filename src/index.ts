import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { Metamask } from "./Auth/_metamask";
import { WalletConnect } from "./Auth/_walletConnect";
import { OkxWallet } from "./Auth/_okxWallet";

function useContract(
  contractAddress: string,
  abi: any,
  provider: Web3Provider
) {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return contract;
}

export {
  Metamask as useMetamask,
  WalletConnect as useWalletConnect,
  ethers,
  useContract,
  OkxWallet as useOkxWallet,
};
