import { AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
export class BasePage implements AfterViewInit {
    public router: Router;
    constructor(router: Router) {
        this.router = router;
    }
    ngAfterViewInit() {
        this.onReady();
    }
    protected onReady() {

    }
    protected navigate(url: string, ...options: Array<any>) {
        let params = options || [];
        params.unshift(url)
        this.router.navigate(params);
    }
}