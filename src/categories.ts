import { Component } from "@angular/core";
import { Router } from "@angular/router";
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
        this.categories = categoryService.getCategories();
    }

    public onEditClicked(id: any) {
        this.router.navigate(["editCategory", id]);
    }
    public onSummaryClicked(category: any) {
        this.selectedCategory = category;
    }
    public onNameValueChanged(name: string) {
        this.selectedCategory.name = name;
    }

}