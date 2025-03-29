import { useState, useEffect, useRef, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import fs from "fs"

import {RecoilRoot, atom, selector, useRecoilValue, useSetRecoilState, useRecoilState, useRecoilStateLoadable, useRecoilValueLoadable} from "recoil"

import {todosAtomFamilySelector} from "../store/atoms/atomFamilyWithSelector"

function App() {
    return (
        <>
            <RecoilRoot>
                <ChildApp></ChildApp>
            </RecoilRoot>
        </>
    )
}

function ChildApp(){

    return (
        <>
            <div>
                <Todo id={1}></Todo>
                <Todo id={2}></Todo>
                <Todo id={2}></Todo>
                <Todo id={3}></Todo>
                <Todo id={3}></Todo>
            </div>
        </>
    )
}

function Todo({id}){
    // const currentTodo = useRecoilValue(todosAtomFamilySelector(id));  
    // const [currentTodo, setCurrentTodo] = useRecoilState(todosAtomFamilySelector(id));  

    // LOADABLE HOOKS
    // const [STATS, setCurrentTodo] = useRecoilStateLoadable(todosAtomFamilySelector(id));  
    const STATS = useRecoilValueLoadable(todosAtomFamilySelector(id));

    console.log(STATS.state); //shows 'loading' if stateValue is not resolved and once stateVlaue is resolved it shows 'hasValue'

    if(STATS.state === "loading"){
        return (
            <>
                <div>
                    Loading....
                </div>
            </>
        )
    }
    else if(STATS.state === "hasValue"){
        return (
            <>
                <div>
                    {STATS.contents.id} - {STATS.contents.title} - {STATS.contents.body}
                </div>
            </>
        )
    }
    else if(STATS.state === "hasError"){
        return (
            <div>
                SOMETHING WRONG HAPPENED IN SERVER SIDE . USE ERROR BOUNDARIES
            </div>
        )
    }

    // This is how you should work in production, when some content is loadin let user know that something is being fetched : This is where skeletons are used in applications. See reference image in learn.md


    // return (
    //     <>
    //         <div>
    //             {/* {currentTodo.id} - {currentTodo.title} - {currentTodo.body} */}

    //         </div>
    //     </>
    // )
}


export default App