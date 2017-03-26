///<reference path="extension.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./securityModule";
import IocHelper from "./iocHelper";
import appHelper from "./appHelper";
IocHelper.configIoc().then(() => {
    platformBrowserDynamic().bootstrapModule(SecurityModule).then((platform: any) => {
        appHelper.setInjector(platform.injector);
    });
})