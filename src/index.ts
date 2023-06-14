import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
// import useMetamask from './Auth/_metamask';
// import useWalletConnect from "./Auth/_walletConnect";
// import { OkxWallet } from "./Auth/_okxWallet";

function useContract(
  contractAddress: string,
  abi: any,
  provider: Web3Provider
) {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  return contract;
}

// export {
//   Metamask as useMetamask,
//   WalletConnect as useWalletConnect,
//   ethers,
//   useContract,
//   OkxWallet as useOkxWallet,
// };

export { default as useMetamask } from "./Auth/_metamask";
export { default as useWalletConnect } from "./Auth/_walletConnect";
export { default as useOkxWallet } from "./Auth/_okxWallet";

export { useContract };

export { ethers };
