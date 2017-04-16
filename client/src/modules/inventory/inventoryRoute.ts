import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Categories } from "./category/categories";
import { AddCategory } from "./category/addCategory";
import { EditCategory } from "./category/editCategory";
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
export class InventoryRoute { }