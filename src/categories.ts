import { Component } from "@angular/core";
import { Router } from "@angular/router";
import routerConfig from "./routerConfig";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories {
    private router: Router = null;
    constructor(router: Router) {
        this.router = router;
    }
    public onRowClicked(id: any) {
        this.router.navigate([routerConfig.editCategory.path,id]);
    }
}