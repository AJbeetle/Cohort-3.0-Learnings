import {useState, useRef, useEffect} from "react"
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";


function App() {

  // So I want whenever my chat application mounts I want to establish the websockets initialising TCP connection.
  interface CHAT {
    user?:string,
    reply?:string
  }

  const [socket, setSocket] = useState<WebSocket>();
  // const [chat, setChat] = useState([
  //   {user:"dummy Chat",reply:"dummy Reply"}
  // ]);
  const [chat, setChat] = useState<CHAT[]>([]);
  const sendRef = useRef<HTMLDivElement>(null);
  const inpRef = useRef<HTMLInputElement>(null);
  const replyRef = useRef<HTMLDivElement>(null);
  


  
    function callWebSocket():void{
      // setChat(t => t.push(inpRef.current.value))

      if(!inpRef.current?.value){
        return;
      }
      socket?.send(inpRef.current?.value);
      
      let m = [...chat,
        {user: inpRef.current?.value} ];
      setChat(m);

      inpRef.current.value=""
      
    }

  useEffect(function(){
    const ws = new WebSocket("ws://localhost:8000");
    setSocket(ws);
    /* ws.onerror = () => {

    }

    ws.close = () => {

    }

    ws.onopen = () => {

    } */

    ws.onmessage = (ev) => {
      if(ev.data === "WebSocket connection established"){
        alert(ev.data);
      }
      else if(ev.data === "pong"){
        setChat(prevChat => [...prevChat, {reply:ev.data}]);
        console.log(chat)
      }
    }
    // console.log(chat);

  },[])

  


  return (<>
    <div className="flex justify-center items-center w-full h-screen border border-solid border-black  p-10 flex-col gap-2 transition-all">
      <h1 className="text-4xl font-bold text-gray-700">...| ECHO APP |...</h1>
      <div className="flex flex-col justify-end items-end border border-gray-900 border-solid p-4 min-h-[80%] h-full w-[80%] gap-4 bg-blue-100 rounded-lg">
        <div className=" flex gap-2 flex-col w-full h-full min-h-[90%] p-4">
          {
            chat.map((e,index)=>{
              // console.log(e, chat[index])
              return <div key={index} className="flex flex-col gap-2">
               
               {e.user && <div ref={sendRef} className="flex justify-end items-start text-gray-700 gap-2" > 
                <div className="w-fit max-w-[80%] px-2 py-1 rounded-2xl bg-blue-500 text-white">
                {e.user}
                </div>
                <IoPersonCircleOutline className="text-2xl" />
                </div>
               }
                
                  

                {e.reply &&  <div ref={replyRef} className="flex items-start gap-2">
                  <IoPersonCircleOutline className="text-2xl" />
                  <div className="w-fit max-w-[80%] px-2 py-1 rounded-2xl bg-blue-500 text-white">
                  {
                    e.reply
                  }
                  </div>
                </div>}
                
              </div>
            })
          }
        </div>
        <div className="flex w-full gap-2 justify-center">
          <input ref={inpRef} type="text" placeholder="type message.." className="w-full bg-gray-600 py-2 px-4 h-fit outline-none text-white ">
          </input>
          <button className="bg-blue-500 py-1 px-4 rounded-lg active:scale-90 text-white" onClick={callWebSocket}><IoSend /></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

