/// <reference path="extension.d.ts"/>
import {platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {AppModule} from "./appModule";
import commonFacade from "./modules/common/index";
import appConfig from "./config/appConfig"
commonFacade.iocHelper.config(appConfig).then(()=>{
platformBrowserDynamic().bootstrapModule(AppModule)
})
