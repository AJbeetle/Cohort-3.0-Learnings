// you can also do all this is jsx file, and this is alsoo good
import  {useState, useEffect } from 'react'

export default function useFetch(url){
    const [finalData, setFinalData] = useState({});
    const[loading, setLoading] = useState(true);  // before the request goes set loading to true and as soo as request is reolved set loading to false
    console.log(url);

    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(function(){
        getDetails();
    },[url])

    // now all the libraries that you use for fetching url data you will see they also provide variable loading, to show when data os being fetchedS

    return {
        finalData, loading
    }
}