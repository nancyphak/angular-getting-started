import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";
let routes = [
    { path: "", redirectTo: "categories", pathMatch: "full" },
    { path: "categories", component: Categories },
    { path: "addCategory", component: AddCategory },
    { path: "editCategory/:id", component: EditCategory }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class SecurityRouter { }