
import { Promise } from "../../../common/models/promise";
import { IConnector } from "../../../common/connectors/iconnector";
import {IUserService} from "./iuserService";
import {IoCNames} from "../../../common/ioc/enum";
// @Injectable()
export class UserService implements IUserService {

    public getUsers(): Promise {
        let iconnector:IConnector = window.ioc.resolve(IoCNames.Iconnector);
        return iconnector.get("users.json");
    }

    public createUser(user: any): Promise{
        let iconnector:IConnector = window.ioc.resolve(IoCNames.Iconnector);
        return iconnector.post("users", user)
    }
}