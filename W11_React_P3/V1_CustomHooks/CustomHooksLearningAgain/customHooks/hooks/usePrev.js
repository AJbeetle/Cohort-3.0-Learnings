import {useState, useEffect, useRef} from "react"


// My understood implementation 
/* 
export default function usePrev(value){
    let val = useRef();
    let CurrVal = val.current;

    useEffect(function(){
        val.current = value;
    },[value])

    return CurrVal;
} */




// previous value : 0 pe aane k baad aage ni badhta kyuki hook sirf on mount pe hi chlta h    
/* export default function usePrev(value){
    let val = useRef();
    let CurrVal = val.current;

    useEffect(function(){
        val.current = value;
    },[])

    return CurrVal;
}
 */


// Its working same as what I understood :

/* export default function usePrev(value){
    let val = useRef();

    useEffect(function(){
        val.current = value;
    },[value])

    return val.current;
} */



// when I do this : the VS code shows this is useEffect callback    and it works same as my understood implementation : BUT WHY?

/* export default function usePrev(value){
    let val = useRef();

    useEffect(function(){
        val.current = value;
    })

    return val.current;
}     */




// Bettter version of usePrev Hook :-  [with no glitches]

export default function usePrev(value, initial){
    const ref = useRef({prevVal:initial, currVal:value});

    if(ref.current.currVal !== value){
        ref.current.prevVal = ref.current.currVal;
        ref.current.currVal = value;
    }
    return ref.current.prevVal;
}








































// ONLY FOR PRACTISE

/* export default function usePrev(value, initial){
    const ref =  useRef({currVal:value, prevValue:initial});

    if(ref.current.currVal !== value){
        ref.current.prevValue = ref.current.currVal;
        ref.current.currVal = value;
    }
    return ref.current.prevValue;
} */