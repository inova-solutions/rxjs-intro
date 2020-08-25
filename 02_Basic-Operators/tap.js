require('../00_Source/common');
const { of } = require("rxjs");
const { tap } = require("rxjs/operators");

// create an observable
// log everytime the observable gets content
const obs = of('Hello World').pipe(tap(x => console.log(x)));

// subscribe to the observable and log
obs.subscribe(x => console.log(x));