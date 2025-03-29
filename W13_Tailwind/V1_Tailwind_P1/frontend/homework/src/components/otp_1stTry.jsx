import {useRef, useState} from "react"
import {Button} from "../components/button"
export const OTP = ({
    number,
    style
}) => {
    let inpRef = useRef(Array(number).fill(0));
    let [active, setActive] = useState(false);

    return(
        <div className="flex flex-col items-center">
            <div className={`flex gap-2 text-white ${style}`}>
                {Array(number).fill(0).map((e,index)=>{
                    inpRef.current[index] = useRef(0);
                    return (
                        <SubOTPComp key={index} reference={inpRef.current[index]}></SubOTPComp>
                    )
                })} 
            </div>
            <Button state={active}>Verify</Button>
        </div>
    )

    // return(
    //     <div className="text-white">
    //         {inpRef.current.forEach((element) => {
    //             <input ref={element} type="text" className="bg-blue-faded outline-none border-4 border-blue-lessFaded px-2 py-2 rounded-lg w-10 text-center"></input>
    //         })}
            
    //     </div>
    // )
}

function SubOTPComp({reference}){
    return (
        <input type="text" ref={reference} className={`bg-blue-faded outline-none border-4 border-blue-lessFaded px-2 py-2 rounded-lg w-10 text-center`}>
        </input>
    )
}