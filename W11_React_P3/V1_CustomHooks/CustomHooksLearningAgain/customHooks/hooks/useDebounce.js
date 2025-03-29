import {useState, useRef, useEffect} from "react"


/// BASIC WALA CODE  -- I WROTE ON FIRST GO
/* function useDebounce(url, delay){

    async function mainBackendSearch(){
        await fetch(url)
    }

    let clock;

    function debounceRequest(){
        clearTimeout(clock);
        clock = setTimeout(mainBackendSearch,delay);
    }

    return debounceRequest
}
 */
// There are some errors :  we never use raw variables in hooks,  and user will not give url, they willl give you function to be debounced 

// MAKING CHANGES ACCORDINGLY   -- MAIN BASIC WALA CODE

/* function useDebounce(func,delay){
    let clock = useRef();

    function debounced(){
        clearTimeout(clock.current);
        clock.current = setTimeout(func,delay);
    }

    return debounced;
} */

//Advanced debounceVal wala code says ki -> hamara koi stateVariable hoga jo change hoga jisse backendSearch instigate hogi, pr hum us stateVariable ka change hona debounce kr denge

function useDebounce(value,delay){
    const[debouncedVal, setDebouncedVal] = useState(value);

    useEffect(function(){
        let clock = setTimeout(function(){
            setDebouncedVal(value);
        },delay)

        return function(){
            clearTimeout(clock);
        }

    },[value,delay]);

    return debouncedVal

}


export default useDebounce;





// JUST FOR  PRACTISE 

/* export default function useDebounceOfficial(state, delay){
    const [debouncedVal, setDebouncedVal] = useState(0);

    useEffect(function(){
        let clock = setTimeout(function(){
            setDebouncedVal(state);
        }, delay)

        return function(){
            clearTimeout(clock);
        }
    },[state, delay])

    return debouncedVal

} */