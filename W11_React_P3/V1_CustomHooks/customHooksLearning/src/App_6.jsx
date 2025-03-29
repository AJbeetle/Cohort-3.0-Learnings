import { useState, useEffect, useRef } from 'react'
import useDebounce from "../hooks/useDebounce"



function App() {
    function sendDataToBackend(){
        fetch("https://api.amazon.com/search");
    }
    
    const debouncedFn  = useDebounce(sendDataToBackend);

    return(
        <>
            <input type="text" onChange={debouncedFn} placeholder="Search Here.."></input>
        </>
    )
}


export default App
