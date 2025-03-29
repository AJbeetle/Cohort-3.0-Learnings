import {useState, useEffect} from 'react'

export default function usePostHook(){
    const [post, setPosts] = useState({});

    async function getNewPosts(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await response.json();
        setPosts(data);
    }
 
    // await getNewPosts();

    useEffect(function(){
        getNewPosts();
    },[])

    return {
        post
    }
}
