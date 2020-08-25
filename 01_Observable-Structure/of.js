require('../00_Source/common');
const { of } = require("rxjs");

// quickly create observable and push a value
of('Hello World').subscribe({
    next(x) { console.log(x) ;},
    complete() { console.success('[Complete]') ;}
});