//Q1. create a function that takes either a user or an admin as an input, and returns a string saying "Welcome, [name]"

type USER = {
    name:string,
    age:number,
    auth:"user",
    access:true
}


type ADMIN = {
    name:string,
    age:number,
    auth:"admin",
    create:true
}


function greeting(a:USER | ADMIN){
    return "Welcome "+a.name;
}


let me:USER={
    name:"aayushi",
    age:22,
    auth:"user",
    access:true
}

let meAsAdmin:ADMIN={
    name:"aayushi as Admin",
    age:22,
    auth:"admin",
    create:true
}

let meAsBoth:USER | ADMIN = {
    name:"Aayushi as admin and user both",
    age:22,
    auth:"admin",
    create:true,
    // access:true  // creates issue

}

let output:string = greeting(me);
let output2:string = greeting(meAsAdmin);
let output3:string = greeting(meAsBoth);
console.log(output)
console.log(output2)
console.log(output3)   //something to I did that I cannot assign key value pairs from both types


// go to index7.ts