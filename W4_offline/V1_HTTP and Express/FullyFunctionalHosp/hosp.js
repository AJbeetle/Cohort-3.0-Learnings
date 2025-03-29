// HOSPITAL BACKEND
/* 
   GET    : users can check how many kindeys they have
   POST   : user can add a new kidney
   PUT    : user can replace a kidney, make it healthy
   DELETE : user can remove a kidney
 */

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

var users = [
    {
        name : "AAYSUHI JOSHI",
        pID  : 1,
        password : "xyz",
        kidneys : [{health:true},{health:false}]
    },
    {
        name : "HANSKRIT JOSHI",
        pID  : 2,
        password : "xyz",
        kidneys : [{health:false},{health:false}]
    },
    {
        name : "VINOD JOSHI",
        pID  : 3,
        password : "xyz",
        kidneys : [{health:false}]
    },
    {
        name : "RAJNI JOSHI",
        pID  : 4,
        password : "xyz",
        kidneys : [{health:true},{health:true}]
    },
    {
        name : "PURNA DEVI THAPLIYAL",
        pID  : 5,
        password : "xyz",
        kidneys : [{health:true}]
    }
]

const p = path.join(__dirname,"hosp.html");

app.get("/",function(req, res){

    res.sendFile(p); //now I would like to send some html to the frontend
})



app.listen(PORT,()=>{
    console.log("Server is listening...");
})