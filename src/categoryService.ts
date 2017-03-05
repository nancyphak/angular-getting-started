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
    // public getCategories(): Promise {
    //     let def = new Promise();
    //     // def.reslove([{
    //     //     "id": 1,
    //     //     "name": "A",
    //     //     "type": "type A",
    //     //     "description": "description A",
    //     //     "photo": "photo.jpg"
    //     // }]);
    //     // def.reject("error get list category");
    //     this.http.get('ddd/api/categories.json').map(this.handleData).subscribe((data: any) => { def.reslove(data) }, (error: any) => {
    //         def.reject(error);
    //     });
    //     return def;
    // }
    public getCategories(): Promise {
        return this.iconnector.get("api/categories.json");
    }
    protected handleData(response: Response) {
        return response.json();
    }
}