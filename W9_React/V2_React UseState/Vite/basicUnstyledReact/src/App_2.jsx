
//Creating a timer that updates every 1 sec : stopwatch
import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import.meta.hot

function App(){

    let [counterVisible,setCounterV] = useState(true);
    const[counter, setCounter] = useState(0);

    useEffect(function(){
        setInterval(function(){
            setCounterV(c=>!c)
        },5000)
        
        console.log("mounted")
        let clock = setInterval(()=>{
            setCounter(counter => counter +1);
        },1000);
        
        return function(){
            clearInterval(clock);
            console.log("unmounted")
        }
    },[]);

    // -> now let's understand dependency array and useEffect again in new clean file so move to another App.jsx

  return (
    <div>
      <b>
        Basic Counter React App
      </b>
      <CounterComp></CounterComp>
      <div>
        <h3>TIMER CLOCK BELOW</h3>
        {/* <TimerComp></TimerComp> */}
        {counterVisible ? <TimerComp counter={counter}></TimerComp> : null}
        {/* or right following */}
        {/* {counterVisible && <TimerComp></TimerComp>} */}



        {/* here we are not unmounting the TimerComp, but just hiding it so, maintaining its value but hiding from view after every 5 secs, better way to do this is props 
        
        -> FOR doing second way you bring the stateVariable inside App function

        -> also you bring your clock inside the useEffect of App function

        -> for this to work I comment line 42 and uncomment line 27 , to undo this just do reverse of what I just wrote

        -> I added props : counter to line 27

        -> commenting down the useEffect code inside the TimerComp and bringing only code parrt above

        -> now let's understand dependency array and useEffect again in new clean file so move to another App.jsx
        
        */}
        {/* <div style={{visibility : counterVisible ? "visible" : "hidden"}}>
            <TimerComp></TimerComp>
        </div> */}
      </div>

    </div>
  )
}
function CounterComp(){

  const [count, setCount] = useState(0);

  function inc(){
    setCount(count+1);
  }

  function dec(){
    setCount(count-1);
  }

  function reset(){
    setCount(0);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={inc}>Increase Count</button>
    <button onClick={dec}>Decrease Count</button>
    <button onClick={reset}>Reset Count</button>
  </div>
}


function TimerComp(props){
    

    console.log("inside counter component");
    // as counter variable changes the TimerComp is rerendered .So you see infinite logs on console. and because of re rendering so many intervals start 

    // now in order to manage this problem we will need to work with :-
    // hooking into the lifecycle events of react
    // so what we want to react to do is that when first time TimerComp mounts then run the setInterval then after every render donot start interval

    // so that 1st mount or 1st render is called the lifecycle event
    // so we want whenever our component mounts then the timer starts i.e. setInterval starts and during re-rendering it does not
    
    // for this we will use useEffect hook

    //so Mounting, Re-rendering and Unmounting are lifecycle events


    // useEffect() // keep all your mounting logic here, so it takes two arguments a function and the dependency array

    // we wanted to guard our setInterval from re-renders
    useEffect(function(){
/* 
        let clock = setInterval(function(){

            // setCounter(counter+1);// we can't do this it will create problem as counter state variable is not given as dependency we cannout use it like this

            //RATHER DO FOLLOWING
            // setCounter(function(currVal){
            //     return currVal = currVal+1;
            // })

            //OR 
            setCounter(counter => counter+1)

        },1000);

        console.log("mounted");
        
        // so return function runs when component is unmounted from the DOM, so anything return inside the return function runs on unmounting -> and all code out of return runs on mount

        // useEffect acts like this till your dependency array is empty we will soon see how that changes the behaviours
        return function(){
            console.log("unmounted");
            clearInterval(clock);
        } */
    }, []);

    // useEffect has multiple uses but for now it works as stated


    // now we will have to understand about  :
    /* 
       -> Mounting : DONE
       -> Re-rendering : DONE
       -> Unmounting : DONE
       -> dependency array
       -> cleanup       : DONE Learning
       -> fetch inside useEffect hook 
     */

    // before learning above three things lets learn 
    //    -> conditional rendering   : DONE Learning

    // conditional rendering : sometimes I want counterComponent to render and sometimes I don't want it to






    // function stop(){
    //     clearInterval(timer);
    // }

    // function stop(){
    //     clearInterval(timer);
    // }

    return <div>
            <h2>{props.counter}</h2>
            {/* <button onClick={stop}>STOP TIMER</button> */}
        </div>

}
export default App