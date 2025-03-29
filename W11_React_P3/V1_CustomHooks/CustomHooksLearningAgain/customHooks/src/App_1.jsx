import { useState, useEffect, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import useCounter from "../hooks/useCounter"


// useCounter Hook 
/* function useCounter(){
  const [counter, setCounter] = useState(0);

  function inc(){
    setCounter(counter+1);
  }

  function dec(){
    setCounter(counter-1);
  }

  return {
    counter,
    inc, 
    dec
  }

} */

const counterContext = createContext();

function App() {
  const {counter, inc, dec} = useCounter();

  return(
    <>
    <counterContext.Provider value={{
      counter, inc, dec
    }}>
      <div>
        <CounterComp></CounterComp>
      </div>
      <div>
        <IncreaseComp></IncreaseComp>
        <DecreaseComp></DecreaseComp>
      </div>
    </counterContext.Provider>

    </>
  )

}

function CounterComp(){
  let c = useContext(counterContext);
  return (
    <>
      {c.counter}
    </>
  )
}

function IncreaseComp(){
  let c = useContext(counterContext);
  return(
    <>
      <button onClick={c.inc}>Increase</button>
    </>
  )
}

function DecreaseComp(){
  let c = useContext(counterContext);
  return(
    <>
      <button onClick={c.dec}>Increase</button>
    </>
  )
}

export default App
