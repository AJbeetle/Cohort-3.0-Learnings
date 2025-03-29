import { useState, useEffect, useRef, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import {jobAtom, notificationAtom, messageAtom, networkAtom, allNotificationSelector} from "../store/atoms/navBar";

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
  const network = useRecoilValue(networkAtom);
  const job = useRecoilValue(jobAtom);
  const message = useRecoilValue(messageAtom);
  const notification = useRecoilValue(notificationAtom);
  /* const allNotificn = useMemo(()=>{
    return network+job+message+notification;
  },[notification, job, message, network]); */
  const allNotificn = useRecoilValue(allNotificationSelector)
  

  // const[mesgAtom, setMesgAtom] = useRecoilState();

  return (
    <>
    <div style={{display:"flex", gap:10, marginBottom:20}}>
      <button>Home</button>
      <button>MyNetwork {network>=100 ? "99+" : (network==0 ? "" : network) }</button>
      <button>Jobs  {job>=100 ? "99+" : (job==0 ? "" : job) }</button>
      <button>Messaging {message>=100 ? "99+" : (message==0 ? "" : message) }</button>
      <button>Notification  {notification>=100 ? "99+" : (notification==0 ? "" : notification) }</button>
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