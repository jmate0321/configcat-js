import * as configcatcommon from "configcat-common";
import { IConfigCatClient } from "configcat-common/lib/ConfigCatClient";
import { LogLevel } from "configcat-common/lib/index";
/** Create an instance of ConfigCatClient and setup Auto polling with default options.*/
export declare function createClient(apiKey: string): IConfigCatClient;
/**
 * Create an instance of ConfigCatClient and setup Auto polling.
 * @param {string} apiKey - ApiKey to access your configuration.
 * @param options - Options for Auto polling
 */
export declare function createClientWithAutoPoll(apiKey: string, options?: IJSAutoPollOptions): IConfigCatClient;
/**
 * Create an instance of ConfigCatClient and setup Manual polling.
 * @param {string} apiKey - ApiKey to access your configuration.
 * @param options - Options for Manual polling
 */
export declare function createClientWithManualPoll(apiKey: string, options?: IJSManualPollOptions): IConfigCatClient;
/**
 * Create an instance of ConfigCatClient and setup Lazy loading.
 * @param {string} apiKey - ApiKey to access your configuration.
 * @param options - Options for Lazy loading
 */
export declare function createClientWithLazyLoad(apiKey: string, options?: IJSLazyLoadingOptions): IConfigCatClient;
export declare function createConsoleLogger(logLevel: LogLevel): configcatcommon.IConfigCatLogger;
export interface IJSAutoPollOptions extends configcatcommon.IAutoPollOptions {
}
export interface IJSLazyLoadingOptions extends configcatcommon.ILazyLoadingOptions {
}
export interface IJSManualPollOptions extends configcatcommon.IManualPollOptions {
}
