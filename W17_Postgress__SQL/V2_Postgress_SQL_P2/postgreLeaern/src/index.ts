import express,{Response, Request} from "express"
import {Client} from "pg"
import dotenv from "dotenv"
dotenv.config()

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


const app = express();
app.use(express.json())

app.post("/signup",async (req:Request, res:Response)=>{
    try{
        const {username, email, password, city, country, street, pincode} = req.body;
    
        //now there are issues in this code, ay for some random reason [which can happen], say after the line 23 is executed either the backend crashes or the database goes down for some seconds, now what will happen is user will get created but his/her address details won't be in database. So, incomplete queries ran, our databse has inconsistency of data.
        // Another better example in learn.md
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`
        const addressQuery = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)`;
    
        await pgClient.query("BEGIN;");
        const resp = await pgClient.query(insertQuery,[username, email, password]);
        // console.log(resp);
        const userId = resp.rows[0].id;
        console.log(userId);
    
        await pgClient.query(addressQuery,[userId, city,country,street,pincode]);
        await pgClient.query("COMMIT;");


    
        res.json({
            message : "successfully signed up"
        })

    }
    catch(e:any){
        console.log(e.message);
        res.json({
            err : "error while signing up"
        })
    }

})

app.get("/metadata", async (req:Request, res:Response)=>{
    const userId = req.query.id;

    // On way of extracting userInfo and their addresses 
    /* const query1 = `SELECT username, email FROM users WHERE id=$1;`
    const query2 = `SELECT * FROM addresses WHERE user_id=$1;`
    const resp1 = await pgClient.query(query1,[userId]);
    const resp2 = await pgClient.query(query2,[userId]);
    
    res.json({
        userInfo : resp1.rows[0],
        addressInfo : resp2.rows[0]
    }) */

    //other way is doing JOINS
    const queryJoin = `
    SELECT username, email, user_id, city, country, street, pincode 
    FROM users AS u
    JOIN addresses AS a ON u.id = a.user_id
    WHERE u.id = $1;
    `

    const resp = await pgClient.query(queryJoin,[userId]);

    // now see when you join, computation is very high as mXn matrix multiplication is happening to extract whole data from the two tabeles. So, we need to very carefully use joins

    res.json({
        userInfo : resp.rows
    })

})


async function main(){
    await pgClient.connect();

    app.listen(3000,()=>{
        console.log("DATABASE CONNECTED\nSERVER IS RUNNING ON PORT 3000")
    })
}

main();
