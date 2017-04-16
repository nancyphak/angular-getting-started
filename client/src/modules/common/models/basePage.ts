import { OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";

export class BasePage implements OnInit, AfterViewInit {
    protected router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() { }

    ngAfterViewInit(): void {
        this.onReady();
    }

    protected onReady(): void {

    }

    protected navigate(url: string, ...options: Array<any>): void {
        let params = options || [];
        params.unshift(url);
        this.router.navigate(params);
    }

}