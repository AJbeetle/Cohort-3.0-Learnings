import {useState, useEffect, useRef} from 'react'

// Most basic implementation might not be the most efficient one but yes does work and the kind of which this does is can be implemented right there in the App.jsx as a normal function we donot need a whole separate hook for that  - let's look at the more practical implementation


/* export default function useDebounce(fun){
    let currentClock = useRef();  // this variable is going to change a lot but I donot want my component to render on the basis of this so, I created it as ref variables


    // my only code :)|  hehhehhehhehe
    // clearTimeout(currentClock.current);
    // let clock = setTimeout(fun,1000)

    const f = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(fun,1000);
    }

    return f

} */



//slides vala deBounce : It says whenever there is a stateVariable that changes

export default function useDebounce(value){
    const [debounceVal, setDebounceVal] = useState(value);

    useEffect(function(){
        const currentClock = setTimeout(function(){
            setDebounceVal(value);
        },1000);

        return ()=>{
            clearTimeout(currentClock);
        }
    },[value])

    return debounceVal
}
