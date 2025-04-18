// creating an http server
//express
// node default library = no

const express = require('express');

const server = express();

function summation(n){
    let ans = 0;
    for(let i =0; i<n;i++){
        ans+=i;
        console.log(ans);
    }
    return ans;
}

server.get('/',function(req, res){

    //one way of taking request from users is via query parameters that is embedded in browser URL after questionmark, anything after question mark is not counted as route 

    let l = req.query.n;
    const result = summation(l);
    res.send("hi there, your answer is : "+result);
    
    
    // REQUEST METHOD :
    /*  
        GET : to get some information from the server
        POST : to add new something on the backend server
        PUT : to update something in the server
        DELETE : to delete something from the server
     */

    /* 
    STATUS CODE : whatever response server returns its status 
    200 range : successful completion of task
    300 range : redirectional messages 
    400 range : request by clientSide is not valid. Client Side Errors 
    500 range : request could not be processed by the server . So server errors 

    404 : content not found
    403 : unaccessible
     */    


    // now let's try to make a hospital backend : open hosp.js : so trying to create inmemory hospital i.e. we are not using anybackend just incode Data structure to store some data and to work on it : view file miniAssignment.png

    

})

server.listen(3000);

// I want to view my systems port 3000 on my mobile phoen which is on same network how to do so, cause right now I can't 

 