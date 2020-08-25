require('../00_Source/common');
const { of } = require("rxjs");
const { delay, repeat, takeUntil } = require('rxjs/operators');

// create an observable with an initial value of true
// the observable should get a value of false after 3000ms
// check the console to see how many cars can pass before the traffic light turns red
const trafficLight;

// this spawns a car every 500ms, up to 10 cars
const car = of('car').pipe(delay(500), repeat(100));

// cars drive through until the trafficLight turns red (observable is false)
car.pipe(takeUntil(trafficLight)).subscribe({
    next() { console.log('car drives through'); },
    complete() { console.log('traffic light turned red'); }
});