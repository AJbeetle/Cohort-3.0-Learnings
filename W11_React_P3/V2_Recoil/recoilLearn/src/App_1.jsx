import { createContext, useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// re-visiting context API

const CountContext = createContext();

function App() {
  const [state, setState] = useState(0);

  // return (
  //   <>
  //   <div>
  //   <CountContext.Provider value={{
  //         setState : setState,
  //         state:state
  //       }}>

  //     {/* <CounterComp></CounterComp> */}
  //     {state}    
  //     <div>
  //     <IncreaseComp></IncreaseComp>
  //     <DecreaseComp></DecreaseComp>
  //     </div>

  //   </CountContext.Provider>
  //   </div>
  //   {/* <div>
  //     <button onClick={()=>setState(state+1)}>Increase</button>
  //     <button onClick={()=>setState(state-1)}>Decrease</button>
  //   </div> */}
        
  //   </>
  // )

  return (
    <>
    <div>
      <CounterComp state={state} setState={setState}></CounterComp>
    </div>
    </>
  )
  
}

function CounterComp({state, setState}){
  const count = useContext(CountContext);
  return (
    <>
    <CountContext.Provider value={{
      state : state,
      setState : setState
    }}>
      <div>
        {/* {count.state} */}
        <CurrrenCountComp></CurrrenCountComp>
      </div>
      <div>
        <IncreaseComp></IncreaseComp>
        <DecreaseComp></DecreaseComp>
      </div>
    </CountContext.Provider>
      </>
  )

}

function CurrrenCountComp(){
  const count = useContext(CountContext);

  return (
    <>
        <div>
          {count.state}
        </div>
    </>
  )

}

function IncreaseComp(){
  let set = useContext(CountContext);

  return (
    <>
        <button onClick = {()=>set.setState(c=>c+1)}> Increase</button>
    </>
  )
}

function DecreaseComp(){
  let set = useContext(CountContext);
  return (
    <>
        <button onClick = {()=>set.setState(c=>c-1)}> Decrease</button>
    </>
  )
}

export default App
