import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "input-form",
    templateUrl: "src/inputForm.html"
})
export class InputForm {
    @Input() label: string = "";
    @Input() value: string = "";
    @Output() onValueChanged: EventEmitter<string> = new EventEmitter<string>();
    public onValueChange() {
        this.onValueChanged.emit(this.value);
    }
}