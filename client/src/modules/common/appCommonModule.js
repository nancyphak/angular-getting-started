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
const forms_1 = require("@angular/forms");
const page_1 = require("./components/page");
const enum_1 = require("./ioc/enum");
const http_connector_service_1 = require("./connectors/http-connector.service");
const form_button_1 = require("./components/form-button");
const form_buttons_1 = require("./components/form-buttons");
const form_horizontal_1 = require("./components/form-horizontal");
const form_input_1 = require("./components/form-input");
const form_primary_button_1 = require("./components/form-primary-button");
let AppCommonModule = class AppCommonModule {
    constructor() {
        window.ioc.registers([{ name: enum_1.IoCNames.Iconnector, instance: http_connector_service_1.HttpConnector, lifeCycle: enum_1.IoCLifeCycle.Singleton }]);
    }
};
AppCommonModule = __decorate([
    core_1.NgModule({
        declarations: [page_1.Page, form_button_1.FormButton, form_buttons_1.FormButtons, form_horizontal_1.FormHorizontal, form_input_1.FormInput, form_primary_button_1.FormPrimaryButton],
        imports: [forms_1.FormsModule],
        exports: [page_1.Page, form_button_1.FormButton, form_buttons_1.FormButtons, form_horizontal_1.FormHorizontal, form_input_1.FormInput, form_primary_button_1.FormPrimaryButton]
    }),
    __metadata("design:paramtypes", [])
], AppCommonModule);
exports.AppCommonModule = AppCommonModule;
//# sourceMappingURL=appCommonModule.js.map