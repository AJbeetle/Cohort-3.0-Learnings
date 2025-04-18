const mongoose = require("mongoose");

//mongoose says first you need to specify the schema of your data, so why do we define schema when mongoDB is schemaless. We will answer later think yourself


//mongoose lobrary exports class called schema which we can use to define schema of application

const Schema = mongoose.Schema;

// user schema
const User = new Schema({
    email : String,
    password : String,
    name : String
})


//todo schema

// since userid is object so we need to import it from mongoose only

const ObjectId = mongoose.ObjectId;

const Todo = new Schema({
    title : String, 
    status : Boolean,
    userId : ObjectId
})


// another way : better way this is relationship, telling mongodb that userId refers to this user schema above, it is better because it will not let you put anything in the todo schema until and unless user corresponding to it exists 
/* 
const Todo = new mongoose.Schema({
    title : String,
    status : Boolean,
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    }
}) */



// we wasnt high level function that adds data to mongoDB 

// somethign liek :

// user.insert({
//     name : "harkirat",
//     password : "123",
//     email : "hak.34@gmail.com" 
// })


// So we want this debugger.js file from which we can call this function, so I need model over which I can call this function


// So that is what mongoose models return you to asking you to which collection you want to add data to


const UserModel = mongoose.model("users",User)  // here 1st argument : which collection you want to put your data into and 2nd argument is which schema it follows

const TodoModel = mongoose.model("todos",Todo)

// these models exports function like these  
// UserModel.create({}), this model lets insert dataa in specific collection

//Now since our db file is written in differe js file so we need to export it in order to access it from index.js


module.exports = {
    UserModel : UserModel,
    TodoModel : TodoModel
}