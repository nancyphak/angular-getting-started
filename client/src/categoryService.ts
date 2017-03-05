import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import { Promise } from "./promise";
import { IConnector } from "./iConnector";
import { HttpConnector } from "./httpConnector";
@Injectable()
export class CategoryService {
    private categories: Array<any> = [];
    // private http: Http = null;
    // constructor(http: Http) {
    //     this.http = http;
    // }
    private iconnector: IConnector;
    constructor(iconnector: HttpConnector) {
        this.iconnector = iconnector;
    }
    public getCategories(): Promise {
        return this.iconnector.get("api/categories.json");
    }
    
}