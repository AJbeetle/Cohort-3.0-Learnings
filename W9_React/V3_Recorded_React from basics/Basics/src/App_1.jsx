import {useState, useEffect} from 'react'
import React from 'react'


function App(){
    const [showTimer,setShow] = useState(true);

    useEffect(function(){
        setInterval(()=>{
            setShow(cur => !cur)
        },5000)
    },[])
    
    return <div style={{padding:"30px 0px", border:"1px solid blue", textAlign:"center",display:"flex", justifyContent:"center"}}>
        
        
        {showTimer ? <Timer></Timer> : null}
    </div>
}

function Timer(){
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        let t = setInterval(()=>{
            console.log("inside clock")
            setSeconds(prev => prev+1);
        },1000)

        //here when the Timer component unmounts still the interval stay running, so clock does never stop

        // this is where cleanup code is useful

        // so whatever this function will return as a function : will be a cleanup code

        return function(){
            clearInterval(t);
            console.log("interval stopped")
        }
    },[])

    return <div style={{border:"1px solid red",width:"fit-content"}}>{seconds} seconds elapsed</div>
}

export default App