require('../00_Source/common');
const { Subject } = require("rxjs");
const { take } = require("rxjs/operators");

const sub = new Subject();

sub.asObservable().pipe(take(3)).subscribe({
    next(x) { console.log(x); },
    complete() { console.success('[Complete]'); }
});

// without take the observable isn't completed
// sub.asObservable().subscribe({
//     next(x) { console.log(x); },
//     complete() { console.success('[Complete]'); }
// });

sub.next(1);
sub.next(2);
sub.next(3);
sub.next(4);
sub.next(5);