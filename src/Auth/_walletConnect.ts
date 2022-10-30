import WalletConnectProvider from "@walletconnect/web3-provider";
import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { ErrorHandler } from "../Error/ErrorHandler";

interface rpcType {
  [key: number]: string;
}

export class WalletConnect {
  rpc: rpcType;
  _provider: any;
  _web3Provider: Web3Provider | null;
  constructor({ rpc }: { rpc: rpcType }) {
    this.rpc = rpc;
    this._provider = null;
    this._web3Provider = null;
    this._initWC();
  }

  private _initWC() {
    this._provider = new WalletConnectProvider({
      rpc: this.rpc, // Required
      qrcodeModalOptions: {
        mobileLinks: ["rainbow", "metamask", "trust"],
      },
    });
    this._web3Provider = new ethers.providers.Web3Provider(this._provider);
  }

  async _connectWC() {
    try {
      // Enable session (triggers QR Code modal)
      if (!this._provider) this._initWC();
      await this._provider.enable();
      const signer = this._web3Provider?.getSigner();
      const address = await signer?.getAddress();
      const chainId = await this._web3Provider?.getNetwork();
      return {
        message: "Wallet connected",
        success: true,
        address: address,
        chainId: chainId?.chainId,
      };
    } catch (err) {
      return {
        message: ErrorHandler(err),
        success: false,
        address: null,
        chainId: null,
      };
    }
  }

  async _disconnectWC() {
    await this._provider.disconnect();
    this._provider = null;
  }

  onNetworkChange(callback: (chainId: string) => any) {
    this._provider.on("chainChanged", (chainId: string) => {
      callback(chainId);
    });
  }

  onAccountChange(callback: (accounts: string[]) => any) {
    this._provider.on("accountsChanged", (accounts: string[]) => {
      callback(accounts);
    });
  }

  async _signMessage(message: string) {
    try {
      const signer = this._web3Provider?.getSigner();
      const signature = await signer?.signMessage(message);
      return {
        success: true,
        message: "Message signed",
        signature: signature,
      };
    } catch (err) {
      return {
        success: false,
        message: ErrorHandler(err),
        signature: null,
      };
    }
  }

  getProviderWC() {
    return this._web3Provider;
  }

  async _switchNetwork(chainId: number) {
    if (isNaN(chainId)) return { success: false, message: "Invalid chainId" };
    if (this._web3Provider === null)
      return { success: false, message: "wallet not connected" };
    try {
      let id = `0x${chainId.toString(16)}`;
      await this._web3Provider?.send("wallet_switchEthereumChain", [
        {
          chainId: id,
        },
      ]);
      this._initWC();
      return {
        message: "Network switched",
        success: true,
      };
    } catch (error: any) {
      if (error.code === 4902) {
        return {
          message: ErrorHandler(error),
          success: false,
        };
      } else if (error.code === -32002) {
        return {
          success: false,
          message: ErrorHandler(error),
        };
      } else if (error.code === "SERVER_ERROR") {
        return {
          success: false,
          message: ErrorHandler(error),
        };
      } else {
        return {
          success: false,
          message: ErrorHandler(error),
        };
      }
    }
  }
}
