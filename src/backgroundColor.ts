import { Directive, Input, Output, ElementRef, AfterViewInit } from "@angular/core";
@Directive({
    selector: "[BackgroundColor]"
})
export class BackgroundColor implements AfterViewInit {
    @Input() defaultColor: string = "";
    @Input() blueColor: string = "";
    @Input("BackgroundColor") color: string = "";
    private ui: ElementRef = null;
    constructor(ui: ElementRef) {
        this.ui = ui;
    }
    ngAfterViewInit() {
        if (this.defaultColor == "" && this.blueColor == "") {
            this.ui.nativeElement.style.backgroundColor = this.color;
        } else
            this.ui.nativeElement.style.backgroundColor = this.blueColor ? this.blueColor : this.defaultColor;
    }
}