
import { Promise, PromiseFactory } from "../models/promise";
import {IoCFactory} from "./ioCFactory";

let iocHelpper = {
    config: config
}
export default iocHelpper;

function config(appConfig:any): Promise {
    let def = PromiseFactory.create();

    window.ioc = IoCFactory.create();
    window.ioc.import(appConfig.ioc);

    def.resolve({});
    return def;
}