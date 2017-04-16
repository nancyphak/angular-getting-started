"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("../../../common/ioc/enum");
// @Injectable()
class UserService {
    getUsers() {
        let iconnector = window.ioc.resolve(enum_1.IoCNames.Iconnector);
        return iconnector.get("users.json");
    }
    createUser(user) {
        let iconnector = window.ioc.resolve(enum_1.IoCNames.Iconnector);
        return iconnector.post("users", user);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map