require('../00_Source/common');
const { Subject } = require("rxjs");
const { takeUntil } = require("rxjs/operators");

// unsubscriber
const unsubscribe = new Subject();

const sub = new Subject();

// subscribe to observable until commanded to unsubscribe
sub.pipe(takeUntil(unsubscribe)).subscribe({
    next(x) { console.log(x); },
    complete() { console.success('[Complete]'); }
});

sub.next(1);
sub.next(2);
sub.next(3);

// command to unsubscribe
unsubscribe.next(true);

sub.next(4);
sub.next(5);