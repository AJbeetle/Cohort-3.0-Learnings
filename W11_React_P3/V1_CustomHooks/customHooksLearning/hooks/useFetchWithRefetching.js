import  {useState, useEffect, useRef} from 'react'

export default function useFetchRefetch(url){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);
    const latestURLRef = useRef(url);

    useEffect(function(){
        latestURLRef.current = url 
        getNewData();
    },[url]);

    async function getNewData(){
        let u = latestURLRef.current;
        setLoading(true);
        const response = await fetch(u);
        const data = await response.json();
        // console.log(data);
        setFinalData(data);
        setLoading(false);
    }

    // This useEffect sets up a timer to **refetch the data every 10 seconds**.
    // This helps ensure that any changes on the backend are reflected in the frontend in near real-time.
    // We also include a **cleanup function**, so when the component using the useFetchRefetch hook unmounts,
    // the interval will be cleared and the periodic refetching will stop (to avoid memory leaks or unnecessary network calls).
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