"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configcat_common_1 = require("configcat-common");
var ProjectConfig_1 = require("configcat-common/lib/ProjectConfig");
var HttpConfigFetcher = /** @class */ (function () {
    function HttpConfigFetcher() {
    }
    HttpConfigFetcher.prototype.fetchLogic = function (options, lastProjectConfig, callback) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4) {
                var etag = httpRequest.getResponseHeader("ETag");
                if (httpRequest.status === 200) {
                    callback(new ProjectConfig_1.ProjectConfig(new Date().getTime(), httpRequest.responseText, etag));
                }
                else if (httpRequest.status === 304) {
                    callback(new ProjectConfig_1.ProjectConfig(new Date().getTime(), JSON.stringify(lastProjectConfig.ConfigJSON), etag));
                }
                else {
                    options.logger.error("ConfigCat HTTPRequest error: " + httpRequest.statusText);
                    callback(lastProjectConfig);
                }
            }
        };
        httpRequest.open("GET", options.getUrl(), true);
        httpRequest.timeout = options.requestTimeoutMs;
        httpRequest.setRequestHeader("X-ConfigCat-UserAgent", "ConfigCat-JS/" + options.clientVersion);
        httpRequest.setRequestHeader("If-None-Match", lastProjectConfig ? lastProjectConfig.HttpETag : null);
        httpRequest.send(null);
    };
    return HttpConfigFetcher;
}());
exports.HttpConfigFetcher = HttpConfigFetcher;
