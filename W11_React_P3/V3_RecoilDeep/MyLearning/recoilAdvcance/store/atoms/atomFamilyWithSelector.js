import {atom, selector, atomFamily, selectorFamily} from "recoil"

import axios from "axios"

const todosAtomFamilySelector = atomFamily({
    key : "todosAtomFamilySelector",
    default : selectorFamily({
        key : "atomFamilyHavingSelectorFamily",
        get : (id) => async ({get}) => {
            throw new Error("manual error");
            await new Promise((r)=>setTimeout(r,5000));  //hanging the backend call for 5 secs
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`); 
            const data = await resp.data;
            return data; 
        }
        /* get : (id) => async ({get}) => {
            await new Promise((r)=>setTimeout(r,5000));  //hanging the backend call for 5 secs
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`); 
            const data = await resp.data;
            return data; 
        } */
       /* get : function(id){
            return async function({get}){
                const url = "https://jsonplaceholder.typicode.com/posts/"+id;
                const resp = await axios.get(url);
                const data = await resp.data;
                return data;
            }
       } */
    })
})

export {todosAtomFamilySelector}



// SelectorFamily  : Returns a function that returns a read-only REcoilValueReadOnly or writeable RecoilState selector

// see image tagged to this name in learn.md