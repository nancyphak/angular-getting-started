"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TransientObjectBuilder {
    constructor(obj) {
        this.obj = obj;
    }
    build() {
        return new this.obj.instance();
    }
}
exports.TransientObjectBuilder = TransientObjectBuilder;
//# sourceMappingURL=transientObjectBuilder.js.map