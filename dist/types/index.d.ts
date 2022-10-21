import { ethers as _ethers } from "ethers";
import { Metamask } from "./Auth/_metamask";
import { WalletConnect } from "./Auth/_walletConnect";
export declare function useContract(contractAddress: string, abi: any, provider: any): _ethers.Contract;
export declare const useMetamask: typeof Metamask;
export declare const useWalletConnect: typeof WalletConnect;
export declare const ethers: typeof _ethers;
