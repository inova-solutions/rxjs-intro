require('../00_Source/common');
const { BehaviorSubject } = require("rxjs");

// create subject
const subject = new BehaviorSubject();

// send first data
subject.next('First');

// send second data
subject.next('Second');

// subscribe to observable
// it receives an initial value and then all following
subject.asObservable().subscribe(x => console.log(x));

// send third data
subject.next('Third');

// complete observable
subject.complete();

// BehaviorSubject with initial value
// const subject2 = new BehaviorSubject('Initial');
// subject2.asObservable().subscribe(x => console.log(x));
// subject2.next('Another');
// subject2.complete();