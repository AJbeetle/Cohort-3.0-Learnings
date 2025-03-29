// HOSPITAL BACKEND
/* 
   GET    : users can check how many kindeys they have
   POST   : user can add a new kidney
   PUT    : user can replace a kidney, make it healthy
   DELETE : user can remove a kidney
 */

   /* So in earlier code : hosp.js : I handled all endpoints using queryParams and returned JSON object to all endpoints 
   Now I will update this code as follows: 
   1. So whenever user sends get request it sends the data via query params and it returns something to user 
   2. and whenever POST request is send to the server the data is sent in the request body , since user wants to add some info to the server . Now here user can do with successfull message popup or something like that but not really need a proper JSON returned.

   
   */

   const express = require("express");
   const path = require("path");
   const app = express();
   const PORT = 3001;

   app.use(express.json());
   
   var users = [
       {
           name : "AAYUSHI JOSHI",
           pID  : 1,
           password : "xyz",
           kidneys : [{health:true},{health:false}]
       },
       {
           name : "HANSKRIT JOSHI",
           pID  : 2,
           password : "xyz",
           kidneys : [{health:false},{health:false}]
       },
       {
           name : "VINOD JOSHI",
           pID  : 3,
           password : "xyz",
           kidneys : [{health:false}]
       },
       {
           name : "RAJNI JOSHI",
           pID  : 4,
           password : "xyz",
           kidneys : [{health:true},{health:true}]
       },
       {
           name : "PURNA DEVI THAPLIYAL",
           pID  : 5,
           password : "xyz",
           kidneys : [{health:true}]
       }
   ]
   
   const p = path.join(__dirname,"hos.html");
   
   app.get("/",function(req, res){

    //  so you give parameters in the URL : http://localhost:3001/?u=AAYSUHI%20JOSHI & p=password  [here after question mark nothing is route these are params and %20 defines whitespace & defines another param starting]  

    let name = req.query.u;
    let pass = req.query.p;
    let numOfKidneys;
    let numOfHealthyKid;
    let numOfUnHealthyKid;

    users.forEach(t=>{
        if(t.name == name){
            numOfKidneys = t.kidneys.length;

            let HealthyKid = t.kidneys.filter(val=> val.health==true );
            numOfHealthyKid = HealthyKid.length;
            numOfUnHealthyKid = numOfKidneys - numOfHealthyKid;
        }
    })

    // res.send("name:"+name+" password : "+pass);
    console.log("name:"+name+" password : "+pass);
    res.json({
        name,
        metadata : {
            pass,
            numOfKidneys,
            numOfHealthyKid,
            numOfUnHealthyKid
        }
    });

    //    res.sendFile(p); //now I would like to send some html to the frontend
   })
   let before = []; // now it will act as patient history for the session backend is running

   app.post("/",function(req,res){

    let u = req.body;     
    // you will get error in below line if you don't use middleware :  app.use(express.json()) : it is becausse this line makes us able to parse the  json body to the server

    let kid = u.isHealthy;    //isHealthy is the data user will provide in body if they want healthy kidney or unhealthy kindey added to them (ideally user will want healthy only but here just for learning)
    console.log(u);
    let name = u.name;
    let pass = u.pass;

    let numOfKidneys;
    let numOfHealthyKid;
    let numOfUnHealthyKid;

    

    users.forEach(t=>{
        if(t.name==name){

            numOfKidneys = t.kidneys.length;

            let HealthyKid = t.kidneys.filter(val=> val.health==true );
            numOfHealthyKid = HealthyKid.length;
            numOfUnHealthyKid = numOfKidneys - numOfHealthyKid;

            before.push({name, pass, numOfKidneys, numOfHealthyKid, numOfUnHealthyKid});

            
            t.kidneys.push({
                health:kid
            })

            numOfKidneys = t.kidneys.length;

            HealthyKid = t.kidneys.filter(val=> val.health==true );
            numOfHealthyKid = HealthyKid.length;
            numOfUnHealthyKid = numOfKidneys - numOfHealthyKid;
        }
    })


   // in post request user does not want the whole json object to be returned they just want confirmation of work done

   let str = "unhealthy";
   if(kid){
    str = "healthy";
   }

    res.json({
        mess : `done updates added  ${str} kidney to the user : ${name}`
    })

    // res.json({
    //     before,
    //     after : {
    //         name,
    //         metadata : {
    //             pass,
    //             numOfKidneys,
    //             numOfHealthyKid,
    //             numOfUnHealthyKid
    //         }
    //     }
    // });

   })

   app.put("/",function(req,res){

    let name = req.query.u;
    let pass = req.query.p;

    let numOfKidneys;
    let numOfHealthyKid;
    let numOfUnHealthyKid;
    let check = true;

    users.forEach(t=>{
        if(t.name==name){

            numOfKidneys = t.kidneys.length;

            let HealthyKid = t.kidneys.filter(val=> val.health==true );
            numOfHealthyKid = HealthyKid.length;
            numOfUnHealthyKid = numOfKidneys - numOfHealthyKid;

            before.push({name, pass, numOfKidneys, numOfHealthyKid, numOfUnHealthyKid});

            if(numOfUnHealthyKid==0){
                res.status(411).json({err : "no unhealthy kidneys to replace"})
                check = false;
            }
            else{
                for(let i=0;i<numOfKidneys;i++){
                    if(t.kidneys[i].health==false){
                        t.kidneys[i].health=true;
                        // break; // replacing all bad kidneys by good ones
                    }
                }
    
                numOfKidneys =  t.kidneys.length;
    
                HealthyKid = t.kidneys.filter(val=> val.health==true );
                numOfHealthyKid = HealthyKid.length;
                numOfUnHealthyKid = numOfKidneys - numOfHealthyKid;
            }
        }
    })

    if(check){
        res.json({
            mess : "replaced all bad kidneys by good ones"
        })
    }
    // res.json({
    //     before,
    //     after : {
    //         name,
    //         metadata : {
    //             pass,
    //             numOfKidneys,
    //             numOfHealthyKid,
    //             numOfUnHealthyKid
    //         }
    //     }
    // });
    

   })

   app.delete("/",function(req, res){
    let name = req.query.u;
    let pass = req.query.p;

    let numOfKidneys;
    let numOfHealthyKid;
    let numOfUnHealthyKid;
    let check = true;

    users.forEach(t=>{
        if(t.name==name){
            numOfKidneys = t.kidneys.length;

            let HealthyKid = t.kidneys.filter(val=> val.health==true );
            numOfHealthyKid = HealthyKid.length;
            numOfUnHealthyKid = numOfKidneys - numOfHealthyKid;

            before.push({name, pass, numOfKidneys, numOfHealthyKid, numOfUnHealthyKid});

            if(numOfUnHealthyKid == 0){
                res.status(411).json({err : "no unhealthy kidneys broo"})
                check = false;
            }
            else{
                let i = 0;
                while(i<numOfKidneys && i>=0){
                    console.log(i);
                    if(t.kidneys[i].health==false){
                        t.kidneys.splice(i,1);
                        i = i;
                        numOfKidneys = t.kidneys.length;
                        // break; // just deleting all unhealthy kidneys at once
                    }
                    else{
                        i++;
                    }
    
                }
    
                // for(let i=0; i<numOfKidneys;i++){
                // }
    
                numOfKidneys =  t.kidneys.length;
    
                HealthyKid = t.kidneys.filter(val=> val.health==true );
                numOfHealthyKid = HealthyKid.length;
                numOfUnHealthyKid = numOfKidneys - numOfHealthyKid;
            }
        }
    })

    if(check){
            res.json({
                message : "Successfully removed all unhealthy kidneys"
            })
    }
    console.log("successfully done the task");



    // res.json({
    //     before,
    //     after : {
    //         name,
    //         metadata : {
    //             pass,
    //             numOfKidneys,
    //             numOfHealthyKid,
    //             numOfUnHealthyKid
    //         }
    //     }
    // });


   })

//    So, I created this by my own without completly listening to kirat, improvements in new file hospital.js
   
   
   app.listen(PORT,()=>{
       console.log("Server is listening...");
   })