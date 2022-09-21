interface CurrencyType {
  name: string;
  symbol: string;
  decimals: number;
}

interface ChainDataType {
  chainId: string;
  chainName: string;
  nativeCurrency: CurrencyType;
  rpcUrls: string[];
  blockExplorerUrls?: string[];
}

interface ChainListType {
  [key: number]: ChainDataType;
}

export const ChainList: ChainListType = {
  1: {
    chainId: "0x1",
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://eth-mainnet.public.blastapi.io"],
    blockExplorerUrls: ["https://etherscan.io"],
  },
  3: {
    chainId: "0x3",
    chainName: "Ropsten Testnet",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_ropsten"],
    blockExplorerUrls: ["https://ropsten.etherscan.io"],
  },
  4: {
    chainId: "0x4",
    chainName: "Rinkeby Testnet",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_rinkeby"],
    blockExplorerUrls: ["https://rinkeby.etherscan.io"],
  },
  5: {
    chainId: "0x5",
    chainName: "Goerli Testnet",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    blockExplorerUrls: ["https://goerli.etherscan.io"],
  },
  80001: {
    chainId: "0x13881",
    chainName: "Mumbai Testnet",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  137: {
    chainId: "0x89",
    chainName: "Matic Mainnet",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mainnet.matic.quiknode.pro"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  56: {
    chainId: "0x39",
    chainName: "BSC Mainnet",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed2.binance.org"],
    blockExplorerUrls: ["https://bscscan.com/"],
  },
};
