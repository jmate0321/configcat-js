"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorageCache = /** @class */ (function () {
    function LocalStorageCache() {
        this.cache = {};
    }
    LocalStorageCache.prototype.Set = function (apiKey, config) {
        this.cache[apiKey] = config;
        try {
            localStorage.setItem(this.getLocalStorageKey(apiKey), btoa(JSON.stringify(config)));
        }
        catch (ex) {
            // local storage is unavailable
        }
    };
    LocalStorageCache.prototype.Get = function (apiKey) {
        var config = this.cache[apiKey];
        if (config) {
            return config;
        }
        try {
            var configString = localStorage.getItem(this.getLocalStorageKey(apiKey));
            if (configString) {
                var config_1 = JSON.parse(atob(configString));
                if (config_1) {
                    this.cache[apiKey] = config_1;
                    return config_1;
                }
            }
        }
        catch (ex) {
            // local storage is unavailable or invalid cache value in localstorage
        }
        return null;
    };
    LocalStorageCache.prototype.getLocalStorageKey = function (apiKey) {
        return "ConfigCat_v4" + apiKey;
    };
    return LocalStorageCache;
}());
exports.LocalStorageCache = LocalStorageCache;
