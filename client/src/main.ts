///<reference path="extension.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { InventoryModule } from "./modules/inventory/inventoryModule";
// import IocHelper from "./modules/common/index";
import HelperFacade from "./modules/common/index";
import appConfig from "./config/appConfig";
HelperFacade.iocHelper.configIoc(appConfig).then(() => {
    platformBrowserDynamic().bootstrapModule(InventoryModule);
})