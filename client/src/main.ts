///<reference path="extension.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./securityModule";
import IocHelper from "./iocHelper";
IocHelper.configIoc().then(() => {
    platformBrowserDynamic().bootstrapModule(SecurityModule);
})