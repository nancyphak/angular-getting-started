import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import { Promise } from "./promise";
import { IConnector } from "./iConnector";
import { HttpConnector } from "./httpConnector";
import { ICategoryService } from "./iCategoryService";
import { IoCName } from "./enum";
// @Injectable()
export class CategoryService implements ICategoryService {
    private categories: Array<any> = [];
    // private iconnector: IConnector;
    // constructor(iconnector: HttpConnector) {
    //     this.iconnector = iconnector;
    // }
    public getCategories(): Promise {
        let iconnector: IConnector = window.ioc.reslove(IoCName.IConnector);
        return iconnector.get("categories");
    }

    public createCategory(data: any): Promise {
        let iconnector: IConnector = window.ioc.reslove(IoCName.IConnector);
        return iconnector.post("categories", data);
    }
}