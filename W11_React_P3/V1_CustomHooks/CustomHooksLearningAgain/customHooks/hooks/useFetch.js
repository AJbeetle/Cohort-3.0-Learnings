import {useState, useEffect} from "react"

export default function useFetch(url){
    const [data, setData] = useState({});
    
    async function getData(){
        const response = await fetch(url);
        const newData = await response.json();
        setData(newData);
    }

    useEffect(function(){
        getData();
    },[url])

    return data
}