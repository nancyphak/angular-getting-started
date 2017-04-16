import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "../_share/services/categoryService";
import routerConfig from "./../routerConfig";
import { AddCategoryModel } from "./addCategoryModel";
import { BasePage } from "../../../modules/common/index";
import { ICategoryService } from "../_share/services/iCategoryService";
import { IoCName } from "../../../modules/common/index";
@Component({
    templateUrl: "src/modules/inventory/category/addCategory.html"
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
        let categoryService: ICategoryService = window.ioc.reslove(IoCName.ICategoryService);
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