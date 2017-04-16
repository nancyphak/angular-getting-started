import { Component } from '@angular/core';
import { UserService } from "../_share/services/userService";
import { UserModel } from "../_share/model/userModel";
import { BasePage } from "../../common/models/basePage";
import { Router } from "@angular/router";
import {IUserService} from "../_share/services/iuserService";
import {IoCNames} from "../../common/ioc/enum";

@Component({
    selector: 'create-user',
    templateUrl: '/src/modules/security/user/create.html'
})
export class CreateUserComponent extends BasePage {
    public loading: boolean = false;
    public userModel: UserModel;

    constructor(router: Router) {
        super(router);
        this.userModel = new UserModel();
    }

    protected onReady(): void {
        console.log("onReady ");
    }

    public onCancelClicked() {
        this.navigate('users');
    }

    public onCreateClicked() {
        console.log("onCreateClicked ");
        let userService : IUserService = window.ioc.resolve(IoCNames.IUserService);
        this.loading = true;
        userService.createUser(this.userModel)
            .then((data: any) => {
                alert("create success");
                console.log(data);
                this.loading = true;
                this.userModel = new UserModel();
            })
            .error((error: any) => {
                this.loading = true;
                console.log(error);
            });
    }
}