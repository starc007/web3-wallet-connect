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

// Switch Network if chain is not in metamask then add it
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
    return {
      message: "Network switched",
      success: true,
    };
  } catch (error: any) {
    return {
      message: error.message,
      success: false,
    };
  }
};

// Stay on Specific Network if network changes
const useNetworkChange = async (chainId: number) => {
  (window as any).ethereum.on(
    "chainChanged",
    async (currentChainId: string) => {
      if (parseInt(currentChainId, 16) !== chainId) {
        console.log("Network changed");
        await useSwitchNetwork(chainId);
      }
    }
  );
};

export { useConnectWallet, useSwitchNetwork, useNetworkChange };
