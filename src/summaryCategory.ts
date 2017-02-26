import { Component, Input, EventEmitter, Output } from "@angular/core";
@Component({
    selector: "summary-category",
    templateUrl: "src/summaryCategory.html"
})
export class SummaryCategory {
    @Input() name: string = null;
    @Output() onNameValueChanged: EventEmitter<string> = new EventEmitter<string>();
    public onButtonClicked() {
        this.onNameValueChanged.emit(this.name);
    }
}