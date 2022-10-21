export declare class WalletConnect {
    rpc: any;
    _provider: any;
    _web3Provider: any;
    constructor({ rpc }: any);
    private _initWC;
    _connectWC(): Promise<{
        message: string;
        success: boolean;
        address: any;
        chainId: any;
    }>;
    _disconnectWC(): Promise<void>;
    onNetworkChange(callback: (chainId: string) => any): void;
    onAccountChange(callback: (accounts: string[]) => any): void;
    _signMessage(message: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getProviderWC(): any;
    _switchNetwork(chainId: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
