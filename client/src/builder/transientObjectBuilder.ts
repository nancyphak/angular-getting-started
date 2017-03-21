import { IObjectBuilder } from "./iObjectBuilder";
export class TransientObjectBuilder implements IObjectBuilder {
    private obj: any;
    constructor(obj: any) {
        this.obj = obj;
    }
    public build() {
        return new this.obj.instance();
    }
}