import {useState} from 'react'

export default function useCounter(){
    const [counter, setCounter] = useState(0);

    function inc(){
      setCounter(counter+1);
    }
  
    function dec(){
      setCounter(counter-1);
    }
  
    return {
      counter,
      inc, 
      dec
    }
}