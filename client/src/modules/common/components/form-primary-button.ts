import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormButton } from "./form-button";

@Component({
    selector: 'form-primary-button',
    templateUrl: 'src/modules/common/components/form-primary-button.html'
})
export class FormPrimaryButton extends FormButton {
    cls: string = "btn-primary";

    constructor() { super(); }

}