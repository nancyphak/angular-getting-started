import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import { Promise } from "./promise";
@Injectable()
export class CategoryService {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    public getCategories(): Promise {
        let def = new Promise();
        this.http.get("api/categories.json").map(this.handleResponse)
            .subscribe((data: any) => def.reslove(data), (errors: any) => def.reject(errors));
        return def;
    }
    private handleResponse(response: Response) {
        return response.json();
    }
}