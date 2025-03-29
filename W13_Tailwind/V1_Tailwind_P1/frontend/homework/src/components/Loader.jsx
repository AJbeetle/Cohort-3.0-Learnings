import {useState, useEffect, useRef} from "react"
export const Loader = ({
    style,loaderTime
}) => {
    // let [load, setLoad] = useState(0);
    // let divRef = useRef();
    let [width, setWidth] = useState("w-[0%]");
    let index = useRef(0);

    useEffect(function(){
        // let arr = [10,30,60,90,100];  // the amount of elements in this array are fully related to the loaderTimer if it is 5secs then 5 elements here. Update later for it to be dynamic
        let arr = [10,30,60,100];  // the amount of elements in this array are fully related to the loaderTimer if it is 5secs then 5 elements here. Update later for it to be dynamic

        // async function run(element){
        //     return await new Promise((res,rej)=>{
        //         setTimeout(()=>{
        //             console.log(element);
        //             setLoad(element);
        //             index++;
        //             setWidth(`w-[${load}%]`);
        //             res();
        //         },1000);
        //     })
        // }
        
        async function run(element){
            await new Promise((res)=>{
                setTimeout(res,1000);
            })

            console.log(element);
            index.current = index.current+1;
            setWidth(`w-[${element}%]`);
        }
        
        async function processArray(){
            // for(const e of arr){
            //     await run(e);
            // }
            await run(arr[index.current]);
            return;
        }
        
        processArray();
        // index++;  // to be done where your load state element changes

        /* for(const e of arr){
            // setTimeout(function(){
            //     console.log(e);
            //     setLoad(e);
            //     setWidth(`w-[${load}%]`);
            // },1000)
        } */
        

        // return function(){
        //     console.log(divRef.current);
        //     // divRef.current.parentNode.removeChild(divRef.current);
        // }

    },[width, loaderTime]);

    return (    
        <div className={`border border-dashed border-green-accent w-full ${style} rounded-lg`}>
            {/* {load && <div ref={divRef} className={`${width} h-6 border border-solid border-red-100 bg-green-accent`}> </div>} */}
            {/* <div className={`${width} h-2 border border-solid border-red-100 bg-green-accent rounded-xl`}> </div> */}
            <div className={`${width} h-2 bg-green-accent rounded-xl`}> </div>
        </div>
    )
}


{/* <div className={`${width} border border-solid border-red-100 bg-green-accent`}> SENDING !!! </div> */}