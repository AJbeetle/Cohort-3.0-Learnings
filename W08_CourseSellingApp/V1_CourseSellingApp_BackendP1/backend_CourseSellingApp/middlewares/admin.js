const jwt = require("jsonwebtoken");
const { jwt_sec_admin } = require("../config");
// console.log(jwt_sec_admin)

function adminAuth2(req, res, next){

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
    adminAuth2
}