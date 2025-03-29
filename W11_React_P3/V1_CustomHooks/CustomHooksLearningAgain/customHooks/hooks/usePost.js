import {useState, useEffect} from "react"

export default function usePost(){
    const [data, setData] = useState({});

    async function getData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
        const newData = await response.json();
        setData(newData);
    }

    useEffect(function(){
        getData();
    },[])

    return {
        data
    }
}