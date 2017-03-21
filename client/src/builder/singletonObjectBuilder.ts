import { IObjectBuilder } from "./iObjectBuilder";
export class SingletonObjectBuilder implements IObjectBuilder {
    private obj: any;
    constructor(obj: any) {
        this.obj = obj;
    }
    public build() {
        let instance = this.obj.instanceFn ? this.obj.instanceFn : new this.obj.instance();
        this.obj.instanceFn = instance;
        return this.obj.instanceFn;
    }
}