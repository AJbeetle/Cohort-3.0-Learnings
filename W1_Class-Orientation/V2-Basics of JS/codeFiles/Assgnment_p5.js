// Assignment #1----------------------------------------------------------------------------
// Write a function that takes a user as an input and greets them with their name and age

function greet(user){
    console.log("Hello",user.name," your age is : ", user.age);
}

let user1 = {
    name : "aayushi",
    age : 21,
    gender : "F"
}

greet(user1);


// Assignment #2----------------------------------------------------------------------------
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greeting(user){
    let adj;
    if(user.gender == "M"){
        adj = "Mr."
    }
    else if(user.gender == "F")
        adj = "Ms."
    else adj = "Other"

    console.log("Hi "+adj,user.name," your age is : ",user.age);
}

greeting(user1);

// Assignment #3----------------------------------------------------------------------------
// Also tell the user if they are legal to vote or not  

function intro(user){
    let adj, chk;
    if(user.gender == "M"){
        adj = "Mr."
    }
    else if(user.gender == "F")
        adj = "Ms."
    else adj = "Other"

    if(user.age>=18){
        chk = true;
    }
    else{
        chk = false;
    }

    console.log("Hi "+adj,user.name," your age is : ",user.age," | voting eligibility : ",chk);
}

intro(user1);


// Assignment----------------------------------------------------------------------------
// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

let num = [1,2,34,4,3,5,6,7];

function chkEvOd(n){
    return n%2==0;
}

let evNum = num.filter(chkEvOd);
console.log(evNum);


// Assignment ----------------------------------------------------------------------------
// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

let us = [
    {name:"us1", age:12, gender:"M"},
    {name:"us2", age:45, gender:"F"},
    {name:"us3", age:10, gender:"F"},
    {name:"us4", age:23, gender:"M"},
    {name:"us5", age:18, gender:"F"},
    {name:"us6", age:17, gender:"M"},
]

function usAg(u){
    return u.age>=18;
}

let adults = us.filter(usAg);
console.log(adults);

console.log();

//Assignment----------------------------------------------------------------------------
// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

function usAgGen(u){
    return u.age>18 && u.gender=="M";
}

let filteredAdults = us.filter(usAgGen);
console.log(filteredAdults);
