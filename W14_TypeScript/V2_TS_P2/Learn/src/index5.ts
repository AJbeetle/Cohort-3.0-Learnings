// types vs interfaces 

// types are very similar to interfaces, a function can use types to take argument datatypes


// interface user2{
//     name:string, 
//     age:number
// }

type user2 = {
    name:string,
    age:number
}

function readUSERS(u: user2){
    return user.age > 18
}

// DIff btw interface and types
/* 
    1. types cannot be implemented in classes vs interfaces can be
    2. Interfaces cannot provide functionality of unions and intersections

*/

type Employee1 = {
    name:string,
    startDate:string
}

type Manager1 = {
    name:string,
    department:string
}


type teamLead = Employee1 & Manager1;

let e : Employee1 = {
    name : "aayushi",
    startDate : "1-01-2024"
}

let m : Manager1 = {
    name : "hanskrit",
    department: "creative"
}

let t : teamLead = {
    name : "haha",
    department : "creative",
    startDate : "1-10-2025" 
    
}


/* 
   1. Union in types (|)  => it says that the child using unioned type can have either one of types or both

   2. Intersection in types (&)  => it says that the child using intersectioned type should have all properties of both the types [common ones used only once]
*/

// Doing some assignments -> index6.ts



