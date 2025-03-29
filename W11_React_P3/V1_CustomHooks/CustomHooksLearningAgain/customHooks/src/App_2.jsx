import { useState, useEffect, createContext, useContext, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import usePost from "../hooks/usePost"

// post link : https://jsonplaceholder.typicode.com/posts/1


// useCounter Hook
/* function usePost(){
    const [data, setData] = useState({});

    async function getData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/11");
        const data = await response.json();
        setData(d => data);
    }

    useEffect(function(){
       getData(); 
    },[]);

    return {
        data
    }
} */

const postContext = createContext();

function App(){

    return(
        <>
            <div>
                <PostComponent></PostComponent>
            </div>

        </>
    )
}


function PostComponent(){
    const {data} = usePost();
    return (
        <>
            <div style={{background:"grey", border:'4px solid black', margin:10, padding:10, borderRadius:20}}>
                {data.id} - {data.title}
            </div>
        </>
    )
}


export default App