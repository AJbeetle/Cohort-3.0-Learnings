//------------------------------------------------------
/* 
// Learning about Asynchronous functions, callbacks, prmises and async / await



//1. Synchronous programming
console.log("1")
console.log("2")
console.log("3")
console.log("4")

//2. Asynchronous Programming
console.log("5")
console.log("6")
console.log("7")

function hello(){
    console.log("Say Hello");
}

setTimeout(hello, 1000);
setTimeout(()=> {
    console.log("Saying Hello for second time")    
},5000);

console.log("8")
console.log("9")

// Callbacks

function add(a,b){
    console.log(a+b)
    return a+b;
}

function calculator(a,b,op){
    return op(a,b);
}

calculator(12,15,add);

calculator(3,0,()=>{
    console.log(3*0);
    return 3*0;
})

const hel = () => {
    console.log("Hello arrow function");
}

setTimeout(hel, 1000);


//Callback hell

let age = 90;
//nested if_s : similarly nested callbacks can also happen
if(age>18){
    if(age>=60){
        console.log("Senior");
    }
    else{
        console.log("middle")
    }
}
else{
    console.log("child")
}
 */
//-----------------------------------------------------


//So when nested Callback when become very deep they form callback hell


/*
function getData(dataID){
    setTimeout(()=>{
        console.log("data with id : ", dataID);
    },2000);
}

getData()
getData(123)

//say we want data1, data2 and then data3

getData(1)  //2s timer started and run following line
getData(2)  //2s timer started and run following line
getData(3)  //same for this too


*/
// so timer started for all three data fetch function at the same time there fore we got the rsult at almost same time

//Practical Example : Say we want to login a user to a service and then user enters username and password. Now first you will want to check the username in the database and if it does not exist send error message and if it does then it goes for checking the password corresponding to it. So each execution happens one after another.

// function gD(gdID, gdNext){
//     setTimeout(()=>{
//         console.log("data with ID : ",gdID)
//         if(gdNext){
//             gdNext();
//         }
//     },3000);
// }

// gD(1, gD(2));   // this won't work as the second argument was supposed to be functional argument and here it just immediately keeps the output of gD(2) in place of argument, so to prevent that you create a arrow function there that does not execute immediately at that place 


// callback hell

// gD(1, ()=>{
//     gD(2 , () =>{
//         gD(3, ()=>{
//             gD(4);
//         });
//     });
// });                  // arrow function acts as proper functional argument 



// NOW TO SOLVE THE PROBLEM OF CALLBACK HELL : We use promises 
 
// see another codefile lp.js


// coming back from pc.js doing above thing using PROMISE CHAIN

// Taken following promise returning version of getData() from lp.js
/*
function getData(gID, gnext){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data with dataId  : ", gID);
            resolve("success");
            if(gnext){
                gnext();
            }
        },2000);
    });
}


getData(1).then(()=>{
    getData(2).then(()=>{
        getData(3).then(()=>{
            getData(4).then(()=>{
            });
        });
    });
});
*/

// now since you are using promises you donot need that second argument

// So the whole code reduces to :

function getData(gID){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data with dataId  : ", gID);
            resolve("success");
        },2000);
    });
}

/* 
getData(1).then(()=>{
    getData(2).then(()=>{
        getData(3).then(()=>{
            getData(4).then(()=>{
            });
        });
    });
});
 */

// more easier way to return things for what done above

getData(1).then((res)=>{
    return getData(2)
}).then((res)=>{
    return getData(3) 
}).then((res)=>{
    return getData(4)
}).then((res)=>{
    console.log("final success with message : ", res); 
})

// THE ABOVE CODE IS PROPER WAY OF DOING : PROMISE CHAIN

// move to new file named aa.js
