import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "./categoryService";
import routerConfig from "./routerConfig";
import { AddCategoryModel } from "./addCategoryModel";
import { BasePage } from "./basePage";
@Component({
    templateUrl: "src/addCategory.html"
})
export class AddCategory extends BasePage {
    public category: AddCategoryModel = new AddCategoryModel();
    constructor(router: Router) {
        super(router);
    }
    protected onReady() {
        console.log("on ready");
    }
    public onCreateClicked() {
        let self = this;
        let categoryService = window.ioc.reslove("categoryService");
        categoryService.createCategory(this.category).then((data: any) => {
            self.navigate(routerConfig.categories.path);
        }).error((error: any) => {
            console.log(error);
        });
    }
    public onCancelClicked() {
        this.navigate(routerConfig.categories.path);
    }
}