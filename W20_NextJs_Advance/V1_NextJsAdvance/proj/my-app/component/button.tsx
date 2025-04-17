"use client";
import {useEffect, useState} from "react"

export function Button(){

    const [state, setState] = useState(0);

    function inc(){
        setState(t=>t+1);
    }

    useEffect(function(){
        setState(t=>t+2);
    },[])
    
    return (
        <div>
            <button type="button" onClick={inc} className="bg-gray-200 px-2 py-1 text-black rounded-lg active:scale-95 cursor-pointer">Increase {state}</button>
        </div>
    )
}