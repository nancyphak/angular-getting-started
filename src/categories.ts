import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "./categoryService";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories {

    private router: Router = null;
    public categories: Array<any> = [];
    public categorySelected: any = null;
    public name: string = null;
    constructor(router: Router, categoryService: CategoryService) {
        this.router = router;
        this.categories = categoryService.getCategories();
    }

    public onEditClicked(id: any) {
        console.log('edit');
        this.router.navigate(["editCategory", id]);
    }

    public onSummaryClicked(category: any) {
        console.log('summary');
        this.categorySelected = category;
    }

    public onCategoryNameChanged(name: string) {
        this.name = name;
        this.categorySelected.name = name;
    }
}