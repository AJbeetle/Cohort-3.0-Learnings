//ugly way of routing

function createCourseRoutes(app){

    app.use(userAuth);

    app.post("/course/purchase",function(req, res){
        // you would expect user to pay you money : whole different thing to learn
    
        // so we will just keep this endpoint exposed
    
    })
    app.get("/course/preview",function(req, res){
        
    })
}


module.exports = {
    createCourseRoutes
}
