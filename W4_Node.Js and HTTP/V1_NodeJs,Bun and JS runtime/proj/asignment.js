// you have to create a CLI prompt to do some task for you 
// the library in node that helps you create CLI is commander.js use it, try to read the documentation for it and create something 

// create a command line interface that lets the user specify a file path and the node.js process counts the number of words in it.

const { program } = require('commander');

program
  .name("asignment")
  .description("CLI to some JS string utilities")
  .version('1.1.1');

program
  .description("Split string into substrings and display as an array")
  .option('-f, --first','display just the first substring')
  .option('-s, --separator <char>','separator char',',')
  .argument('<string>','string to split')


// program.command("argNum")
//     .description("counts the number of arguments provided")
//     .option('-H, --half', "print half the num of arguments provided")
//     .option('-F, --full',"print full num of arguments provided")
//     .argument('<int>',"enter any number of integers")


program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;

// console.log("==========")
// console.log(options);
// console.log(typeof(options));
// console.log(options.first);
// console.log(options);
// console.log("==========")
console.log(program.args[0]);
console.log(program.args[0].split(options.separator, limit));
