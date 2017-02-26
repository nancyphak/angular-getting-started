import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SercurityRoute } from "./sercurityRoute";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";
import { CategoryService } from "./categoryService";
import { CategorySummary } from "./categorySummary";
import { BackgroundColor } from "./backgroundColor";
@NgModule({
    imports: [BrowserModule, FormsModule, SercurityRoute],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, CategorySummary, BackgroundColor],
    bootstrap: [DefaultPage],
    providers: [CategoryService]
})
export class SecurityModule { }
