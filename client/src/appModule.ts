import {NgModule,ApplicationRef} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import appConfig from "./config/appConfig";
import commodeFacade from "./modules/common/index";
// const routes : Routes = [
//     {path : "security",loadChildren : "./src/modules/security/securityModule#SecurityModule"}
// ]
let routes = commodeFacade.routeHelper.getModuleRoute(appConfig.modules);
@NgModule({
    declarations : [appConfig.layout],
    exports :[RouterModule],
    imports:[BrowserModule,HttpModule,RouterModule.forRoot(routes)],
    bootstrap:[appConfig.layout]
})
export class AppModule{
      constructor(ref : ApplicationRef){
         commodeFacade.appHelper.setConfig(appConfig)
         commodeFacade.appHelper.setInjector(ref["_injector"]);
      }
}