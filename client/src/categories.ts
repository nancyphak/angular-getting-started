import { Component } from "@angular/core";
import { Router } from "@angular/router";
import routerConfig from "./routerConfig";
import { CategoryService } from "./categoryService";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories {
    private router: Router = null;
    public categories: Array<any> = [];
    public selectedCategory: any = null;
    constructor(router: Router, categoryService: CategoryService) {
        this.router = router;
        let self = this;
        categoryService.getCategories().then((categories: Array<any>) => { self.categories = categories }).error((error: any) => {
            console.log(error);
        });
    }
    public onEditClicked(id: any) {
        this.router.navigate([routerConfig.editCategory.path, id]);
    }
    public onSummaryClicked(category: any) {
        this.selectedCategory = category;
    }
    public onNameValuedChanged(name: string) {
        this.selectedCategory.name = name;
    }
}