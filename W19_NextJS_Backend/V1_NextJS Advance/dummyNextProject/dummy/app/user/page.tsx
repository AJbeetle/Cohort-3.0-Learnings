// So, making your client component to Server side component :-

// make your component async


import {useState, useEffect} from "react"
import axios from "axios"

export default async function Home() {
    // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
    const response = await axios.get("http://localhost:3000/api/v1/user/details");
    const data = response.data;

    await new Promise((Res)=>setTimeout(Res,5000));

    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            {data.name}
            <br/>
            {data.email}
        </div>
    );
}
