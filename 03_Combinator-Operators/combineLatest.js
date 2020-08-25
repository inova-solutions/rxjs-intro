require('../00_Source/common');
const { Subject, combineLatest } = require("rxjs");

const user = new Subject();
const hobby = new Subject();

// everytime one of the observables gets data
// and data from the other exists, the combine happens
combineLatest([
    user.asObservable(),
    hobby.asObservable()
]).subscribe(([user, hobby]) => {
    console.log(`${user}'s hobby is ${hobby}`);
});

hobby.next('Golf');     // hobby updates [no user, golf] => nothing happens, data missing
hobby.next('Tennis');   // hobby updates [no user, tennis] => nothing happens, data missing
user.next('Max');       // user updates  [max, tennis] => output
hobby.next('Soccer');   // hobby updates [max, soccer] => output
user.next('Peter');     // user updates  [peter, soccer] => output
user.next('Simon');     // user updates  [simon, soccer] => output