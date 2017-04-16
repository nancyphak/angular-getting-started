"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.onReady();
    }
    onReady() {
    }
    navigate(url, ...options) {
        let params = options || [];
        params.unshift(url);
        this.router.navigate(params);
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=basePage.js.map