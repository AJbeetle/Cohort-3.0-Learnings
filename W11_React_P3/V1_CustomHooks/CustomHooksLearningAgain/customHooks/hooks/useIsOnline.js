import {useState, useEffect, useRef} from "react"

/* 
export default function useIsOnline(){
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(function(){
        function updateOnlineStatus(){
            setIsOnline(navigator.onLine);
        }

        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);

        return function(){
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        }

    },[])

    return isOnline;
} */




// BETTER isOnline Hook    

export default function useIsOnline(){
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [internet, setInternet] = useState();

    async function checkConnection(){
        try{
            const resp = await fetch("https://clients3.google.com/generate_204",{
                method : "GET",
                cache : "no-cache",
                mode : "no-cors"
            });

            setInternet(true);
        }
        catch(e){
            setInternet(false);
        }
    }

    useEffect(function(){
        function updateIsOnline(){
            // setIsOnline(navigator.onLine);
            const online = navigator.onLine;
            setIsOnline(online);
            if(online){
                checkConnection();
            }
            else{
                setInternet(false);
            }
        }

        //initial check
        updateIsOnline();

        //checking for events only once : openng only one eventListener
        window.addEventListener("online",updateIsOnline);
        window.addEventListener("offline",updateIsOnline);

        let timer = setInterval(function(){
            updateIsOnline(); //checking every 2sec
        },2000);

        return function(){
            clearInterval(timer);
            window.removeEventListener("offline", updateIsOnline);
            window.removeEventListener("online", updateIsOnline);
        }
    },[])

    return {
        isOnline, internet
    }
}