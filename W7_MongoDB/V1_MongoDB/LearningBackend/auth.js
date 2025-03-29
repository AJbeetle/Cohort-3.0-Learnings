const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET; 

function auth(req, res, next){
    const token = req.headers.token;
    try{
        const decodedData = jwt.verify(token, JWT_SECRET);
        req.body.userId = decodedData.id;
        next();
    }
    catch(e){
        res.status(404).json({
            err : "wrong token"
        })
    }
}


module.exports = {
    auth
}