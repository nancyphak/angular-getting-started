// import { Injectable } from "@angular/core";
import { IConnector } from "./iconnector";
import { Promise, PromiseFactory } from "../models/promise";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
// import { Observable } from "rxjs/Observable";
// import appConfig from "./appConfig";
import appHelper from "../helper/appHelper";
// @Injectable()
export class HttpConnector  implements IConnector{
    public get(url: string): Promise {
        let http : Http = window.ioc.resolve(Http);
        let defer = PromiseFactory.create();
        let rootUrl = appHelper.appConfig.rootApi;
        url = rootUrl + url;
        http.get(url)
            .map((response: Response) => response.json())
            .subscribe((data: any) => defer.resolve(data), (error: any) => defer.reject(error));
        return defer;
    }

    public post(url: string, data: any): Promise {
        let defer = PromiseFactory.create();
        // url = this.rootApi + url;

        // this.http.post(url, data)
        //     .map((response: Response) => response.json())
        //     .subscribe((data: any) => defer.resolve(data), (error: any) => defer.reject(error));
        return defer;
    }
}