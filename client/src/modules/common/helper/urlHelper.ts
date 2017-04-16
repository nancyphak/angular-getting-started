
let urlHelper : any = { 
    resolveModule: resolveModule    
}
export default urlHelper;
function resolveModule(name:string) {
    return "./src/modules/"+ name +"/"+ name +"Module#SecurityModule";
}