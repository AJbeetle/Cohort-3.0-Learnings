console.log("helloworld")

//find sum of two numbers

function sum(a,b){
    return a+b;
    // return parseInt(a)+ parseInt(b);
}

let a = sum(2,3);
// let a = sum("2",3);  //string concatination happens
/// two ways to get around above problem : 
/*
1. use typescript
2. parse it to anumber, type casting

*/
// let a = sum("2","3");

console.log(a);

function sumtilln(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum = sum+i;
    }
    return sum;
}

console.log(sumtilln(10)) 

// This all written above is : ***Synchronous JS code***
// Meaning line by line execution, in order in which it is written, each operation waits for previous execution to end.




// 1. I/O heavy operations : It refers to a task in computer program that involves a lot of data transfer between the program and external systems or devices. It is CPU intensive task.
// Ex : reading a file  |  starting a clock : runnning a code after some delay in code  |  sending HTTP request  (Hyper text transfer protocol)

// require statemet helps import libraries 

//importing fs library

const fs = require("fs"); // fs is fileSystem an external library, it allows us to work with file system in our system 

const content1 = fs.readFileSync("a.txt","utf-8");  // (locn of file), (bytes, hex, it is encoding type)
const content2 = fs.readFileSync("../notes/b.txt","utf-8");  // (locn of file), (bytes, hex)
console.log(content1, "\n", content2);

// SO THE ABOVE CODE IS : Sequentially reading from two files, synchronously

// ONE PERFORMANCE DOWNSIDE : 
// const cn = fs.readFile("a.txt","utf-8", /* function needed */); //asynchronously
// console.log(cn);

console.log(1+3);


// I/O BOUND TASKS vs CPU BOUND TASKS
// Running I/O bound tasks asynchronously is a better way

// learning first functional arguments
/// WA calculator P that adds, substract, divide and multiply

//1st approach

console.log("-----------------------------------------")

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function multiply(a,b){
    return a*b;
}

console.log(add(2,5));

// approach 2 : using functional arguments : passing a function as to another function as an argument

function doOper(a,b,op){
    return op(a,b);
}

console.log("functional argument ------------------")

console.log(doOper(3,4,sub));
console.log(doOper(3,4,add));
console.log(doOper(3,4,divide));
console.log(doOper(3,4,multiply));



// Lets look at the code to read from file asynchronously. Here we pass the function as an argument. This function is called a CALLBACK since the function gets called back when the file is read.


//The arguments below are defined by maker of fs library who made readFile function that callback functions must have 1st argument as error if any and then the contents of file.
function read(err, data){
    // console.log("error : ", err);
    // console.log("data : ", data);
    if(err){
        console.log("error is : ", err);
    }
    else{
        console.log(data);
    }
}

fs.readFile("a.txt","utf-8",read);  //asynchronously working
fs.readFile("../notes/b.txt","utf-8",read);  //asynchronously working
// fs.readFile("a.txt","utf-8",read);  //asynchronously working

console.log("DONE !!")



// Looking another asynchronous function


// setTimeout(function timeout(){
//     console.log("run afetr 5000 milisecs i.e. 5 sec")
// }, 5000);


// OR

function timeout(){
    console.log("running... after 5 sec");
}

setTimeout(timeout,5000);


console.log("Hey I ran before everybody")


// go to file : asyncfunc.js











