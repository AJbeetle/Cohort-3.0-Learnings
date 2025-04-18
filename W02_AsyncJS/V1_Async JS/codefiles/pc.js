// We created an asynchronous function using setTimeout
function asyncfunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("Success");
        },4000);
    });
}

function asyncfunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("Success");
            // reject("network error")
        },4000);
    });
}



// console.log("fetching data 1......")
// let p1 = asyncfunc1();
// p1.then((res)=>{
//     console.log("Success with message : ", res)
// })

// console.log("fetching data 2......")
// let p2 = asyncfunc2();
// p2.then((res)=>{
//     console.log("Success with message : ", res)
// })


// NOW we don't want our data1 and data2 to be fetched at same time so in that case we use promise chain, one then written inside another chain

// usecase is : like instagram ke database mein username mila tbhi password k liye search karo

// So the syntax used will be : THE FOLLOWING IS : PROMISE CHAIN

/*
let p1 = asyncfunc1();
console.log("fetching data1.....")
p1.then((res)=>{
    console.log("Success fetching data 1, with message : ", res);
    console.log("fetching data2.....")
    let p2 = asyncfunc2(); 
    p2.then((res)=>{
        console.log("successs fetching data 2, with message : ", res);
    })
    p2.catch((err)=>{
        console.log("can't fetch data, error message : ", err);
    })
})
p1.catch((err)=>{
    console.log("can't fetch data, error message : ", err);
})
*/


// Now the syntax for promises is much easier as compared to callback hells

// Simplifying the syntax a little more

console.log("fetching data1.....")
asyncfunc1().then((res)=>{
    console.log("Success fetching data 1, with message : ", res);
    console.log("fetching data2.....")
    asyncfunc2().then((res)=>{
        console.log("successs fetching data 2, with message : ", res);
    })
})



// DOING OUR PREVIOUS TASK OF GET DATA USING PROMISE CHAIN


// go to T1.js
