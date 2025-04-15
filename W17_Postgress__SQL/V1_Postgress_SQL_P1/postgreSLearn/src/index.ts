// HOW SQL INJECTIONS HAPPEN
import {Client} from "pg"
import dotenv from "dotenv"
const result = dotenv.config({
    path : ".env"
})
// console.log(result);
import express, {Request, Response} from "express"

const app = express();

const db = process.env.DB;
const username = process.env.userDB;
const password = process.env.password;
// console.log("username : "+username+"password : "+password)


// const pgClient = new Client(db);

const pgClient = new Client({
    user : username ,
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

        // one way of writing queries another way are also mentioned here
        // const sqlQuery  = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}','${password}')` 
        // console.log(sqlQuery);


        // In this case what happens is, now the sqlQuery separately reaches postgress and the values we gave to client in the array separately reach to it, so now the malicious SQL that user might have sent will not be executed because the postgres SQL will not execute 'sqlQuery ' with values, it will just execute and postgres will take corresponding values and as it is put it into the database. So, SQL written inside of password will be put as it is in password coloumn
        const sqlQuery  = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)` 

        const resp = await pgClient.query(sqlQuery,[username, email, password]);


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