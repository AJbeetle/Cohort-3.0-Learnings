import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Head from "./components/head"
import {Brand} from "./components/Brand"
import {UserInput} from "./components/input"
import {Button} from "./components/button"
import {OTP} from "./components/otp"
import {Timer} from "./components/Timer"

function App() {
  let [screen, setScreen] = useState(0);
  let userMail = useRef();

  return (
    <>
      <div className="bg-blue-dark min-h-fit h-dvh flex flex-col items-center py-[50px]">
        {screen==1 ? <ScreenOne/> : null }
        {screen==2 ? <ScreenTwo user={userMail}/> : null }
        {screen==3 ? <ScreenThree user={userMail}/> : null }

        <div className="flex gap-10 mt-60">
          <button onClick={()=>setScreen(1)} className="w-60 h-8 bg-green-accent active:scale-95 rounded-lg text-black">Screen1</button>
          <button onClick={()=>setScreen(2)} className="w-60 h-8 bg-green-accent active:scale-95 rounded-lg text-black">Screen2</button>
          <button onClick={()=>setScreen(3)} className="w-60 h-8 bg-green-accent active:scale-95 rounded-lg text-black">Screen3</button>

        </div>
      </div>
    </>
  )
}

function ScreenOne(){
  let [butRef, setButRef] = useState(false);
  // let [val, setVal] = useState("");

  function inputChanged(e){
    // console.log(e.target.value)
    if((e.target.value).length>0){
      setButRef(true);
    }
    else{
      setButRef(false);
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <Brand variant={"[13px]"}></Brand>
      <Head>
        Verify Your Age
      </Head>
      <p className="text-gray-write mb-4">Please confirm your birth year. This data will not be recorded.</p>
      <UserInput placeholder={"Your Birth Year"} style={"mb-10"} onChange={inputChanged}/>
      <Button state={butRef}>
        Continue
      </Button>
    </div>
  )
}


function ScreenTwo({user}){
  let [active, setActive] = useState(false);

  function onChangeDo(e){
    if(e.target.value.length>0){
      setActive(true);
      user.current = e.target.value; 
    }
    else{
      setActive(false);
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <Brand/>
      <Head>
        Let's Get Started
      </Head>
      <UserInput placeholder={"Email Id"} onChange={onChangeDo} style={"mb-10"}></UserInput>
      <Button state={active}>Continue</Button>
    </div>
  ) 
}

function ScreenThree({user}){

  return (
    <div className="flex flex-col items-center">
      <Brand></Brand>
      <Head>
        Check Your Email For A Code
      </Head>
      <p className="text-gray-write mb-4">Please enter the verification code sent to your email id {user.current}</p>
      {/* <UserInput style={"mb-10"}/> */}
      <OTP number={6} style={"mb-10"}></OTP>
      {/* <Timer></Timer> */ }  {/* Put this component inside OTP component */}
      <p className="text-gray-write mt-1">Can't find the email? Click <a href="#">here</a> to resend.</p>
    </div>
  )
}
export default App
