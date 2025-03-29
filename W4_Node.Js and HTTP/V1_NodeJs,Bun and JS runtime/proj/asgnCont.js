/* const { program  } = require('commander');
const f = require("fs");
// const chk = require("chalk");

// import chalk from "chalk";

program.name("asgnCount")
.description("it will count number of words in file given as argument give exactly one argument")
.version("1.0.0");

program
.description("give exactly one argument i.e. filename")
.option("-H, --half","half of the contents in file will be read")
.option("-F, --full","full contents of the file will be read")
.argument("<String>","filepath")

program.parse();

const options = program.opts();

// console.log(program.args[0]);

try{
  const read = f.readFileSync(program.args[0],"utf-8"); 

  // console.log(options.half);
  // console.log(program.opts());
  if(options.half){
    const s = (read.trim().split(/\s+/).length)/2;
    console.log("The number of words in half of the file : ",s);
  }
  else if(options.full){
    const s = (read.trim().split(/\s+/).length);
    console.log("The number of words in full file : ",s);
  }
  else{
    console.log("Kindly give some options before file path")
  }
}
catch(e){
  // console.log(chalk.red("!!! ERRROR !!! "));
  console.log()
  console.log("!!! ERRROR !!! ");
  console.log("----------------------------------------------------")
  console.log(e.message);
  console.log("----------------------------------------------------")
  console.log()
} */





//------------------------------------------------------------------------
// using .action in program itself : using file Synchronous function
//------------------------------------------------------------------------
/* 
const { program  } = require('commander');
const f = require("fs");

program.name("asgnCount")
.description("it will count number of words in file given as argument give exactly one argument")
.version("1.0.0");

program
.description("give exactly one argument i.e. filename")
.option("-H, --half","half of the contents in file will be read")
.option("-F, --full","full contents of the file will be read")
.argument("<String>","filepath")
.action((arg,options)=>{
  try{
    const read = f.readFileSync(arg,"utf-8"); 
    if(options.half){
      const s = (read.trim().split(/\s+/).length)/2;
      console.log("The number of words in half of the file : ",s);
    }
    else if(options.full){
      const s = (read.trim().split(/\s+/).length);
      console.log("The number of words in full file : ",s);
    }
    else{
      console.log("Kindly give some options before file path")
    }
  }
  catch(e){
    console.log()
    console.log("!!! ERRROR !!! ");
    console.log("----------------------------------------------------")
    console.log(e.message);
    console.log("----------------------------------------------------")
    console.log()
  }

})

program.parse(); */





//------------------------------------------------------------------------
// using .action in program itself : using file Asynchronous function
//------------------------------------------------------------------------
// if you want to use this way by creating multiple objects of commander having class Command then explicitly use Command keyword wghile requirinf from commander.js module
const { Command } = require('commander');
const f = require("fs");

const m = new Command();

m.name("asgnCount")
.description("it will count number of words in file given as argument give exactly one argument")
.version("1.0.0");

m.command("count")
.description("give exactly one argument i.e. filename")
.option("-H, --half","half of the contents in file will be read")
.option("-F, --full","full contents of the file will be read")
.argument("<String>","filepath")
.action((arg,options)=>{
  const read = f.readFile(arg,"utf-8",(err,data)=>{
    if(err){
      console.log();
      console.log("-----------------------------------------------------------");
      console.log(err.message)
      console.log("-----------------------------------------------------------");
      console.log();
    }
    else{
      if(options.half){
        const s = (data.trim().split(/\s+/).length)/2;
        console.log("The number of words in half of the file : ",s);
      }
      else if(options.full){
        const s = (data.trim().split(/\s+/).length);
        console.log("The number of words in full file : ",s);
      }
      else{
        console.log("Kindly give some options before file path")
      }
    }
  });
});

m.command("viewFile")
.description("just reading the file")
.argument("<String>","Filepath")
.action((arg)=>{
  const r = f.readFileSync(arg,"utf-8");
  console.log(r);
})

m.parse();