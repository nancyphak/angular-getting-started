import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BasePage } from "../../common/models/basePage";
import {IoCNames} from "../../common/ioc/enum";
@Component({
    templateUrl: "/src/modules/security/user/user.html"
})
export class UserComponent extends BasePage {

    public users: Array<any>;
    public selectedUser: any;

    constructor(router: Router) {
        super(router);
        let self = this;

        let userService = window.ioc.resolve(IoCNames.IUserService);

        userService.getUsers().then(function (users: any) {
            self.users = users;
        }).error(function (errors: any) {
            console.log("errors: ", errors);
        });

    }

    public onEditClicked(id: string) {
        this.navigate('security/users/edit', id);
    }

    public onQuickViewClicked(user: any) {
        this.selectedUser = user;
    }
}