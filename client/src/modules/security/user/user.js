"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const basePage_1 = require("../../common/models/basePage");
const enum_1 = require("../../common/ioc/enum");
let UserComponent = class UserComponent extends basePage_1.BasePage {
    constructor(router) {
        super(router);
        let self = this;
        let userService = window.ioc.resolve(enum_1.IoCNames.IUserService);
        userService.getUsers().then(function (users) {
            self.users = users;
        }).error(function (errors) {
            console.log("errors: ", errors);
        });
    }
    onEditClicked(id) {
        this.navigate('security/users/edit', id);
    }
    onQuickViewClicked(user) {
        this.selectedUser = user;
    }
};
UserComponent = __decorate([
    core_1.Component({
        templateUrl: "/src/modules/security/user/user.html"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.js.map