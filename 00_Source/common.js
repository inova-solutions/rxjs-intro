const chalk = require('chalk');

const log = console.log;

console.success = (...args) => log(chalk.green(...args));
console.error = (...args) => log(chalk.red('Error:', ...args));
console.log = (...args) => log(...args);