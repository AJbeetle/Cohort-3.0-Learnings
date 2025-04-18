const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.JWT_SECRET;

function auth(req, res, next){
    try{
        const token = req.headers.token;
        if(token){
            const dataDecoded = jwt.verify(token, SECRET_KEY);
            const userId = dataDecoded.id;
            req.body.userId = userId;
            next();
        }
        else{
            res.status(404).json({
                err : "kindly login to use our services"
            })
        }
    }
    catch(e){
        res.status(404).json({
            err : `Fake tokens used, ERROR : ${e.message}`
        })
    }
}


module.exports = {
    auth
}