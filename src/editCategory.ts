import { Component } from "@angular/core";
import { ActivatedRoute  } from "@angular/router";
@Component({ templateUrl: "src/editCategory.html" })
export class EditCategory {
    public routeActivated: ActivatedRoute  = null;;
    constructor(routeActived: ActivatedRoute ) {
        this.routeActivated = routeActived;
    }
}