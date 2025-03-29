import { NumberLiteralType } from "typescript";

interface User {
    name:string,
    age:number,
    isLegal() : boolean
}


// so implements let you impelement the interface it means creating a class similar to the interface, so interface contains blue print of it we just add functionalities in class

// whereas extends means you are inheriting something from that parent class and using it in child class

class Manager implements User{
    name:string;
    age:number;
    isLegal(){
        if(this.age>=18){
            return true;
        }
        else return false;
    }

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }

}


const m = new Manager("Hunny", 14);
const l = new Manager("Hunny", 18);

console.log(m.isLegal());
console.log(l.isLegal());


class God extends Manager{
    constructor(name:string, age:number){
        super(name, age)
    }
}


//ABSTRACT CLASSES  -- see index4.ts