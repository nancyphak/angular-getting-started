class AppHelper{
    public injector: IInjector = null;
    public appConfig : IAppConfig = null;
    public setInjector(injector : IInjector){
        this.injector = injector;
    }
    public setConfig( appConfig :IAppConfig){
        this.appConfig = appConfig;
    }
}
let appHelper = new AppHelper();
export default appHelper;
export interface IInjector{
    get(type:any):any;
}
export interface IAppConfig{
   rootApi : string,
   layout : string
}