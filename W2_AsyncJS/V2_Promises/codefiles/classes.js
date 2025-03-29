// NATIVE WAY OF DEFINING OBJECTS
/* 
let rect1 = {
    height:13,
    width:44,
    color:"Red"
}

function area(r){
    return r.width * r.height;
}

let ar1 = area(rect1);
console.log(ar1);
 */


// Writing class :  which acts as a blueprint to create multple objects

class Rectangle{
    constructor(height, width, color){
        // this variable access the current object defined from class
        this.height=height;
        this.width=width;
        this.color=color;
    }

    area(){
        return this.height * this.width;
    }

    paint(){
        // console.log("painting the rectangle with color : ", this.color);
        console.log(`painting the rectangle with color : ${this.color}`);
    }
}

const r1 = new Rectangle(12,12,"red");  //instance of rectngle class OR object of rectangle class
const r2 = new Rectangle(10,5,"brown");
const r3 = new Rectangle(5,12,"blue");
console.log(r1.color);
console.log(r2.color);
console.log(r3.color);
r2.paint();

// INHERITANCE : did myself

class Square extends Rectangle{
    constructor(height, width, color, kite_num){
        // this.super(height, width, color);
        super(height,width,color);
        this.kite_num = kite_num;
    }
    vol(){
        return Math.pow(this.height,3);
    }
}


console.log("----------------------------------------")
const sq1 = new Square(12,12,"violet",1);
console.log(sq1.height);
console.log(sq1.width);
console.log(sq1.color);
console.log(sq1.kite_num);
console.log(sq1.area());
sq1.paint()
console.log(sq1.vol());

// Now above there we wrote our own class but JS also provides us whith some alreadt written classes
/* 

Example : 
1. Date class 
2. */

console.log("---------------------------WORKING WITH DATE CLASS---------------------------")
const now = new Date();
console.log(now.getDay());
console.log(now.getMonth());  // december is 12th month but since we do 0 based indexing therefore it shows 11
console.log(now.getFullYear()); 

console.log("---------------------------WORKING WITH MAP CLASS---------------------------")

const m = new Map();
m.set("name","Alice");
m.set("age",20);
m.set("roll",1);
console.log(m.get("name"));
console.log(m.get("age"));
// console.log(m[1]);


// So yes string is a class in itself
let s = "aayushi";
s = s.toUpperCase();  
console.log(s);


// PROMISE CLASS in JS : move to next file named : p.js