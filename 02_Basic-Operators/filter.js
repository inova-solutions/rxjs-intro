require('../00_Source/common');
const { Subject } = require("rxjs");
const { filter } = require("rxjs/operators");

const subject = new Subject();

// only allow odd numbers
subject
    .pipe(filter(n => n % 2))
    .subscribe(n => console.log(n));

// try some numbers
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);
subject.next(6);
subject.complete();