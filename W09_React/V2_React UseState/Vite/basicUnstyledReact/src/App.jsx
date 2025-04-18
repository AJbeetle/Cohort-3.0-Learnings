import React from 'react'
import {useState, useEffect} from 'react'


/*

Examples of cleanup are :
  -> when cancelling fetching and redirecting to another page
  -> closing your websocket connections, a lot of time a component will need live connection to server . SO it can start a websocket in useEffect and in cleanup it can close the websocket connection

 */

//   Relearning cleanup, useEffect and learning about dependency Array

function App(){

    let [count, setCount] = useState(0);
    let [count2, setCounter] = useState(0);
    function increase(){
        setCount(c=>c+1);
    }

    function decrease(){
        setCounter(c=>c-1);
    }

    return <div>
        <h1>Hello World</h1>
        <CounterComp count={count} count2={count2}>
        </CounterComp>
        <button onClick={increase}>Increase Counter1</button>
        <button onClick={decrease}>Deccrease Counter2</button>

    </div>

}


// MOUNTING, RE-RENDERING and UNMOUNTING
function CounterComp(props){

    // The below was all partially true, because we did not learn dependency array
    useEffect(function(){
        console.log("mounted");

        return function(){
            console.log("unmounted");
        }
    },[]);


    useEffect(function(){
        console.log("counter1 has changed")

        return function(){
            console.log("cleanup inside first counter useEffect ")
        }
    },[props.count])

    // In above function what happens is : initially only "counter1 has changed" gets logged then everytime 'count' stateVariable changes first the cleanup code runs that is return function runs and after that the console.log happens and eventually when the component unmounts the cleanup return funtion runs

    useEffect(function(){
        console.log("counter2 has changed")
    },[props.count2])

    return <div>
        Counter1 : {props.count}
        <br></br>
        <br></br>
        Counter2 : {props.count2}
    </div>
}

export default App
// VIRTUAL DOM 

/* 

See every dom manipulation is a very expensive operation so, what react does is it says mein yahan DOM pe to daal hi rha hun cheezen let me keep the copy of this DOM called Virtual DOM as object in memmory. So whenever state changes I can calculate the changes /diff in DOM and virtual DOM  meaning react says I can calulate the new changes kya hone chiye and I can calculate changes usign VIRTUAL DOM , so react don;t have to go to DOM and do document.querySelector("body") and then make changes.

rather react says I have Virtual Copy of the current DOM already, that is what I'll use to calculate diffs and changes and then make changes accordingly rather than going to DOM again and again

its like object containign DOM info -> see learn.md to see image related to this

go to learn.md
*/