//Interfaces continued

interface Address {
    city:string,
    country:string,
    pincode:number,
    landmark:"NOTHING FOR EVERYONE"
}

interface User {
    name : string,
    age : number,
    address : Address
}

interface Office {
    type : string,
    shift : string,
    address : Address
}

//go to react.tsx -> for Q. Create a react component that takes todos as an input and renders them


// Interfaces can be implemented as class

interface People{
    name:string,
    age:number,
    greet:()=> string,
    greet2() : string,
    // greet3(arg0:People) : string,
}

// This is random object of type of that interface
const person:People = {
    name:"XYZ",
    age:22,
    greet : ()=>{
        let res:string = "Hello"+person.name
        return res;
    },
    greet2 : ()=>{
        return person.name
    },
    // greet3 : ()=>{
    //     return 
    // }
}

console.log(person.greet());
console.log(person.greet2());


// but when we create a class and then object of that instance that is different thing : see image via learn.md

interface People2{
    name :string,
    age :number
}

class Manager implements People2 {
    name:string;
    age:number;
    department : string; 
    TeamLead : boolean
    
    constructor(name:string, age:number, TL:boolean){
        this.name=name;
        this.age=age;
        this.department="HOME";
        this.TeamLead=TL;
    }
}

let u = new Manager("Harkirat",33,false);

console.log(u.name, u.age)
console.log(u.name, u.age, u.department, u.TeamLead)


// EXTENDING in TS 
class Shape{
    length:number;

    area(){
        console.log("This is area of the shape")
    }

    constructor(length:number){
        this.length = length  ;
    }
}

class Rectangle extends Shape{
    width:number;
    height:number;

    // constructor(length:number){
    //     super(length);
    constructor(){
        super(1);
        this.width=12;
        this.height=12;

    }
}

    
// so implements let you impelement the interface it means creating a class similar to the interface, so interface contains blue print of it we just add functionalities in class

// whereas extends means you are inheriting something from that parent class and using it in child class

// go to index3.ts