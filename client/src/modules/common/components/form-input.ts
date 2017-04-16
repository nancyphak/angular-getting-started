import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'form-input',
    templateUrl: 'src/modules/common/components/form-input.html'
})
export class FormInput implements OnInit {
    @Input() label: string = "";
    @Input() value: string = "";
    @Input() required: boolean = false;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    name: string = "";

    public onValueChange() {
        this.valueChange.emit(this.value);
    }
    ngOnInit(){
        let name = this.label.replace(/\s+/g, '');
        this.name = name.toLowerCase();
    }
}