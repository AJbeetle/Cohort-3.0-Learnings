import { useState, useEffect, createContext, useContext, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// post link : https://jsonplaceholder.typicode.com/posts/1


// useFetchRefetch Hook  : NEW CODE
/* 
function useFetchRefetch(url, delay){
    const [data, setData] = useState({
        id : "ID", title :"TITLE"
    });

    async function getData(){
        const res = await fetch(url);
        const newData = await res.json();
        setData(newData);
       
    }

    useEffect(function(){
        getData();
    },[url])

    useEffect(function(){
        console.log("TIMER STARTED....")
        let timer = setInterval(function(){
            console.log("refetched..");
            getData();
        },delay)

        return function(){
            console.log("timer stopped...")
            clearInterval(timer);
        }

    },[delay, url])

    return data
}
 */

import useFetchRefetch from "../hooks/useFetchRefetch"

function App(){
    const[whichPost, setWhichPost] = useState(1);
    const data = useFetchRefetch(`https://jsonplaceholder.typicode.com/posts/${whichPost}`,4000);

    return(
        <>
            <div>
                <PostComponent data={data}></PostComponent>
            </div>
            <div>
                <button onClick={()=>setWhichPost(1)}>Post 1</button>
                <button onClick={()=>setWhichPost(2)}>Post 2</button>
                <button onClick={()=>setWhichPost(3)}>Post 3</button>
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