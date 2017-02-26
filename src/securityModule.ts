import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SercurityRoute } from "./sercurityRoute";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";
import { CategoryService } from "./categoryService";
import { SummaryCategory } from "./summaryCategory";
import { TextColor } from "./textColor";
@NgModule({
    imports: [BrowserModule, FormsModule, SercurityRoute],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, SummaryCategory, TextColor],
    bootstrap: [DefaultPage],
    providers: [CategoryService]
})
export class SecurityModule { }
