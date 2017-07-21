import { Observable } from 'rxjs';

export interface ShouldRetryPredicate {
    (error: any): boolean;
}

export function retryTimes<T>(
    times: number,
    source: Observable<T>,
    shouldRetry: ShouldRetryPredicate = () => true,
    dealy: number = 200): Observable<T> {

    return source
        .retryWhen(attempts => {
            let count = 0;

            return attempts.flatMap(error => {
                if (shouldRetry(error)) {
                    return ++count >= times
                        ? Observable.throw(error)
                        : Observable.timer(dealy);
                }

                return Observable.throw(error);
            });
        });
}