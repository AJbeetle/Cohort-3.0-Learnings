interface User { 
    name:string,
    age :number
}


function SumOfAge(a:User, b:User){
    return a.age+b.age
}

const age = SumOfAge({name:"tarun", age:20},{name:"rita",age:12});

console.log(age);


//1. Pick API ----------------------------------------------------------------------

//updated user Interface
interface User2 { 
    id:string,
    name:string,
    age :number
    email:string,
    password:string
}

// now assume you have to make an API call to update only name, email or password to be udated to the backend

// Then in this case it would mean that in the function which updates DB does not require the variable having all keys of user interface 
/* 
function UpdateUser(props : User){

} */

// The above code is neither safe nor needed, so one way is you creatw new interface with just the valies yoi wanna update

/* interface UserSubset { 
    name:string,
    email:string,
    password:string
}

function updateUser(prop:UserSubset){

} */

// Now the above approach is good enough but it is not reliable, as when you want to make some changes in DB schema, like making password to number then it will have to be done in two interfaces making more code for developer to refactor

// Better way is useing Pick API like :-

type updateProps = Pick<User2,'name' | 'age' | 'email'>;

// in the end updateProps is a type not a fuinction
// so pick API lets you pick datatypes from interface and types both in TS


// 2. PARTIAL API ------------------------------------------------------
// Partial makes all properties of a typed isOptionalChain, creating a type with same properties, but each marked as optional 

type updateProps3 = {
    name?:string,
    age?:string,
    password?:string
}

// everything in the above type is optional  OR you can do :-

// keep using the Pick API but also use Partial API

type updatePropsOptional = Partial<updateProps>



// 3. ReadOnky API ------------------------------------------------------

const user = {
    name : "aayushi Joshu",
    age : 22
}
console.log(user.name);

user.name = "hanskrit joshi"   // even though it is constant it still gets updated 
console.log(user.name);


const a = [1,2,4,5];
console.log(a)
a[2]=1;
console.log(a)

// so internal component changes are not restricted on const type

// so, we can inforce this changing not to happen even of the internal components , then in that case u use readOnly API of TS . SO prepending all keys with readonly keyword

type user3 = {
    // you can either define readonly to all components like this or you can keep these pairs normal and make whole type to readOnly
    // readonly name : string,
    // readonly age : number
    name : string,
    age : number
}

const myObj : Readonly<user3> = {
    name : "joshi hai ji",
    age:14
}

console.log(myObj);
// user3.age = 23;  // gives errror
// myObj.name = "harkisra"   //gover warning



//4. Record and Maps : cleaner way to deal with object --------------------------------------------------------------

// Write a user object which looks like user interface object having  keys : userId and values

type newUser = {
    id : string,
    username: string
}

type mainUsers = {
    [key:string] : newUser
}

const users : mainUsers = {
    "ras@u1" : {
        id : "ras@u1",
        username : "harkirat"
    },
    "ras2@u2" : {
        id : "tas@U2",
        username : "aayushi"
    }

}


type userAge = {
    [key:string] : number
}


const userss:userAge = {
    "raspberry" : 12,
    "raspPi" : 20
}

// now you can see all above object definitions are not very pretty it looks very ugly, so two main concepts were introduced one TS specific and on JS specific

// Records and Maps

// RECORDS : lets you give a cleaner type to objects
// writing record for userAge type :-

// type userAge3 = Record<string, number>; // cleaner to read
type userAge3 = Record<string, {age:number, name:string}>; // cleaner to read

//Record is just TS specific thing, it is not in JS


// MAP : this is JS specific topic,

// so it says that the userss object is no longer an objet but a map, a map as in C++ or java

//for JS
// const usersss = new Map();  
type myOb = {
    name:string,
    age:number,
    email:string
}

const usersss = new Map<string, myOb>();  

usersss.set("raspberry" , {name:"aayushi", age:22, email:"ass@gamil.com"});
usersss.set("raspberry" , {name:"ranveer", age:12, email:"pass@gamil.com"});

// rather than doing usersss["raspberry"] = {name:"aayushi",age:20}  and so forth you use map here in JS

// to get a value

const userGetting = usersss.get("raspberry");

// This Map is just a new way of creating key value pairs, and it is JS specific code


// Now when you are generating a map you can specify type here, you can inforce that key for thiseneds to be string and value needs to be userObject or something - see line 169


//maps are little more used than records


//5. Exclude API : It is a function that can accept several types of inputs but you want to exclude specific types from being passed to it --------------------------------------------------------------

type EventType = "click" | "scroll" | "mousemove"

type ExcludeEvent = Exclude<EventType,"scroll">

const handleEvent = (event : ExcludeEvent) => {
    console.log(`handling events : ${event} `);
}

handleEvent("click");  //OK
// handleEvent("scroll");  //gives error


//6. Type Inference in zod  : See learn.md and then move to index2.ts --------------------------------------------------------------
