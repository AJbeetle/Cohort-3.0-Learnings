import { useState, useEffect, useRef, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"


import {messageAtom, userNav, allNavSelector} from "../store/atoms/navBar";

import { RecoilRoot, useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';



function App() {
 
  return (
    <div style={{justifySelf:"center", justifyItems:"center"}}>
      <RecoilRoot>
        <NavBarComp></NavBarComp>
        <ButtonUpdater></ButtonUpdater>
      </RecoilRoot>
    
    </div>  
  )
}

function NavBarComp(){

  // NOW THE PROBLEM WITH THIS CODE IS THAT : The all fetch logic and useEffect logic should be inside the atom file only here it clutters the developer experience, so my axios.get should somehow reside in the default of the atom, we should not hardCode the default values to be 0

  const navBarGetting = useRecoilValue(userNav); 
  const setNavBar = useSetRecoilState(userNav);


  async function getDataFromBackend(){
    const response = await axios.get("http://localhost:8000/notifications");
    const data = await response.data;
    // console.log(data);
    setNavBar(data);
  }

  // immediate fetching
  useEffect(function(){
    getDataFromBackend();
  },[])

  useEffect(function(){
    let timer = setInterval(function(){
        getDataFromBackend();
    },10000);

    return function(){
        clearInterval(timer);
    }

  },[])


  const network = navBarGetting.network;
  const job = navBarGetting.job;
  const message = navBarGetting.message;
  const notify = navBarGetting.notification;
  const allNotificn = useRecoilValue(allNavSelector);


  
  return (
    <>
    <div style={{display:"flex", gap:10, marginBottom:20}}>
      <button>Home</button>
      <button>MyNetwork {network>=100 ? "99+" : (network==0 ? "" : network) }</button>
      <button>Jobs  {job>=100 ? "99+" : (job==0 ? "" : job) }</button>
      <button>Messaging {message>=100 ? "99+" : (message==0 ? "" : message) }</button>
      <button>Notification  {notify>=100 ? "99+" : (notify==0 ? "" : notify) }</button>
      <button>My {allNotificn}</button>


      
    </div>
    </>
  )
}

function ButtonUpdater(){
  const updateMessage = useSetRecoilState(messageAtom);
  return (
    <>
    <div>
      <button onClick={()=>updateMessage(c=>c+1)}>updateMessages</button>
    </div>
    </>
  )
}


// NOw actually fetching the data from thebackend part we should do in new App.jsx 
export default App