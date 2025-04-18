import {useState, useEffect} from 'react'
import React from 'react'
import { PostComponent } from './post';
import "./App.css"

function App(){

    const [currTab, setCurrTab] = useState("feed");
    const [tabData, setTabData] = useState({});
    const [loader, setLoader] = useState(true);

    // there should be some loader over here, you will notice that when you click the button it turns immediately red but the content loads after some milisecs so, implement a loader for that

    useEffect(function(){
        //sending backend request to get data for this tab : currTab

        // now we will do lazy loading : i.e. only load the data from the backend when user requests it , donot preload everything

        switch (currTab){
            case "notifications" : 
            setLoader(true);
            fetch("https://jsonplaceholder.typicode.com/todos/2").then(async (res)=>{
                const json = await res.json();
                setTabData(json);
                setLoader(false);
            })
            break;

            case "messages" :
            setLoader(true);
            fetch("https://jsonplaceholder.typicode.com/todos/3").then(async (res)=>{
                const json = await res.json();
                setTabData(json);
                setLoader(false);

            })

            break;

            case "jobs" : 
            setLoader(true);
            fetch("https://jsonplaceholder.typicode.com/todos/4").then(async (res)=>{
                const json = await res.json();
                setTabData(json);
                setLoader(false);

            })

            break;

            default :
            setLoader(true);
            fetch("https://jsonplaceholder.typicode.com/todos/1").then(async (res)=>{
                const json = await res.json();
                setTabData(json);
                setLoader(false);

            })

            break;
        }

        console.log(`sendinf backend request to get data for this tab ${currTab}`);
    },[currTab])


    return (
        <div>
        <div style={{margin:10, padding:10, display:"flex", gap:30, justifyContent:"center"}}>   
            <div>
                <button style={{padding:5, color:currTab=="feed" ? "red" : "black"}} 
                onClick={function(){
                    setCurrTab("feed")
                }}> FEED / todo1</button>
            </div>
            <div>
                <button style={{padding:5, color:currTab=="notifications" ? "red" : "black"}}onClick={function(){
                    setCurrTab("notifications")
                }}> NOTIFICATIONS / todo2</button>
            </div>
            <div>
                <button style={{padding:5, color:currTab=="messages" ? "red" : "black"}}onClick={function(){
                    setCurrTab("messages")
                }}> MESSAGES / todo3</button>
            </div>
            <div>
                <button style={{padding:5,color:currTab=="jobs" ? "red" : "black"}} onClick={function(){
                    setCurrTab("jobs")
                }}> JOBS / todo4</button>
            </div>
        </div>

        {loader ? (<div style={{position:"relative", height:"auto",minHeight:"50vh"}}>
                       <img src="/loading.png" class="spinner"></img>
                   </div>) 
                   
                   : 

                  ( <div style={{margin:10, padding:10, display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div style={{width:"fit-content"}}>{tabData.id} : {tabData.title}</div>
                    </div>
                  )
        }
        </div>
    )
}

// we learnt dependency array here let's move to next app.jsx

export default App