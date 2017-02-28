import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DefaultPage } from "./defaultPage";
import { SercurityRoute } from "./sercurityRoute";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";
import { CategoryService } from "./categoryService";
import { CategorySummary } from "./categorySummary";
import { TextBold } from "./textBold";
import { Page } from "./page";
import { InputForm } from "./inputForm";
@NgModule({
    imports: [BrowserModule, FormsModule, SercurityRoute, HttpModule],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, CategorySummary, TextBold, Page, InputForm],
    bootstrap: [DefaultPage],
    providers: [CategoryService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityModule { }
