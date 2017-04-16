"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
const singletonObjectBuilder_1 = require("./builder/singletonObjectBuilder");
const transientObjectBuilder_1 = require("./builder/transientObjectBuilder");
const appHelper_1 = require("../helper/appHelper");
class IoCFactory {
    static create() {
        return new IocContainer();
    }
}
exports.IoCFactory = IoCFactory;
class IocContainer {
    constructor() {
        this.registrations = [];
    }
    import(registrations) {
        this.registrations = registrations;
    }
    registers(registrations) {
        let self = this;
        if (!registrations || registrations.length <= 0)
            return;
        registrations.forEach(item => {
            self.registrations.push(item);
        });
    }
    resolve(obj) {
        if (typeof obj == "function") {
            return this.resolveAngularObject(obj);
        }
        let declaration = this.registrations.find((item) => {
            return obj == item.name;
        });
        let objectBuilder = this.getObjectBuilder(declaration);
        return objectBuilder.build();
    }
    resolveAngularObject(obj) {
        return appHelper_1.default.injector.get(obj);
    }
    getObjectBuilder(declaration) {
        switch (declaration.lifeCycle) {
            case enum_1.IoCLifeCycle.Singleton:
                return new singletonObjectBuilder_1.SingletonObjectBuilder(declaration);
            case enum_1.IoCLifeCycle.Transient:
                return new transientObjectBuilder_1.TransientObjectBuilder(declaration);
        }
    }
}
exports.IocContainer = IocContainer;
//# sourceMappingURL=ioCFactory.js.map