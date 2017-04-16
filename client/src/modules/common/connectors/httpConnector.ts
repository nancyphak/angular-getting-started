import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { IConnector } from "./iConnector";
import { Promise, PromiseFactory } from "../models/promise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import appHelper from "../helpers/appHelper";
// @Injectable()
export class HttpConnector implements IConnector {
    // private http: Http = null;
    // constructor(http: Http) {
    //     this.http = http;
    // }
    constructor() { }
    public get(url: string): Promise {
        let def = PromiseFactory.create();
        let route = appHelper.config.rootApiUrl + url;
        // route = "http://localhost:3000/api/categories.json";

        let http: Http = window.ioc.reslove(Http);
        http.get(route).map(this.handlePromise).subscribe(
            (data: any) => def.reslove(data),
            (error: any) => def.reject(error))
        // def.reslove([{ id: 1, name: "aa", description: "aa", photo: "photo.jpg", type: "aa" }]);
        return def;
    }
    public post(url: string, data: any): Promise {
        let def = PromiseFactory.create();
        let route = appHelper.config.rootApiUrl + url;
        // route = "http://localhost:3000/api/";
        let http: Http = window.ioc.reslove(Http);
        http.post(route, data).map(this.handlePromise).subscribe(
            (data: any) => def.reslove(data),
            (error: any) => def.reject(error)
        )
        // def.reslove([{ id: 2, name: "bb", description: "bb", photo: "photo.jpg", type: "bb" }]);
        return def;
    }
    private handlePromise(response: Response) {
        return response.json();
    }
}