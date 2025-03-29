/* console.log("running the setTimeout in 3 sec : ")
setTimeout(()=>{
    console.log("aayushi is running..")
},3000);
 */
// console.log("hey there")

//PEOMISIFYING SETTIMEOUT : WRONG WORK DONE
/* 
setTimeout(()=>{
    return new Promise((resolve, reject)=>{
        console.log("after 1 sec : ")
        // resolve("success")
    });
},2000)

console.log("after running promisified setTimeout")

 */
// -------------------------------------------------------------------------
// RIGHT ANSWER : 
/* 
function setTimeoutProm(ms){
    let p = new Promise((resolve, reject)=>{
        setTimeout(resolve,ms);
    })
    return p;
}

function callback(){
    console.log("this is callback function being called as a promise. ")
}

let a  = setTimeoutProm(2000).then(callback);
console.log(a);
 */

// -------------------------------------------------------------------------

// PROMISIFYING fs.readFile function : WRONG WORK DONE
/* 
const fs = require("fs");

function read(err, val){
    return new Promise((resolve, reject)=>{
        if(err){
            console.log("The error is :",err);
            reject(":(");
        }
        else{
            console.log("The Successfull execution with data in file : ", val);
            resolve(":)");
        }
    });
}

fs.readFile("a.txt","utf-8",read)
 */

// --------------------------------------------------------------------------

// RIGHT ANSWER : either using .then or async-await

// Three ways to do so :
/*  1. Manual Prmisify
    2. util.promisify function from node.js
    3. promises API from node.js 
 */

// 1. Manually Promisify

/* 
const f = require("fs");

function fileReadProm(path, encoding){
    return new Promise((resolve, reject)=>{
        f.readFile(path, encoding, (err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

//1a) using .then
// try{
//     fileReadProm("../notes/b.txt","utf-8")
//     .then((res)=>{
//         console.log("The data from file is : ",res);
//     })
//     .catch((err)=>{
//         console.log("error :( is : ",err.message);
//     })

// }
// catch(e){
// }

//2b) using async-await
async function read(){
    const t = await fileReadProm("a.txt","utf-8");
    console.log("data is : ",t);
}

read(); */

// 2. util.promisify method
/* 
const f = require("fs");
const u = require("util");

const read = u.promisify(f.readFile);

//2a) .then method

read("b.txt","utf-8")
.then((data)=>{
    console.log("data is : ", data);
})
.catch((err)=>{
    console.log("error : ",err.message);
})


// 2b) async-await

// (async function () {
//     try{
//         let s = await read("b.txt","utf-8");
//         console.log("data is : ",s);
//     }
//     catch(err){
//         console.log(err.message);
//     }
// })();
 */

//3. PROMISES API in JS
/* 
const f = require("fs").promises;

//3a) .then method
// f.readFile("b.txt","utf-8")
// .then((data)=>{
//     console.log("data is : ", data);
// })
// .catch((err)=>{
//     console.log("error is : ",err.message);
// })

//3b) using async await

// (async function (){
//     try{
//         let t = await f.readFile("../notes/b.txt","utf-8");
//         console.log("data is :  ",t);
//     }
//     catch(err){
//         console.log("error is : ",err.message);
//     }
// })();

 */

// --------------------------------------------------------------------------

//PROMISIFYING fetch function : fetch function is already promisified it means it already returns a promise
/* 
const fetchingProm = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

fetchingProm.then((res)=>{
    console.log("fetched data, with message : ", res.status);
    const jsonProm = res.json();
    jsonProm.then((data)=>{
        console.log(data);
        // console.log(data[0]);
        // console.log(data[0].name);
    })
})

 */


/// USING .then
    const t = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

    
    
    t
    .then((data)=>{
        if(!data.ok){
            // console.log("HTTP REQUEST ERROR : ", data.status);
            throw new Error("HTTP REQUEST ERROR : ", data.status);
        }
        else{
            data.json()    // this .json() is also asynchronous function that returns a promise there .then used again
            .then((data)=>{
                console.log("data is : ",data)
            });
            // console.log(data.json());
        }
    })
    .catch((err)=>{
        console.log("Error fetching the API : ",err.message);
    })
    


// USING ASYNC AWAIT
/* 

(async function(){
    try{
        const data = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    
        // let t = data;   // so fetch function is returning an object named response having details of the data returned by api
        // let t = data.statusText;
        // let t = await data.ok;    // checks if API is returning something or not
        if(!data.ok){
            throw new ERROR("HTTP REQUEST ERROR : ",data.status);
        }
        const t = await data.json();
        console.log("data is : \n",t);
    }
    catch(err){
        console.log("error in fetching API : ", err.message);
    }

})();
 */