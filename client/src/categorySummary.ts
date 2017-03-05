import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "category-summary",
    templateUrl: "src/categorySummary.html"
})
export class CategorySummary {
    @Input() name: string = "";
    @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
    public onNameChanged(name: string) {
        this.nameChange.emit(name);
    }
}