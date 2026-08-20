const { celsiusToF, fToCelsius } = require("./converter");
const chalk = require("chalk");

console.log(chalk.blue(`25°C = ${celsiusToF(25)}°F`));
console.log(chalk.green(`100°C = ${celsiusToF(100)}°F`));
console.log(chalk.yellow(`98.6°F = ${fToCelsius(98.6)}°C`));