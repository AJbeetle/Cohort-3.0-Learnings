import { useState, useEffect } from 'react'
import usePostHook from "../hooks/usePostHook"
import useFetch from "../hooks/useFetch"
// custom hook : useFetch 

//MY CODE

/* async function useFetch(){
    const [response, setResponse] = useState({});

    async function fetch(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        const data = await response.json();

        setResponse(r => data);
    }
    return {
        response : response,
        fetch : fetch
    }
} */

//HARKIRAT TAUGHT : create new folder where you write all hooks code


function App() {

    // wrote this code inside custom hook : useFetch
    /* const [post, setPosts] = useState({});

    async function getPosts(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const json = await response.json();
        setPosts(json);
    }

    useEffect(()=>{
        getPosts();
    },[]) */

    const {post} = usePostHook();
    // const post2 = useFetch("https://jsonplaceholder.typicode.com/posts/2");
    const data = useFetch("https://jsonplaceholder.typicode.com/posts/6")
    // console.log(data)
    // so these fetch hooks kind of things are what tanstack and react swr kind of libraries provide you [useSWR hook that returns the data from any url]
    // there is still some bug in our useFetch hook let's debug in new file
    

    return (
        <> 
            {post.id} - {post.title}
            <br/>
            {/* {post2.post.id} - {post2.post.title} */}
            {data.id} - {data.title}
            <br/>
            {JSON.stringify(data)}
        </>
    )


    
}


export default App
