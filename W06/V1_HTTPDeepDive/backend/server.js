const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
    {
    username:"aayushi",
    password : "123123",
    token:"abcdef"
    }
]

//creating a function generateToken that generates random string to be assigned to the user
function generateToken(){
    // return Math.random();  // it will just generate a long ranodm number we will write more sophisticated code

    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.get("/",function(req,res){
    res.json({
        message : "frontend not connected yet"
    })
})


app.post("/signup",function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    // you can validations as follows 
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
        const token = generateToken();

        // not needed below find again we are already returning user in variable foundUser

        // users.find(t => {
        //     if(t.username == username){
        //         users.t.token = token;
        //     }
        // })

        foundUser.token = token;

        // console.log(users);

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
    const tk = req.headers.token;
    const user = users.find(t => t.token == tk);
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