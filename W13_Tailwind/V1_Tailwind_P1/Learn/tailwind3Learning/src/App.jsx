import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);

  return (
    <>
     {/* SCREEN #1 */}
     <div className="bg-blue-950 py-10 h-screen flex flex-col items-center w-full">
        {s1 ? <ScreenOne/> : null }
        {s2 ? <ScreenTwo/> : null }
        {s3 ? <ScreenThree/> : null }
        <div className="text-white">
            <button className="bg-slate-400 w-20 h-8 mx-4 mt-10 rounded-lg font-bold hover:bg-teal-400 active:scale-95 active:text-black" 
            onClick={()=>{
                setS1(true)
                setS2(false)
                setS3(false)
            }}>
                    Screen1</button>
            <button className="bg-slate-400 w-20 h-8 mx-4 mt-10 rounded-lg font-bold hover:bg-teal-400 active:scale-95" 
            onClick={()=>{
                setS2(true)
                setS1(false)
                setS3(false)
            }}>
                Screen2</button>
            <button className="bg-slate-400 w-20 h-8 mx-4 mt-10 rounded-lg font-bold hover:bg-teal-400 active:scale-95" 
            onClick={()=>{
                setS3(true)
                setS1(false)
                setS2(false)
            }}>
                Screen3</button>
        </div>
     </div>
    </>
    
  )
}

function ScreenOne(){
    let [active, setActive] = useState(false);

    function focusLeft(e){
        if(e.target.value){
            setActive(true);
        }
        else{
            setActive(false);
        }
    }
    return(
    <>
    <div className="w-dvh text-white ">
        <div className="flex justify-center items-center">
            <img src="/vite.svg"></img>
            <span className="text-green-600">Webinar</span>
            <span>.gg</span>
        </div>

        <div className="flex flex-col items-center mx-auto my-20">
            <h1 className="text-3xl font-medium">
                Verify Your Age
            </h1>
            <span className="text-sm text-zinc-400 mt-20 font-medium">Please confirm your birth year. This data will not be stored.</span>
            <input type="text" placeholder="Your Birth Year" className=" px-4 mt-4 h-10 w-80 rounded-lg bg-[#27376a] border-2 border-[#495d93] border-solid" onBlur={(e)=>focusLeft(e)}/>
            {active ? <button className="text-black w-80 h-10 mt-8 rounded-lg font-bold bg-teal-400 hover:bg-teal-500 active:scale-95"> Continue </button> : <button className="bg-slate-400 w-80 h-10 mt-8 rounded-lg font-bold " disabled> Continue </button>}
            
        </div>
    </div>
    </>
    )
}

function ScreenTwo(){
    const [active, setActive] = useState(false);

    function focusLeft(e){
        if(e.target.value){
            setActive(true);
        }
        else{
            setActive(false);
        }
    }
    return (
        <>
        <div className="w-dvh text-white ">
        <div className="flex justify-center items-center">
            <img src="/vite.svg"></img>
            <span className="text-green-600">Webinar</span>
            <span>.gg</span>
        </div>

        <div className="flex flex-col items-center mx-auto my-20">
            <h1 className="text-3xl font-medium">
                Lets Get Started
            </h1>
            <input type="text" placeholder="Email Id" className="px-4 mt-20 h-10 w-80 rounded-lg bg-[#27376a] border-2 border-[#495d93] border-solid" onBlur={(e)=>focusLeft(e)}/>
            {active ? <button className="text-black bg-teal-400 w-80 h-10 mt-8 rounded-lg font-bold hover:bg-teal-500 active:scale-95" > Continue </button> : <button className="bg-slate-400 w-80 h-10 mt-8 rounded-lg font-bold" disabled> Continue </button>}
            
        </div>
        </div>
        </>
    )
}

// NOW doing a proper structured frontend code in new folder out of Learn folder => frontend => react app called homwework

function ScreenThree(){
    // const [val, setVal] = useState([0,0,0,0,0,0]);
    const val = useRef([0,0,0,0,0,0]);
    console.log(val);
    const [render, setRender] = useState(false);

    // useEffect(function(){
    //     setRender(r => !r);
    // },[val.current])

    function focusLeft(e,index){
        let len = e.target.value ? 1 : -1
        if(val.current[index]==1 && len==-1){
            val.current[index]=0
        }
        // nothing to do when val[index]==1 and len==1
        else if(val.current[index]==0 && len==1){
            val.current[index] =1;
        }
        // nothing to do when val[index]==0 and len==-1
        setRender(r=>!r)
    }

    return (
        <>
        <div className="w-dvh text-white ">
        <div className="flex justify-center items-center">
            <img src="/vite.svg"></img>
            <span className="text-green-600">Webinar</span>
            <span>.gg</span>
        </div>

        <div className="flex flex-col items-center mx-auto my-20">
            <h1 className="text-3xl font-medium">
                Check Your Email For a Code
            </h1>
            <div className="flex gap-2 ">
                <input type="text" min="0" max="9" pattern="[0-9]*" inputMode="numeric" onWheel={(e)=>e.target.blur()} className=" text-center mt-20 p-2 h-12 w-10 rounded-lg bg-[#27376a] border-2 border-[#495d93] border-solid" onBlur={(e)=> focusLeft(e,0)}/>
                <input type="text" min="0" max="9" pattern="[0-9]*" inputMode="numeric" onWheel={(e)=>e.target.blur()} className=" text-center mt-20 p-2 h-12 w-10 rounded-lg bg-[#27376a] border-2 border-[#495d93] border-solid" onBlur={(e)=> focusLeft(e,1)}/>
                <input type="text" min="0" max="9" pattern="[0-9]*" inputMode="numeric" onWheel={(e)=>e.target.blur()} className=" text-center mt-20 p-2 h-12 w-10 rounded-lg bg-[#27376a] border-2 border-[#495d93] border-solid" onBlur={(e)=> focusLeft(e,2)}/>
                <input type="text" min="0" max="9" pattern="[0-9]*" inputMode="numeric" onWheel={(e)=>e.target.blur()} className=" text-center mt-20 p-2 h-12 w-10 rounded-lg bg-[#27376a] border-2 border-[#495d93] border-solid" onBlur={(e)=> focusLeft(e,3)}/>
                <input type="text" min="0" max="9" pattern="[0-9]*" inputMode="numeric" onWheel={(e)=>e.target.blur()} className=" text-center mt-20 p-2 h-12 w-10 rounded-lg bg-[#27376a] border-2 border-[#495d93] border-solid" onBlur={(e)=> focusLeft(e,4)}/>
                <input type="text" min="0" max="9" pattern="[0-9]*" inputMode="numeric" onWheel={(e)=>e.target.blur()} className=" text-center mt-20 p-2 h-12 w-10 rounded-lg bg-[#27376a] border-2 border-[#495d93] border-solid" onBlur={(e)=> focusLeft(e,5)}/>
            </div>
            {/* {console.log()} */}
            {val.current.filter(e=> e==1).length==6 ? <button className=" text-black bg-teal-400 w-80 h-10 mt-8 rounded-lg font-bold hover:bg-teal-500 active:scale-95"> Continue </button> : <button className="w-80 h-10 mt-8 rounded-lg font-bold bg-slate-400" disabled> Continue </button>}
            
        </div>
        </div>
        </>
    )
}

export default App
