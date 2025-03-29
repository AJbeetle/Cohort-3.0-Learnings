import {useState, useEffect, useRef} from "react"

// MY NEW CODE
export default function useFetchRefetch(url, delay){
    const [data, setData] = useState({
        id : "ID of Todo" , title : "TITLE of todo"
    });

    async function getData(){
        const resp = await fetch(url);
        const newData = await resp.json();
        setData(newData);
    }

    useEffect(function(){
        getData();
    },[url])

    useEffect(function(){
        console.log("TIMER STARTED....")
        let timer = setInterval(function(){
            console.log("refetched..")
            getData();
        },delay)

        return function(){
            console.log("TIMER CLOSED");
            clearInterval(timer);
        }
    },[url, delay])

    return data

}

//MY OLD CODE

/* export default function useFetchRefetch(url, delay){
    const [data, setData] = useState({
        id : "ID of Todo" , title : "TITLE of todo"
    });
    const currentURL = useRef(url);

    async function getData(){
        let u = currentURL.current;
        const resp = await fetch(u);
        const newData = await resp.json();
        setData(newData);
    }

    useEffect(function(){
        currentURL.current=url;
        getData();
    },[url])

    useEffect(function(){
        console.log("TIMER STARTED....")
        let timer = setInterval(function(){
            console.log("refetched..")
            getData();
        },delay)

        return function(){
            console.log("TIMER CLOSED");
            clearInterval(timer);
        }
    },[])

    return data

} */


// GPTs production ready useFetchWithRefetch hook

/* import { useState, useEffect } from 'react';

export default function useFetchWithRefetch(url, delay = 10000) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let controller = new AbortController();
    const signal = controller.signal;

    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };

    getData(); // initial fetch

    const interval = setInterval(() => {
      console.log("Refetching...");
      getData(); // repeated fetch
    }, delay);

    return () => {
      // Cleanup
      clearInterval(interval);
      controller.abort(); // abort ongoing fetch if component unmounts or url changes
    };
  }, [url, delay]);

  return { data, loading, error };
} */

/* 
  Great question! Let's break it down in a simple and clear way:

  ✅ signal = controller.signal — Why did we use this?
  
  CODE :-
  let controller = new AbortController();
  const signal = controller.signal;

  Because fetch() supports a special option called signal, which allows you to abort (cancel) the request if needed.

  🔍 What does AbortController do?
  -> AbortController is a built-in browser API.
  -> It helps us cancel a fetch request before it completes (e.g., when a component unmounts or URL changes).
  -> That avoids memory leaks, unwanted state updates, or race conditions.


  This is hwo it works on code :  const response = await fetch(url, { signal });

  This tells the fetch() to listen for abort events.
  If we later do controller.abort(), that fetch will immediately stop and throw an AbortError.


  📦 Real-world example:
     Imagine this scenario:

     User clicks to load Post 1 → fetch started.
     Before it finishes, user quickly clicks to load Post 2 → fetch started again.
     Now both fetches are in progress.
     BUT: We only care about the latest fetch (Post 2) — so we abort() the first one (Post 1).
     This avoids showing old/outdated results from the first fetch



   👇 Without AbortController:
     You might face issues like:

     State being updated from previous fetches, after newer ones are already done (buggy UI).
     Wasting network resources on unnecessary fetches.
     React warning: "Can't perform a React state update on an unmounted component..."
 */