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
    
    const [inputVal, setInputVal] = useState("");

    function change(e){
        setInputVal(e.target.value);
    }


    
    const debouncedVal = useDebounce(inputVal,1000);

    function mainSearchBackend(){
        fetch("https://www.google.com")
    }

    useEffect(function(){
        mainSearchBackend();
    },[debouncedVal]);


    return(
        <>
            <div>
                <input type="text" placeholder="Search.." onChange={change}></input>
            </div>
        </>
    )

}


export default App;