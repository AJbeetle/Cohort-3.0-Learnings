// JS primarily

//Variables : used to store data, something whose value can change
// three ways : var, let and const

let firstName = "john";
const age = 30;
var isStudent = true;

// strikethrough words : depreciated terms it means that these terms were keywords some time before and now no one preferes to use these
console.log(firstName);
console.log(age);
console.log(isStudent);

// Var vs Let vs Const
// var is old way have some problems
// can't change value of const

//DATA_TYPES

let num = 2;
let str = "aj";
let tr = true;
let arr = [2, 3, 4];

//OPERATORS

let n = 12 + 4;
console.log(n);
let s = "aayushi" + " joshi";
console.log(s);

//FUNCTIONS
function greet(name) {
  return "hello, " + name;
}
function greet2(name) {
  console.log("hello, " + name);
  return;
}

let name = greet("Aayushi");
greet("Harsh");

console.log(name);

greet2("raman");

//ASSIGNMENT in JS 101 sheet
//1. WAF sum
function sum(a, b) {
  let s = a + b;
  return s;
}

let final = sum(23, 2);
// let s = sum("you","are");

console.log(final);
// console.log(s);

// 2. WAF canVote

function canVote(age) {
  if (age > 18) {
    return true;
  }
  return false;
}

let b = canVote(19);
let bo = canVote(3);

console.log(b);
console.log(bo);

//LOOPS
let nn = ["aayushi", "harsh", "sakshi", "hemant"];

for (let i = 0; i < nn.length; i++) {
  console.log(nn[i]);
}

console.log("------------------");

//OBJECTS - key:value pair
let user = {
  name: "aayushi",
  age: 22,
  gender: "F",
};

console.log(user.name);
console.log(user["name"]);
console.log(user["age"]);

//Assgn 1
// ----
//Assgn 2
function g(user) {
  console.log("Hi " + user.name + " your age is : " + user.age);
}

g(user);

//Assgn 3
function g2(user) {
  let chck = false;
  if (user.age > 18) {
    chck = true;
  }
  console.log(
    "Hi " +
      user.name +
      " your age is : " +
      user.age +
      " you can vote : " +
      chck,
  );
}

g2(user);

let f = [
  "22",
  3,
  true,
  {
    voter: "ritu",
    vote: 18,
  },
];

console.log(f[3]);
console.log(f[3].voter);

console.log("------------------");

let arra = [
  "harkirat",
  22,
  {
    lastname: "sing",
    DOByear: 1990,
    cities: [
      "delhi",
      "bangalore",
      {
        country: "India",
        continent: "Asia",
      },
    ],
  },
];

console.log(arra[2].cities[2].country);

// above is very ugly code

//ASSIGNMENT
// WAF that takes an array of objects as input, and return the users whose age > 18 and are male
let rr = [
  { name: "riman", age: 3, gender: "F" },
  { name: "hitesh", age: 19, gender: "M" },
  { name: "aayush", age: 18, gender: "M" },
  { name: "shruti", age: 20, gender: "F" },
];

// for(let e:rr){
//   if(e.age>18 && e.gender=='M'){
//     console.log(e.name);
//   }
// }

console.log("=======================");

// function retName(rr){
//   let newrr = [];
//   let ind = 0;
//   for (let i = 0; i < rr.length; i++) {
//     if (rr[i].age >= 18 && rr[i].gender == "M") {
//       newrr[ind]=rr[i].name;
//       console.log(rr[i].name);
//       ind++;
//     }
//   } 
// }
function retName(rr){
  let newrr = [];
  for (let i = 0; i < rr.length; i++) {
    if (rr[i].age >= 18 && rr[i].gender == "M") {
      newrr.push(rr[i]);
      // console.log(rr[i].name);
    }
  }
  return newrr;
}

retName(rr);
console.log("=======================");
let srr = retName(rr);
console.log(srr);
