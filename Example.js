import { useMetamask, useWalletConnect } from "web3-wallet-connect";

const rpcObject = {
  137: "https://rpc-mainnet.maticvigil.com",
  80001: "https://rpc-mumbai.maticvigil.com",
  56: "https://bsc-dataseed.binance.org",
};

const connect = new useWalletConnect({ rpc: rpcObject });

const _connectWallet = async () => {
  const wallet = await connect._connectWC();
  console.log(wallet);
};
