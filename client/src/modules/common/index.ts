import {CommonFacade} from "./models/commonFacade";

import iocHelper from "./ioc/ioc-helpper";
import appHelper from "./helper/appHelper";
import routeHelper from "./helper/routeHelper";
export * from "./appCommonModule";
export * from "./ioc/enum";
export * from "./ioc/ioc-helpper";
export * from "./ioc/ioCFactory";
export * from "./models/promise";
export * from "./models/basePage";

let commonFacade = new CommonFacade();
commonFacade.appHelper = appHelper;
commonFacade.iocHelper = iocHelper; 
commonFacade.routeHelper = routeHelper;
export default commonFacade;