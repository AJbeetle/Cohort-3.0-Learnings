import { useState, useEffect, createContext, useContext, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// post link : https://jsonplaceholder.typicode.com/posts/1


// useFetch Hook
/* function useFetch(url){
    const [data, setData] = useState({});
    
    async function getData(){
        const res = await fetch(url);
        const newData = await res.json();
        setData(newData);
    }

    useEffect(function(){
        getData();
    },[url])

    return data
} */

import useFetch from "../hooks/useFetch"

function App(){

    return(
        <>
            <div>
                <PostComponent data={useFetch("https://jsonplaceholder.typicode.com/posts/1")}></PostComponent>
                <PostComponent data={useFetch("https://jsonplaceholder.typicode.com/posts/3")}></PostComponent>
                <PostComponent data={useFetch("https://jsonplaceholder.typicode.com/posts/14")}></PostComponent>
            </div>

        </>
    )
}


function PostComponent(props){
    // console.log(props)
    return (
        <>
            <div style={{background:"grey", border:'4px solid black', margin:10, padding:10, borderRadius:20}}>
                {props.data.id} - {props.data.title}
            </div>
        </>
    )
}


export default App