"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("../models/promise");
const ioCFactory_1 = require("./ioCFactory");
let iocHelpper = {
    config: config
};
exports.default = iocHelpper;
function config(appConfig) {
    let def = promise_1.PromiseFactory.create();
    window.ioc = ioCFactory_1.IoCFactory.create();
    window.ioc.import(appConfig.ioc);
    def.resolve({});
    return def;
}
//# sourceMappingURL=ioc-helpper.js.map