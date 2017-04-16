import { DefaultLayout } from "@app/themes/default";
import { ModuleName } from "../modules/common/helper/enumHelper";

interface IAppConfig {
    ioc: Array<any>;
    modules: Array<string>;
    layout: any;
    rootApi: string;
}
var appConfig: IAppConfig = {
    modules: [ModuleName.Security],
    layout: DefaultLayout,
    rootApi: "http://localhost:3002/api/",
    ioc: []
}
export default appConfig;