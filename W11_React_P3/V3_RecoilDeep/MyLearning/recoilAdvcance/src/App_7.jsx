import { useState, useEffect, useRef, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import fs from "fs"

import {RecoilRoot, atom, selector, useRecoilValue, useSetRecoilState, useRecoilState} from "recoil"

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
    const [currentTodo, setCurrentTodo] = useRecoilState(todosAtomFamilySelector(id));  
    return (
        <>
            <div>
                {currentTodo.id} - {currentTodo.title} - {currentTodo.body}

            </div>
        </>
    )
}


export default App