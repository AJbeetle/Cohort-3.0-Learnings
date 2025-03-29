//Below is the ugly way of doing it, lets structure our code better and do it different way

/* import { useState, useEffect, useRef } from 'react'

function App() {

  const [lightState, setLightState] = useState(0);
  const buttonState = useRef(false);


  function bulbToggle(){
    if(buttonState.current){
      setLightState(light => light-1);
      buttonState.current = !buttonState.current;
    }
    else{
      setLightState(light => light +1);
      buttonState.current = !buttonState.current;
    }    
  }

  return (
    <div style = {{background:buttonState.current ? "yellow" : "white", padding:10, margin:10}}>
      <h1>Light Bulb Website</h1>

      <button onClick={bulbToggle}>LIGHT TOGGLE</button>
    </div>
  )
}

export default App
 */


import { useState, useEffect, useRef } from 'react'

function App() {

  return(
    <div>
      <LightBulb/>
    </div>
  )
}


function LightBulb(){
  const [bulb, setBulb] = useState(true);

  return (
    <div>
      <BulbState bulb={bulb}></BulbState>
      <ToggleBulbState setBulb={setBulb}></ToggleBulbState>
    </div>
  )
}

function BulbState(props){
  // const [bulb, setBulb] = useState(true);
  return (
    <div>
      {props.bulb ? "Bulb is On" : "Bulb is Off :("}
    </div>
  )
}

function ToggleBulbState(props){

  

  // setBulb variable state needs to be updated here : so better we rollup the state, that is moving it to least common ancestor

  //now moving it there up in ancestor is real trick thing to do

  // somepeople also ask can we pass props up the chain, ideally props are meant to be sent from parent to the child but yues is some weird way we can do it, using callbacks : but you should not because it is an antipattern
  return (
    <div>
      <button onClick={()=>props.setBulb(b => !b)}>Toggle the button</button>
    </div>
  )
}


// All of this doen in this file is called rolling up the state , now when yur project becomes more and more complex you will realise this state variable was supposed to be use somewhere else too, so after keeping this in process you will reach a state when all your states are defined in parent App component

// So ugly react code will have this kind of all state variables in top component, this is rolling up the state : this is what you should not do, but in beginning you will have to do this until you understand state management

// better ways are : maintainig global state like zustand i.e using state management libraries zustand

export default App
