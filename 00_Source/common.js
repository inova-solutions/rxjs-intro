const chalk = require('chalk');

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