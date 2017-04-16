class AppHelper {
    public injector: IInjector = null;
    public config: IAppConfig = null;
    public setInjector(injector: IInjector) {
        this.injector = injector;
    }
    public setConfig(config: IAppConfig) {
        this.config = config;
    }
}
let appHelper = new AppHelper();
export interface IInjector {
    get(type: any): any;
}
export interface IAppConfig {
    rootApiUrl: any;
    ioc: Array<any>;
}
export default appHelper;