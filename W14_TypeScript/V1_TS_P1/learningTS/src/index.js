// // JS code in TS
var x = 10; // this works in JS because of type inferencing
console.log(x);
// adding TS syntax to it
var y = 1; // correct TypeScript syntax with type annotation
console.log(y);
var num = "aayushi";
console.log(num);
num = 10;
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
function greet(name) {
    console.log("hello" + name);
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
function sumOfTwo(a, b) {
    return a + b; // we are implicitly returning the value of a+b, TS compiler is infereing the return type as number
}
var ans = sumOfTwo(1, 2);
console.log(ans);
// Q3--------------------------------------------------------
// write a function isLeagal takes age as number and returns true or false 
// function isLegal(age:number):number{   // define the return type of the function as number
function isLegal(age) {
    var r = age >= 18 ? true : false; // ternary operator
    return r; // we are implicitly returning the value of r, TS compiler is infereing the return type as boolean   
}
//Type Inference in TS
// Q4--------------------------------------------------------
// Write a function that takes another funtion as input and runs it after 1 sec 
// function running(fn: ()=> number ){
// function running(fn: ()=> void ){
function running(run) {
    setTimeout(function () {
        run();
        console.log("running function after 1 sec");
    }, 1000);
}
function running2(run) {
    setTimeout(run, 1000);
}
running(function () {
    console.log("function as argument");
});
// Playing with tsconfig flags
/* function rand(a){
    return a+3;
} */
function greet3(user) {
    console.log("hello" + user.name + " " + user.age);
}
function greet5(user) {
    console.log("hello" + user.name + " " + user.age + " " + user.auth);
}
greet5({
    name: "Aayushi",
    age: 22,
    auth: "user"
});
