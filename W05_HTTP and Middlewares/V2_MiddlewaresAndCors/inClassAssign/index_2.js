// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require('express');

const app = express();
const PORT = 3000;

// app.use(express.json());

let reqCount = 0;

app.get("/count",function(req,res){
    res.json({
        noOfRequests : reqCount
    })
})

app.use(function(req, res, next){
    reqCount++;
    next();
})

app.get("/",function(req,res){
    // res.json({
    //     message : "Hey There you are in the website"
    // })
    res.sendFile(__dirname+"/public/index.html")
})


app.listen(PORT, ()=>{
    console.log("Listening in PORT  :",PORT);
})