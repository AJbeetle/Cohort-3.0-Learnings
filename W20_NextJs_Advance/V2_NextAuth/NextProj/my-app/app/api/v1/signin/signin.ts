import {setCookie} from "cookies-next"
import {NextResponse, NextRequest} from "next/server"
import fs from "fs"

export async function POST(req:NextRequest, res:NextResponse){
    const data:any = req.json();

    fs.writeFile("./details.txt",`${data.username} and ${data.password}`,(err)=>{
        if(err){
            return;
        }
    })
    const token = "1edsfngtkiore";

    setCookie("AuthCookie",`Bearer ${token}`,{
        req, res,
        httpOnly :true,
        secure : false,
        sameSite : "strict",
        path : "/",
        maxAge : 60*60
    })



}