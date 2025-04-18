const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const { userAuth, adminAuth } = require("./auth");
// const {UserModel, AdminModel, CourseModel, PurchaseModel} = require("./db");  // need not to import all these models here after making routers 
// const { createUserRoutes } = require("./routes/user");    //ugly way of routing
// const { createCourseRoutes } = require("./routes/course");  //ugly way of routing

const { userRouter }  = require("./routes/userRT");
const { courseRouter } = require("./routes/courseRT"); 
const { adminRouter } = require("./routes/adminRT");

const { rateLimit } = require("./middlewares/rateLimitter");

const cookieParser = require("cookie-parser");


const app = express();
const PORT = process.env.PORT;
const jwt_secret = process.env.JWT_SEC;
const url = process.env.URL;
const database = process.env.DATABASE;

async function connectDB(){
    await mongoose.connect(url+database);
    console.log("DATABASE CONNECTED");
}

async function startServer(){

    await connectDB();

    app.use(cors({
        origin : "http://localhost:4000",
        credentials : true,
    }));
    app.use(express.json());
    app.use(rateLimit);
    app.use(cookieParser());
    

    // ugly way of doing routing :-
    // createUserRoutes(app);
    // createCourseRoutes(app);

    //better way of routing :-
    // express gives you very good constructs 
    app.use("/api/v1/user", userRouter);
    app.use("/api/v1/course", courseRouter);
    app.use("/api/v1/admin", adminRouter);


    // so from above code you can easily see that all the user routes are handled by userRouter and same for course endpoints too, this is better approach and most of the backends are written in this way only 
    
    app.listen(PORT,function(){
        console.log(`app running on port : ${PORT}`);
    })
}

startServer();