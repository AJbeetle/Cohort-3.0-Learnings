
// new syntax for backend handling
import {NextResponse} from "next/server"

export function GET(){
    return NextResponse.json({
        name:"Aayushi",
        email:"aayushijoshi9910@gmail.com"
    })
}

export function POST(){
    return NextResponse.json({
        name:"Aayushi",
        email:"aayushijoshi9910@gmail.com"
    })
}

export function PUT(){
    return NextResponse.json({
        name:"Aayushi",
        email:"aayushijoshi9910@gmail.com"
    })
}
