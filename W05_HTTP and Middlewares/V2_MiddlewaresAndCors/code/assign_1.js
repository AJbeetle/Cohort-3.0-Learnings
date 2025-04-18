

// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require("express");

const app = express();
const PORT = 5000;

function info(req, res, next){
    let time = new Date;
    // let t = time.getTime();

    console.log(`req method : ${req.method} | req route : ${req.url} | req timestamp : ${time} | req hostname :  ${req.hostname}`   );
    next();
}

app.use(info);


app.get("/",function(req,res){
    res.json({
        mess : "hey there you are here in the website"
    })
})


app.listen(PORT, ()=>{
    console.log("SERVER is Listening on PORT : ",PORT);
})


// go to file learn.txt