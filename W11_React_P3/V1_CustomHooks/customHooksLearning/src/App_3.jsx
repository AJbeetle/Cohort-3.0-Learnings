import { useState, useEffect } from 'react'
import usePostHook from "../hooks/usePostHook"
import useFetch from "../hooks/useFetch"
// seeing this useFetch_refetch functionality in new file
import useFetchRefetch from '../hooks/useFetchWithRefetching'; 

function App() {
    const [currentPost, setCurrentPost] = useState(1);
    const {finalData, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`)
    console.log(finalData)
    console.log(loading)
    
    if(loading){
        return (
            <>
            <div>LOADING....</div>
            </>
        )
    }

    return (
        <> 
        <div style={{border:"1px solid red", margin:10, padding:10, backgroundColor:"pink", textAlign:"center"}}>
            {finalData.id} - {finalData.title}
        </div>
        <div style={{margin:10, padding:10, border: "1px solid black", display:"flex", justifyContent:"space-evenly", backgroundColor:"silver" }}>
            <button onClick={()=>{setCurrentPost(1)}}>View Post 1</button>
            <button onClick={()=>{setCurrentPost(2)}}>View Post 2</button>
            <button onClick={()=>{setCurrentPost(3)}}>View Post 3</button>
        </div>

    {/* Now creating another important hook  : useFetch with refectching -> it is used when the backend is dynamic and it changes for a give url , a real time application , where the post got updated */}
        </>
    )


    
}


export default App
