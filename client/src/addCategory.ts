import { Component } from "@angular/core";
import { CategoryService } from "./categoryService";
@Component({
    templateUrl: "src/addCategory.html"
})
export class AddCategory {
    private categoryService: CategoryService;
    private category:any={};
    constructor(categoryService: CategoryService) {
        this.categoryService = categoryService;
    }
    public onCreateClicked() {
        this.categoryService.createCategory(this.category).then((data:any)=>{
            console.log("create success", data);
        });
    }
}