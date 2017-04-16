import {NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA,ApplicationRef} from "@angular/core"; 
import {CommonModule} from "@angular/common";
import {SecurityRoutingModule} from "./securityRoute";
import {AppCommonModule, IoCNames, IoCLifeCycle} from "@app/common";
import appConfig from "../../config/appConfig";
import {UserComponent} from "./user/user";
import {CreateUserComponent} from "./user/create";
import {EditUserComponent} from "./user/edit";
import {UserSummaryComponent} from "./_share/components/userSummary";
import {UserService} from "./_share/services/userService"
@NgModule({
  imports:[AppCommonModule,SecurityRoutingModule,CommonModule],
  declarations:[UserComponent,CreateUserComponent,EditUserComponent,UserSummaryComponent],
  providers : [UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class SecurityModule{
  constructor(){
    window.ioc.registers([{ name: IoCNames.IUserService, instance: UserService, lifeCycle: IoCLifeCycle.Singleton }])
  }
}