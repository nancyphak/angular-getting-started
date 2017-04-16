import urlHelper from "./urlHelper";
let routeHelper : any = { 
    getModuleRoute: getModuleRoute    
}
export default routeHelper; 
function getModuleRoute(modules:Array<any>) {
    let routes : any = [];
    modules.forEach((module : string) => {
        routes.push({path : module , loadChildren : urlHelper.resolveModule(module)})
    });
    return routes;
}