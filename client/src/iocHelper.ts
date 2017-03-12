import { PromiseFactory, Promise } from "./promise";
import { IocFactory } from "./iocFactory";
import appConfig from "./appConfig";
let IocHelper = {
    iocConfig: iocConfig
}
export default IocHelper;
function iocConfig(): Promise {
    let def = PromiseFactory.create();
    window.ioc = IocFactory.create();
    window.ioc.import(appConfig.ioc);

    def.reslove({});
    return def;
}