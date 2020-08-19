// // Create an observable
// const observable = new Observable(observer => {
//   // send 1. data
//   observer.next('Hello World');

//   // create an error
//   // observer.error(new Error('something went wrong!'));

//   // wait 1 second
//   setTimeout(() => {
//     // send 2. data
//     observer.next('wooooorld');

//     // complete the observable
//     observer.complete();
//   }, 1000);
// });

// // Subscribe to an observable
// observable.subscribe({
//   next(x) { console.log('Message: ', x) },
//   error(err) { console.error('Error: ', err.message) },
//   complete() { console.log('[Complete]') }
// });

// // Shorthand subscription
// observable.subscribe(x => console.log(x), err => console.error(err.message));

// Quick observable
// of('Hello World').subscribe(x => console.log(x));
