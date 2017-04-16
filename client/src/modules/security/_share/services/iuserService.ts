
import { Promise } from "../../../common/models/promise";

export interface IUserService{
    getUsers(): Promise;
    createUser(data:any):Promise;
}