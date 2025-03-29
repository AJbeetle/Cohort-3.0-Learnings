const { Router, application } = require("express");
const {userAuth2} = require("../middlewares/user");
const {PurchaseModel} = require("../db");
const {CourseModel} = require("../db");
require("dotenv").config("../.env");
const {commonAuth} = require("../middlewares/commonAuth");

const courseRouter = Router();
const jwt_user = process.env.JWT_SEC_USER;

courseRouter.get("/preview",async function(req, res){

    try{
        const AllCourses = await CourseModel.find({});
        res.json({
            AllCourses
        }) 
    }
    catch(e){
        res.status(500).json({
            err : `internal server error : ${e.message}`
        })
    }
})

courseRouter.use((req,res,next)=>{
    commonAuth(req, res, next, jwt_user);
})

courseRouter.post("/purchase",async function(req, res){
    // you would expect user to pay you money : whole different thing to learn

    // so we will just keep this endpoint exposed

    const { userId , courseId } = req.body;

    try{

        const found =await PurchaseModel.findOne({
            courseId,
            userId
        })
        // console.log(found);
        if(found){
            return res.status(403).json({
                err : `this course already bought by you.`
            })
        }

        await PurchaseModel.create({
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




module.exports = {
    courseRouter : courseRouter
}
