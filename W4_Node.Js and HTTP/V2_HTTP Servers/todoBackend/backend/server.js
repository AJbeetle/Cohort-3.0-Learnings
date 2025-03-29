const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require("path");

const server = new express();
const PORT = 3000;

server.use(cors());         // used to maintain the communication between frontend and backend to and fro
server.use(express.json());   // used to ensure that express properly pareses JSON data

/* 
GET : to view
POST : to create
PUT : to update
DELETE : to delet
 */

// so we have route handler server.get for route /view

// so server.get function gives us a callback function that have two objects req (request)  and res (response).
// So req is used to access any data from the request captured by this server route handler 
// and res is used to send the data to the frontend 


// when I srever frontend files and API calls both from express server it creates problem since I am loading my frontend content after eveyr change made by user in todoApp, which creates conflict of reloading frontend on same port where backend is running
/* 
server.use(express.static(path.join(__dirname, '../frontend')));

server.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../frontend/index.html"));
})
 */


server.get('/view',function(req, res){
    // try{
    //     let read = fs.readFileSync("./todo.json","utf-8");
    //     // console.log(res);
    //     // console.log(req);
    //     res.json(JSON.parse(read));
    // }
    // catch(err){
    //     res.send(err);
    // }

    fs.readFile("./todo.json","utf-8",(err, data)=>{
        if(err){
            res.status(500).json({error:"Failed to read data"})
        }
        else{
            res.json(JSON.parse(data));
        }
    })
});

server.post('/add',function(req,res){
    // let content  = req.body;
    // console.log(content);

    const val = req.body;
        // console.log(val.desc);
        console.log(val);
    
    let todo = fs.readFileSync("./todo.json","utf-8");
    todo = JSON.parse(todo);
    let size = todo.length;

    const update = {
        "id" : size+1,
        "desc" : val.desc
    }

    todo.push(update);

    console.log(todo);

    fs.writeFile("todo.json",JSON.stringify(todo),(err,data)=>{
        if(err){
            return res.status(500).json({error : "failed to update data"})
        }
        res.json({message:"updated data successfully",extraAddedTodo:update, finalTodo:todo});
    })
})

server.put('/update',function(req,res){
    let val = req.body;
    console.log(val.id);
    console.log(val.data);

    let read = fs.readFileSync("todo.json","utf-8");
    read = JSON.parse(read);

    read.filter((todo) =>{
        if(todo.id == val.id){
            todo.desc = val.data;
         }
    });

    fs.writeFile("todo.json",JSON.stringify(read),(err)=>{
        if(err){
            return res.status(500).json({error:"ERROR while writing data"});
        }
        res.send("Successfully dome");
    });



})

server.delete('/delete',function(req,res){
    let r = req.body;
    console.log(r);

    let todo = fs.readFileSync("todo.json","utf-8");

    todo = JSON.parse(todo);
    todo = todo.filter(item => item.id != r.id);
    for(let i=0; i<todo.length;i++){
        todo[i].id=i+1;
    }
    console.log(todo);
    // console.log(todo);
    // todo.sort((a,b)=> a.id-b.id);


    fs.writeFile("./todo.json", JSON.stringify(todo),(err,data)=>{
        if(err){
            return res.status(500).json({error:"ERROR WHILE WRITING TO THE FILE"});
        }
        res.send("successfully written");
        // res.json({message:"SUCCESSFULLY DELETED"}); 
    })

    // fs.writeFileSync("./todo.json",JSON.stringify(todo));
    // res.send("SUCCESSFULLY DONE");



    // console.log(todo);

    


    
})

// GET = read contents from app
// POST = Create contents in app
// PUT = update or add value in app
// DELETE = delete contents from the app

server.listen(PORT,()=>{
    console.log("This is running on port"+PORT);
});