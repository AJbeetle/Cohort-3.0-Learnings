//PROMISES IN JAVA

//------------------------------------------------------------------------
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise")
//     // resolve();
//     // resolve(123);
//     // resolve("success");
//     // reject();    // gives exception : unrsolved rejection
//     // reject("some error occured")
//     resolve("exit status 1");
// })

// console.log(promise)


// // We Don't really create a promise in general programming, we send some request to API to fetch some data and that API returns us some promise and then from that we extarct the status and extract the data from that promise
// // but here we are not dealing with datasets and not dealing with other systems there we are creating our own promises. but in general programming other people create promises for us and we only handle them


// // Let's Suppose getData is some API that returns some data to us
// /* 
// function getData(gID, gnext){
//     setTimeout(()=> {
//         console.log("data with ID : ",gID);
//         if(gnext){
//             gnext();
//         } 
//     },2000);
// }

//  */
// // Now API do not return data the way it is defined above they return us a promise inside which there is a function running

//     function getData(gID, gnext){
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 console.log("data with dataId  : ", gID);
//                 resolve("success");
//                 if(gnext){
//                     gnext();
//                 }
//             },2000);
//         });
//     }

// getData(2, ()=>{
//     getData(3);
// });


//-------------------------------------------------------------------

// Working with promises
// promises are either rejected or resolved . So the work to be performed when your promise is reslolved or when your promise is rejected is done by the help of .then() and .catch() functions

// so when you want  to perform some function after your promise has been resolved then you use .then() : promise.then((res) => {...})

// and when you promise is rejected and after that you want to perform some action then you use .catch() : promise.catch((err) => {...})

// Now let's create a new fucntion that creates a promise

const getPromise = () => {
     return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I am a promise");
            // resolve("success");
            reject("error here")
        },1000)
    })
}

let promise = getPromise();
promise.then((res) => {
    console.log("promise fullfilled,  with status :",res);
})

promise.catch((err)=>{
    console.log("promise gave some error,  error : ",err)
})

 

// Learnng Promise Chain  : go to file pc.js
