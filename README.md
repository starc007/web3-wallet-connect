<h1 align="center">
  Web3 Wallet Connect
</h1>

Connect your Dapp to metamask, switch network, track network and account change in one line code.

<img src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" height="15" alt="sponsor github profile readme generator"/> See package [visit](https://www.npmjs.com/package/web3-wallet-connect)

## Installation

Install web3-wallet connect with npm

```bash
  npm i web3-wallet-connect
```

## Example Usage

### Connect Wallet

```jsx
import { useConnectWallet } from "web3-wallet-connect";

const { address, success, message } = await useConnectWallet();
```

### Switch Network

useSwitchNetwork(chainId) accepts a argument

```jsx
import { useSwitchNetwork } from "web3-wallet-connect";

# if you want to switch to polygon mainnet just pass chainId of polygon mainnet

const { success,message } = await useSwitchNetwork(137);
```

### Network Change

useNetworkChange(fn) accepts a callback function

```jsx
import { useNetworkChange } from "web3-wallet-connect";

# Tracks the network change

const cb = (chainId)=> {
    console.log(parseInt(chainId));
}

useNetworkChange(cb);
```

### Account Change

useAccountChange(fn) accepts a callback function

```jsx
import { useAccountChange } from "web3-wallet-connect";

# Tracks the Account change

const cb = (walletAddress)=> {
    console.log(walletAddress);
}

useAccountChange(cb);
```

## Supported Chains

Following Chains are Supported for now:-

#### 1. Ethereum

    Mainnet
    Ropsten Testnet
    Rinkbey Testnet
    Goerli Testnet

#### 2. Polygon

    Mainnet
    Mumbai Testnet

#### 3. Binance

    Mainnet
    Binance Testnet

## 🍰 Contributing

Before Contributing please read [Contribute](Contribute.md)

## 💻 Built with

- [Typescript](https://www.typescriptlang.org/)

## 🙏 Support

<p align="left">
<a href="https://www.paypal.me/saurra3h"><img src="https://ionicabizau.github.io/badges/paypal.svg" alt="sponsor github profile readme generator"/>
</a>
 <a href='https://ko-fi.com/saurra3h' target='_blank'><img height='23' width="100" src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' alt='Buy Coffee for rahuldkjain' />
  </a>
</p>

## License

[MIT](https://choosealicense.com/licenses/mit/)

<hr>
<p align="center">
Developed with ❤️ in India 🇮🇳 
</p>
