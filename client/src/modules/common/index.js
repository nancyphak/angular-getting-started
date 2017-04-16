"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const commonFacade_1 = require("./models/commonFacade");
const ioc_helpper_1 = require("./ioc/ioc-helpper");
const appHelper_1 = require("./helper/appHelper");
const routeHelper_1 = require("./helper/routeHelper");
__export(require("./appCommonModule"));
__export(require("./ioc/enum"));
__export(require("./ioc/ioc-helpper"));
__export(require("./ioc/ioCFactory"));
__export(require("./models/promise"));
__export(require("./models/basePage"));
let commonFacade = new commonFacade_1.CommonFacade();
commonFacade.appHelper = appHelper_1.default;
commonFacade.iocHelper = ioc_helpper_1.default;
commonFacade.routeHelper = routeHelper_1.default;
exports.default = commonFacade;
//# sourceMappingURL=index.js.map