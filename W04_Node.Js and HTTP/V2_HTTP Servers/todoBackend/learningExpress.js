const express = require('express');

const app = express();

//route handler , its like callback function so whenever someone try to access path "/" the function(req,res) is called which sends the response : Hello World
app.get('/', function(req,res){
    res.send("Hello World");
})


app.listen(3000);  // listeing on whcih port, this line ensures that process runs infinitely

// so run this file : node index.js so you have started your very basic http server , NOTE : http server
// now from postman try to access this port of your own machine by writing this request url : http://localhost:3000/

// So, localhost is name given to your own system : 
// 127.0.0.1, so whenever some machine wants to communicatye to itself it does it by using this ip localhost(127.0.0.1)  

app.get('/aayushi', function(req,res){
    // req sends all things related to request
    // res.send("Hello Aayushi :)");
    // res.send("<b>This is bold tag</b>");
    res.json({
        nam:"aayushi",
        age:20,
        sex:"F"
    });
    // we can do only once use of res method
})

app.post('/aayushi', function(req,res){
    res.send("Hello Aayushi :)");
})


// Today's Assignment : Create todos applications backend using express and you will have four endpoints basically one for creating todo, deleting todo, updating todo, marking todo to be done

// and you will be storing the data in memory i.e. some data tructure which is in current file only

// the hard part will be storing it in some other file, which will lay foundations for databases, for persistence , i.e. even if the app crashes the data still exists there and doesn't vanishes

// third  thing to do is add user logic




// see image : basicTask.png
// see image2 : third taks.png



