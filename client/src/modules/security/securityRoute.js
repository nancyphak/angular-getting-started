"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const user_1 = require("./user/user");
const edit_1 = require("./user/edit");
const create_1 = require("./user/create");
const routes = [
    { path: "", redirectTo: "users", pathMatch: "full" },
    { path: "users", component: user_1.UserComponent },
    { path: "users/edit/:id", component: edit_1.EditUserComponent },
    { path: "users/create", component: create_1.CreateUserComponent }
];
let SecurityRoutingModule = class SecurityRoutingModule {
};
SecurityRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], SecurityRoutingModule);
exports.SecurityRoutingModule = SecurityRoutingModule;
//# sourceMappingURL=securityRoute.js.map