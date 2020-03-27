import { ICache } from "configcat-common";
import { ProjectConfig } from "configcat-common/lib/ProjectConfig";
export declare class LocalStorageCache implements ICache {
    cache: {
        [apiKey: string]: ProjectConfig;
    };
    Set(apiKey: string, config: ProjectConfig): void;
    Get(apiKey: string): ProjectConfig;
    private getLocalStorageKey;
}
