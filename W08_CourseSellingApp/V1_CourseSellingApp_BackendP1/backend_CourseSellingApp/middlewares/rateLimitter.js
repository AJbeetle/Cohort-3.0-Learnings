// MY CODE
/* 
let reqCount =0;
let prevTime =0;

function rateLimit(req, res, next){
    const userTime = req.headers.time;   //assuming time sent by user is in format let m = new Date() and time = m.getTime() and it is in millisecongs
    console.log(userTime);
    if(prevTime===0){
        prevTime = userTime ;     
    }

    const timeElapsed = userTime - prevTime; 

    if(timeElapsed>500){
        reqCount = 0;
    }

    if(reqCount > 5 && timeElapsed<=500){
        console.log("blocked");
        return res.status(429).json({
            err : "too many requests"
        })
    }
    console.log("passed");
    reqCount++;
    prevTime = userTime;
    next();
}
 */
//GPT answer

const rateLimitMap = new Map(); // Stores request timestamps for each user

function rateLimit(req, res, next) {
    // const userIP = req.ip || req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userIP = req.headers.ip;
    const currentTime = Date.now(); // Current timestamp in milliseconds

    if (!rateLimitMap.has(userIP)) {
        rateLimitMap.set(userIP, []);
    }

    const requestLog = rateLimitMap.get(userIP);

    // Remove timestamps older than 1 second
    while (requestLog.length > 0 && requestLog[0] <= currentTime - 1000) {
        requestLog.shift();
    }

    if (requestLog.length >= 5) {
        return res.status(429).json({
            error: "Too many requests. Please wait a moment before retrying."
        });
    }

    requestLog.push(currentTime); // Log the new request
    next(); // Proceed with the request
}

module.exports = { rateLimit };



module.exports = {
    rateLimit
}