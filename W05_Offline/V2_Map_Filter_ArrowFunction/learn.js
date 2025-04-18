//ARROW FUNCTIONS ------------------------------------------------------
// normal way of writing function :

function sum(a,b){
    return a+b;
}

const ans = (a,b) => {
    return a+b;
}


const a = sum(1,3);

// the difference is how both of them get binded

// app.post("/right",(req,res)=>{
//     // something...
// })

// // OR 


// app.post("/left",function(req,res){
//     //something...
// })


//LEARNING MAP AND FILTER

// MAPS ------------------------------------------------------

// given an array give me an array where each value is multiplied by 2

let arr = [1,2,3,4,5];

// 1st Way

/* 
let newArr = [];

for(let i=0; i<arr.length;i++){
    newArr.push(arr[i]*2);
}

console.log(newArr); */

// 2nd Way : cleaner Way

// a function can take another function as input in js

// map(arr, func)

// map is used to transform the arr using the tranformation funcn that we give it

function transformation(i){
    return i*2;
}

// map(arr,f); // but this is not the syntax

let an = arr.map(transformation);
console.log(an);

let m = arr.map(t=>{
    return t*3;
})

console.log(m);



// FILTERS ------------------------------------------------------

// what if i tell you given the input arr give me all even values from it

const at = [4,5,6,6,7,1,9,1];
function filterlogic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const sol = at.filter(filterlogic);
console.log(sol);
const sol2 = at.filter(n => {
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
});

console.log(sol2);

let str = "aayushi";

console.log(str.startsWith("a"));

// writing my own map function as HW

function map(arr, transf){
    let nAr = [];
    for(let i=0; i<arr.length;i++){
        nAr.push(transf(arr[i]));
    }
    return nAr;
}

let array = [2,4,65,6,8];

let nArray = map(array, transformation);

console.log(nArray);

