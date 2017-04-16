"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlHelper_1 = require("./urlHelper");
let routeHelper = {
    getModuleRoute: getModuleRoute
};
exports.default = routeHelper;
function getModuleRoute(modules) {
    let routes = [];
    modules.forEach((module) => {
        routes.push({ path: module, loadChildren: urlHelper_1.default.resolveModule(module) });
    });
    return routes;
}
//# sourceMappingURL=routeHelper.js.map