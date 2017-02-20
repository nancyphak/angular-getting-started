import { Directive, ElementRef, AfterViewInit, Input } from "@angular/core";
@Directive({
    selector: "[TextBold]"
})
export class TextBold implements AfterViewInit {
    @Input() fontWeight: any = "";
    @Input() fontDefault: any = "";
    @Input("TextBold") weight: any = "";
    private ui: ElementRef = null;
    constructor(ui: ElementRef) {
        this.ui = ui;
    }
    ngAfterViewInit() {
        if (this.fontWeight == "" && this.fontDefault == "") {
            this.ui.nativeElement.style.fontWeight = this.weight;
        } else {
            this.ui.nativeElement.style.fontWeight = this.fontWeight == "" ? this.fontDefault : this.fontWeight;
        }
    }
}