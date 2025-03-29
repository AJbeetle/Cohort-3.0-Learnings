import { useState, useEffect, useRef } from 'react'
import useDebounce from "../hooks/useDebounce"



function App() {
    // so the lecture slides vala debounce : whenever there is a state variable that changes . So we just define a stateVariable inputVal which when user types gets updated from a change function

    const [inputVal, setInputVal] = useState("");

    function change(e){
        setInputVal(e.target.value);
    }

    // so now what I want to do is, whenever my InputVal changes I want to do the expensive operation [or tempted to do this expensive operation but we will prevent it by debounce hook], so what we will do is instead we should call expensive function on the basis of debounced value which comes from the useDebounce Hook

    const debouncedVal = useDebounce(inputVal); 

    // so what this useDebounce hook will do is, if user is typing very fast, that is inputVal is changing very fast then it will stop debouncedVal from changing and as the user stops for say 1 sec then the debouncedVal will be updated : so use debouncedVal in dependency array


    // INSTEAD OF FOLLOWING USE NEXT ONE where debouncedVal is used in dependency array
    /* useEffect(function(){

    },[inputVal]); */

    useEffect(function(){
        fetch("https://www.amazon.com/search")
    },[debouncedVal])   // now lets implement go to hooks folder useDebounce.js file contains the code

    return(
        <>
            <input type="text" onChange={change} placeholder="Search Here.."></input>
        </>
    )
}


export default App
