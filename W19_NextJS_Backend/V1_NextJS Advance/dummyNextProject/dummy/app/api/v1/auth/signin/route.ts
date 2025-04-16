import {NextResponse, NextRequest} from "next/server"
// import {PrismaClient} from "../../../../generated/prisma";
import prisma from "../../../../lib/db"

const client = prisma;

export async function POST(req:NextRequest){
    const body = await req.json();    //extracts body from frontend
    console.log("--------------------------")
    console.log(body);
    console.log("--------------------------")
    await client.user.create({
        data : {
        username : body.username,
        password : body.password
        }
    })

    console.log(body);
    return NextResponse.json({
        message : "successfull signed up"
    })   
    
}