import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Page } from "./components/page";
import { IoCNames, IoCLifeCycle } from "./ioc/enum";
import { HttpConnector } from "./connectors/http-connector.service";
import { FormButton } from "./components/form-button";
import { FormButtons } from "./components/form-buttons";
import { FormHorizontal } from "./components/form-horizontal";
import { FormInput } from "./components/form-input";
import { FormPrimaryButton } from "./components/form-primary-button";
@NgModule({
  declarations: [Page, FormButton, FormButtons, FormHorizontal, FormInput, FormPrimaryButton],
  imports: [FormsModule],
  exports: [Page, FormButton, FormButtons, FormHorizontal, FormInput, FormPrimaryButton]
})
export class AppCommonModule {
  constructor() {
    window.ioc.registers([{ name: IoCNames.Iconnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Singleton }]);
  }
}