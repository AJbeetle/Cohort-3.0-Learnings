import {PrismaClient} from "../src/generated/prisma"

const client = new PrismaClient();

function createDummyDB(){
    client.users.create({
        data : {
            username : "dummyUser",
            password : "xyz",
            age : 10,
            city : "New Delhi",
            todos : {
                create : {
                    title : "Happy to see you here",
                    decription : "Welcome onboard this is dummy todo",
                    done : false
                }
            }
        }
    })
}

createDummyDB();