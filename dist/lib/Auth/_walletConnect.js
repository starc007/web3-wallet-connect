"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletConnect = void 0;
var web3_provider_1 = require("@walletconnect/web3-provider");
var ethers_1 = require("ethers");
var ErrorHandler_1 = require("../Error/ErrorHandler");
var WalletConnect = /** @class */ (function () {
    function WalletConnect(_a) {
        var rpc = _a.rpc;
        this.rpc = rpc;
        this._provider = null;
        this._web3Provider = null;
        this._initWC();
    }
    WalletConnect.prototype._initWC = function () {
        this._provider = new web3_provider_1.default({
            rpc: this.rpc,
            qrcodeModalOptions: {
                mobileLinks: ["rainbow", "metamask", "trust"],
            },
        });
        this._web3Provider = new ethers_1.ethers.providers.Web3Provider(this._provider);
    };
    WalletConnect.prototype._connectWC = function () {
        return __awaiter(this, void 0, void 0, function () {
            var signer, address, chainId, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        // Enable session (triggers QR Code modal)
                        if (!this._provider)
                            this._initWC();
                        return [4 /*yield*/, this._provider.enable()];
                    case 1:
                        _a.sent();
                        signer = this._web3Provider.getSigner();
                        return [4 /*yield*/, signer.getAddress()];
                    case 2:
                        address = _a.sent();
                        return [4 /*yield*/, this._web3Provider.getNetwork()];
                    case 3:
                        chainId = _a.sent();
                        return [2 /*return*/, {
                                message: "Wallet connected",
                                success: true,
                                address: address,
                                chainId: chainId.chainId,
                            }];
                    case 4:
                        err_1 = _a.sent();
                        return [2 /*return*/, {
                                message: (0, ErrorHandler_1.ErrorHandler)(err_1),
                                success: false,
                                address: null,
                                chainId: null,
                            }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    WalletConnect.prototype._disconnectWC = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._provider.disconnect()];
                    case 1:
                        _a.sent();
                        this._provider = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletConnect.prototype.onNetworkChange = function (callback) {
        this._provider.on("chainChanged", function (chainId) {
            callback(chainId);
        });
    };
    WalletConnect.prototype.onAccountChange = function (callback) {
        this._provider.on("accountsChanged", function (accounts) {
            callback(accounts);
        });
    };
    WalletConnect.prototype._signMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var signer, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        signer = this._web3Provider.getSigner();
                        return [4 /*yield*/, signer.signMessage(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                success: true,
                                message: "Message signed",
                            }];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, {
                                success: false,
                                message: (0, ErrorHandler_1.ErrorHandler)(err_2),
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WalletConnect.prototype.getProviderWC = function () {
        return this._web3Provider;
    };
    WalletConnect.prototype._switchNetwork = function (chainId) {
        return __awaiter(this, void 0, void 0, function () {
            var id, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (isNaN(chainId))
                            return [2 /*return*/, { success: false, message: "Invalid chainId" }];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        id = "0x".concat(chainId.toString(16));
                        return [4 /*yield*/, this._web3Provider.send("wallet_switchEthereumChain", [
                                {
                                    chainId: id,
                                },
                            ])];
                    case 2:
                        _a.sent();
                        this._initWC();
                        return [2 /*return*/, {
                                message: "Network switched",
                                success: true,
                            }];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1.code === 4902) {
                            return [2 /*return*/, {
                                    message: (0, ErrorHandler_1.ErrorHandler)(error_1),
                                    success: false,
                                }];
                        }
                        else if (error_1.code === -32002) {
                            return [2 /*return*/, {
                                    success: false,
                                    message: (0, ErrorHandler_1.ErrorHandler)(error_1),
                                }];
                        }
                        else if (error_1.code === "SERVER_ERROR") {
                            return [2 /*return*/, {
                                    success: false,
                                    message: (0, ErrorHandler_1.ErrorHandler)(error_1),
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    success: false,
                                    message: (0, ErrorHandler_1.ErrorHandler)(error_1),
                                }];
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return WalletConnect;
}());
exports.WalletConnect = WalletConnect;
//# sourceMappingURL=_walletConnect.js.map