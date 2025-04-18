/* import {NextRequest, NextResponse} from "next/server"

export function GET(){
    return NextResponse.json({
        message : "Hello People"
    })
}
 */


import NextAuth from "next-auth"
// import authOptions from "../../../../lib/auth"
import CredentialsProvider  from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
console.log(process.env.NEXTAUTH_SECRET)

const handler = NextAuth({
    providers : [
        CredentialsProvider({
            // What does frontend page should say in heading
            name: 'Login with email',
            //what all input fields we want from user
            credentials: {
              username: { label: "Username", type: "text", placeholder: "harkirat@gmail.com" },
              password: { label: "Password", type: "password" },
              adminPass : {label:"adminPass",type:"text"}
            },
            // the function that runs for verifying user : when user gives youn some credntials then you need to hit the database do the check and if correct return user ohtewise return null
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;

                //db request to check if this usernamr and passworf are coreecty

                /* const resp = await client.findOne({
                    username,
                    email
                })
                const user = {
                    name :resp.name,
                    id : resp.id,
                    email : resp.email
                } */

                const user = {
                    name :"aayushi",
                    id : "2",
                    email : "aayushi@gmail.com"
                }


                if(user) {
                    return user;
                }
                else{
                    return null;
                }

            }
          }),

          /* GoogleProvider({
            // clientId: process.env.GOOGLE_CLIENT_ID,
            // clientSecret: process.env.GOOGLE_CLIENT_SECRET
            clientId : "w33",
            clientSecret : "q3e"
          }),

          GitHubProvider({
            // clientId: process.env.GITHUB_ID,
            // clientSecret: process.env.GITHUB_SECRET
            clientId : "er",
            clientSecret : "edd"
          }) */
    ],
    // now when you are using server side component to check for user logged in or not, so using serverSession, so give here NEXT_SECRETKEY
    secret : process.env.NEXTAUTH_SECRET
})



// const handler = NextAuth(authOptions);

// authOptions is an object which contains : do you want to use google, facebook, email and so on, these are config parameters

export const GET = handler;
export const POST = handler;
// export {handler as GET, handler as POST}


// So instead of doing  following which is normal way of defining post and get handles in next JS we do what is written above:-
/* 
export const GET = () =>{

}

export const POST = () =>{

} */


// So from the next-auth library NextAuth function is returned, which we call inside a handler variable and since NextAuth function in itself returns you a function something like what we were writing : 

// function (req:NextRequest){
//     return NextResponse.json({})
// }

// so, therefore we export that function and say ki GET and POST request dono yhi function handle karega