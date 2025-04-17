import axios from "axios"

export default async function posts ({params} : any){
    // now docId will be array if you give multiple routes after it [like http://localhost:3000/docs/1/3/4/5] => this will give error because now, postId = [1,3,4,5]

    // if you do http://localhost:3000/docs/1 => then it won't be issue with code below
    
    const postId =(await params).docId;
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