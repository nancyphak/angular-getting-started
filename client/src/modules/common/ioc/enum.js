"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCNames = {
    IUserService: "iuserService",
    Iconnector: "iconnector"
};
var IoCLifeCycle;
(function (IoCLifeCycle) {
    IoCLifeCycle[IoCLifeCycle["Singleton"] = 0] = "Singleton";
    IoCLifeCycle[IoCLifeCycle["Transient"] = 1] = "Transient";
})(IoCLifeCycle = exports.IoCLifeCycle || (exports.IoCLifeCycle = {}));
//# sourceMappingURL=enum.js.map