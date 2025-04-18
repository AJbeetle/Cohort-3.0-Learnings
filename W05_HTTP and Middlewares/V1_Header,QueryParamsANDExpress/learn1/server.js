const express = require("express");

const app = express();
const PORT = 5000;

app.get("/add",function(req,res){
    let a = req.query.a;
    let b = req.query.b;

    res.json({
        sum : `addition of ${a} and ${b} : ${parseInt(a)+parseInt(b)}`
    })
})
app.get("/minus",function(req,res){
    let a = req.query.a;
    let b = req.query.b;
    

    res.json({
        subtraction  : `addition of ${a} and ${b} : ${parseInt(a)-parseInt(b)}`
    })
})
app.get("/mul",function(req,res){
    let a = req.query.a;
    let b = req.query.b;
    

    res.json({
        subtraction  : `addition of ${a} and ${b} : ${parseInt(a)*parseInt(b)}`
    })
})
app.get("/div",function(req,res){
    let a = req.query.a;
    let b = req.query.b;
    

    res.json({
        subtraction  : `addition of ${a} and ${b} : ${parseInt(a)/parseInt(b)}`
    })
})

// tricky point is how would you make server to read dynamic routes means :-
// instead of taking inputs like  :-
// http://localhost:5000/div?a=1&b=0  rather take it as follows :-
// http://localhost:5000/div/10/20
// http://localhost:5000/div/3/6

// to do that :
app.get("/add/:arg1/:arg2",function(req,res){
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


app.listen(PORT, ()=>{
    console.log("SERVER is Listening on PORT : ",PORT);
})