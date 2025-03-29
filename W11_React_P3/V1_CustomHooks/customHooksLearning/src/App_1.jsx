import { useState } from 'react'


// custom hook : useCounter
function useCounter(){
  // create the state variable
  const [count, setCount] = useState(0);

  //define the function : task you need to do in this hook, with that stateVariable
  function inc(){
    setCount(c => c+1);
  }

  //return the stateVariable and the function [the task which will be performed by the client]
  return {
    count : count,
    increaseCount : inc
  }
}


function App() {
  const {count, increaseCount} = useCounter();
  return(
    <>
    <br/>
    <button onClick={increaseCount}>Increase {count}</button>
    {/* by using Counter component four times we create four state variables i.e. four different count state*/}
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
    </>
  )
}

function Counter(){
  const {count, increaseCount} = useCounter();
  return (
    <>
      <div>
        <button onClick={increaseCount}>COUNTER {count}</button>
      </div>
    </>
  )
}

export default App
