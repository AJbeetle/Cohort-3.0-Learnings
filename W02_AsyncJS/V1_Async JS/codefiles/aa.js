function api() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data"); 
            resolve('200');
        },2000)        
    });
}

// await api();  // it gives error as await is used only in asunc functions and the top level bodies of module
/* 
async function getWeatherData(){
    await api();
}

getWeatherData();
 */

// So this is the way in which we use async await method . So we already have some functions that return a promise and then in order to accept that promise we donot use callbacks or then keyword instead we use async await

// Now lets say we need to call api twice

async function getWeatherData(){
    await api();
    await api();
}

// getWeatherData();

// now using the same concept in getData function

// 
function getData(gID){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data with dataId  : ", gID);
            resolve("success");
        },3000);
    });
}

// async function gettingData(){
//     console.log("getting data 1.....")
//     await getData(1);
//     console.log("getting data 2.....")
//     await getData(2);
//     console.log("getting data 3.....")
//     await getData(3);
//     console.log("getting data 4.....")
//     await getData(4);
// }

// gettingData();

// So you can already see how easy the syntax of async-await as compared to .then and callback hell. Therefore due to better readability and its easy way of implementation async-await is widely used and 

// MAKE NOTE : Whenever we use .then there we don't use async-await and wherever we are using async-await we donot use .then method

// Now you can see that whenever we are using callback method or promise chain method we donot require an extra function to be made and called in order to perform the task but in case of async-await we need to create a async function and then call it in order to run, so there is an unnecessary funvtion call that we need to do

// So in order to get rid of this problem there is a way in JS called : IIFE : Immediately Invoked Function Expression

// IIFE is a function that is called immediately as soon as it is defined

// Three ways to define IIFE (functions with no name and can be used only once)

// 1st METHOD

// SYNTAX  :  (function)();

// (async function() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
// })();


// 2nd Method 

(async ()=>{
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();

// 3rd METHOD

// (()=>{
//     console.log("Wowww");
// })();