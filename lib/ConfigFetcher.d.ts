import { IConfigFetcher } from "configcat-common";
import { ProjectConfig } from "configcat-common/lib/ProjectConfig";
import { OptionsBase } from "configcat-common/lib/ConfigCatClientOptions";
export declare class HttpConfigFetcher implements IConfigFetcher {
    constructor();
    fetchLogic(options: OptionsBase, lastProjectConfig: ProjectConfig, callback: (newProjectConfig: ProjectConfig) => void): void;
}
export default IConfigFetcher;
