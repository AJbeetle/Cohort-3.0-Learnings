import { MdEditCalendar } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { RiClapperboardLine } from "react-icons/ri";

export const Features = ({

}) => {
    let feature = [
        {icon:<MdEditCalendar className="w-6 h-6"/>, label:"Schedule a Webinar"},
        {icon:<MdAdd  className="w-6 h-6"/>, label:"Join a Webinar"},
        {icon:<RiClapperboardLine  className="w-6 h-6"/>, label:"Open Recordings"},
        {icon:<RiClapperboardLine  className="w-6 h-6"/>, label:"Open Recordings"},
    ]
    return (
        <div className="grid 2xl:grid-cols-2 gap-y-10 sm:grid-cols-4 mobile:grid-cols-2 ">
            {
                feature.map((e,index)=>{

                    return <div className="flex flex-col justify-center items-center w-full">
                                <div key={index} className="bg-green-accent p-4 rounded-lg flex flex-col justify-center items-center hover:cursor-pointer">
                                    {e.icon}
                                </div>
                                <div className="text-[0.7rem] font-medium">{e.label}</div>
                            </div>
                })
            }
        </div>
    )
}