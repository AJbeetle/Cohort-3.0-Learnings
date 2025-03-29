import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useState, useEffect, useRef} from "react"

// MY BASIC WALA - useDebounce hook code

/* function useDebounce(url,delay){

    async function mainSearchBackend(){
        await fetch(url);
    }
    
    let clock;

    function debouncedFunc(){
        clearTimeout(clock);
        clock = setTimeout(mainSearchBackend,delay)
    }

    return debouncedFunc
} */

import useDebounce from '../hooks/useDebounce'

function App(){
    async function mainBackendSearch(){
        await fetch("https://www.google.com")
    }
    const debouncedFunc = useDebounce(mainBackendSearch,500);

    return(
        <> 
        <input onChange={debouncedFunc} placeholder="Search..."></input>
        </>
    )

}


export default App;