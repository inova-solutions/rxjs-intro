require('../00_Source/common');
const { Subject } = require("rxjs");

// create subject
const subject = new Subject();

// send first data
subject.next('First');

// send second data
subject.next('Second');

// subscribe to observable
// it receives only second data
subject.asObservable().subscribe(x => console.log(x));

// send third data
subject.next('Third');

// complete observable
subject.complete();