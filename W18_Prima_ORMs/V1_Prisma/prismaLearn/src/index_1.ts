import { PrismaClient } from "../src/generated/prisma";


const client  = new PrismaClient();

// client.$queryRaw(`you can give raw SQL query`)

async function createUser(){
    await client.users.create({
        data : {
            username : "aayushi",
            password : "123",
            age : 23,
            city : "New Delhi"
        }
    })
}

async function deleteUser(){
    await client.users.delete({
        where : {
            id:1
        }
    })
}

async function updateUser(){
    await client.users.update({
        where : {
            id:1
        },
        data : {
            username: "aayushi"
        } 
    })
}

async function findingOne(){
    const user = await client.users.findFirst({
        where : {
            username:"aayushi"  
        },
        /* select : {
            username:true
        } */
       include : {
        todos:true
       }
    })
    console.log(user);
    console.log(user?.age);
    console.log(user?.username);
}

async function findingAll(){
    const users  = await client.users.findMany({
        where : {
            username:"aayushi"  
        }
    })
    console.log(users)
}


// createUser();
// updateUser();
// deleteUser();
findingOne();
// findingAll();



// EXPRESSIFYING OUR APP => go to index.js