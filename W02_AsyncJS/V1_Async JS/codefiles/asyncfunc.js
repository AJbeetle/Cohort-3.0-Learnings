// JS Architecture for Async Code 

function time(){
    console.log("aaysuhi has started after some time");
}

console.log("----------------------")
console.log("aayushi is starting...")

setTimeout(time, 1000);

console.log("RUNNING CPU EXPENSIVE CODE BELOW :")

let sum=0;
for(let i=1; i<=10000000000; i++){
    sum = sum+i;
}

console.log("EXPENSIVE OPERATION DONE, THE SUM IS : ", sum)

// console.log("Welcome to the world of async functions") 
    

// Making setTimeout Synchronous

function setTimeoutSync(time){
    let startTime = new Date();
    while(1){
        let currTime = new Date();
        if(currTime.getTime() - startTime.getTime() > time){
            break;
        }
    }
} 

setTimeoutSync(13000);
console.log("hi there");