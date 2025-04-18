//default code

/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */


//My code
import React from 'react'
import {useState} from 'react'
import.meta.hot

function App(){

  return (
    <div>
      <b>
        Basic Counter React App
      </b>
      <CounterComp></CounterComp>

    </div>
  )
}
function CounterComp(){

  const [count, setCount] = useState(0);

  function inc(){
    setCount(count+1);
  }

  function dec(){
    setCount(count-1);
  }

  function reset(){
    setCount(0);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={inc}>Increase Count</button>
    <button onClick={dec}>Decrease Count</button>
    <button onClick={reset}>Reset Count</button>
  </div>
}

export default App