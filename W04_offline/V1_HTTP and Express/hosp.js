// HOSPITAL BACKEND
/* 
   GET    : users can check how many kindeys they have
   POST   : user can add a new kidney
   PUT    : user can replace a kidney, make it healthy
   DELETE : user can remove a kidney
 */

   const express = require("express");
   const path = require("path");
   const app = express();
   const PORT = 3001;
   
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
   let before = [];

   app.post("/",function(req,res){
    let name = req.query.u;
    let pass = req.query.p;

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
                health:true
            })

            numOfKidneys = t.kidneys.length;

            HealthyKid = t.kidneys.filter(val=> val.health==true );
            numOfHealthyKid = HealthyKid.length;
            numOfUnHealthyKid = numOfKidneys - numOfHealthyKid;
        }
    })



    res.json({
        before,
        after : {
            name,
            metadata : {
                pass,
                numOfKidneys,
                numOfHealthyKid,
                numOfUnHealthyKid
            }
        }
    });

    // res.send("kidney add or not : "+k);
   })

   app.put("/",function(req,res){

    let name = req.query.u;
    let pass = req.query.p;

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


            for(let i=0;i<numOfKidneys;i++){
                if(t.kidneys[i].health==false){
                    t.kidneys[i].health=true;
                    break;
                }
            }

            numOfKidneys =  t.kidneys.length;

            HealthyKid = t.kidneys.filter(val=> val.health==true );
            numOfHealthyKid = HealthyKid.length;
            numOfUnHealthyKid = numOfKidneys - numOfHealthyKid;
        }
    })

    res.json({
        before,
        after : {
            name,
            metadata : {
                pass,
                numOfKidneys,
                numOfHealthyKid,
                numOfUnHealthyKid
            }
        }
    });
    

   })

   app.delete("/",function(req, res){
    let name = req.query.u;
    let pass = req.query.p;

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

            for(let i=0; i<numOfKidneys;i++){
                if(t.kidneys[i].health==false){
                    t.kidneys.splice(i,1);
                    break;
                }
            }

            numOfKidneys =  t.kidneys.length;

            HealthyKid = t.kidneys.filter(val=> val.health==true );
            numOfHealthyKid = HealthyKid.length;
            numOfUnHealthyKid = numOfKidneys - numOfHealthyKid;

        }
    })

    res.json({
        before,
        after : {
            name,
            metadata : {
                pass,
                numOfKidneys,
                numOfHealthyKid,
                numOfUnHealthyKid
            }
        }
    });


   })

//    So, I created this by my own without completly listening to kirat, improvements in new file hospital.js
   
   
   app.listen(PORT,()=>{
       console.log("Server is listening...");
   })