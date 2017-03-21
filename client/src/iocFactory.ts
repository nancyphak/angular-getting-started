import { IoCLifeCycle } from "./enum";
import { IObjectBuilder } from "./builder/iObjectBuilder";
import { SingletonObjectBuilder } from "./builder/singletonObjectBuilder";
import { TransientObjectBuilder } from "./builder/transientObjectBuilder";
export class IocFactory {
    public static create(): IocContainer {
        return new IocContainer();
    }
}
export class IocContainer {
    private registrations: any;
    constructor() {
        this.registrations = [];
    }
    public import(registrations: Array<any>) {
        this.registrations = registrations;
    }
    public reslove(name: string): any {
        let declaration = this.registrations.firstOrDefault((item: any) => { return item.name == name });
        let objectBuilder: IObjectBuilder = this.getObjectBuilder(declaration);
        return objectBuilder.build();
        // if (declaration.lifeCycle == IoCLifeCycle.Singleton) {
        //     let instanceFn = declaration.instanceFn ? declaration.instanceFn : new declaration.instance();
        //     declaration.instanceFn = instanceFn;
        //     return declaration.instanceFn;
        // }
        // if (declaration.lifeCycle == IoCLifeCycle.Transient) {
        //     return new declaration.instance();
        // }
        // return null;
    }
    private getObjectBuilder(declaration: any): IObjectBuilder {
        switch (declaration.lifeCycle) {
            case IoCLifeCycle.Singleton:
                return new SingletonObjectBuilder(declaration);

            default:
            case IoCLifeCycle.Transient:
                return new TransientObjectBuilder(declaration);
        }
    }
}