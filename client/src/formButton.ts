import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "form-button",
    templateUrl: "src/formButton.html"
})
export class FormButton {
    @Input() label: any = null;
    @Output() onClicked: EventEmitter<any> = new EventEmitter();
    public onButtonClicked() {
        this.onClicked.emit();
    }
}