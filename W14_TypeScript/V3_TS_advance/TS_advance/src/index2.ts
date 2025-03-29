import express from "express"
import {z} from "zod"

const app = express();

// define the schema for profile update
const userProfileSchema = z.object({
    name : z.string().min(5, {message : "Name cannot be emprt"}),
    email : z.string().email({message : "Invalid email format"}),
    age : z.number().min(18,{message: "You must be atleast 18 years old"}).optional()
});

type finalProfileType = z.infer<typeof userProfileSchema>; // zod inference

app.put("/user",(req,res)=>{
    const  { success } = userProfileSchema.safeParse(req.body);
    // THE PROBLEM IN THIS CODE IS THAT THE "updateBody" is not been given any type so not using TS capabilites to its best and having type any

    // const updateBody = req.body;

    // it should be something like following :-

    // const updateBody : {
    //     name:string,
    //     email:string,
    //     age?:number
    // } = req.body;

    // using zod inference :-
    const updateBody : finalProfileType = req.body; // now this might feel a little unnecessary because we can just get data in correct type from the data from the same place where we get success {success, data}

    // this becomes super imp when we start to defnie same types on frontend. See, zod is library whcih we are always gonna use at the backend, never will we use it on frontend, but we might need this type on the frontend. We might need whatever form user fills to update the userProfile follows this type or that form has this type so, we can make sure it sends write things to the backend

    // this type is even thogh defined here, it is not necessaity here, it actually becomes necessary when you export it from here and import it in frontend

    // export type FinalUserSchema = z.infer<typeof userProfileSchema>

    // how do we export and import in frontend ? => we will get to this when we do monorepos, whne you want to do node backend and react frontend sharing code AND we will also learn it when we learn nextJS when frontend and backend exist in the same repository. Main thing is to know the syntax of how to use or get it

    // THE PROBLEM IN THIS ONE NOW IS : that you are twicely defining the tyoe to request , it would be bettwe if it inferes from the finalUserSchema the type of req.body. Or you can say, the userProfileSchema spits out the type finalUserSchema out there which could referred down here then somethinf like :

    /* 
        type FinalUserSchema = {
            name : string,
            email : string,
            age?:number
        }
    */
   // see zod documentation for type inference and then see line 13 and 30



    if(!success){
        res.status(411).json({});
        return
    }
    // update database here

    res.json({
        message : "user updated"
    })
})

app.listen(8000);

