// // JS code in TS
let x=10     // this works in JS because of type inferencing
console.log(x);

// adding TS syntax to it

let y:number = 1;    // correct TypeScript syntax with type annotation
console.log(y); 

let num: number | string = "aayushi"
console.log(num);
num=10;
console.log(num); // this works because we have used union type, so it can be number or string  


// to turn ts code to js code write command => npx tsc -b in the terminal


// Q1------------------------------------------------------
// Write a function that greets a user given their first Name

//JS code
/* function greet(name){
    console.log("Hello"+name);
}
 */
//TS code

// function greet(name:string){
// function greet(name:any){    //avoid using any type as it defeats the purpose of using TS
function greet(name:string){
    console.log("hello"+name);
}

greet("AAYUSHI");
greet("JOSHI");
// greet(1);

// Q2-------------------------------------------------------
//Write a function that calculates sum of two functions

/* function a(n1:number){
    return n1;
}

function b(n2:number){
    return n2;
} */

function sumOfTwo(a:number, b:number){
    return a+b;   // we are implicitly returning the value of a+b, TS compiler is infereing the return type as number
}

let ans  = sumOfTwo(1,2);
console.log(ans); 


// Q3--------------------------------------------------------
// write a function isLeagal takes age as number and returns true or false 

// function isLegal(age:number):number{   // define the return type of the function as number


function isLegal(age:number){
    let r = age>=18 ? true : false;  // ternary operator
    
    return r;  // we are implicitly returning the value of r, TS compiler is infereing the return type as boolean   
}

//Type Inference in TS



// Q4--------------------------------------------------------
// Write a function that takes another funtion as input and runs it after 1 sec 

// function running(fn: ()=> number ){
// function running(fn: ()=> void ){
function running(run: ()=> void ){
    setTimeout(()=>{
        run();
        console.log("running function after 1 sec");
    },1000)
}


function running2(run: (()=> void) | ((a:number) => number)){
    setTimeout(run,1000);
}

// Asynchronous function call commented so to keep learning new things at below of code, you can uncommment it no problem
// running(()=>{
//     console.log("function as argument");
// });


// Playing with tsconfig flags
/* function rand(a){
    return a+3;
} */


function greet3(user:{
    name:string,
    age:number
}){
    console.log("hello"+user.name+" "+user.age);
}


// type userType = {
//     name:string,
//     age:number,
//     auth:string
// }

interface userType {
    name:string,
    age:number,
    auth:string
}

function greet5(user : userType){
    console.log("hello "+user.name+" | your age : "+user.age+" | your access : "+user.auth);
}


greet5({
    name : "Aayushi",
    age : 22,
    auth : "user"
})


greet5({
    name : "Hanskrit",
    age : 17,
    auth : "admin"
})


// TYPE in TS

/* type userType = {
    name:string,
    age:number,
    auth:string
} */


// INTERFACE in TS


/* interface userType {
    name:string,
    age:number,
    auth:string
} */


// Interfaces and Types are similar in TS, but there are some differences between them:
// 1. Interfaces can be extended, while types cannot be extended.  


interface User {
    name: string;
    age: number;
}

type UserTYPE = {
    name: string;
    age: number;
}

let user : User = {
    name: "Aayushi",
    age: 22
}

let userTwo: UserTYPE = {
    name: "Aayushi",
    age: 22
}

//2. Types let you give union of sme values

type stringOrNumber = string | number; // this is a type

let haha : stringOrNumber = "Aayushi"; // this is a variable of type stringOrNumber

//3. Types let you use union types and union interfaces, while interfaces do not.

type Employee = {
    name: string;  
    startDate: Date;
}

type Manager = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager; // this is a type
// this is a type that combines Employee and Manager types

const teamLead : TeamLead = {
    name: "Aayushi",
    startDate: new Date(),
    department: "HR"
}