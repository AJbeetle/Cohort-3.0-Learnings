// Arrays in TS

let myArr:number[] = [1,3,4,5];
console.log(myArr);


// Q1. Given an array of positive integers as input return the maximum value i the array

let maximum:number = -100000000000000;
for(let i:number=0; i<=myArr.length;i++){
    if(myArr[i]>maximum){
        maximum = myArr[i];
    }
}

console.log("maximum value from this array is : ",maximum)


function getMax(a:number[]):number{
    let max:number = -100000000000;
    for(let i:number=0; i<a.length;i++){
        if(a[i]>max){
            max=a[i]
        }
    } 
    return max;
}


let n:number = getMax([2,4,5,24,5,7,78,0])
console.log(n);



// Q2. Given a list of users, filter out the users that are legal (greater than 18 years of age)

type USER3 = {
    name:string,
    age:number
}

function filterAdults(arr:USER3[]){
    let newArr:USER3[] = arr.filter(e=>e.age>=18);
    return newArr;
}


let arrayOfUsers:USER3[] = [
    {name:"aayushi", age:22},
    {name:"hunny", age:17},
    {name:"rajni", age:46},
    {name:"vinod", age:50},
    {name:"ambika", age:14},
    {name:"mohit", age:10},
    {name:"ruchita", age:42},
]

let result = filterAdults(arrayOfUsers);
console.log(result);