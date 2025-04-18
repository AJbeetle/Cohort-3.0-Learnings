const jwt = require("jsonwebtoken");

JWT_SECURE = "aayushi";

let token = jwt.sign({
    username : "lookup"
},JWT_SECURE);

console.log(token);

