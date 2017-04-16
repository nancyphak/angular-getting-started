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
const form_button_1 = require("./form-button");
let FormPrimaryButton = class FormPrimaryButton extends form_button_1.FormButton {
    constructor() {
        super();
        this.cls = "btn-primary";
    }
};
FormPrimaryButton = __decorate([
    core_1.Component({
        selector: 'form-primary-button',
        templateUrl: 'src/modules/common/components/form-primary-button.html'
    }),
    __metadata("design:paramtypes", [])
], FormPrimaryButton);
exports.FormPrimaryButton = FormPrimaryButton;
//# sourceMappingURL=form-primary-button.js.map