import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    templateUrl: "src/modules/inventory/category/editCategory.html"
})
export class EditCategory {
    private activatedRoute: ActivatedRoute = null;
    constructor(activatedRoute: ActivatedRoute) {
        this.activatedRoute = activatedRoute;
    }
}