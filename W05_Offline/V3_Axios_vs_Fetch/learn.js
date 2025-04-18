const axios = require("axios");
/* 
function main(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(async response =>{
        // console.log(response);
        const json = await response.json();
        console.log(json);
        console.log(json.length);
    })
}
 */
async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    console.log(json); 
}

//POST request in fetch 

//post endpoint : https://www.postb.in/api/bin

async function mainPOST(){
    const response = await fetch("https://www.postb.in/api/bin",{
        method : "POST",
        body : {
            usernam : "harkirat",
            pass : "123"
        },
        headers : {
            "Authorization" : "Bearer 123"
        }
    });
    const json = await response.json();
    console.log(json); 
}

// main();
// mainPOST();


async function main2(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(res.data);
}

//POST request in axios

// using http dump here : go to website : 
async function mainPOST2(){

    // while sending get request you cannot send body therefore second parameter needs to be request configs out of which on of them is headers 
    /* const res = await axios.get(" https://httpdump.app/dumps/f7b5d03f-6652-4253-803b-4ea8da5dde68?a=b",
    {
        
        headers : {
            "Authorization" : "aj 123"
        }
    }); */
    /* const res = await axios.post(" https://httpdump.app/dumps/f7b5d03f-6652-4253-803b-4ea8da5dde68",{
        username : "aayushi",
        password : "123"
    },
    {
        
        headers : {
            "Authorization" : "aj 123"
        }
    }); */

    // you can also do : 

    const res = await axios(/*"https://httpdump.app/dumps/f7b5d03f-6652-4253-803b-4ea8da5dde68?a=b",*/
        {
            url : "https://httpdump.app/dumps/f7b5d03f-6652-4253-803b-4ea8da5dde68?a=b",
            method : "POST",
            headers : {
                "Authorization" : "bearer 123"
            },
            data : {
                username : "aauyshi",
                pass : "123"
            }
        }
    )
    console.log(res.data);
}
// main2();
mainPOST2();


// https://jsonplaceholder.typicode.com/todos