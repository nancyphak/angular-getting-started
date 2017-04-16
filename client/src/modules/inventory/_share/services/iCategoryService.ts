import { Promise } from "../../../../modules/common/index";
export interface ICategoryService {
    getCategories(): Promise;
    createCategory(data: any): Promise;
}