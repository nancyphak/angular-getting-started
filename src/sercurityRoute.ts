import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import routerConfig from "./routerConfig";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";
let routes = [{
    path: "categories", component: Categories
},
{ path: "addCategory", component: AddCategory },
{ path: "editCategory/:id", component: EditCategory },
{
    path: "", redirectTo: "categories", pathMatch: "full"
}];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class SercurityRoute { }