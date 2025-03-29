import { useState, useEffect, useRef } from 'react'
import usePostHook from "../hooks/usePostHook"
import useFetch from "../hooks/useFetch"
// seeing this useFetch_refetch functionality in new file
import useFetchRefetch from '../hooks/useFetchWithRefetching'; 

function App() {
    const [currentPost, setCurrentPost] = useState(1);
    // const currentPost = useRef(1);
    // console.log(currentPost);

    // const {finalData, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`);

    let {finalData, loading} = useFetchRefetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`);

    if(loading){
        return (
            <div>Loading...</div>
        )
    }


    return (
        <>
        <DataComponent>
            {finalData.id} - { finalData.title}
        </DataComponent>
        <br/>
        {/* <button onClick={()=>{currentPost.current = 1}}>View Post 1</button>
        <button onClick={()=>{currentPost.current = 2}}>View Post 2</button>
        <button onClick={()=>{currentPost.current = 3}}>View Post 3</button> */}

        <button onClick={()=>setCurrentPost(1)}>View Post 1</button>
        <button onClick={()=>setCurrentPost(2)}>View Post 2</button>
        <button onClick={()=>setCurrentPost(3)}>View Post 3</button>

        </>
    )

    // NOw learning usePrev in new File
}

function DataComponent({children}){

    return(
        <>
            {children}
        </>
    )
}

export default App
