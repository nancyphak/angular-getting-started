import { Directive, Input, ElementRef, AfterViewInit } from "@angular/core";
@Directive({
    selector: "[TextColor]"
})
export class TextColor implements AfterViewInit {
    @Input() textDefault: string = "";
    @Input() textRed: string = "";
    @Input("TextColor") textColor: string = "";
    private ui: ElementRef = null;
    constructor(ui: ElementRef) {
        this.ui = ui;
    }
    ngAfterViewInit() {
        if (this.textDefault == "" && this.textRed == "")
            this.ui.nativeElement.style.color = this.textColor;
        else
            this.ui.nativeElement.style.color = this.textRed ? this.textRed : this.textDefault;

    }
}