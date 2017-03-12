import { Promise, PromiseFactory } from "./promise";
import { IocFactory } from "./iocFactory";
import appConfig from "./appConfig";
let IocHelper = {
    configIoc: configIoc
}
export default IocHelper;
function configIoc(): Promise {
    let def = PromiseFactory.create();
    window.ioc = IocFactory.create();
    window.ioc.import(appConfig.ioc);
    def.reslove({});
    return def;
}