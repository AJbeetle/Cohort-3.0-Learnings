import {useRef, useState} from "react"
import {Button} from "../components/button"
export const OTP = ({
    number,
    style
}) => {
    let inpRef = useRef(Array(number).fill(0));
    let [active, setActive] = useState(false);
    let butRef = useRef();
    return(
        <div className="flex flex-col items-center">
            <div className={`flex gap-2 text-white ${style}`}>
                {inpRef.current.map((e,index)=>{
                    inpRef.current[index] = useRef(null);  //here keeping any value inside the useRef does not matter as this reference is going to be set for the input tag of html
                    return (
                        <SubOTPComp key={index} reference={inpRef.current[index]} goNext={()=>{
                            if(index==number-1){
                                setActive(true);
                                // console.log(butRef.curr  ent);
                                // butRef.current.focus();
                                return;
                            }
                            console.log(inpRef);
                            console.log(index);
                            inpRef.current[index+1].current.focus();
                        }} goBack={()=>{
                            if(index==0){
                                setActive(false);
                                return;
                            }
                            setActive(false);
                            inpRef.current[index-1].current.focus();
                            
                        }}></SubOTPComp>
                    )
                })} 
            </div>
            <Button state={active} reference={butRef}>Verify</Button>
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

function SubOTPComp({reference, goNext, goBack}){
    let [value,setValue ]= useState(""); 
    function valueChanged(e){
        if(/^[0-9]$/.test(e.target.value)){
            if(e.target.value.length==1){
                // reference.current=1;
                // console.log(reference.current);
                console.log(e.target.value)  
                setValue(e.target.value);
                goNext();
            }
            else if(e.target.value.length==0){
                goBack();
            }
        }
        
    }

    return (
        <input type="text" ref={reference} className={`bg-blue-faded outline-none border-4 border-blue-lessFaded px-2 py-2 rounded-lg w-10 text-center`} onChange={valueChanged} value={value} onKeyDown={(e)=>{
            if(e.key == "Backspace"){
                setValue("");
                goBack();
            }
        }}>
        </input>
    )
}