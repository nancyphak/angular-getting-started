import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Page } from "./components/page";
import { FormButton } from "./components/formButton";
import { FormInput } from "./components/formInput";
import { FormButtons } from "./components/formButtons";
import { FormPrimaryButton } from "./components/formPrimaryButton";
import { HorizonalForm } from "./components/horizonalForm";
import { BackgroundColor } from "./components/backgroundColor";
@NgModule({
    imports: [FormsModule],
    declarations: [Page, FormButton, FormButtons, FormInput, FormPrimaryButton, HorizonalForm, BackgroundColor],
    exports: [Page, FormButton, FormButtons, FormInput, FormPrimaryButton, HorizonalForm, BackgroundColor]
})
export class CommonModule { }