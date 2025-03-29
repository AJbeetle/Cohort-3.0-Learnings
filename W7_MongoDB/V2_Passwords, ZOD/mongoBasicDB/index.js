const express = require("express");
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const {UserModel, TodoModel} = require("./db");
const mongoose = require("mongoose");
const {auth} = require("./auth");
const bcrypt = require("bcrypt");
const { zod } = require("zod");

const app = express();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.JWT_SECRET;
const database = process.env.databaseName;
const URL = `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.k8p8l.mongodb.net/`+database;


// this does not make mongoose.connect await as await statement is inside async function
// (async function(){
//     await mongoose.connect(URL);
//     console.log("DATABASE CONNECTED .............");
// })();
    


async function connectDB(){
    try{
        await mongoose.connect(URL);
        console.log("DATABASE CONNECTED ............. ");
    }
    catch(e){
        console.log("cannot connect database, ERROR : ",e.message);
        process.exit(1); //exit the process if the db connection fails
    }
}

async function startServer(){
    await connectDB();
    
    console.log("SERVER STARTED");
    
    app.use(cors());
    app.use(express.json());
    
    app.post("/signup",async function(req, res){

        // So I want my user to send only following content and with same datatypes only in req.body then we store this schema in zod object  [this is only hard bit and type inference other than that everything is easy] [it allows extras but will check for defined schema]

        /* req.body{
            email : String,
            password :  String,
            name : String
        } */

        const requiredBody = zod.object({
            email : zod.string().min(5).max(20).email(),
            name : zod.string().min(3).max(20),
            // password : zod.string().min(3).max(30)
            password : zod.string()
                       .min(10,{message : "atleast 10 char long"})
                       .max(20,{message : "must not exceed 20 chars"})
                       .regex(/[A-Z]/,{message : "atleast one upperCase letter"})
                       .regex(/[a-z]/, {message : "atleast one lowercase letter"})
                       .regex(/[!@#$%^&*(),.?":{}|<>]/,{message : "atleast one special char"})
                       .regex(/.*[0-9].*[0-9].*[0-9]/,{message : "must contain atleast three numberic digits"})
        })

        // const parseData = requiredBody.parse(req.body);
        const parseDataWithSuccess = requiredBody.safeParse(req.body);   // returns you two things success and data

        // so if parseDataWithSuccess.success is true then means parsing done otherwise not

        if(!parseDataWithSuccess.success){
            res.json({
                err : "Incorrect format",
                error : parseDataWithSuccess.error
            })
        }

        // Mini Assignment : add checks for password field that it follows following requirements 
        /* 1. atleast one uppercase letter
        2. atleast one lowercase letter
        3. atleast one special character 
        4. atleast three numerics
        5. min length is 10 and max length is 20 */

        //major Assignment : complete todos improvement tasks given in lecture slides

        let email = req.body.email;
        let name = req.body.name;
        let password = req.body.password;
        
        //1st way 
        // bcrypt.genSalt(saltRounds,function(err, salt){
        //     bcrypt.hash(password,salt,function(err, hash){
        //         //store hash in db
        //     })
        // })

        // 2nd way : auto gen salth and hash 
        // bcrypt.hash(password, saltRounds, function(err, hash){
        //     //store hash in db
        // })
        const hashedPass  =  await bcrypt.hash(password, 5);
        console.log(hashedPass); // we don't need to keep salt in database because the hashed password itself contaisn that information and see signin endpoint to relate

        try{
            await UserModel.create({
                email : email,
                name : name,
                password : hashedPass
            })
    
            res.json({
                message : "you are successfully signed up"
            })
        }
        catch(e){
            res.status(500).json({
                err : `ERROR : ${e.message}`
            })
        }
    })
    
    app.post("/signin",async function(req,res){
        const username = req.body.email;
        const pass = req.body.password;

        try{
            const foundUser = await UserModel.findOne({
                email : username
            })
    
            const passwordMatch = await bcrypt.compare(pass, foundUser.password);
    
            if(foundUser){
                if(passwordMatch){
                    const token = jwt.sign({
                        id : foundUser._id
                    }, SECRET_KEY);
        
                    res.json({
                        token : token
                    })
                }
                else{
                    res.status(404).json({
                        err : "invalid password"
                    })
                }
            }
        }
        catch(e){
            res.status(404).json({
                err : `User Does not exist. ERROR : ${e.message}`
            })
        }

    
    })

    app.use(auth);
    
    
    //authenticated endpoint : used to add todo to the database
    app.post("/todo",async function(req, res){
        const desc = req.body.desc;
        const uId = req.body.userId;
        const deadline = req.body.deadline; //YY-MM-DD format

        try{
            await TodoModel.create({
                desc : desc,
                status : false,
                userId : uId,
                deadline : deadline
            })
    
            res.json({
                message : "new todo added to database"
            })
        }
        catch(e){
            res.status(500).json({
                err : `ERROR : ${e.message}`
            })
        }

    })

    app.post("/statusToggle", async function(req, res){
        const status = req.body.status;
        const desc = req.body.desc;

        try{
            const todo = await TodoModel.find({
                desc : desc
            })
    
            todo.status = status;

        }
        catch(e){
            res.status(500).json({
                err : `ERROR : ${e.message}`
            })
        }

    })
    
    
    //authenticated endpoint : used to get all todos of a user
    app.get("/todos",async function(req, res){
        const userId = req.body.userId;

        try{
            const todos = await TodoModel.find({
                userId : userId
            })
    
            res.json({
                todos
            })
        }
        catch(e){
            res.status(500).json({
                err :  `ERROR : ${e.message}`
            })
        }
    })
    
    
    
    app.listen(PORT, ()=>{
        console.log(`Server listening on PORT : ${PORT}.......`)
    })

}

startServer();