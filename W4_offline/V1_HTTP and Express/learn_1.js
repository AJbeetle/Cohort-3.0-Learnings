const express = require("express");

const app = express();

app.get("/",function(req,res){
    // if you call this backend server : localhost:2000/?n=30 or you can give string to n as value
    let m = req.query.n;
    console.log(m);
    let num =23
    // res.send("aayuih",num)  // creates error : so always send string no number to frontend
    res.send("aayushi"+num);  // it is working i don't know how harkirat told it won't, maybe its bad practise to do this
})


app.listen(2000);