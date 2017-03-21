import { Component } from "@angular/core";
import { Router } from "@angular/router";
import routerConfig from "./routerConfig";
import { CategoryService } from "./categoryService";
import { BasePage } from "./basePage";
import { ICategoryService } from "./iCategoryService";
import { IoCName } from "./enum";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories extends BasePage {
    public categories: Array<any> = [];
    public selectedCategory: any = null;
    constructor(router: Router) {
        super(router);
        this.router = router;
        let self = this;
        let categoryService: ICategoryService = window.ioc.reslove(IoCName.ICategoryService);
        categoryService.getCategories().then((categories: Array<any>) => { self.categories = categories }).error((error: any) => {
            console.log(error);
        });
    }
    public onEditClicked(id: any) {
        this.navigate(routerConfig.editCategory.path, id);
    }
    public onSummaryClicked(category: any) {
        this.selectedCategory = category;
    }
    public onNameValuedChanged(name: string) {
        this.selectedCategory.name = name;
    }
}