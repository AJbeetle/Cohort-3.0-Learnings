import {useRef, useState, useEffect} from 'react'

// There are some bugs in here : even though it looks good but it has some edge cases  : WE WILL SEE AT END
export default function usePrev(value){
    const ref = useRef();
    console.log("re-render happened with new value"+value);

    useEffect(() => {
        console.log("updated the ref to be "+value)
        ref.current = value;
    },[value])

    console.log("returned : "+ref.current)
    let prev = ref.current
    // console.log("returned : "+prev)

    return prev;
 }


//  Now, see what is happening here is bit tricky . So when usePrev hook is called we store the updated value in ref.current but but but we donot return the updated value the prev value is only getting to us HOWWW??

/*
  So, here we need to understand the property of react which is : the react will first return then trigger the effect

  i.e. react will return first effects will be called later


  THIS IS INDEED WRONG but this is what we genrally answer in interviews
 */