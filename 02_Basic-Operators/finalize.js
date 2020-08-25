require('../00_Source/common');
const { of, interval, throwError } = require("rxjs");
const { delay, takeWhile, mergeMap, finalize } = require("rxjs/operators");
let isLoading = false;



function getData() {
    if(Math.random() > 0.5) return of(true).pipe(delay(500), mergeMap(() => throwError(new Error('getting data failed!'))));
    return of('Data has loaded').pipe(delay(1000));
}

// bad practice
// loading won't be stopped if getting data fails
// toggleLoading(true);
// getData().subscribe(x => {
//     toggleLoading(false);
//     console.success(x);
// }, err => {});

// good practice
// loading will always be stopped, even on error
toggleLoading(true);
getData()
    .pipe(finalize(() => toggleLoading(false)))
    .subscribe(x => console.success(x), err => {});



// while true this logs "loading..."
// consider this as a loading spinner
function toggleLoading(load = !isLoading) {
    isLoading = load;
    if (isLoading) {
        interval(100).pipe(takeWhile(() => isLoading)).subscribe(() => console.log('loading...'));
    }
}