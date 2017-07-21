import { NgModule } from '@angular/core';

import { EmptyPipe } from './empty.pipe';
import { DataUriPipe } from './data-uri.pipe';

import { FocusDirective } from './focus.directive';

const declarations = [
    EmptyPipe,
    DataUriPipe,

    FocusDirective
];

@NgModule({
    imports: [ ],
    declarations,
    exports: declarations
})
export class NgLibModule {

}
