import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'sabEmpty', pure: true })
export class EmptyPipe implements PipeTransform {
    transform(value: string): string {
        return value || '';
    }
}
