import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user/user";
import { EditUserComponent } from "./user/edit";
import { CreateUserComponent } from "./user/create";

const routes: Routes = [
    { path: "", redirectTo: "users", pathMatch: "full" },
    { path: "users", component: UserComponent },
    { path: "users/edit/:id", component: EditUserComponent },
    { path: "users/create", component: CreateUserComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecurityRoutingModule { }