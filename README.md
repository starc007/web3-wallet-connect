<h1 align="center">
  Web3 Wallet Connect
</h1>

Easily Integrate web3 wallets in your Dapp

<img src="https://avatars.githubusercontent.com/u/6078720?s=200&v=4" height="15"/> See package [visit](https://www.npmjs.com/package/web3-wallet-connect)

## Installation

Install web3-wallet connect with npm

```bash
  npm i web3-wallet-connect
```

## Example Usage

### Import Wallet

```jsx
import { useMetamask, useWalletConnect } from "web3-wallet-connect";
```

### Create wallet Object

```jsx
// for Metamask object
const connect = new useMetamask();

// for WalletConnect Object
// pass rpc url object.
const connect = new useWalletConnect({ rpc: rpcUrlObject });
```

### Connect to Wallet

```jsx
//for Metamask
const wallet = await connect._connectMM();

//for WalletConnect
const wallet = await connect._connectWC();
```

### Network Change

```jsx
// This fn accepts a callback function
connect.onNetworkChange(cb);
const cb = (chainId) => {
  console.log(parseInt(chainId));
};
```

### Account Change

```jsx
// This fn accepts a callback function
connect.onAccountChange(cb);
const cb = (walletAddress) => {
  console.log(walletAddress);
};
```

### Switch Network

```jsx
//chainId should be integer eg 1,137,56,etc
const _result = await _switchNetwork(chainId);
```

### Disconnect

```jsx
//FOR WALLETCONNECT
await connect._disconnectWC();
```

### Provider

```jsx
// for metamask
const provider = connect.getProviderMM();

//for WalletConnect
const provider = connect.getProviderWC();
```

### Sign Message

```jsx
// For signing the message]
const result = await connect._signMessage(message);
```

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
