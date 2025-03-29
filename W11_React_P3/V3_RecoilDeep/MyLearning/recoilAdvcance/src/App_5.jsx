import { useState, useEffect, useRef, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import fs from "fs"

import {RecoilRoot, atom, selector, useRecoilValue, useSetRecoilState, useRecoilState} from "recoil"

import {todosAtomFamily} from "../store/atoms/atomFamily"

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

    const setAtom = useSetRecoilState(todosAtomFamily(2));

    useEffect(function(){
        setTimeout(function(){
            setAtom({
                id : 2,
                title : "This is updated new todo for ID 2",
                description : "Lalalalal"
            })
        },5000);
    },[])


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
    const currentTodo = useRecoilValue(todosAtomFamily(id));  // here the todosAtomFamily is taken from recoil and to this family you give some input

    //These inputs will uniquely gives you the atom

    // go to store/atoms/atomFamily.js
    return (
        <>
            {/* <div>
                {todo.title} - {todo.description}
            </div> */}
            <div>
                {currentTodo.id} - {currentTodo.title} - {currentTodo.description}

            </div>
        </>
    )

    // This all works very finely very beautifully but what will we do if this todos data is being fetched from the backend. So how to fetch it and render it here to be Discussed in SELECTOR FAMILY => App_6.jsx
}


export default App