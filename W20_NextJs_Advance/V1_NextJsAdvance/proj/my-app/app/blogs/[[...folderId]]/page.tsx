import axios from "axios"

export default async function posts ({params} : any){
    
    const postId =(await params).folderId;
    console.log(postId);
    // console.log(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    if(postId == undefined)
    {
        return <>You can view more blogs b y visiting blogs/3 , bolgs/4  and so on</>
    }
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = res.data;

    return(
        <div>
            <p>ID : {data.id}</p>
            <p>TITLE : {data.title}</p>
            <p>BODY : {data.body}</p>
        </div>
        // <div>Hello</div>
    )
}