import {useState} from "react"
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { LuFileUser } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";
import {Brand} from "./brand"

export const NavList = ({
    style
}) => {
    // let [state, setState] = useState(false);
    let menuItems = [
        {name:"Home", item:<AiFillHome />, link:"#"},
        {name:"Webinars", item:<FaUsers/>, link:"#"},
        {name:"Billing", item:<FaCreditCard />, link:"#"},
        {name:"User Management", item:<LuFileUser />, link:"#"},
        {name:"Settings", item:<IoIosSettings />, link:"#"}
    ] 
    return (
        <div className={`${style}`}>
            <Brand style={`lg:mb-4 lg:w-[100%] w-full pl-[1vh] pr-1 lg:pl-0 lg:pr-0`}></Brand>
            {   
                menuItems.map((e,index)=>{
                    return <div className={` flex justify-between items-center cursor-pointer rounded-lg pl-[1vw] pr-1 py-[1vh] text-gray-text hover:text-blue-accent font-medium hover:bg-gray-active mb-[12px]   `}>
                    {/* {console.log(state)} */}
                    <div className="w-[90%] lg:flex hidden text-[16px] xl:text-lg  ">{e.name}</div>
                    <div className=" lg:w-[10%] w-full flex justify-center  ">
                        {/* <img src="/home.png" className="w-6 h-6"></img> */}
                        {/* <a href={`${e.link}`}>{e.item}</a> */}
                        {e.item}
                    </div>
                </div>
                })
            }
            
            {/* border border-solid border-black */}
        </div>
    )
}