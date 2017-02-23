import { Component } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { CategoryService } from "./categoryService";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories {
    public route: Router = null;
    public selectedCategory: any = null;
    public categories: Array<any> = [];
    constructor(route: Router, categoryService: CategoryService) {
        this.route = route;
        this.categories = categoryService.getCategories();
    }
    public onEditClicked(id: any) {
        this.route.navigate(["/editCategory", id]);
    }
    public onSummaryClicked(category: any) {
        this.selectedCategory = category;
    }
    public onNameChanged(name: string) {
        this.selectedCategory.name = name;
    }
}
