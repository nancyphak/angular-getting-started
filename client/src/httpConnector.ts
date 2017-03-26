import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { IConnector } from "./iConnector";
import { Promise, PromiseFactory } from "./promise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import appConfig from "./appConfig";
import appHelper from "./appHelper";
// @Injectable()
export class HttpConnector implements IConnector {
    // private http: Http = null;
    // constructor(http: Http) {
    //     this.http = http;
    // }
    constructor() { }
    public get(url: string): Promise {
        let def = PromiseFactory.create();
        let route = appConfig.rootApiUrl + url;
        // route = "http://localhost:3000/api/categories.json";

        let http: Http = appHelper.injector.get(Http);
        http.get(route).map(this.handlePromise).subscribe(
            (data: any) => def.reslove(data),
            (error: any) => def.reject(error))
        // def.reslove([{ id: 1, name: "aa", description: "aa", photo: "photo.jpg", type: "aa" }]);
        return def;
    }
    public post(url: string, data: any): Promise {
        let def = PromiseFactory.create();
        let route = appConfig.rootApiUrl + url;
        route = "http://localhost:3000/api/";
        // this.http.post(route, data).map(this.handlePromise).subscribe(
        //     (data: any) => def.reslove(data),
        //     (error: any) => def.reject(error)
        // )
        def.reslove([{ id: 2, name: "bb", description: "bb", photo: "photo.jpg", type: "bb" }]);
        return def;
    }
    private handlePromise(response: Response) {
        return response.json();
    }
}