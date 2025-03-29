import {useState, createContext, useEffect, useRef, useContext} from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//usePrev hook
/* function usePrev(value){
    let val = useRef();
    let currValue = val.current

    useEffect(function(){
        val.current = value;

    },[value]);

    return currValue;
}  */

import usePrev from "../hooks/usePrev"

const CounterContext = createContext(); 


function App(){
    const [anything, setAnything] = useState(false);
    

    // console.log(prev);
    // function inc(){
    //     setState(state+1);
    // }

    // function dec(){
    //     setState(state-1);
    // }

    return(
        <div>
            <CounterComp></CounterComp>
            {/* <RandomRenderComp></RandomRenderComp> */}
            <div>
                <button onClick={()=>setAnything(t=>!t)}>RANDOM RENDER</button>
            </div>

        </div>
    )

}


// I am preventing a random render that changes my prevValue to current value through this Component

function CounterComp(){
    const [state, setState] = useState(0);
    const prev = usePrev(state,0);  // -> second argument is inital value

    return (
        <>
            <div>
                <div>
                    current State : {state}
                </div>
                <div>
                    previous State : {prev}
                </div>
                <CounterContext.Provider value={{
                    setState
                }}>
                    <ButtonComp></ButtonComp>
                </CounterContext.Provider>
            </div>
        </>
    )
}

function ButtonComp(){
    const p = useContext(CounterContext);

    function inc(){
        p.setState(s => s+1);
    }

    function dec(){
        p.setState(s => s-1);
    }

    return (
        <>
            <div>
                <button onClick={inc}>Increase</button>

                <button onClick={dec}>Decrease</button>
            </div>
        </>
    )
}

/* function RandomRenderComp(){
    const [anything, setAnything] = useState(false);

    return(
        <>
            <div>
                <button onClick={()=>setAnything(t=>!t)}>RANDOM RENDER</button>
            </div>
        </>
    )
} */


// I tried it different way too, but usePrev still does not persists last value if a random re-nder of whole app happens. If you define randRender as different component then only you can save yourself from usePrev giving you current value


// So using usePrev better version : but not better for heavy codes
export default App;