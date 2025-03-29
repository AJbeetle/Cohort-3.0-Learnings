import { useState, useEffect, useRef, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import fs from "fs"

import {RecoilRoot, atom, selector, useRecoilValue, useSetRecoilState, useRecoilState} from "recoil"


// CREATING TODO ATOM
//_1__Initial Stage

const todoAtom = atom({
    key : "todoAtom",
    default : {
        id :1,
        title : "go to gym",
        description : "Hit the gym from 7-9"
    }
})

/* const todoAtom = atom({
    key : "TodosAtom",
    default : selector({
        key : "todoAtomSelector",
        get : async function({get}){
            fs.readFile("./todo.js","utf-8",(err, data)=>{
                if(err){
                    const errMessage = "error reading this file"
                    return errMessage
                }
                return data;
            })
        }
    })
}) */


function App() {
    return (
        <>
            <RecoilRoot>
                <Todo id={1}></Todo>
                <Todo id={2}></Todo>
                <Todo id={3}></Todo>
            </RecoilRoot>
        </>
    )
}

function Todo({id}){
    // Forget this line of code for now
    // const [todo, setTodo] = useRecoilState(todoAtomFamily(id));

    //now the problem is the todo in return statement down there needs to come from somewhere right, for now since we have no backend lets assume it comes from the todo.js file.

    //So, it should get the todo with specific ID from there and then render in itself 

    // The only problem here is that this todo needs to be fetched via an atom.
    
    //So, how would you dynamically create an atom that is the problem

    // so at top of file lets create an atom

    const currentTodo = useRecoilValue(todoAtom);  // here the problem is you created only one atom for all the Todo components put on the main app, so all todos with whatever Id they have contain same value

    // So both the Todo components get same atom, we have not dynamically created two different atoms for these two components

    // so basically you have to pull that atom code inside this component and make different atom for each component mounted on main app

    // So we need to dynamically create more and mroe atoms

    // you can argue that I will create a single atom which stores complete list of todos an array there => So, yes you could do that => There are downsides of doing that => but right now you have a restriction to create a dynamic atom for every todo you add to main component

    // So for All TodoComponent mounted on App each todo with some id should have different atom, and f=if any two todos have same id then they should hit same atom

    // So this problem is solved by atomFamily

    // So this basically means that now rather than subscribing to the atom you are subscribing to the atom family

    // This means whenever you there are multiple atoms i.e. you have to create one atom per item, you creaet an atom Family calling it todoAtom family 

    // The todoAtom Family would be like whoever is calling me tell me what todo ID you need values for, I will give a new atom for that todo ID.

    // again : AtomFamily says if a componnt wants an atom specific to a input from me, it will give me the input I will return it back that specific atom and this is how we can dynamically create more and more atom

    

    // writing main code in : App_5.jsx
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
}


export default App