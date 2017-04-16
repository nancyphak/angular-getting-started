"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("../models/promise");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
// import { Observable } from "rxjs/Observable";
// import appConfig from "./appConfig";
const appHelper_1 = require("../helper/appHelper");
// @Injectable()
class HttpConnector {
    get(url) {
        let http = window.ioc.resolve(http_1.Http);
        let defer = promise_1.PromiseFactory.create();
        let rootUrl = appHelper_1.default.appConfig.rootApi;
        url = rootUrl + url;
        http.get(url)
            .map((response) => response.json())
            .subscribe((data) => defer.resolve(data), (error) => defer.reject(error));
        return defer;
    }
    post(url, data) {
        let defer = promise_1.PromiseFactory.create();
        // url = this.rootApi + url;
        // this.http.post(url, data)
        //     .map((response: Response) => response.json())
        //     .subscribe((data: any) => defer.resolve(data), (error: any) => defer.reject(error));
        return defer;
    }
}
exports.HttpConnector = HttpConnector;
//# sourceMappingURL=http-connector.service.js.map