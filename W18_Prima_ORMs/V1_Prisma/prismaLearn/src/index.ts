import express, {Request, Response} from "express";
import { PrismaClient } from "../src/generated/prisma";
const client = new PrismaClient();
const app = express();
app.use(express.json());

async function getAllUsers(){
    const allUsers = await client.users.findMany({
        include:{
            todos:true
        }
    });
    return allUsers
}

app.get("/users",async (req:Request, res:Response)=>{
    const users  = await getAllUsers();
    res.json(users)
})

app.get("/todos/:id", async (req:Request, res:Response)=>{
    const id = req.params.id;
    const IntId = parseInt(id);
    // const todos = await client.todos.findMany({
    //     where : {
    //         user_id : id 
    //     }
    // })
    const userWithTodos = await client.users.findFirst({
        where : {
            id : IntId
        },
        select : {
            username:true,
            age:true,
            city:true,
            todos:true
        },
    })
    
    res.json(userWithTodos)
    // res.json(todos)
})

app.listen(3000,()=>{
    console.log("SERVER RUNNING ON PORT 3000")
})
