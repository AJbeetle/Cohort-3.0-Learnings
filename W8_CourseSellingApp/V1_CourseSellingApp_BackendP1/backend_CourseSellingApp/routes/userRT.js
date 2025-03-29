// const express = require("express");
// const Router = express.Router;

// OR 

const { Router } = require("express");
const userRouter = Router();
const { userAuth } = require("../auth");
const { UserModel } = require("../db");
const { PurchaseModel } = require("../db");
const { CourseModel} = require("../db");
const { z } = require("zod");
const  bcrypt  = require("bcrypt");
require("dotenv").config({
    path : "../.env"
})
const jwt = require("jsonwebtoken");
const jwt_user = process.env.JWT_SEC_USER;
const {userAuth2} = require("../middlewares/user");

const {commonAuth} = require("../middlewares/commonAuth");

const cookieParser = require("cookie-parser");


userRouter.post("/signup",async function(req, res){

    const requiredBody = z.object({
        email : z.string().min(5).email(),
        password : z.string()
                      .min(5)
                      .max(20)
                      .regex(/[A-Z]/)
                      .regex(/[a-z]/)
                      .regex(/[!@#$%^&():;,.<>?]/)
                      .regex(/[0-9]/),
        firstName : z.string(),
        middleName : z.string().optional(),
        lastName : z.string()
    })

    const parseDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        return res.status(403).json({
            err : "Invalid format",
            errorMess : `error : ${parseDataWithSuccess.error}`
        })
    }

    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const middleName = req.body.middleName;
    const pass = req.body.password;

    const hashedPass = await bcrypt.hash(pass,5);

    try{
        await UserModel.create({
            email : email, 
            firstName : firstName ,
            lastName : lastName,
            middleName : middleName,
            password : hashedPass
        })

        res.json({
            message : "you are successfully signed up"
        })

    }
    catch(e){
        res.status(500).json({
            err : `some internal server errors, ERROR : ${e.message}`
        })

    }


})

userRouter.post("/signin",async function(req, res){
    const username = req.body.email;
    const password = req.body.password;

    try{
        const foundUser = await UserModel.findOne({
            email : username
        })
    
        const passCheck = await bcrypt.compare(password,foundUser.password);
        if(foundUser){
            if(passCheck){

                const token = jwt.sign({
                    id : foundUser._id,
                    timestamp : new Date().getTime()
                },jwt_user,{expiresIn : "1h"});

                const oneHourLater = new Date(new Date().getTime()+60*60*1000);
                // console.log(oneHourLater);
                res.cookie("AuthCookie",`Bearer ${token}`,{
                    httpOnly : true,    //prevents client-side access (only via http requests)
                    expires : oneHourLater,  //1-hour expiration time
                    sameStie : "None",  //prevents CSRF attacks, use "Strict" in production
                    // secure : false        //only works over HTTPS, set true for production
                });


                res.json({
                    // token : token,
                    message : "cookie sent"
                })
            }
            else{
                res.status(403).json({
                    err : "wrong password"
                })
            }
        }
    }
    catch(e){
        res.status(403).json({
            err : `User does not exist. ERROR : ${e.message} `
        })
    }

})

// userRouter.use(userAuth);
// userRouter.use(userAuth2);


userRouter.use((req, res, next)=>{
    commonAuth(req, res, next,jwt_user);
});

// we have made the buying endpoint in courseRoutes
userRouter.post("/buy",async function(req, res){
    // const userId = req.body.userId;
    const { userId , courseId } = req.body;

    try{
        const bought = await PurchaseModel.create({
            courseId,
            userId
        })
    
        res.json({
            message : "WOHOOOO SUCCESSFULLY BOUGHT THE COURSE",
            courseId : courseId
        })
    }
    catch(e){
        res.status(500).json({
            err : `internal server error, ERROR : ${e.message}`
        })
    }


})

userRouter.get("/purchases",async function(req, res){
    const userId = req.body.userId;

    try{

        // Both method below are ugly way and the right way is using mongoDB relationships [in SQL we could have used table joins]
        //My Way
        /* const courseIds = await PurchaseModel.find({
            userId
        })
        
        const courses = [];

        for(const t of courseIds){
            const m = await CourseModel.findOne({
                _id : t.courseId
            })
            courses.push(m);
        } */

        //Harkirats way 
        const purchases = await PurchaseModel.find({
            userId
        }) 

        const courseData = await CourseModel.find({
            _id : {$in : purchases.map(t => t.courseId)}
        })
      
        // console.log(courses);
    
        res.json({
            // courses
            courseData
        })

    }
    catch(e){
        res.status(500).json({
            err : `internal server error . ERROR : ${e.message}`
        })
    }



})


// we are not exporting a function anymore we are exporting router

// so this userRouter is the place which handles incoming requests to the user endpoints /user/anything.

module.exports = {
    userRouter : userRouter
}