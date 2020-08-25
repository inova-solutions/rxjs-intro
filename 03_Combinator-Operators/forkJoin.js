require('../00_Source/common');
const { of, Subject, forkJoin } = require("rxjs");

const color = of('red');
const sub = new Subject();

// waits for color and sub to complete, then logs the last data before complete
// runs only once
forkJoin([color, sub.asObservable()]).subscribe({
    next(x) { console.log(x); },
    complete() { console.success('[Complete]'); }
});

sub.next(1);
sub.next(2);

// don't complete too early or forkJoin will never run
sub.complete();