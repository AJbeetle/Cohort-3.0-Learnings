import { IoMdVideocam } from "react-icons/io";
import { BiSolidVideo } from "react-icons/bi";

export const Schedule = ({

}) => {
    let arr = [
        {time: "11:30 AM", status:true, heading:"UX Webinar"},
        {time: "11:30 AM", status:false, heading:"My first Webinar"},
        {time: "11:30 AM", status:false, heading:"Important Webinar"},
        {time: "11:30 AM", status:false, heading:"Webinar 1"}
    ]

    return (
        <div className="">
            {
            arr.map((e,index)=>{
                return <div>
                    <div key={index} className=" mb-2 mt-2 flex se:justify-between flex-wrap se:flex-row ss:flex-col ss:gap-[0.5px] se:bg-green-accent ss:bg-transparent" >
                        <div className="bg-white-bg se:w-[18.3%] ss-w-full px-2 "> {/* 18% */}
                            <p className="font-medium">{e.time}</p>
                            <p className="text-sm text-gray-400 font-medium">{e.time}</p>
                        </div>
                        <div className="bg-white-bg se:w-[81.5%] ss-w-full px-2">   {/* 81.5% */}
                            <p className={`text-sm flex items-center gap-2 text-gray-400 font-medium`}>
                                {e.status ? "Live" : "Upcoming"} <BiSolidVideo className={e.status ? `text-red-500` : `text-blue-meet`}/>
                            </p>
                            <p className="font-medium">{e.heading}</p>
                        </div>
                    </div>
                    {index<arr.length-1 ? <hr className="border-1 border-solid border-gray-300"></hr> : null}
                </div>
                
            })
            }

        </div>
    )

}