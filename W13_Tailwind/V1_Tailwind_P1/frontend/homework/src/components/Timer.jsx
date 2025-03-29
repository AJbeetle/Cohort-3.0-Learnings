import {useState, useEffect} from "react"
import {Button} from "./button"
import {Loader} from "./Loader"
export const Timer = ({
    style, 
    time,
    toggleTimer,
    loaderTime,
    setInputActive
}) => {
    let [counter, setCounter] = useState(time);
    let [loader, setLoader] = useState(false);

    // function updateCounter(){
    //     setCounter(c=>{
    //         if (c<=1) {
    //             clearInterval(timer)
    //         }
    //     });
    // }
    
    useEffect(function(){
        setCounter(time);
        console.log("timer started")

        let timer = setInterval(function(){
            // updateCounter();
            setCounter(c=>{
                if(c<=1){
                    clearInterval(timer);
                    return 0;
                }
                else{
                    return c-1;
                }
            })
        },1000)

        return function(){
            clearInterval(timer);
        }

    },[time])   


    return (
        <div className={`text-gray-write ${style} flex flex-col items-center`}> 
            {counter>0 ? `00:${ counter.toString().split("").length >=2 ? counter : `0${counter}`}` : <p>OTP EXPIRED !!</p> }
            {loader && <Loader style={"mt-4"} loaderTime={loaderTime}></Loader>}
            {counter<=0 ? setInputActive(false) : setInputActive(true)}
            {counter<=0 ? <Button type="submit" state={true} style={"mt-10"} onClick={()=>{
                setLoader(true);
                toggleTimer();
            }}>Generate OTP</Button> : null}
            {/* {console.log(reference.current)} */}
        </div>
    )
}