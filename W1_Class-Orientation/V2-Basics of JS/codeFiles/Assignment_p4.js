// const prompt = require ("prompt-sync")({sigint: true})
const prompt = require ("prompt-sync")()

// Assignment----------------------------------------------------------------------------
// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

var favCol = "black";
const height = 162.56;   //In cm 
let LikePizza = true;

console.log(favCol);
console.log(height);
console.log(LikePizza);


// Assignment #1----------------------------------------------------------------------------
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?


function sum(a,b){
    return a+b;
}

let a = sum(3,4);
let str = sum("aayushi"," joshi");

console.log(a);
console.log(str);

// Assignment #2----------------------------------------------------------------------------
// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    if(age>18){
        return true;
    }
    return false;
}

let chk = canVote(79);
console.log(chk);

chk = canVote(12);
console.log(chk);


// Assignment----------------------------------------------------------------------------
// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

let n = prompt("enter any Integer : ")    //this is running in terminal but not here in VS code there is some problem with this code runner extension
// let n = 12    

if(parseInt(n)%2==0){
    console.log("The number is even");
}
else console.log("The number is odd");


//Assignment----------------------------------------------------------------------------
// Write a function called sum that finds the sum from 1 to a number


//by loops
function sumTillN(n){
    let sm = 0;
    for(let i=1; i<=n;i++){
        sm = sm+i;
    }
    return sm;
}

//by formula
function sumT(n){
    let sum = n*(n+1)/2;
    return sum; 
}

let N = prompt("Enter limit : ");
// let N = 10

let s = sumTillN(parseInt(N));
let ss = sumT(parseInt(N));
console.log(s);
console.log(ss);


// prompt : always returns a string output, so whatever user eneters is accepted as string