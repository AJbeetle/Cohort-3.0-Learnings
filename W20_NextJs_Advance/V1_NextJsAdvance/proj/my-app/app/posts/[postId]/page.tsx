import axios from "axios"

export default async function posts({params} : any){
    const postId =(await params).postId;
    // console.log(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = res.data;

    return(
        <div>
            <p>ID : {data.id}</p>
            <p>TITLE : {data.title}</p>
            <p>BODY : {data.body}</p>
        </div>
    )
}