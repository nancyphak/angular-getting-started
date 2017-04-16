import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'form-button',
    templateUrl: 'src/modules/common/components/form-button.html'
})
export class FormButton {
    @Input() cls: string = "btn-default";
    @Input() label: string;
    @Output() click: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    public onButtonClicked(event: any) {
        this.click.emit(event);
    }
}