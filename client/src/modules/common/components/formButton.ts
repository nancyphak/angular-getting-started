import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "form-button",
    templateUrl: "src/modules/common/components/formButton.html"
})
export class FormButton {
    @Input() label: any = null;
    @Input() cls: any = "btn-default";
    @Output() onClicked: EventEmitter<any> = new EventEmitter();
    public onButtonClicked() {
        this.onClicked.emit();
    }
}