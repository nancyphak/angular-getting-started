import { CategoryService } from "./categoryService";
import { HttpConnector } from "./httpConnector";
import { ICategoryService } from "./iCategoryService";
import { IoCName, IoCLifeCycle } from "./enum";
let appConfig = {
    rootApiUrl: "http://localhost:8274/api/",
    ioc: [{ name: IoCName.ICategoryService, instance: CategoryService, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCName.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient }]
}

export default appConfig;