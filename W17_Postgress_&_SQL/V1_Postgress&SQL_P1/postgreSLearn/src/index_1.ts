// MongoDB library mongoose
/* import mongoose from "mongoose"

mongoose.connect("");

const Schema = mongoose.Schema;

interface userI extends mongoose.Document{
    name:string,
    email:string,
    password:string,
    contact:number
}

const userSchema = new Schema<userI>({

})

const userModel:mongoose.Model<userI> = mongoose.model("users",userSchema); */


// POSTGRESS

import {Client} from "pg"

// const pgClient = new Client("postgresql://neondb_owner:npg_kPerLNqUu47v@ep-winter-smoke-a1ew3exl-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");

const pgClient2 = new Client({
    user : "neondb_owner",
    password : "npg_kPerLNqUu47v",
    port : 5432,
    host : "ep-winter-smoke-a1ew3exl-pooler.ap-southeast-1.aws.neon.tech",
    ssl:true,
    database : "neondb",
})

async function main(){
    await pgClient2.connect();

    // now write all queries herw

    const response = await pgClient2.query("SELECT * FROM users");
    // console.log(response);
    console.log(response.rows);
}

main();