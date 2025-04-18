const express = require("express");

const app = express();
const PORT = 5000;
let reqCount =0;

function Count(req, res, next){
    reqCount ++;
    console.log("number of requests  : ",reqCount);
    next(); // to call next function
}

// blocking the request in mid
/* 
function Count(req, res,next){
    if(req.body.name === "google"){
        reqCount ++;
        console.log("number of requests  : ",reqCount);
        next();
    }
    else{
        res.json({
            err : "I am quitting the request here"
        })
    }
}
 */


app.use(Count);    // it is used to specify global middleware for all route handlers written after it. So placement and order of this line is important any route handler written above it will not use this middleware


function realSumHandler(req, res){
    let a = req.query.a;
    let b = req.query.b;

    res.json({
        sum : `addition of ${a} and ${b} : ${parseInt(a)+parseInt(b)}`
    })
}

//express is nothing but chain of middlewares

// so all middlewares have access to req, res and next object, so next object is used to call next function in the chain

app.get("/add",Count,realSumHandler);

app.get("/minus",function(req,res){
    Count();

    let a = req.query.a;
    let b = req.query.b;
    res.json({
        subtraction  : `addition of ${a} and ${b} : ${parseInt(a)-parseInt(b)}`
    })
})
app.get("/mul",function(req,res){
    Count();

    let a = req.query.a;
    let b = req.query.b;
    

    res.json({
        subtraction  : `addition of ${a} and ${b} : ${parseInt(a)*parseInt(b)}`
    })
})
app.get("/div",function(req,res){
    Count();

    let a = req.query.a;
    let b = req.query.b;
    

    res.json({
        subtraction  : `addition of ${a} and ${b} : ${parseInt(a)/parseInt(b)}`
    })
})


app.get("/add/:arg1/:arg2",function(req,res){
    Count();

    let a = req.params.arg1;
    let b = req.params.arg2;

    res.json({
        sum : `addition of ${a} and ${b} : ${parseInt(a)+parseInt(b)}`
    })
})


app.post("/",function(req,res){

})
app.put("/",function(req,res){

})
app.delete("/",function(req,res){

})

app.use(function(err, req, res, next){
    if(err){
        res.status(404).json({
            err : err.message
        })
    }
    else{
        next();
    }
})


// but this middleware do not have power to modify req, res object in here and why do we need req object since it is helpful for authentication

app.listen(PORT, ()=>{
    console.log("SERVER is Listening on PORT : ",PORT);
})