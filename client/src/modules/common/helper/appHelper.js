"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppHelper {
    constructor() {
        this.injector = null;
        this.appConfig = null;
    }
    setInjector(injector) {
        this.injector = injector;
    }
    setConfig(appConfig) {
        this.appConfig = appConfig;
    }
}
let appHelper = new AppHelper();
exports.default = appHelper;
//# sourceMappingURL=appHelper.js.map