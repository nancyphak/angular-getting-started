import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
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
import { BackgroundColor } from "./backgroundColor";
import { FormInput } from "./formInput";
import { Page } from "./page";
import { HttpConnector } from "./httpConnector";
import { FormButton } from "./formButton";
import { FormButtons } from "./formButtons";
import { FormPrimaryButton } from "./formPrimaryButton";
import { HorizonalForm } from "./horizonalForm"
@NgModule({
    imports: [BrowserModule, FormsModule, SercurityRoute, HttpModule],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, CategorySummary, BackgroundColor,
        FormInput, Page, FormButton, FormButtons, FormPrimaryButton, HorizonalForm],
    bootstrap: [DefaultPage],
    providers: [CategoryService, HttpConnector],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule { }
