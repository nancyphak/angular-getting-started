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
const userModel_1 = require("../_share/model/userModel");
const basePage_1 = require("../../common/models/basePage");
const router_1 = require("@angular/router");
const enum_1 = require("../../common/ioc/enum");
let CreateUserComponent = class CreateUserComponent extends basePage_1.BasePage {
    constructor(router) {
        super(router);
        this.loading = false;
        this.userModel = new userModel_1.UserModel();
    }
    onReady() {
        console.log("onReady ");
    }
    onCancelClicked() {
        this.navigate('users');
    }
    onCreateClicked() {
        console.log("onCreateClicked ");
        let userService = window.ioc.resolve(enum_1.IoCNames.IUserService);
        this.loading = true;
        userService.createUser(this.userModel)
            .then((data) => {
            alert("create success");
            console.log(data);
            this.loading = true;
            this.userModel = new userModel_1.UserModel();
        })
            .error((error) => {
            this.loading = true;
            console.log(error);
        });
    }
};
CreateUserComponent = __decorate([
    core_1.Component({
        selector: 'create-user',
        templateUrl: '/src/modules/security/user/create.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CreateUserComponent);
exports.CreateUserComponent = CreateUserComponent;
//# sourceMappingURL=create.js.map