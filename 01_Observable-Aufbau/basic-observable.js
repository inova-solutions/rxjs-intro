const { Observable } = require("rxjs");

// Create an observable
const obs = new Observable(observer => {
  // send 1. data
  observer.next('Hello World');

  // create an error
  // observer.error(new Error('something went wrong!'));

  // wait 1 second
  setTimeout(() => {
    // send 2. data
    observer.next('Hello Timeout');

    // complete the observable
    observer.complete();
  }, 1000);
});

// Subscribe to an observable
obs.subscribe({
  next(x) { console.log('Message:', x); },
  error(err) { console.error('Error:', err.message); },
  complete() { console.log('[Complete]'); }
});

// Shorthand subscription
// obs.subscribe(x => console.log(x), err => console.error(err.message));