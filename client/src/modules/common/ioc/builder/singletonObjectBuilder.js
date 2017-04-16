"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SingletonObjectBuilder {
    constructor(obj) {
        this.obj = obj;
    }
    build() {
        let instanceFn = !this.obj.instanceFn ? new this.obj.instance() : this.obj.instanceFn;
        this.obj.instanceFn = instanceFn;
        return this.obj.instanceFn;
    }
}
exports.SingletonObjectBuilder = SingletonObjectBuilder;
//# sourceMappingURL=singletonObjectBuilder.js.map