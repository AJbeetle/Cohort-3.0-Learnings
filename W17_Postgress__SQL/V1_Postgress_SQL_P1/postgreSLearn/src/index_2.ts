// HOW SQL INJECTIONS HAPPEN
import {Client} from "pg"
import dotenv from "dotenv"
dotenv.config({
    path : ".env"
})
import express, {Request, Response} from "express"

const app = express();

const db = process.env.DB;
const username = process.env.userDB;
const password = process.env.password;


// const pgClient = new Client(db);

const pgClient = new Client({
    user : username,
    password : password,
    port : 5432,
    host : "ep-winter-smoke-a1ew3exl-pooler.ap-southeast-1.aws.neon.tech",
    ssl:true,
    database : "neondb",
})

pgClient.connect();
app.use(express.json());

app.post("/signup",async (req:Request,res:Response)=>{
    try{
        // console.log(req.body.username);
        const {username, email, password} = req.body;

        // Learning how SQL Injection could be done :-
        // commenting the working query part and just consoling the query what returns when usern enters some malicious query in request
        const sqlQuery  = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}','${password}')` 
        console.log(sqlQuery);
     
        const resp = await pgClient.query(sqlQuery);


        res.json({
            message : "successfully signedup"
        })
    }
    catch(e){
        console.log(e);
        res.json({
            err : "error signing up"
        })
    }

})

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})