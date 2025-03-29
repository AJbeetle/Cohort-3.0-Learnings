import { useState, useEffect, useRef } from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"   //

//understanding useRef hook


// using raw variable approach -> not so useful
/* 
function App() {
    const [count, setCount] = useState(0);
    let timer = 0;

    function startClock(){
        timer = setInterval(function(){
            console.log("timer started")
            setCount(count => count+1);
        },1000)
    }

    function stopClock(){
        console.log("timer closed : ",timer);
        clearInterval(timer);
    }

  return (
    <div>
        <div>
            {count}
        </div>
        <div>
            <button onClick={startClock}> START CLOCK</button>
        </div>
        <div>
            <button onClick={stopClock}> STOP CLOCK</button>
        </div>
    </div>
  )
}
export default App
 */


// using state variable  : not much down side, but tecnically this is also worst approach : this re-rendering happens twice : so, when setTimer(value) is called then it gets immediately rendered and then when setCount(count => count + 1 ) is called then again one stateVariable is updated so after one second the app re-renders . Double re-rendering happens



/* 
function App() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);

    function startClock(){
        let val = setInterval(function(){
            console.log("timer started")
            setCount(count => count+1);
        },1000)
        setTimer(val);
    }

    function stopClock(){
        console.log("timer closed : ",timer);
        clearInterval(timer);
    }

  return (
    <div>
        <div>
            {count} 
        </div>
        <div>
            <button onClick={startClock}> START CLOCK</button>
        </div>
        <div>
            <button onClick={stopClock}> STOP CLOCK</button>
        </div>
    </div>
  )
}
export default App
 */




function App() {
    const [count, setCount] = useState(0);
    const timer = useRef(null);

    function startClock(){
        console.log("TIMER IS STARTED")
        timer.current = setInterval(function(){
            console.log("timer running")
            setCount(count => count+1);
        },1000)
    }

    function stopClock(){
        console.log("timer closed : ",timer.current);
        clearInterval(timer.current);
    }

  return (
    <div>
        <div>
            {count} 
        </div>
        <div>
            <button onClick={startClock}> START CLOCK</button>
        </div>
        <div>
            <button onClick={stopClock}> STOP CLOCK</button>
        </div>
    </div>
  )
}
export default App
