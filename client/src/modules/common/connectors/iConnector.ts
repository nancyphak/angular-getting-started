import { Promise } from "../index";
export interface IConnector {
    get(url: string): Promise;
    post(url: string, data: any): Promise;
}