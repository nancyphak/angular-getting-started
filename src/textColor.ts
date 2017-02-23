import { Directive, Input, ElementRef, AfterViewInit } from "@angular/core";
@Directive({
    selector: "[TextColor]"
})
export class TextColor implements AfterViewInit {
    @Input() textDefault: string = "";
    @Input() textBlue: string = "";
    @Input("TextColor") textColor: string = "";
    private ui: ElementRef;
    constructor(ui: ElementRef) {
        this.ui = ui;
    }
    ngAfterViewInit() {
        if (this.textBlue == "" && this.textDefault == "") {
            this.ui.nativeElement.style.color = this.textColor;
        } else {
            this.ui.nativeElement.style.color = this.textBlue ? this.textBlue : this.textDefault;
        }

    }
}