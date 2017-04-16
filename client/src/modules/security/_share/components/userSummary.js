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
let UserSummaryComponent = class UserSummaryComponent {
    constructor() {
        this.firstNameChange = new core_1.EventEmitter();
    }
    onChange(newValue) {
        this.firstNameChange.emit(newValue);
        4;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UserSummaryComponent.prototype, "firstName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserSummaryComponent.prototype, "firstNameChange", void 0);
UserSummaryComponent = __decorate([
    core_1.Component({
        selector: "user-summary",
        templateUrl: "/src/modules/security/_share/components/userSummary.html"
    })
], UserSummaryComponent);
exports.UserSummaryComponent = UserSummaryComponent;
//# sourceMappingURL=userSummary.js.map