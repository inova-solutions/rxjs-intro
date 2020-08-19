require('../00_Source/common');
const { fromEvent } = require("rxjs");
const { tap, debounceTime } = require("rxjs/operators");

// create a textbox
const input = document.createElement('input');
input.type = 'text';
input.value = '';




// subscribe to the keydown event of this textbox
fromEvent(input, 'keydown')
    .pipe(tap(event => console.log(event)))
    .pipe(debounceTime(300))
    .subscribe(() => console.log(input.value));




// Simulate typing the first word
setTimeout(() => simulateKeyboardEvent(input, 'keydown', 'H'), 10);
setTimeout(() => simulateKeyboardEvent(input, 'keydown', 'e'), 200);
setTimeout(() => simulateKeyboardEvent(input, 'keydown', 'l'), 300);
setTimeout(() => simulateKeyboardEvent(input, 'keydown', 'l'), 400);
setTimeout(() => simulateKeyboardEvent(input, 'keydown', 'o'), 500);

// Simulate waiting and typing the next word
setTimeout(() => {
    setTimeout(() => simulateKeyboardEvent(input, 'keydown', ' '), 10);
    setTimeout(() => simulateKeyboardEvent(input, 'keydown', 'W'), 200);
    setTimeout(() => simulateKeyboardEvent(input, 'keydown', 'o'), 300);
    setTimeout(() => simulateKeyboardEvent(input, 'keydown', 'r'), 400);
    setTimeout(() => simulateKeyboardEvent(input, 'keydown', 'l'), 500);
    setTimeout(() => simulateKeyboardEvent(input, 'keydown', 'd'), 600);
}, 1000);