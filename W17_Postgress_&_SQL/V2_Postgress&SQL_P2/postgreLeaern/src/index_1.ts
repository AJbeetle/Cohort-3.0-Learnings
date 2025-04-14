import express,{Response, Request} from "express"
import {Client} from "pg"

const pgClient = new Client({
    user : "neondb_owner",
    password :  "npg_kPerLNqUu47v",
    port : 5432,
    host : "ep-winter-smoke-a1ew3exl-pooler.ap-southeast-1.aws.neon.tech",
    ssl : true,
    database:"neondb"
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


async function main(){
    await pgClient.connect();

    app.listen(3000,()=>{
        console.log("DATABASE CONNECTED\nSERVER IS RUNNING ON PORT 3000")
    })
}

main();
