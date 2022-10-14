import { ethers } from "ethers";
import { ErrorHandler } from "../Error/ErrorHandler";
const { ethereum } = window;

export default class Metamask {
  constructor() {
    this._provider = null;
    this.#_initMM();
  }

  #_initMM() {
    if (ethereum) {
      this._provider = new ethers.providers.Web3Provider(ethereum);
    } else {
      console.log("Metamask install karle BSDK");
      this._provider = null;
    }
  }

  async _connectMM() {
    try {
      if (!this._provider) this.#_initMM();
      const accounts = await this._provider.send("eth_requestAccounts", []);
      const network = await this._provider.getNetwork();
      return {
        message: "Wallet connected",
        success: true,
        address: accounts[0],
        chainId: network.chainId,
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

  onNetworkChange(callback) {
    if (!ethereum) return;
    ethereum.on("chainChanged", (network) => {
      callback(network);
    });
  }

  onAccountChange(callback) {
    if (!ethereum) return;
    ethereum.on("accountsChanged", (accounts) => {
      callback(accounts);
    });
  }

  async _signMessage(message) {
    try {
      const signer = this._provider.getSigner();
      await signer.signMessage(message);
      return {
        message: "Message signed",
        success: true,
      };
    } catch (err) {
      return {
        message: ErrorHandler(err),
        success: false,
      };
    }
  }

  removeListeners() {
    if (ethereum && "removeAllListeners" in ethereum) {
      ethereum.removeAllListeners();
    }
  }

  getProviderMM() {
    return this._provider;
  }

  async _switchNetwork(chainId) {
    try {
      await this._provider.send("wallet_switchEthereumChain", [
        {
          chainId: `0x${chainId.toString(16)}`,
        },
      ]);
      return {
        message: "Network switched",
        success: true,
      };
    } catch (error) {
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

  _contract(address, abi, provider) {
    if (!provider) return;
    return new ethers.Contract(address, abi, provider);
  }

  _ethers() {
    return ethers;
  }
}
