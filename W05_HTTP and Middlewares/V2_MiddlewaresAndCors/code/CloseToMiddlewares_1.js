const express = require("express");

const app = express();
const PORT = 5000;
const reqCount =0;

function Count(){
    reqCount ++;
    console.log("number of requests  : ",reqCount);
}

app.get("/add",function(req,res){
    Count();
    let a = req.query.a;
    let b = req.query.b;

    res.json({
        sum : `addition of ${a} and ${b} : ${parseInt(a)+parseInt(b)}`
    })
})

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
            err : "404 not found"
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