import { Directive, Input, AfterViewInit, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
    selector: '[sabFocus]'
})
export class FocusDirective implements AfterContentInit {
    constructor(private _element: ElementRef) {

    }

    private _inited: boolean = false;
    private _focus: string|boolean;

    @Input('sabFocus') set focus(value: string|boolean) {
        this._focus = value;
        this.setFocus();
    }

    ngAfterContentInit() {
        this._inited = true;
        this.setFocus();
    }

    setFocus() {
        if (!this._inited) return;

        switch (this._focus) {
            case 'select':
                this._element.nativeElement.focus();
                setTimeout(() => this._element.nativeElement.select());
                return;

            case true:
                this._element.nativeElement.focus();
                return;
        }
    }
}
