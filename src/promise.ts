export class Promise {
    private data: any = null;
    private errors: any = null;
    private successCallback: any = null;
    private errorCallback: any = null;
    public then(successCallback: any) {
        this.successCallback = successCallback;
        this.processPromise();
        return this;
    }
    public reslove(data: any) {
        this.data = data;
        this.processPromise();
        return this;
    }
    public error(errorCallback: any) {
        this.errorCallback = errorCallback;
        this.processPromise();
        return this;
    }
    public reject(errors: any) {
        this.errors = errors;
        this.processPromise();
        return this;
    }

    private processPromise() {
        if (this.data != null && this.successCallback != null) {
            this.successCallback(this.data);
        }
        if (this.errors != null && this.errorCallback != null) {
            this.errorCallback(this.data);
        }
    }
}