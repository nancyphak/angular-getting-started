import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
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
import { FormInput } from "./formInput";
import { Page } from "./page";
@NgModule({
    imports: [BrowserModule, FormsModule, SercurityRoute],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, CategorySummary, BackgroundColor, FormInput, Page],
    bootstrap: [DefaultPage],
    providers: [CategoryService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule { }
