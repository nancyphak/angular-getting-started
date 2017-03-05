import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "./categoryService";
import routerConfig from "./routerConfig";
@Component({
    templateUrl: "src/addCategory.html"
})
export class AddCategory {
    public category:any={};
    private router: Router = null;
    private categoryService: CategoryService = null;
    constructor(categoryService: CategoryService, router: Router) {
        this.categoryService = categoryService;
        this.router = router;
    }
    public onCreateClicked() {
        let self = this;
        this.categoryService.createCategory(this.category).then((data: any) => {
            self.router.navigate([routerConfig.categories.path]);
        }).error((error: any) => {
            console.log(error);
        });
    }
}