import { Promise, PromiseFactory } from "./../models/promise";
import { IocFactory } from "./iocFactory";
let IocHelper = {
    configIoc: configIoc
}
export default IocHelper;
function configIoc(appConfig: any): Promise {
    let def = PromiseFactory.create();
    window.ioc = IocFactory.create();
    window.ioc.import(appConfig.ioc);
    def.reslove({});
    return def;
}