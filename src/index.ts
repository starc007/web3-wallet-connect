import { ethers as _ethers } from "ethers";
import { Metamask } from "./Auth/_metamask";
import { WalletConnect } from "./Auth/_walletConnect";
export function useContract(contractAddress: string, abi: any, provider: any) {
  const contract = new _ethers.Contract(contractAddress, abi, provider);
  return contract;
}

export const useMetamask = Metamask;
export const useWalletConnect = WalletConnect;
export const ethers = _ethers;
