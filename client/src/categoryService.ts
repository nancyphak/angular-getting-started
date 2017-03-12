import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import { Promise } from "./promise";
export class CategoryService {
    private categories: Array<any> = [];
    public getCategories(): Promise {
        let iconnector = window.ioc.reslove("iconnector");
        return iconnector.get("categories");
    }

    public createCategory(data: any): Promise {
        let iconnector = window.ioc.reslove("iconnector");
        return iconnector.post("categories", data);
    }
}