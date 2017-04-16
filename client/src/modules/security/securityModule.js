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
const common_1 = require("@angular/common");
const securityRoute_1 = require("./securityRoute");
const common_2 = require("@app/common");
const user_1 = require("./user/user");
const create_1 = require("./user/create");
const edit_1 = require("./user/edit");
const userSummary_1 = require("./_share/components/userSummary");
const userService_1 = require("./_share/services/userService");
let SecurityModule = class SecurityModule {
    constructor() {
        window.ioc.registers([{ name: common_2.IoCNames.IUserService, instance: userService_1.UserService, lifeCycle: common_2.IoCLifeCycle.Singleton }]);
    }
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [common_2.AppCommonModule, securityRoute_1.SecurityRoutingModule, common_1.CommonModule],
        declarations: [user_1.UserComponent, create_1.CreateUserComponent, edit_1.EditUserComponent, userSummary_1.UserSummaryComponent],
        providers: [userService_1.UserService],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA]
    }),
    __metadata("design:paramtypes", [])
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map