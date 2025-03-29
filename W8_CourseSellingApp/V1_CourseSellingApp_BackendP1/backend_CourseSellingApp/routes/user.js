//ugly way of routing


function createUserRoutes(app){
    app.post("/user/signup",function(req, res){
    
    })
    app.post("/user/signin",function(req, res){
    

    })
    app.use(userAuth);

    app.get("/user/Purchases",function(req, res){
    
    })
}

module.exports = {
    createUserRoutes
}