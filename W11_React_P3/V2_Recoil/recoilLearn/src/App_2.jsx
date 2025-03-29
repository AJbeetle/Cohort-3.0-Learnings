import { createContext, useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import React from "react";

import {RecoilRoot,atom, useRecoilValue, useSetRecoilState} from "recoil"


// define atom outside component tree, or you can store it in new file - CREATE a folder called store [ here is where you store all your state management things]

// Then inside store folder create a folder named atoms
// and there create a file counter.js for counter atom
/* const count = atom({
    key : "counter",       //unique ID (wrt other atoms/select)
    default : 0    //default value (initial value)
}) */

import counterAtom from "../store/atoms/counter"

// let counterAtom = count;


function App() {
    return (
        <RecoilRoot>
            <CounterComp></CounterComp>
        </RecoilRoot>
    )
}

function CounterComp(){
    return (
        <>
            <CurrrentCountComp></CurrrentCountComp>
            <IncreaseComp></IncreaseComp>
            <DecreaseComp></DecreaseComp>
        </>
    )
}

function CurrrentCountComp(){
    let value = useRecoilValue(counterAtom);
    console.log("rendered the value : "+value)
    return(
        <div>
            {value}
        </div>
    )
}

function IncreaseComp(){
    let setCount = useSetRecoilState(counterAtom);

    return(
        <button onClick={()=>setCount(t=>t+1)}>Increase</button>
    )
}

function DecreaseComp(){
    const setCount = useSetRecoilState(counterAtom);
    return (
        <button onClick={()=>setCount(t=>t-1)}>Decrease</button>
    )
}

export default App
