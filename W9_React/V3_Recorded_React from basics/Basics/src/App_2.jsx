import {useState, useEffect} from 'react'
import React from 'react'
import { PostComponent } from './post';


function App(){

    const [posts, setPosts] = useState([
        {
            name:"harkirat",
            subtitle:"1100 followers",
            time:"2m ago",
            image:"/linkdin_profile.jpg",
            description:"What to do aboth thit rtjns sdjkssldj sdjsn sdkjsf sjs feofji sdfjksdfn"
        }
    ])

    // return (
    //     <div style={{backgroundColor:"#dfe6e9",margin:10, padding:10}}>
    //         <ToggleComp></ToggleComp>
    //         <br></br>
    //         <br></br>
    //         <ToggleComp></ToggleComp>

    //         <PostComponent/>
    //     </div>
    // )

    function addPost(){

        /* let newArr = [...posts];
        newArr.push({
            name:"harkirat",
            subtitle:"1100 followers",
            time:"2m ago",
            image:"/linkdin_profile.jpg",
            description:"What to do aboth thit rtjns sdjkssldj sdjsn sdkjsf sjs feofji sdfjksdfn"
        })
        setPosts(newArr); */


        // spread operators
        setPosts([...posts,{
            name:"harkirat",
            subtitle:"1100 followers",
            time:"2m ago",
            image:"/linkdin_profile.jpg",
            description:"What to do aboth thit rtjns sdjkssldj sdjsn sdkjsf sjs feofji sdfjksdfn"
        }])

    }

    const compArray = posts.map((post) =>
        <PostComponent
        name={post.name}
        subtitle={post.subtitle}
        time={post.time}
        image={post.image}
        description={post.description}
        />
    )

    console.log(compArray)

    return (
        <div style={{background:'#dfe6e9', minHeight:"100vh",height:"auto ", padding:10}}>
            <button onClick={addPost}>Add Post</button>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div>
                    {compArray}
                </div>
            </div>
        </div>
    )


}

// move to another app.jsx

function ToggleComp(){
    let [view,setView] = useState(false); // this is state variable

    // when the value of state variable changes
    // the component that uses the state variable re-renders

    return (
        <div>
            <button onClick={function(){setView(view => !view)}}>Toggle View</button>
            {view ? <p>This is conditional rendering</p> : null}
        </div>
    )

    // React is a framwework used to buil dynamic websites
}

export default App