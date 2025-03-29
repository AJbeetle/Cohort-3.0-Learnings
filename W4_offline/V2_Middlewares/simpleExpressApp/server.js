const express = require("express");
const app = express();
const PORT = 3000;

function age(m){
    if(m>=14){
        return true;
    }
    else{
        return false;
    }
}

app.get("/ride1",function(req, res){
    let a = req.query.age;
    let valid = age(a);
    if(valid){
        res.status(200).send("Hey There. Your age is : "+age(a)+" you are allowed to be in this ride");
    }
    else{
        res.status(404).send("ERR!!!_you don't have valid age to acess this ride");
    }
    // res.send("Hey there");
})

app.get("/ride2",function(req, res){
    let a = req.query.age;
    let valid = age(a);
    if(valid){
        res.status(200).send("Hey There. Your age is : "+age(a)+" you are allowed to be in this ride");
    }
    else{
        res.status(404).send("ERR!!!_you don't have valid age to acess this ride");
    }
    // res.send("Hey there");
})


// so this is one way to introduce ticket checker but better way is : next file app.js
app.listen(PORT, ()=>{
    console.log("Server is listening on PORT : ",PORT);
})