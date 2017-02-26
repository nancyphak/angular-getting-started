import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "category-summary",
    templateUrl: "src/categorySummary.html"
})
export class CategorySummary {
    @Input() name: string = "";
    @Input() description: string = "";
    @Output() onNameValueChanged: EventEmitter<string> = new EventEmitter<string>();
    @Output() descriptionChange: EventEmitter<string> = new EventEmitter<string>();
    public onButtonClicked() {
        this.onNameValueChanged.emit(this.name);
        this.descriptionChange.emit(this.description);
    }
}