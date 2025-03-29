const express = require('express');
const app = express();

// so jasonwebtoken is a proper protocol someone has written , on top of this protocla  we have npm libraries and we can use them, which expose functions to us like jwt.encrypt or jwt.decrypt
const jwt = require('jsonwebtoken');   // there are many other libraries that let you work with jwts we are working with this one 

// now here encryption doesn;t happen but endoing is done 
// encyrption is something where we use some key and then it returns some gibbersish to you and then again you use this key to decrypt
// encoding means we again use some key to convert to some encoded format not complete giberrish, the encoded thing contains some pattern . so we need this key for creating/assigning or generating jwt key

// creating random variable which will contain this key 
const JWT_SECRET ="randomHarkirat";
// now convert their username to jwt
const PORT = 3000;

app.use(express.json());

const users = [
    {
    username:"aayushi",
    password : "123123",
    token:"abcdef"
    }
]



app.get("/",function(req,res){
    res.json({
        message : "frontend not connected yet"
    })
})


app.post("/signup",function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    // you can set input validations as follows , there are many but one of it is :-
    if(username.length<5){
        res.json({
            err : "your username is too short"
        })
        return;
    } 

    // these all are called input validations and wewill come to this later and do it using zod

    // Ideally what we need to check is same person does not signup twice it means the same username do not get stored to users array

    if(users.find(t => t.username == username)){
        res.json({
            err : "this username already exists.... "
        })
        return;
    }


    users.push({
        username: username,
        password : password
    })

    res.json({
        message : "Done Signing up"
    })

    
})

app.post("/signin",function(req, res){
    // token assigning during token 
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find((t) => {
        if(t.username==username && t.password == password){
            return t;
        }
        else{
            return false;
        }
    })

    if(foundUser){
        // const token = jwt.sign(); //created the token, it is not encrypt, we signed the username

        // now adding the value of user to be signed

        // const token = jwt.sign({
        //     username:username
        // }) // so we are creating users jwt on the basis of its username 
        
        // now adding the JWT_SECRET KEY over which we create that jwt token 
        
        const token = jwt.sign({
            username:username
        },JWT_SECRET) // this is function signature of jwt.sign, so username is on what data you want to create jwt (or what you want to encrypt) and JWT_SECRET is what is your secret you are using to sign/create/encode/encrypt this token
        

        // foundUser.token = token;   // we need not to store this anymore

        res.json({
            token : token
        })

    }else{
        res.status(404).json({
            err : "either username or password is wrong"
        })
    }


})


// exposing database is very dangerous just print the users variable in backend console
app.get("/database",function(req, res){
    console.log("----------------------------")
    console.log(users);
    // res.json(users);
    res.json({
        err : "you cannot access the database of users info"
    });
})
// next what we have to do is handle the requests from the particular users according to their token number and send back relevant data related to them only 

// go to learn.txt


// so whenever someone goes to me endpoint the user will send me the token in their headers
//AUTHENTICATED ENDPOINT
app.get("/me", function(req, res){
    const tk = req.headers.token;  // now user is sending jwt

    const decodedInfo = jwt.verify(tk,JWT_SECRET); // this will get back us json object username : "harkirat"

    const username = decodedInfo.username;
    const user = users.find(t => t.username == username);

    if(user){
        res.json({
            user : user.username,
            pass : user.password
        });
    }
    else{
        res.status(404).json({
            err: "Please Singup or Singin !! NO DATA FOUND OR INVALID TOKEN"
        })
    }


})


app.listen(PORT, ()=>{
    console.log("litening on port : ",PORT);
})