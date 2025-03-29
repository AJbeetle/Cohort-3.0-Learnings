import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="flex flex-col md:flex-row">
        <div className="bg-green-400 grow">
            Hi there from first Div
        </div>
        <div className="bg-red-500 grow">
            Hi there from second Div
        </div>
        <div className="bg-pink-200 grow">
            Hi there from third Div
        </div>
    </div>
    <br/>
    <div className="grid sm:grid-cols-12">
        <div className="bg-green-400 sm:col-span-5">
            Hi there from first Div
        </div>
        <div className="bg-red-500 sm:col-span-5">
            Hi there from second Div
        </div>
        <div className="bg-pink-200 sm:col-span-2">
            Hi there from third Div
        </div>
    </div>

    <br/>
    <div className="grid grid-cols-12">
        <div className="bg-green-400 col-span-5">
            Hi there from first Div
        </div>
        <div className="bg-red-500 col-span-5 ">
            Hi there from second Div
        </div>
        <div className="bg-pink-200 col-span-2 text-red-500 text-2xl">
            Hi there from third Div
        </div>
    </div>
    <br/>
    <div className="bg-red-300 w-fit px-10 py-10 rounded-full">
        Cicrular div
    </div>
    </>

    // NOW THERE is INCLASS ASSIGNMENT TO BE DONE SIDE BY SIDE -> App_3.jsx : MY Code
    // App_4.jsx : Harkirats Code
  )
}

export default App
