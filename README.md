<h1 align="center">
  Web3 Wallet Connect v1.1.3
</h1>
<p align="center">
   Easily Integrate web3 wallets in your Dapp
    <br />
    <a href="https://www.npmjs.com/package/@saura3h/web3-connect">NPM Package</a>
    ·
    <a href="https://github.com/starc007/web3-wallet-connect/issues">Report Bug</a>
    ·
    <a href="https://github.com/starc007/web3-wallet-connect/issues">Request Feature</a>
    <a href="https://github.com/starc007/wallet-connect-boilerplate">Example</a>
  </p>

## Installation

Install web3-wallet connect with npm

```jsx
npm i @saura3h/web3-connect
```

## Example Usage

### Import Wallet

```jsx
import { useMetamask, useWalletConnect } from "@saura3h/web3-connect";
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
const _result = await connect._switchNetwork(chainId);
```

### Disconnect

```jsx
//FOR WALLETCONNECT
await connect._disconnectWC();
```

### Remove Listeners

```jsx
//FOR Metmask
await connect.removeListeners();
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

### Conncet Smart Contract

```jsx
import { useContract } from "@saura3h/web3-connect";
const contract = useContract(CONTRACT_ADDRESS, ABI, PROVIDER);
```

### import ethers

```jsx
import { ethers } from "@saura3h/web3-connect";
```

### Supported Wallets

- Metamask
- WalletConnect
- More coming soon

## 🍰 Contributing

Before Contributing please read [Contribute](Contribute.md)

## 💻 Built with

- Typescript
- Ether.js

## ❤️ Supporting the project

A simple star to this project repo is enough to keep me motivated on this project for days. If you find your self very much excited with this project let me know with a tweet.

Thanks!

or

<p align="left">
<a href="https://www.paypal.me/saurra3h"><img src="https://ionicabizau.github.io/badges/paypal.svg" alt="sponsor github profile readme generator"/>
</a>
 <a href='https://ko-fi.com/saurra3h' target='_blank'><img height='23' width="100" src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' alt='Buy Coffee for Saurabh' />
  </a>
 <a href='https://www.buymeacoffee.com/saurra3h' target='_blank'><img height='23' width="100" src='https://cdn.buymeacoffee.com/buttons/default-orange.png' alt='Buy Coffee for Saurabh' />
  </a>
</p>

## ➤ License

Distributed under the [MIT](LICENSE.txt) License. See [LICENSE](LICENSE.txt) for more information.

This readme was created with [readmi.xyz](https://readmi.xyz) ❤️
