require('../00_Source/common');
const { fromEvent } = require("rxjs");

// subscribe to an observable created from an event
fromEvent(document, 'click').subscribe(x => console.log(x));

// trigger some events
triggerEvent(document, 'click');
setTimeout(() => triggerEvent(document, 'click'), 1000);
setTimeout(() => triggerEvent(document, 'click'), 2500);