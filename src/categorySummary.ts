import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "category-summary",
    templateUrl: "src/categorySummary.html"
})
export class CategorySummary {
    @Input() name: string = null;
    @Output() onCategoryNameChanged: EventEmitter<string> = new EventEmitter<string>();
    public onButtonClicked(){
        this.onCategoryNameChanged.emit(this.name);
    }
}