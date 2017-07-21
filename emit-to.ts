import { EventEmitter } from '@angular/core';
import { isFunction } from '../utils';

export interface ConfiguredEmitter {
    (value?: any): void;
}

export function emitTo(emitter$: EventEmitter<any>, callbackOrPayload?: Function | any): ConfiguredEmitter {
    return (value?) => {
        if (callbackOrPayload != null)
            value = isFunction(callbackOrPayload)
                ? callbackOrPayload(value)
                : callbackOrPayload;

        emitter$.emit(value);
    };
}
