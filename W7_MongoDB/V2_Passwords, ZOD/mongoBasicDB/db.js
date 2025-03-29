const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = Schema({
    email : {type:String, unique:true},
    name : String,
    password : String
})

const ObjectId = mongoose.ObjectId;

const todo = Schema({
    desc : String,
    status : Boolean,
    timeCreated : {type:Date, default: ()=> new Date().toISOString().split("T")[0]},
    deadline : Date, // in YY-MM-DD format
    userId : ObjectId
})

const UserModel = mongoose.model("users",user);
const TodoModel = mongoose.model("todos",todo);

module.exports = {
    UserModel : UserModel,
    TodoModel : TodoModel
}