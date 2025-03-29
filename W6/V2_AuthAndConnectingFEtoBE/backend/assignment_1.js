// creating auth middleware : Can you try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn’t logged in?

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const JWT_SECRET = "100xDevs";

const users = [
    {
        username : "aayushi",
        password : "1231223"
    }
];

function auth(req, res, next){
    let tk = req.headers.token;
    if(tk){
        try{
            if(jwt.verify(tk,JWT_SECRET)){
                req.body.uName =  jwt.verify(tk,JWT_SECRET).username;
                next();
            }
        }
        catch(err){
            res.status(400).json({err : "you are using fake tokens"})
        }
    }
    else{
        res.status(404).json({
            err : "Kidnly signup or signin to use our services" 
        })
    }
}

function logger(req, res, next){
    console.log(`request method called ${req.method}`);
    next();
}

app.use(logger); 

app.get("/", function(req,res){
    res.sendFile(__dirname+"/public/frontend.html")
})

app.post("/signup", function(req,res){
    const us = req.body.username;
    const pass = req.body.password;

    if(users.find( u => u.username == us)){
        res.status(404).json({mess : "this username already exists"});
        return;
    }
    else{
        users.push({
            username : us,
            password : pass
        })
        res.json({
            mess : "DONE Sign Up, Now sign in to access your account"
        })
    }
})

app.post("/signin",function(req,res){
    const us = req.body.username;
    const pass = req.body.password;

    const user = users.find(u => u.username == us && u.password == pass)
    // console.log(user);
    if(user){
        const tk = jwt.sign({
            username :us
        },JWT_SECRET);

        res.json({
            mess : "successfully signed in",
            token : tk
        })
        // res.header("jwt",tk);
    }
    else{
        res.status(404).json({
            err:"Either username or password is wrong"
        })
    }
})

app.use(logger, auth);
// app.use(logger);

app.get("/me", function(req,res){
    // let jt = jwt.verify(req.headers.token, JWT_SECRET); // it returns the json object with username [only the person with JWT_SECRET can verify]

    // let jt = jwt.decode(req.header.token);  // it also returns the json data with username decoded info, but this does not checks for if this owner has only created this token or not. So this is not to be done . this is secuity vulnerability

    // let val = jt.username;

    // username came from middleware auth
    const user = req.body.uName;
    // console.log(user);
    const foundUser = users.find(u => u.username == user);
    // console.log(foundUser);
    res.json({
        username : foundUser.username
    })
})

app.get("/database",function(req, res){
    console.log(users);
    res.json({
        err  : "you cannot access data like this"
    });
})




// moving on to todays assignment

app.listen(PORT,()=>{
    console.log("SERVER LISTENING ON PORT : ",PORT);
})


