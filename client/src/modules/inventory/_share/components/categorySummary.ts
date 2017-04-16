import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "category-summary",
    templateUrl: "src/modules/inventory/_share/components/categorySummary.html"
})
export class CategorySummary {
    @Input() name: string = "";
    @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
    public onNameChanged(name: string) {
        this.nameChange.emit(name);
    }
}