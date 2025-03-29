import { createContext, useState, useContext,memo , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {RecoilRoot, atom, useSetRecoilState, useRecoilValue} from "recoil"

import {counterAtom, evenSelector} from "../store/atoms/counter"


function App(){
    
    return(
        <>
        <RecoilRoot>
            <Counter></Counter>
            <IsEven></IsEven>
            <ButtonComp></ButtonComp>
        </RecoilRoot>
        </>
    )
}

function Counter(){
    const count = useRecoilValue(counterAtom);

    return (
        <>
        <div>
            {count}
        </div>
        </>
    )
}


// this component is subscribed to selector
function IsEven(){
    const even = useRecoilValue(evenSelector);

    return (
        <>
        <div>
            isEven : {even ? "TRUE" : "FALSE"}
        </div>
        </>
    )
}


function ButtonComp(){

    const setCount = useSetRecoilState(counterAtom);

    function inc(){
        setCount(c=>c+2);
    }

    function dec(){
        setCount(c=>c-1);
    }
    return (
        <div>
            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
        </div>
    )
}

export default App;