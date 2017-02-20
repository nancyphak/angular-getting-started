import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories {

    private router: Router = null;
    constructor(router: Router) {
        this.router = router;
    }

    public onRowClick(id: any) {
        this.router.navigate(["editCategory", id]);
    }
}