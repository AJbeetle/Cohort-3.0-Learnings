const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwt_sec_user = process.env.JWT_SEC_USER;
const jwt_sec_admin = process.env.JWT_SEC_ADMIN;

function userAuth(req, res, next){
    try{
        const token = req.headers.token;
        if(token){
            const decodedData = jwt.verify(token, jwt_sec_user);
            req.body.userId = decodedData.id;
            next();
        }
        else{
            res.status(403).json({
                err : "please login to use this service"
            })
        }
    }
    catch(e){
        res.status(403).json({
            err : "Using Fake Token" 
        })
    }

}


function adminAuth(req, res, next){

    try{
        const token = req.headers.token;
        if(token){
            const decodedData = jwt.verify(token, jwt_sec_admin);
            req.body.userId = decodedData.id;
            next();
        }
        else{
            res.status(403).json({
                err : "please login to use this service"
            })
        }
    }
    catch(e){
        res.status(403).json({
            err : "Using Fake Token" 
        })
    }

}


module.exports = {
    userAuth,
    adminAuth
}