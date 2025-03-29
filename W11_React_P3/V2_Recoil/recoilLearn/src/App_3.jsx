import { createContext, useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {RecoilRoot, atom, useSetRecoilState, useRecoilValue} from "recoil"

import counterAtom from "../store/atoms/counter"


function App(){

    return(
        <>

        <CounterComp></CounterComp>

        {/* <RecoilRoot>
            <div>
                    <CounterComp></CounterComp>
                    <ButtonComp></ButtonComp>
            </div>
        </RecoilRoot> */}


        {/* This generate unnecessary re-renders for button component also, the react renders the whole parent tree */}
        {/* <RecoilRoot>
            <div>
                <div>
                    <CounterComp></CounterComp>
                </div>
                <div>
                    <ButtonComp></ButtonComp>
                </div>  
            </div>
        </RecoilRoot> */}
        </>
    )
}

function CounterComp(){
    return (
        <>
        <RecoilRoot>
            <CurrentCounterComp></CurrentCounterComp>
            <IncreaseComp></IncreaseComp>
            <DecreaseComp></DecreaseComp>
        </RecoilRoot>
        </>
    )
}


function CurrentCounterComp(){
    const counter = useRecoilValue(counterAtom);
    
    return(
        <>  
            <div>
                {counter}
            </div>
        </>
    )
}

function ButtonComp(){
    const setCounter = useSetRecoilState(counterAtom);

    return(
        <>  
        <div>
            <button onClick={()=>setCounter(c=>c+1)}>Increase</button>
            <button onClick={()=>setCounter(c=>c-1)}>Decrease</button>
        </div>
        </>
    )
}

function IncreaseComp(){
    const setCounter = useSetRecoilState(counterAtom);

    function inc(){
        setCounter(c=>c+1);
    }

    return (
        <>
        <div>
            <button onClick={inc}>Increase</button>
        </div>
        </>
    )
}
function DecreaseComp(){
    const setCounter = useSetRecoilState(counterAtom);

    function dec(){
        setCounter(c=>c-1);
    }

    return (
        <>
        <div>
            <button onClick={dec}>Decrease</button>
        </div>
        </>
    )
}

export default App;