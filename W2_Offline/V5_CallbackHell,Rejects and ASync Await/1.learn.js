//promisified setTImeout

function setTimeoutPr(dur){
    return new Promise((resolve)=>{
        setTimeout(resolve,dur);
    });
}

function callback(){
    console.log("iterating...");
}

setTimeoutPr(1000).then(callback);
console.log("printing after 1 sec :")

// function greet1(){
//     console.log(new Date().getSeconds())
//     console.log("Hello after 1 sec")
// }
// function greet3(){
//     console.log(new Date().getSeconds())
//     console.log("Hello after 3 sec")
// }
// function greet5(){
//     console.log(new Date().getSeconds())
//     console.log("Hello after 5 sec")
// }


// expected to do callback hell Question in lecture slides



// doesn't work as expected
// setTimeoutPr(1000).then(greet1);
// setTimeoutPr(3000).then(greet3);
// setTimeoutPr(5000).then(greet5);


// CALLBACK HELL
// setTimeout(()=>{
//     greet1();
//     setTimeout(()=>{
//         greet3();
//         setTimeout(()=>{
//             greet5();
//         },5000)
//     },3000)

// },1000)

//Cleaner way of writing callback hell

// function greet5(){
//     console.log(new Date().getSeconds());
//     console.log("greet after 5 sec");
// }

// function greet3(){
//     console.log(new Date().getSeconds());
//     console.log("greet after 3 sec");
//     setTimeout(greet5,5000);
// }

// function greet1(){
//     console.log(new Date().getSeconds());
//     console.log("greet after 1 sec");
//     setTimeout(greet3,3000);
// }

// setTimeout(greet1,1000);


// WRONG WAY OF DOING PROMISE CHAIN
// setTimeoutPr(1000).then(greet1)
// .then(setTimeoutPr(3000).then(greet3))
// .then(setTimeoutPr(5000).then(greet5));

var prev = new Date().getSeconds();

function greet(){
    let n = new Date().getSeconds();
    console.log("Hi after : ",n-prev,"seconds");
    prev = n;
}

// 1st Way of PROMISE CHAIN
// setTimeoutPr(1000).then(()=>{
//     greet();
//     setTimeoutPr(3000).then(()=>{
//         greet();
//         setTimeoutPr(5000).then(greet);
//     })
// })


// 2nd Way of PROMISE CHAIN : BETTER APPROACH
// setTimeoutPr(1000).then(()=>{
//     greet();
//     return setTimeoutPr(3000);
// }).then(()=>{
//     greet();
//     return setTimeoutPr(5000);
// }).then(greet);



// Async Await method of handeling promises 

async function solve(){
    await setTimeoutPr(1000);
    greet();
    await setTimeoutPr(3000);
    greet();
    await setTimeoutPr(5000);
    greet();
}

// thread is not stuck over there under the hood it is only promise returns
solve();

console.log("END OF FILE")
console.log("END OF FILE")
console.log("END OF FILE")