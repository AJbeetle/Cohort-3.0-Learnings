const jwt = require("jsonwebtoken");
const {jwt_sec_user} = require("../config");

function userAuth2(req, res, next){
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

module.exports = {
    userAuth2 : userAuth2
}