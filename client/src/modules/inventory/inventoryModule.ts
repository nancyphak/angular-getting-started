import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { CommonModule } from "./../common/commonModule";
import { DefaultPage } from "../../defaultPage";
import { InventoryRoute } from "./inventoryRoute";
import { Categories } from "./category/categories";
import { AddCategory } from "./category/addCategory";
import { EditCategory } from "./category/editCategory";
// import { CategoryService } from "./categoryService";
import { CategorySummary } from "./_share/components/categorySummary";
// import { HttpConnector } from "./httpConnector";
@NgModule({
    imports: [BrowserModule,
        InventoryRoute, HttpModule, CommonModule],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, CategorySummary,
    ],
    bootstrap: [DefaultPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class InventoryModule {
}
