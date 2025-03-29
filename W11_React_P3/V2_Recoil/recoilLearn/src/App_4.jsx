import { createContext, useState, useContext,memo , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {RecoilRoot, atom, useSetRecoilState, useRecoilValue} from "recoil"

import counterAtom from "../store/atoms/counter"


function App(){
    
    return(
        <>
        <CounterComp></CounterComp>
        </>
    )
}



function CounterComp(){
    const [count, setCount] = useState(0);

    useEffect(function(){
        setInterval(function(){
            setCount(c=>c+1);
        },3000)
    },[])

    // you will notice that children components donot not even have access to the state variable inside the App component but still App component re-renders it forces all its childrens to re-render too

    // react issmart enough to know that count state has not been passed to childrens

    // so we have to tell it explicitely that unless a prop send to children or the State it might be using changes it should not be re-rendering

    // so, for doiung this what you need to do is wrap your component inside the memo [import it from react]

    //memo : memorising a component and only changing if the props of state variable changes

    
    return (
        <>
        <div>
            {/* <CurrentCounterComp></CurrentCounterComp>
            <IncreaseComp></IncreaseComp>
            <DecreaseComp></DecreaseComp> */}

            <MemorisedCurrentCounter count={count}></MemorisedCurrentCounter>
            <MemoInc></MemoInc>
            <MemoDec></MemoDec>

        </div>
        </>
    )
}
const MemorisedCurrentCounter = memo(CurrentCounterComp);


function CurrentCounterComp(props){
    // const counter = useRecoilValue(counterAtom);
    
    return(
        <>  
            <div>
                {/* {counter} */}
                {/* <p>1</p> */}
                {props.count}
            </div>
        </>
    )
}


const MemoInc = memo(function (){
    // const setCounter = useSetRecoilState(counterAtom);

    function inc(){
        // setCounter(c=>c+1);
    }

    return (
        <>
        <div>
            <button onClick={inc}>Increase</button>
        </div>
        </>
    )
});


const MemoDec = memo(function (){
    // const setCounter = useSetRecoilState(counterAtom);

    function dec(){
        // setCounter(c=>c-1);
    }

    return (
        <>
        <div>
            <button onClick={dec}>Decrease</button>
        </div>
        </>
    )
});

export default App;