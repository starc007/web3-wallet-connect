import { ChainList } from "./ChainList";

// Connect wallet
const useConnectWallet = async () => {
  if (!(window as any).ethereum) {
    return {
      message: "No wallet detected",
      success: false,
      address: null,
    };
  }
  try {
    const accounts = await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });
    return {
      message: "Wallet connected",
      success: true,
      address: accounts[0],
    };
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
      address: null,
    };
  }
};

// Switch network
const useSwitchNetwork = async (chainId: number) => {
  if (!(window as any).ethereum) {
    return {
      message: "No wallet detected",
      success: false,
    };
  }

  if (ChainList[chainId] === undefined) {
    return {
      message: "ChainId not supported",
      success: false,
    };
  }

  try {
    await (window as any).ethereum.request({
      method: "wallet_addEthereumChain",
      params: [ChainList[chainId]],
    });
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
};

// On Change Network
const onNetworkChange = async (chain: number) => {
  // check if netowrk is changed
  let chainId = await (window as any).ethereum.request({
    method: "eth_chainId",
  });
  chainId = parseInt(chainId, 16);
  if (chainId == chain) {
    return {
      message: "Network not changed",
      success: false,
    };
  }
  return {
    message: "Network changed",
    success: true,
  };
};

export { useConnectWallet, useSwitchNetwork, onNetworkChange };
