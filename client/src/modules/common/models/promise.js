"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Promise {
    constructor() {
        this.data = null;
        this.errors = null;
        this.successCallBack = null;
        this.errorCallBack = null;
    }
    then(successCallBack) {
        this.successCallBack = successCallBack;
        this.processPromise();
        return this;
    }
    error(errorCallBack) {
        this.errorCallBack = errorCallBack;
        this.processPromise();
        return this;
    }
    resolve(data) {
        this.data = data;
        this.processPromise();
        return this;
    }
    reject(errors) {
        this.errors = errors;
        this.processPromise();
        return this;
    }
    processPromise() {
        if (this.data && this.successCallBack) {
            this.successCallBack(this.data);
        }
        if (this.errors && this.errorCallBack) {
            this.errorCallBack(this.errors);
        }
    }
}
exports.Promise = Promise;
class PromiseFactory {
    static create() {
        return new Promise();
    }
}
exports.PromiseFactory = PromiseFactory;
//# sourceMappingURL=promise.js.map