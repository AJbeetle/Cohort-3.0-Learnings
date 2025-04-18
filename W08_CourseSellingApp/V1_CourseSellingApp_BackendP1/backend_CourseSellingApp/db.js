const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = Schema({
    email : {type:String, required:true, unique:true},
    password : {type:String, required:true},
    firstName : {type:String, required:true},
    middleName : {type:String},
    lastName : {type:String}
})

const Admin = Schema({
    email : {type:String, required:true, unique:true},
    password : {type:String, required:true},
    firstName : {type:String, required:true},
    middleName : {type:String},
    lastName : {type:String}
})

const Course = Schema({
    title : {type:String, required:true},
    desc : {type:String},
    price : {type:Number},
    imageURL : {type:String},
    creatorId : {type:mongoose.Schema.Types.ObjectId, ref:"admins", required:true}  //reference is given of collection not schema
})

const Purchase = Schema({
    courseId : {type:mongoose.Schema.Types.ObjectId, ref:"courses", required:true},
    userId : {type:mongoose.Schema.Types.ObjectId, ref:"users", required:true}
})

const UserModel = mongoose.model("users",User);
const AdminModel = mongoose.model("admins",Admin);
const CourseModel = mongoose.model("courses",Course);
const PurchaseModel = mongoose.model("purchases",Purchase);

module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel 
}