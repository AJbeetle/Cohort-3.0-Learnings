const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.get("/notifications", function(req,res){
    const network = Math.floor(Math.random()*100);
    const job = Math.floor(Math.random()*10);
    const message = Math.floor(Math.random()*10);
    const notification = Math.floor(Math.random()*10);

    // console.log(rand1);
    res.json({
        network,
        job,
        message,
        notification
    })
})

app.listen(8000,()=>{
    console.log(`SERVER LISTENING ON PORT 8000`)
})