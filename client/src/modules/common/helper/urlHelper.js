"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let urlHelper = {
    resolveModule: resolveModule
};
exports.default = urlHelper;
function resolveModule(name) {
    return "./src/modules/" + name + "/" + name + "Module#SecurityModule";
}
//# sourceMappingURL=urlHelper.js.map