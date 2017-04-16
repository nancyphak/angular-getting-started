import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "form-primary-button",
    template: '<form-button [label]="label" [cls]="cls" (onClicked)="onButtonClicked()"></form-button>'
})
export class FormPrimaryButton {
    public cls: any = "btn-primary";
    @Input() label: any = "";
    @Output() onClicked: EventEmitter<any> = new EventEmitter<any>();
    public onButtonClicked() {
        this.onClicked.emit();
    }
}