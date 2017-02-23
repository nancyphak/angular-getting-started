import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SecurityRouter } from "./securityRouter";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";
import { SummaryCategory } from "./summaryCategory";
import { CategoryService } from "./categoryService";
import { TextColor } from "./textColor";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRouter],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, SummaryCategory, TextColor],
    bootstrap: [DefaultPage],
    providers: [CategoryService]
})
export class SecurityModule { }
