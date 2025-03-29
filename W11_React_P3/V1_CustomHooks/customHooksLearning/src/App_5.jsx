import { useState, useEffect, useRef } from 'react'
import usePrev from "../hooks/usePrev"

function App() {
    const [state, setState] = useState(0);
    const prev = usePrev(state);


    return (
        <> 
            <p>{state}</p>
            <button onClick={()=>{
                setState(curr => curr +1)
            }}>Increase</button>
    
            <p>Prev Value : {prev}</p>
        </>
    )


}


export default App
