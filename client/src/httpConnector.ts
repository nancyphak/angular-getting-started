import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { IConnector } from "./iConnector";
import { Promise, PromiseFactory } from "./promise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import appConfig from "./appConfig";
export class HttpConnector {
    public get(url: string): Promise {
        let def = PromiseFactory.create();
        def.reslove([{ id: 1, name: "a", description: "a", type: "a", photo: "photo.jpg" }]);
        return def;
    }
    public post(url: string, data: any): Promise {
        let def = PromiseFactory.create();
        def.reslove([{ id: 2, name: "ad", description: "a", type: "a", photo: "photo.jpg" }]);
        return def;
    }
    private handlePromise(response: Response) {
        return response.json();
    }
}