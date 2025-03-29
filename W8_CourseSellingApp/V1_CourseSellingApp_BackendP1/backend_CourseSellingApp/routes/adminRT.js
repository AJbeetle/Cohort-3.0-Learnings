
const router = require("express");
const adminRouter =  router();
const {adminAuth} = require("../auth");
const {AdminModel} = require("../db");
const {CourseModel} = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
require("dotenv").config({
    path : "../.env"
})
const jwt = require("jsonwebtoken");
const {adminAuth2} = require("../middlewares/admin");
const {commonAuth} = require("../middlewares/commonAuth");

const jwt_admin = process.env.JWT_SEC_ADMIN;
// console.log(jwt_admin);

adminRouter.post("/signup",async function(req, res){
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
        middleName : z.string(),
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
        await AdminModel.create({
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

adminRouter.post("/signin",async function(req, res){
    const username = req.body.email;
    const password = req.body.password;

    try{
        const foundUser = await AdminModel.findOne({
            email : username
        })
    
        const passCheck = bcrypt.compare(password,foundUser.password);
        if(foundUser){
            if(passCheck){
                const token = jwt.sign({
                    id : foundUser._id,
                    timestamp : new Date().getTime()
                },jwt_admin,{expiresIn : "1h"});

                const oneHourLater = new Date(new Date().getTime()+60*60*1000);
                res.cookie("AuthCookie",`Bearer ${token}`,{
                    httpOnly : true,    //prevents client-side access (only via http requests)
                    expires : oneHourLater,  //1-hour expiration time
                    sameStie : "None",  //prevents CSRF attacks, use "Strict" in production
                    // secure : false        //only works over HTTPS, set true for production
                })

                res.json({
                    // token : token,
                    message  : "cookie sent"
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

// adminRouter.use(adminAuth);
// adminRouter.use(adminAuth2);

adminRouter.use((req,res,next)=>{
    commonAuth(req,res,next,jwt_admin);
})

adminRouter.post("/course",async function(req, res){
    const adminId= req.body.userId;
    const requiredBody = z.object({
        title : z.string(),
        desc : z.string(),
        price : z.number(),
        imageURL : z.string()
    })
    
    const parseWithSuccess = requiredBody.safeParse(req.body);

    if(!parseWithSuccess){
        return res.status(403).json({
            err : "end data in correct format",
            error : `ERROR MESSAGE IS : ${parseWithSuccess.error}`
        })
    }

    
    // const title = req.body.title;
    // const desc = req.body.desc;
    // const price = req.body.price;
    // const imageURL = req.body.imageURL;

    // doing above thing in one line of code

    const {title, desc, price, imageURL} = req.body;
    
    try{
        const course = await CourseModel.create({
            title,
            desc,
            price,
            imageURL,   // see video of web3 saas in 6 hours where you learn how user can upload imager in the platform instead of sending the image url to the database
            creatorId : adminId
        })

        res.json({
            message : "course added to the database",
            courseId : course._id
        })

    }
    catch(e){
        res.status(500).json({
            err : `internal server error, ERROR : ${e.message}`
        })
    }

})

adminRouter.put("/course",async function(req, res){
    const adminId = req.body.userId;
    const courseId = req.body.courseId;
    const {title, desc, price, imageURL} = req.body;

    // the following check can be done in single line of code while updating the course, this is bigger check
    const findCourse  = await CourseModel.findOne({
        _id : courseId,
        creatorId : adminId
    })

    // if(adminId !== findCourse.creatorId){
    if(!findCourse){
        return res.status(403).json({
            err : "you cannot change contents of someone else's course"
        })
    }

   /*  findCourse.title = title;
    findCourse.desc = desc;
    findCourse.price = price;
    findCourse.imageURL = imageURL; */

    // OR do this way : 

    try{

        await CourseModel.updateOne({
            _id : courseId,
            creatorId : adminId
        },{
            title,
            desc,
            price,
            imageURL
        });
    
        res.json({
            message : "updated the course"
        })
    }
    catch(e){
        res.status(500).json({
            err : `internal server error : ${e.message}`
        })
    }







})

adminRouter.get("/course/bulk",async function(req, res){
    const adminId = req.body.userId;

    try{
        const courses = await CourseModel.find({
            creatorId : adminId
        })
    
        res.json({
            courses
        })

    }
    catch(e){
        res.status(403).json({
            err : `internal server error . ERROR : ${e.message}`
        })
    }

})

adminRouter.delete("/course",async function(req, res){
    const adminId = req.body.userId;
    const courseId = req.body.courseId;

    try{
        const found = await CourseModel.deleteOne({
            creatorId : adminId,
            _id : courseId 
        })
        if(found.deletedCount>0){
            res.json({
                message : `deleted course successfully. RESULT IS : acknowledged : ${found.acknowledged } and deleteCount : ${found.deletedCount}`
            })
        }
        else{
            res.json({
                message : `did not find course to delete`
            })
        }
    }
    catch(e){
        res.status(500).json({
            err : `internal server error. ERROR : ${e.message}`
        })
    }
    

})



module.exports = {
    adminRouter : adminRouter
}