// This code has a bug :-

/* 
        So, when initially app starts the refreshes does happen after every 10 sec , but as user clicks on button for post 2, it gets on screen for next 10 seconds and when the refresh happens it brings back post 1 on the view, even when user pressed button 2, the refresh that happens after 10 seconds brings back the post 1 

        So, This is classic issue with Stale clouse in react hooks 

        In the useEffect function that runs only on component mount, what happens is : 
        The [] empty dependency array means this effect (and thus the setInterval) runs only once on first mount, and url is captured in a closure at that moment.

        When you click a button and url changes (currentPost becomes 2 or 3), getNewData(url) in the first useEffect runs correctly.

        But **your setInterval still uses the old url (i.e., first URL it saw), because it's still referring to the value from the initial closure.

        So at the next 10-sec refetch, it still fetches post 1 again.

        So to fix this : Use useRef to hold the latest URL 

        1st WAY ----------------------------------------------------------------------------------------------

        export default function useFetchRefetch(url){
        const [finalData, setFinalData] = useState({});
        const [loading, setLoading] = useState(true);

        const latestUrlRef = useRef(url); // ✅ keeps latest URL

        useEffect(() => {
            latestUrlRef.current = url; // ✅ update ref whenever url changes
            getNewData(url); // ✅ fetch new data
        }, [url]);

        async function getNewData(u = latestUrlRef.current){ // ✅ default to latest URL
            setLoading(true);
            const response = await fetch(u);
            const data = await response.json();
            setFinalData(data);
            setLoading(false);
        }
        ------------------------------------------------------------------------------------------------------


        2nd Way ------------------------------------------------------------------------------------------------------
        const [finalData, setFinalData] = useState({});
        const [loading, setLoading] = useState(true);

        const latestUrlRef = useRef(url); // ✅ keeps latest URL

        useEffect(() => {
            latestUrlRef.current = url; // ✅ update ref whenever url changes
            getNewData(); // ✅ fetch new data
        }, [url]);

        async function getNewData(){ // ✅ default to latest URL
            const url = latestUrlRef.curent;
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setFinalData(data);
            setLoading(false);
        }        
    
        
        ------------------------------------------------------------------------------------------------------


        ONE ADVANCED THING TO LOOK ON :-
        >> If you ever want to expose manual refetch capability, you could even do:
        in your hook code :-
        return {
            finalData,
            loading,
            refetch: getNewData
        };

        s:

        In your js Copy code :-
        const { finalData, loading, refetch } = useFetchRefetch(...);
        <button onClick={refetch}>Manual Refresh</button>


*/

// you can also do all this is jsx file, and this is alsoo good
import  {useState, useEffect, useRef} from 'react'

export default function useFetchRefetch(url){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(function(){
        getNewData();
    },[url]);

    async function getNewData(){
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setFinalData(data);
        setLoading(false);
    }

    // so for refetching after every 10 secs [so that if anychanges happen in backend for this URL thay are reflected]
    // we have started a timer that recalls this function itself after every 10 secs
    // there is a cleanup code too, so when the component which uses useFetchRefecth hook unmounts it will stop rrefetching the data from URL
    useEffect(function(){
        console.log("REFETCH CLOCK STARTED : WE WILL REFRESH THE FETCH AFETR EVERY 10 secs")
        let timer = setInterval(function(){
            console.log("refetching...")
            getNewData();
        },1000*10)

        return function(){
            console.log("refetching stopped");
            clearInterval(timer);
        }
    },[])

    return {
        finalData, loading
    }
} 