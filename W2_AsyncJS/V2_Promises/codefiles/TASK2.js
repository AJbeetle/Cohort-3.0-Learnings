// WRITING MY OWN PROMISE CLASS

/* 
   To write a basic version of your own Promise class in JavaScript, you'll need to implement the following features:

   1. States: A promise can be in one of three states:
       - Pending: The initial state, neither fulfilled nor rejected.
       - Fulfilled: The operation was successful.
       - Rejected: The operation failed.
   2. Handlers: Handle then() for fulfillment and catch() for rejection.
   
   3. Executor Function: A function passed to the Promise constructor that starts the    asynchronous operation.
   
   4. Resolve and Reject: Functions to transition the state of the promise.
   
*/


// UNABLE TO COMPLETE : KIND A COMPLEX

class Prom{

    constructor(executor){
        this.status="pending";   //Initial State
        this.value=null;         // value to be taken when promise is either resolved or rejected
        this.handlers=[];      //stores .then() and .catch() handlers

        //Binding resolve and reject methods
        this.resolve = (value) => this.transition("fullfilled", value);
        this.reject = (reason) => this.transition("rejected",reason);

        //execute the executor function with resolve and reject
        try{
            executor(resolve,reject);
        }
        catch(err){
            reject(err);
        }
    }

    transition(newState, value){
        if(this.state !== "pending" ) return;   // state can change only once
        
        this.state = newState;
        this.value = value;
        this.executeHandlers(); //Process the handlers
    }

    //Adds handlers for fullfillment or rejection
    state(onFullFilled){
        return new Prom((resolve, reject)=>{
            this.handlers.push({
                onFullFilled : (value) =>{
                    try{
                        // const result = onFullFilled ? onFullFilled(value) : value;
                        const result = onFullFilled(value);
                        resolve(result);
                    }
                    catch(err){
                        reject(err);
                    }
                }
                // , onRejected : reject,  // pass errors to the next chain
            })
            if(this.state !== "pending"){
                this.executeHandlers();
            }
        })
    }

    //Adds a handler rejecttion
    catch(onRejected){
        return this.then(null, onRejected);
    }

    //executes all stored handlers;
    executeHandlers(){
        if(this.state === "pending") return;  // don't execute if still peding
        
        this.handlers.forEach((handler)=>{
            if(this.state === "fullfilled" && handler.onFulFilled){
                handler.onFullFilled(this.value);
            }
            else if(this.state === "rejected" && handler.onRejected){
                handler.onRejected(this.value);
            }
        })

        this.handlers = [];  //clear handlers once executed

    }

}

function setTimeoutProm(ms){
    return new Prom((resolve)=>{
        setTimeout(resolve, ms);
    })
}

setTimeoutProm(2000).then(()=>{
    console.log("aayushi Joshi");
})