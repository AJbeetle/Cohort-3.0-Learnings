import { useState, useEffect, useRef, createContext, useContext } from 'react'

// const BulbContext = React.createContext();

const BulbContext = createContext();

function App() {   
    
  return(
    <div>
      <BulbProvider>
          <LightBulb/>
      </BulbProvider>
    </div>

  )
}


function LightBulb(){
//   const [bulb, setBulb] = useState(true);

  return (
    <div>
      <BulbState></BulbState>
      <ToggleBulbState></ToggleBulbState>
    </div>
  )
}

function BulbState(){
    // const bulbOn = props.bulb;  //instead of doing this we will do following once context is created

    const {bulb} = useContext(BulbContext)
  return (
    <div>
      {bulb ? "Bulb is On" : "Bulb is Off :("}
    </div>
  )
}

function ToggleBulbState(){
  const {setBulb} = useContext(BulbContext);
  return (
    <div>
      <button onClick={()=>setBulb(b => !b)}>Toggle the button</button>
    </div>
  )
}

// created custom Provider
function BulbProvider({children}){
  const [bulb, setBulb] = useState(true);
  return (
    <>
      <BulbContext.Provider value={{
        bulb : bulb,
        setBulb : setBulb
      }}>
        {children}
      </BulbContext.Provider>
    </>
  )
}

// Now do some experiments : this will help you understand why we need state management libraries and why they are better than context APIs  > move to APp_3.jsx
export default App 
