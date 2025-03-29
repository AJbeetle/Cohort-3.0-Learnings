import {useState, useRef} from "react"
import {Button} from "../components/button"
import {Timer} from "./Timer"

export const OTP = ({
    number,style
}) =>{
    let inpRef = useRef(Array(number).fill(0));
    let [active, setActive] = useState(false);
    let [showTimer, setShowTimer] = useState(true);         //new
    let loaderTime = useRef(5000);                          //new
    let [inputActive, setInputActive] = useState(true);     //this is used to diable inputs when timer is exhausted and user OTP is expired
 
    async function toggleTimer(){
        await new Promise((res,rej) => {
            setTimeout(()=>{
                //logic for sending OTP via mail again
                res();
            }, loaderTime.current);
        })
        
        alert("OTP is sent to your emailID");

        console.log("toggleTimer called")
        setShowTimer(false);  // to remount the timer component
        setTimeout(()=> {setShowTimer(true)},100)
    }

    return (
        <div className=" flex flex-col items-center">
            {/* div for containing 'number' no. of input boxes */}
            <div className="flex gap-2 text-white">
                {inpRef.current.map((e,index)=>{
                    inpRef.current[index] = useRef(null);
                    return(
                        <SubOTPComponent key={index} reference={inpRef.current[index]} 
                        goNext={()=>{
                            if(index==number-1){
                                setActive(true);
                                return;
                            }
                            console.log(inpRef);
                            console.log(index);
                            console.log(inpRef.current[index]);
                            inpRef.current[index+1].current.focus();

                        }}
                        goBack={()=>{
                            if(index==0){
                                setActive(false);
                                return;
                            }
                            inpRef.current[index-1].current.focus();
                            setActive(false);
                        }}

                        inputActive={inputActive}

                        ></SubOTPComponent>
                    )
                })}
            </div>
            {/* {console.log(showTimer)} */}
            {showTimer && !active ? <Timer style={"mb-10"} time={5} toggleTimer={toggleTimer} loaderTime={loaderTime.current} setInputActive={setInputActive}/> : <div className="mt-10"></div>}
            <Button state={active}>
                Verify
            </Button>
        </div>
    )

}

function SubOTPComponent({reference, goNext, goBack, inputActive}){
    let [val, setVal] = useState("");
    function valueChanged(e){
        if(/^[0-9]$/.test(e.target.value)){
            if(e.target.value.length==1){
                setVal(e.target.value);
                goNext();
            }
        }
    }
    let bgColor = inputActive ? `bg-blue-faded` : `bg-blue-lessFaded`
    return (
        <input ref={reference} type="text" 
        value={val} className={`py-2 px-2 w-10 h-12 outline-none text-center ${bgColor} rounded-lg border-4 border-blue-lessFaded `} disabled={!inputActive} onChange={valueChanged} onKeyDown={(e)=>{
            if(e.key=="Backspace"){
                setVal("");
                goBack();
            }
        }}></input>
    )   
}