import { useState, useEffect, useRef } from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"   //

//understanding useRef hook

function App() {

    const inputRef = useRef(null);
    const [count, setCount] = useState(0);
    const clockRef = useRef(false);
  return (
    <div>
        Sign up
        <input type="text" id="name" placeholder="name" ref={inputRef}/>
        <input type="text" id="age" placeholder="age" />
        {/* <button>SUBMIT</button> */}

        {/* Let's say when user has not filled any thing on input boxes and we want that when user presses SUBMIT button we need to focus on input box which is empty at first in the DOM 
        
        Conventional way of doing this using DOM manipulation is  :

        document.querySelector(".name").focus();
        */}

        {/* <button onClick={function(){
            document.getElementById("name").focus()
        }}>SUBMIT</button> */}

        {/* So, what we are learning is various ways to fetch DOM element, above is one way and useRef is another way . Create a element that refers to a dom element. You will not need ID anymore*/}

        <button onClick={function(){
            inputRef.current.focus()
        }}>SUBMIT</button>

        <ClockComp1 count={count} setCount={setCount} clockRef={clockRef}></ClockComp1>
    </div>
  )
}

function ClockComp1(props){
    // define this as global variable
    // const clockRef = useRef(false);  
    
    
    /* let timer;
    function startClock(){
        timer = setInterval(function(){
            console.log("inside clock")
            props.setCount(count => count+1);
        },1000)
    }
    function stopClock(){
        console.log("stopping clock")
        clearInterval(timer);
    } */

    

    function startClock(){
        return props.clockRef.current = true;
    }

    function stopClock(){
        return props.clockRef.current = false;
    }

    return(
        <div style={{margin:10, padding:10, border:"1px solid black", textAlign:"center", display:"flex", flexDirection:"column", gap:10}}>
            <div>
                {/* {props.count} */}

                {/* {clockRef.current && <ClockItself count={props.count} setCount={props.setCount} ref={clockRef}/>} */}
                {props.clockRef.current ? <ClockItself count={props.count} setCount={props.setCount} /> : null}
            </div>
            <div>
                <button onClick={startClock}> START</button>
            </div>
            <div>
                <button onClick={stopClock}> STOP</button>
            </div>
        </div>
    )
}

function ClockItself(props){
    let timer = useRef(null);
    useEffect(function(){
        timer.current = setInterval(function(){
            console.log("timer started")
            props.setCount(c => c+1);
        },1000)

        return function(){
            console.log("timer ended");
            clearInterval(timer.current);
        }
    },[])

    return (
        <div>
            {props.count}
        </div>
    )
}

export default App
