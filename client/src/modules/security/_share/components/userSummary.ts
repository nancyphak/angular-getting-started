import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "user-summary",
    templateUrl: "/src/modules/security/_share/components/userSummary.html"
})
export class UserSummaryComponent{
    // @Input() user: any;
    @Input() firstName: string;
    @Output() firstNameChange: EventEmitter<string> = new EventEmitter();

    public onChange(newValue: string){
        this.firstNameChange.emit(newValue);4
    }

}