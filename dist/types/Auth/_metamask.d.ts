export declare class Metamask {
    _provider: any;
    constructor();
    private _initMM;
    _connectMM(): Promise<{
        message: string;
        success: boolean;
        address: any;
        chainId: any;
    }>;
    onNetworkChange(callback: (chainId: string) => any): void;
    onAccountChange(callback: (accounts: string[]) => any): void;
    _signMessage(message: string): Promise<{
        message: string;
        success: boolean;
    }>;
    removeListeners(): void;
    getProviderMM(): any;
    _switchNetwork(chainId: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
