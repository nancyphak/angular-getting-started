import { CategoryService } from "./categoryService";
import { HttpConnector } from "./httpConnector";
let appConfig = {
    rootApiUrl: "http://localhost:8274/api/",
    ioc: [{ name: "categoryService", instance: CategoryService }, { name: "iconnector", instance: HttpConnector }]
}

export default appConfig;