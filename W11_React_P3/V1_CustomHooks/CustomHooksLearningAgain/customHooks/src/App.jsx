import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useState, useEffect, useRef} from "react"


// useIsOnline - advanced code first written and checked here

/* function useIsOnline(){
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [connection, setConnection] = useState();

    async function checkConnection(){
        try{
            // const resp = await fetch("https://example.com/",{
            //     method : "GET",
            //     mode : "no-cors"
            // })
            // // console.log("REPSONSE STATUS: ",resp.ok);  // this always returns false because mode : "no-cors" blocks access to response object
            // setConnection(true);


            const resp = await fetch("https://clients3.google.com/generate_204",{
                method : "GET",
                cache : "no-cache", 
                mode : "no-cors"     // if you donot set this, it will give CORS error in the client side
            })
            setConnection(true);
        }
        catch(Err){
            setConnection(false);
        }

    }

    useEffect(function(){
        function updateIsOnline(){
            const online = navigator.onLine;
            setIsOnline(online);

            if(online){
                checkConnection();
            }
            else{
                setConnection(false);
            }
        }

        //Initial check
        updateIsOnline();
        //Listening to events only once [if kept inside interval, so many   eventListeners will open]
        window.addEventListener("online",updateIsOnline);
        window.addEventListener("offline",updateIsOnline);

        let timer = setInterval(function(){
            updateIsOnline(); //checking every 2 sec 
        },2000);

        return function(){
            clearInterval(timer);   
            window.removeEventListener("online", updateIsOnline);
            window.removeEventListener("offline", updateIsOnline);
        }
    },[])

    return {isOnline, connection};
} */

import useIsOnline from "../hooks/useIsOnline"    
function App(){

    // const {isOnline, connection} = useIsOnline();
    // console.log(Status)


    return(
        <>
            <div>
                <NetworkComponent></NetworkComponent>
            </div>
            <div>
                <h1>Hey User</h1>
            </div>
            <div style={{backgroundColor:"#242424", height:"50%", width:"80%", justifySelf:"center", borderRadius:20, padding:10}}>
                CONTENT STARTS FROM HERE
            </div>
        </>
    )
}


function NetworkComponent(){
    let {isOnline, internet} = useIsOnline();
    console.log("re-rendered")

    return (
        <>
            <div style={{backgroundColor : internet ? "green" : "grey",display:"flex", width:"100%", justifyContent:"space-between"}}>
                <div style={{display:"flex", width:"100%", justifyContent:"space-between",margin:5}}>
                    <div>
                        You are : {internet ? "ONLINE" : "OFFLINE"}
                    </div>
                    <div>
                        You are in network : {isOnline ? "In Network" : "Out of Network"}
                    </div>
                </div>
            </div>
        </>
    )
}


export default App;