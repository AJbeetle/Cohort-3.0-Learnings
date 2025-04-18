const express = require("express");
const app = express();
const PORT = 3000;

// using midddlewares

function ageMiddleware(req,res,next){
    let age = req.query.age;
    if(age>=14){
        next();  // so all functions in express has these three functional arguments in their callback functions req, res and next we don't write next in request handlers as they are the endpoints but we use these in middlewares 

        // so this next says if age is proper number then propogate to next middleware otherwise stop here and give error
        // return true; // no need of this now
    }
    else{
        res.json({
            err : "ERR!!!_you don't have valid age to acess this ride"
        })
    }
}

/* app.get("/ride1", ageMiddleware, function(req, res){
    res.status(200).send("Hey There. Your age is : VALID, you are allowed to be in this ride1");
})

app.get("/ride2", ageMiddleware, function(req, res){
    res.status(200).send("Hey There. Your age is : VALID, you are allowed to be in this ride2");
}) */




// if there is certain middleware that goes for all routes then you can do following : 

app.use(ageMiddleware);  // order matters here so app.use is valid to apply middleware for request hadlers below it only 

app.get("/ride1", function(req, res){
    res.status(200).send("Hey There. Your age is : VALID, you are allowed to be in this ride1");
})

app.get("/ride2", function(req, res){
    res.status(200).send("Hey There. Your age is : VALID, you are allowed to be in this ride2");
})

app.listen(PORT, ()=>{
    console.log("Server is listening on PORT : ",PORT);
})


//doing assignment from cohort 2.0 : go to learn.txt