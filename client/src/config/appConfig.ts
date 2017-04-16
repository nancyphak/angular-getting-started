import { CategoryService } from ".././modules/inventory/_share/services/categoryService";
import { HttpConnector } from ".././modules/common/index";
import { ICategoryService } from ".././modules/inventory/_share/services/iCategoryService";
import { IoCName, IoCLifeCycle } from ".././modules/common/index";
let appConfig = {
    rootApiUrl: "http://localhost:8274/api/",
    ioc: [{ name: IoCName.ICategoryService, instance: CategoryService, lifeCycle: IoCLifeCycle.Singleton },
    { name: IoCName.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient }]
}

export default appConfig;