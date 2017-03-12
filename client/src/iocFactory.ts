export class IocFactory {
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
    public reslove(name: string) {
        let declaration = this.registrations.firstOrDefault((item: any) => { return item.name == name });
        return new declaration.instance();
    }
}