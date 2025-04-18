// TOKEN BASED AUTHENTICATION
/* 
const jwt = require("jsonwebtoken");
const { jwt_sec_admin, jwt_sec_user } = require("../config");
// console.log(jwt_sec_admin)


function commonAuth(req, res, next, jwt_pass){

    try{
        const token = req.headers.token;
        if(token){
            const decodedData = jwt.verify(token, jwt_pass);
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
 */


//COOKIE BASED AUTHNETICATION
const jwt = require("jsonwebtoken");
const { jwt_sec_admin, jwt_sec_user } = require("../config");
// console.log(jwt_sec_admin)


function commonAuth(req, res, next, jwt_pass){

    try{
        const cookie = req.cookies?.AuthCookie;
        console.log(cookie);
        if(cookie){
            const token = cookie.split(" ")[1];
            const decodedData = jwt.verify(token, jwt_pass);
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
            err : `Using Fake Token . ERROR : ${e.message}`
        })
    }

}


module.exports = {
    commonAuth
}