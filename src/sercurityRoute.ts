import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";
import routerConfig from "./routerConfig";
let routes = [
    { path: "", redirectTo: routerConfig.categories.name, pathMatch: "full" },
    { path: routerConfig.categories.name, component: Categories },
    { path: routerConfig.addCategory.name, component: AddCategory },
    { path: "editCategory/:id", component: EditCategory }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class SercurityRoute { }