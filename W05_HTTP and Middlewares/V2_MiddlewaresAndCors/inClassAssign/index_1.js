const express = require('express');
const cors = require("cors");

const app = express();
const port = 3000;

// spcifiying only specific domain that have cors access
/* 
app.use(cors({
    domains:["https://google.com","https://employee.google.com"]
}))
 */
//specifying all frontends can send cors request
app.use(cors());    
app.use(express.json());

// app.get("/",function(req,res){
//     res.json({
//         mess : "hey there"
//     })
// })

//hosting both fronend and backend on same port

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html")

})

app.post("/sum",function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        answer : a+b
    })
})




app.listen(port,()=>{
    console.log("listening...")
});