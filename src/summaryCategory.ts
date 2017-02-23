import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
@Component({
    selector: "summary-category",
    templateUrl: "src/summaryCategory.html"
})
export class SummaryCategory {
    @Input() name: string = null;
    @Output() onNameChanged: EventEmitter<string> = new EventEmitter<string>();
    public onSubmitClicked() {
        this.onNameChanged.emit(this.name);
    }
}