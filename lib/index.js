"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configcatcommon = require("configcat-common");
var ConfigFetcher_1 = require("./ConfigFetcher");
var Cache_1 = require("./Cache");
/** Create an instance of ConfigCatClient and setup Auto polling with default options.*/
function createClient(apiKey) {
    return this.createClientWithAutoPoll(apiKey);
}
exports.createClient = createClient;
/**
 * Create an instance of ConfigCatClient and setup Auto polling.
 * @param {string} apiKey - ApiKey to access your configuration.
 * @param options - Options for Auto polling
 */
function createClientWithAutoPoll(apiKey, options) {
    return configcatcommon.createClientWithAutoPoll(apiKey, { configFetcher: new ConfigFetcher_1.HttpConfigFetcher(), cache: new Cache_1.LocalStorageCache() }, options);
}
exports.createClientWithAutoPoll = createClientWithAutoPoll;
/**
 * Create an instance of ConfigCatClient and setup Manual polling.
 * @param {string} apiKey - ApiKey to access your configuration.
 * @param options - Options for Manual polling
 */
function createClientWithManualPoll(apiKey, options) {
    return configcatcommon.createClientWithManualPoll(apiKey, { configFetcher: new ConfigFetcher_1.HttpConfigFetcher(), cache: new Cache_1.LocalStorageCache() }, options);
}
exports.createClientWithManualPoll = createClientWithManualPoll;
/**
 * Create an instance of ConfigCatClient and setup Lazy loading.
 * @param {string} apiKey - ApiKey to access your configuration.
 * @param options - Options for Lazy loading
 */
function createClientWithLazyLoad(apiKey, options) {
    return configcatcommon.createClientWithLazyLoad(apiKey, { configFetcher: new ConfigFetcher_1.HttpConfigFetcher(), cache: new Cache_1.LocalStorageCache() }, options);
}
exports.createClientWithLazyLoad = createClientWithLazyLoad;
function createConsoleLogger(logLevel) {
    return configcatcommon.createConsoleLogger(logLevel);
}
exports.createConsoleLogger = createConsoleLogger;
