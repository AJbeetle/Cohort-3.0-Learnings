import {WebSocketServer} from "ws"


const wss = new WebSocketServer({port : 8000})

wss.on("connection",function(socket){
    console.log("Websocket Server Connected");
    socket.send("WebSocket connection established")
    socket.on("message",async (e)=>{
        if(e.toString()=== "ping"){
            await new Promise((res)=>setTimeout(res,1000));
            // socket.emit("pong");
            socket.send("pong");
        }
    })
})
