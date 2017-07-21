import { Component, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'sabDataUri'
})
export class DataUriPipe implements PipeTransform {
    constructor(private _sanitizer: DomSanitizer) {

    }

    transform(value: any) {
        return value ? this._sanitizer.bypassSecurityTrustStyle(`url('${value}')`) : value;
    }
}
