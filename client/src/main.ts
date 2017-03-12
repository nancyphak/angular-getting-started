//<reference path="extension.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./securityModule";
import IocHelper from "./iocHelper";
IocHelper.iocConfig().then(() => {
    platformBrowserDynamic().bootstrapModule(SecurityModule)
})