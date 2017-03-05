import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { IConnector } from "./iConnector";
import { Promise, PromiseFactory } from "./promise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
@Injectable()
export class HttpConnector implements IConnector {
    private http: Http = null;
    constructor(http: Http) {
        this.http = http;
    }
    public get(url: string): Promise {
        let def = PromiseFactory.create();
        this.http.get(url).map(this.handlePromise).subscribe(
            (data: any) => def.reslove(data),
            (error: any) => def.reject(error))
        return def;
    }
    private handlePromise(response: Response) {
        return response.json();
    }
}