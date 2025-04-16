// This is wrong way of fetching data in nextJs. Correct way in page.tsx


"use client";  // whenever we use useState or useEffect then we have to make our page to be client Component using this line [by default pages are server components and they cannot use useState or useEffect, they cannot not have sideEffect]

import {useState, useEffect} from "react"
import axios from "axios"

export default function Home() {
    const [ loading, setLoading ] = useState(true);
    const [ data, setData] = useState();

    async function getData(){
        const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

        return response.data;
    }
    useEffect(function(){
        getData().then((res)=>{
            setData(res)
            setLoading(false);
        })

    },[]);

    if(loading){
        return <div>
            loading...
        </div>
    }

    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            {data.name}
            <br/>
            {data.email}
        </div>
    );
}
