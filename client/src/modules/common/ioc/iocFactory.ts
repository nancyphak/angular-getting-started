import { IoCLifeCycle } from "./enum";
import { SingletonObjectBuilder } from "./builder/singletonObjectBuilder";
import { TransientObjectBuilder } from "./builder/transientObjectBuilder";
import { IObjectBuilder } from "./builder/iObjectBuilder";
import appHelper from "../helper/appHelper";
export class IoCFactory {
    public static create(): IocContainer {
        return new IocContainer();
    }
}

export class IocContainer {
    private registrations: Array<any>;

    constructor() {
        this.registrations = [];
    }

    public import(registrations: Array<any>) {
        this.registrations = registrations;
    }

    public registers(registrations: Array<any>) {
        let self = this;
        if (!registrations || registrations.length <= 0) return;
        registrations.forEach(item => {
            self.registrations.push(item);
        });
    }

    public resolve(obj: any): any {
        if (typeof obj == "function") {
            return this.resolveAngularObject(obj);
        }
        let declaration = this.registrations.find((item) => {
            return obj == item.name;
        });
        let objectBuilder: IObjectBuilder = this.getObjectBuilder(declaration);
        return objectBuilder.build();
    }
    private resolveAngularObject(obj: any) {
        return appHelper.injector.get(obj);
    }
    private getObjectBuilder(declaration: any): IObjectBuilder {
        switch (declaration.lifeCycle) {
            case IoCLifeCycle.Singleton:
                return new SingletonObjectBuilder(declaration);

            case IoCLifeCycle.Transient:
                return new TransientObjectBuilder(declaration);
        }
    }


}