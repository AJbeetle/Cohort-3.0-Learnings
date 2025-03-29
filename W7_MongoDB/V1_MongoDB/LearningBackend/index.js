const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config({
    path : "../.env"
});   //generally env file stays in same directory but just for learning purpose I did this
const mongoose = require("mongoose");
const { auth } = require("./auth");

const {UserModel, TodoModel} = require("./db");
// these model will take cafe of all CRUD functionalities 



const app = express();
const PORT = process.env.PORT;
// const username = process.env.USERNAME; //mongoDB cluster Username
// const pass = process.env.PASS;  //mongoDB clyuster password

const url = process.env.URL;
const database = process.env.Database;
const JWT_SECRET = process.env.JWT_SECRET;


// connect to right database, the following line is also async function and we should await here, i.e. let our backend server start only when its connection with database is established 

(async function(){
    await mongoose.connect(url+database);
})();

app.use(cors());
app.use(express.json());

app.post("/signup",async function(req, res){
    const email  = req.body.email;
    const pass = req.body.password;
    const name  = req.body.name;


    // this is asynchronous function call returning promise, it si good idea to await it [although insertion can happen at the backend, but still await is necessary because sometimes promise can fail]

    await UserModel.create({
        email : email,
        password : pass,
        name : name
    })

    res.json({
        message : "you are logged in"
    })

})


app.post("/login",async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email : email,
        password : password
    })
    
    console.log(user);

    if(user){
        const token = jwt.sign({
            id : user._id
        }, JWT_SECRET);

        res.json({
            token : token
        })
    }
    else{
        res.status(403).json({
            err : "either email or password is wrong"
        })
    }
})



app.use(auth);

//post(/todo) authenticated [user will add todo]
app.post("/todo",async function(req, res){
    const user = req.body.userId; 
    const desc = req.body.desc;

    await TodoModel.create({
        title : desc,
        status : false,
        userId : user
    })

    res.json({
        message : "added todo in the database"
    })
    
})

// get(/todos) authenticated  [user will view all todos]
app.get("/todos",async function(req, res){
    
    const userId = req.body.userId;

    const allTodos = await TodoModel.find({
        userId : userId
    })

    console.log(allTodos);
    res.json({
        allTodos
    })

})

// NOW WE WILL WRITE OUR DATABASE LOGIC IN SEPARATE FILE, we can put it here also but to structure it better we do it in db.js


app.listen(PORT,()=>{
    console.log(`Backend Started at PORT : ${PORT} ...`)
})



