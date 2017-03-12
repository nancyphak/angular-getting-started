import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import { Promise } from "./promise";
import { IConnector } from "./iConnector";
import { HttpConnector } from "./httpConnector";
import appConfig from "./appConfig";
@Injectable()
export class CategoryService {
    private categories: Array<any> = [];
    private iconnector: IConnector;
    constructor(iconnector: HttpConnector) {
        this.iconnector = iconnector;
    }
    public getCategories(): Promise {
        return this.iconnector.get(appConfig.routeApi.getCategories);
    }
    public createCategory(data: any): Promise {
        return this.iconnector.post(appConfig.routeApi.createCategory, data);
    }

}