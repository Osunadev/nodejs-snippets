const chalk = require('chalk');

if (process.argv.length > 2) {
  const arguments = process.argv.slice(2);

  console.log(
    chalk.red.bold('You passed down these arguments: '),
    chalk.green(arguments)
  );
} else {
  console.log(chalk.red.bold("You didn't provide any argument!"));
}
