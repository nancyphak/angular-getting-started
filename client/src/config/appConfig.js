"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("@app/themes/default");
const enumHelper_1 = require("../modules/common/helper/enumHelper");
var appConfig = {
    modules: [enumHelper_1.ModuleName.Security],
    layout: default_1.DefaultLayout,
    rootApi: "http://localhost:3002/api/",
    ioc: []
};
exports.default = appConfig;
//# sourceMappingURL=appConfig.js.map