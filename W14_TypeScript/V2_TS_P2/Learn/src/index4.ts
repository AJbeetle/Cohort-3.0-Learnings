// ABSTRACT CLASSES -> this can also be implemented in classes, only diff from interface is that you can also give default implementations too here

//without default implementations
/* abstract class Users{
    name:string;
    
    constructor(name:string){
        this.name=name;
    }
    abstract greet:()=>string;
}

class Employee implements Users{
    name:string
    
    constructor(name:string){
        this.name=name
    }
    greet(){
        return "hey users";
    }
} */

// with default implementation
abstract class Users{
    name:string;

    constructor(name:string){
        this.name=name;
    }

    abstract greet():string;
    hello(){
        console.log("Hey User");
    }
}


// class Employee implements Users{
class Employee extends Users{
    name:string
    
    constructor(name:string){
        super(name);
        this.name=name
    }
    greet(){
        return "hey users";
    }
}

// go to index5.ts for learning Types in TS