let a:number = 9;
console.log(a);

function twoSum(a:number, b:number):number{
    return a+b;
}


function isEven(a:number):boolean{
    if(a%2==0){
        return true;
    }
    else{
        return false;
    }
}


//Interfaces : if you have to create a avery complex object, then you create a type of this object in interface with Capital Letter as starting

// interface UserType {
//     name: string,
//     age:number,
//     address : {
//         city:string,
//         country:string,
//         pincode:number,
//         landmark:"NOTHING FOR EVERYONE"  
//     } 
// }


//making address key optional for children to have

interface UserType {
    name: string,
    age:number,
    address? : {
        city:string,
        country:string,
        pincode:number,
        landmark:"NOTHING FOR EVERYONE"  
    } 
}


let user : UserType = {
    name:"aayushi",
    age : 22,
    address : {
        city : "NewDelhi",
        country : "India",
        pincode : 110045,
        landmark : "NOTHING FOR EVERYONE",
    }
}




function isLegal(a:UserType):boolean{
    if(a.age>=18){
        return true
    }
    return false
}

// go to index2.ts

//Types