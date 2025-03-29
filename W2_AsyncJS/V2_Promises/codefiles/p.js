// PROMISE CLASS : it gives you a promise that I will return you something you in future

/* 
function logName(){
    console.log("Harkirat")
}
setTimeout(logName,2000);   // callback function
 */

// We can always use two approaches : 
// 1. Callback based  
// 2. Promise based


// So we can always do our async operations using callbacks, its just that promises are better and cleaner way to do so

// So calling a PROMISE is easy but defining your own promise is little hard

// So first we will learn how to use a promise and then eventually we will see how to create our own promise


// PROMISE : A promise in JS is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


//CALLBACK APPROACH EXAMPLE  :
/* 
function maon()
{

}
setTimeout(maon, 2000); 
*/

//promises are used to handle asynchronous operations more effetively rather than traditional callback functions, providing a cleaner and more managable way to deal witg code that executes asynchronously, such as an API calls, file I/O, or timers.


// NOW comparing : 

// CALLBACK APPROACH : 
// setTimeout(callback,2000);

//PROMISE APPROACH : 
// setTimeoutPromisified(2000).then(callback);
/* 
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));

    // returning object of promise class
}

function callback(){
    console.log("3 seconds have passed")
}

// setTimeoutPromisified(2000).then(callback);
let p = setTimeoutPromisified(2000);
console.log(p);
 */



// Trying to understand more deeply :  Creating wrapper for setTimeout
/* 
function waitFor3s(res){
    setTimeout(res,3000);
}

function main(){
    console.log("Hey there");
}

waitFor3s(main);
 */
 

// PROMISIFIED APPROACH for fileRead();


// Callback approach for fileRead
/* 
function read(err, data){
    if(err){
        console.log("error is : ",err);
    }
    else{
        console.log("data is :",data);
    }

}
fs.fileRead("a.txt","utf-8",read);
 */


// PROMISIFIED approach for fileRead

// fs.fileRead("a.txt","utf-8").then(read);

/* 

// UNDERSTaiNDING PROMISE.......
function random(resolve){
    // setTimeout(()=>{
    //     resolve("done")
    // },2000);

    setTimeout(resolve,2000);
}

let p = new Promise(random);   // promise is supposed to reutrn you something eventually

// now this new instance of Promise class gets completed when resolve or reject method is called from within the promise and 
function callback(){
    console.log("done bro :)")
}
p.then(callback);
// console.log(p);


// WORKING OF PROMISE : so promise gets succedes when the function given inside new Promise(fun) its first argument resolve is called 
 */

// fs.readFile promisified
/* 
const f = require("fs");

function read(path, encoding){
    return new Promise((resolve, reject)=>{
        f.readFile(path, encoding, (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

read("a.txt","utf-8")
.then((res)=>{
    console.log("data is : ", res);
})
.catch((err)=>{
    console.log("error is : ", err.message);
})

 */


/*   // Trying to learn where does the value returned by callback function go once it returns something
const file = require("fs");

function read(err,data){
    if(err){
        // console.log(err);
        return err;
    }
    else{
        // console.log(data);
        // console.log(typeof(data))
        // let m = data.toString("utf-8");
        return data;
    }
}


let s = file.readFile("a.txt","utf-8",read); 
// let str = new String(file.readFile("a.txt","utf-8",read)); 

// console.log(s);
// console.log(file.readFile("a.txt","utf-8",read,String));

setTimeout(()=>{
    console.log(s)
},3000);
 */



// TASK GIVEN BY HARKIRAT : 
// Promisify : fs.readFile : DONE
//             fs,writeFile : DONE
//             fs.cleanFile : DONE

//_______NORMAL fs.WriteFile function in JS  :  writeFile either creates new file or overrites in existing file

      //a) prmisifying using promises API


      /* 
const f = require("fs").promises;


// f.readFile("append.txt","utf-8").then((data)=>{
//     console.log("data is :",data);
// })


// f.writeFileSync("append.txt","1,2,3,4","utf-8");


// f.writeFile("append.txt","Hey","utf-8",(err)=>{
//     if(err){
//         console.log("error : ",err);
//     }
//     else{
//         console.log("SUCCESSFULLY DONE");
//     }
// })

let t = f.writeFile("append.txt","This is appended data","utf-8")
.then((err)=>{
    if(err) console.log("error is : ",err);
    else console.log("SUCCESSFULLY WRITTEN IN FILE ");
})


f.readFile("append.txt","utf-8").then((data)=>{
    console.log("written data is :",data);
})
 */


      //b) promisifying using manually promise creation
/* 
const fs = require("fs");

function read(path, encoding){
    return new Promise((resolve, reject)=>{
        fs.readFile(path, encoding, (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

function write(path, data, encoding){
    return new Promise((resolve, reject)=>{
        fs.writeFile(path, data, encoding,(err)=>{
            if(err){
                reject(err);
            }
            else{
                console.log("Data Written SUCCESSFULLY");
                let t = read(path, encoding).then((res)=>{
                    return res;
                })
                resolve(t);
            }
        })
    })
}

write("append.txt","HUNNY BUNNY","utf-8")
.then((res)=>{
    console.log("data written is : ", res);
})
.catch((err)=>{
    console.log("some error : ", err.message);
})
 */


//_________DElETING FILE  : fs.unlink or fs.unlinkSync
// fs.unlinkSync is synchronous function 
// fs.unlink is asynchronous function
/* 
const fs = require("fs");

fs.unlinkSync("appes.txt");
 */


//_________Cleaning file : use the writeFile method only just update the to be written content to empty quotes



//----------------------LEARNT PROMISES and ASYNC WAIT very nicely------------------------------------

// PROMISIFIED version are under the hood using callbacks only. It is just that promises are syntactically better way to write callbacks



// VERRRYYYY BASIC FLOW OF WHOLE PROMISE using setTimeout PROMISIFIED

/* 
console.log("------------------------------------START OF THE FILE------------------------------------")


function promiseFunc(res, rej){
    console.log("promiseFunc is called");
    return setTimeout(res, 2000);
}

function setTimeoutPromisified(){
    console.log("setTimeout promisifd is called");
    return new Promise(promiseFunc);
}

function callback(){
    console.log("my callback is called using promises");
    console.log("HELLO AFETR 2 secs");
    console.log("------------------------END OF WORK------------------------------")
    console.log();
}

setTimeoutPromisified().then(callback);

console.log("------------------------------------END OF THE FILE------------------------------------")

 */


// CREATING OUR OWN PROMISE CLASS

class Promise2{
    constructor(fn){
        // this.fn = fn;
        // this.fn(()=>{
        //     this.resolve();
        // })

        this.resolve = null;
        fn(()=>{
            if(this.resolve){
                this.resolve();
            }

        })
    }

    then(callback){
        this.resolve = callback;
    }
   
}

function promFunc(res){
    setTimeout(()=>{
        res();
    },2000);
}


function setTimeoutprom(){
    return new Promise2(promFunc);
}

function cb(){
    console.log("callback called");
}

setTimeoutprom().then(cb);