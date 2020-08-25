require('../00_Source/common');
const { Observable } = require("rxjs");

// Create an observable
const obs = new Observable(subscriber => {
  // send 1. data
  subscriber.next('Hello World');

  // create an error
  // subscriber.error(new Error('something went wrong!'));

  // wait 1 second
  setTimeout(() => {
    // send 2. data
    subscriber.next('Hello Timeout');

    // complete the observable
    subscriber.complete();
  }, 1000);
});

// Subscribe to an observable
obs.subscribe({
  // when new data comes in
  next(x) { console.log(x); },

  // when there is an error
  error(err) { console.error(err.message); },

  // when the observable completes
  complete() { console.success('[Complete]'); }
});

// Shorthand subscription
// obs.subscribe(x => console.log(x), err => console.error(err.message));