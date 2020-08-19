require('../00_Source/common');
const { Subject } = require("rxjs");

const userSubject = new Subject();



// adjust to log only allowed user
userSubject.subscribe(u => console.log(u));



userSubject.next({name: 'Max Muster', hasAccess: true});
userSubject.next({name: 'Donald Trump', hasAccess: false});
userSubject.next({name: 'Peter Fox', hasAccess: true});