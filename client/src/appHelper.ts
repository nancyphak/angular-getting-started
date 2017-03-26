class AppHelper {
    public injector: IInjector = null;
    public setInjector(injector: IInjector) {
        this.injector = injector;
    }
}
let appHelper = new AppHelper();
export interface IInjector {
    get(type: any): any;
}
export default appHelper;