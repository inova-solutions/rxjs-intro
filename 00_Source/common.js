const chalk = require('chalk');
const { JSDOM } = require('jsdom');

// add window and document
window = new JSDOM().window;
document = window.document;

// add helper for triggering events
triggerEvent = (element, type, options) => {
    let event = document.createEvent('Event');
    event.initEvent(type, true, true);
    event = Object.assign(event, options);
    element.dispatchEvent(event);
}

simulateKeyboardEvent = (element, type, key) => {
    element.value += key;
    triggerEvent(element, type, {key});
}

// improve console styling
const originalConsoleLog = console.log;
const log = (...args) => originalConsoleLog(time(), ...args);

const time = () => {
    const d = new Date();
    const h = d.getHours().toString().padStart(2, '0');
    const m = d.getMinutes().toString().padStart(2, '0');
    const s = d.getSeconds().toString().padStart(2, '0');
    const ms = d.getMilliseconds();
    return chalk.grey(`[${h}:${m}:${s}.${ms}]`);
}

console.success = (...args) => log(chalk.green(...args));
console.error = (...args) => log(chalk.red('Error:', ...args));
console.log = (...args) => log(...args);