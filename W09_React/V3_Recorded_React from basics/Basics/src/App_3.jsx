import {useState, useEffect} from 'react'
import React from 'react'
import { PostComponent } from './post';


function App(){
    let [notification, setNotif] = useState(0);

    return (
        <div style={{margin:10, padding:20, background:"#dfe6e9"}}>
            <div>
                <NotificationComp count={notification} setCount={setNotif}/>
            </div>
            
        </div>
    )

}

function NotificationComp(props){
    let [notify, setNotify] = useState(null);

    useEffect(function(){
        console.log("interval started")
        let interval = setInterval(function(){
            props.setCount( count => count+1);
        },5000)

        setNotify(interval);

        return function(){  
            clearInterval(interval);
            console.log("interval cleared on unmount")
        }
    },[])

    return (
        <div>
        <div style={{position:"relative", width:"fit-content"}}>
            <div style={{position:"absolute",right:"-19%",top:"-13%",display:"inline-block",border:"1px solid red", background:"red", color:"white", width:13, height:13, fontSize:"1.5vw", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:10,fontSize:"2vh"}}>
                <div>{props.count}</div>
            </div>
            <div style={{display:"inline-block"}}>
                <img src="https://static-00.iconduck.com/assets.00/bell-icon-1755x2048-nqy5lpwy.png" style={{width:20, height:20}}></img>
            </div>
        </div>
        <button onClick={function(){
                clearInterval(notify);
                setNotify(null);
                console.log("cleared Interval")
            }}>stop notifications counter</button>

        </div>
    )

}

// lets try and create something like linkedin where everytime you change a tab a sideeffect is called i.e. backend is hit by some request to fetch the page data  -  move to App.jsx
export default App