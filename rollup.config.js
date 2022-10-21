import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";
import inject from "@rollup/plugin-inject";
import typescript from "rollup-plugin-typescript2";
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.es5.js",
      format: "es",
      globals: {
        ethers: "ethers",
        "@walletconnect/web3-provider": "WalletConnectProvider",
      },
    },
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      name: "Auth",
      globals: {
        ethers: "ethers",
        "@walletconnect/web3-provider": "WalletConnectProvider",
      },
    },
  ],
  external: ["ethers", "@walletconnect/web3-provider"],
  plugins: [
    nodePolyfills(),
    inject({
      modules: {
        process: "process-es6",
        Buffer: ["buffer", "Buffer"],
      },
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: false,
      clean: true,
    }),
    json(),
  ],
};
