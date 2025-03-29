import {Brand} from "./brand"
import {NavList} from "./navList"
import {Card} from "./card"
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";   
import { MdWavingHand } from "react-icons/md";
import {Schedule} from "./schedule"
import {Features} from "./features"

export const Dashboard = ({

}) => {
    return(
        <div className="w-full h-full flex bg-white-bg flex-col">
            <div className="bg-black w-full h-[160px] text-white-bg overflow-y-hidden">
                <img src="./bg.jpg" className="w-full "></img>
            </div>
            <div className="bg-white-bg w-full h-lvh min-h-full flex relative">

                <div className="fixed top-0 h-full bg-[#FFFFFF] text-black lg:w-[25%] mid:w-[10%] w-[20%] border-r-[3px] bord-solid border-gray z-10">
                     <div className="lg:px-6 lg:py-6 px-2 py-6">
                        <NavList style={`text-lg`}></NavList>
                     </div>
                </div>

                {/* <div className="absolute w-[20%] border border-solid border-red-300 h-[1200px] -top-10 left-80 flex justify-center">
                    

                </div> */}
                

                <div className="absolute right-0  lg:w-[75%] mid:w-[90%] w-[80%] h-[1200px]">
                    <div className="flex w-full h-full py-10 gap-2 xl:flex-row flex-col">
                        <div className="w-[100%] xl:w-[30%] flex justify-center  relative">
                            <div className="xl:absolute xl:-top-20 flex w-[100%] xl:w-fit m-4">
                            {/* <div className=""> */}
                                <Card style={`w-[100%] xl:w-fit`}>
                                    <div className="m-4 py-2 px-2 flex xl:flex-col flex-row xl:items-center justify-around items-center flex-wrap" >
                                        <div className="">
                                            <img src="/profile.png" className="xl:w-28 xl:h-28 x-40 h-40 rounded-lg "></    img>
                                        </div>
                                        <div className="flex flex-col xl:items-center profile:items-start items-center text-gray-text gap-2 font-medium ">
                                            <h3 className="text-xl font-bold text-black">Aayushi Joshi</h3>
                                            <p>aayushi.928@outlook.com</p>
                                            <p className="mb-4">9289428173</p>
                                            <p>Delhi,India</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        <div className="flex w-[100%] xl:w-[70%] flex-col  2xl:p-0 p-2">

                            <div className="mb-8 px-4 w-full">
                                <div className="font-medium mb-2">Monday, 14 October</div>
                                <div className="flex items-center gap-2 text-3xl font-bold  text-blue-accent">
                                    <p>Good Morning, Aayushi</p> 
                                    <div className="flex justify-center items-center text-yellow-500"><MdWavingHand /></div>
                                </div>
                            </div>

                            <div className="flex justify-between flex-col 2xl:flex-row">
                                <div className=" 2xl:w-[60%] w-[100%]">
                                    <Card style={`w-full mb-8`}>
                                        {/* Head of the card */}
                                        <div className="flex gap-16 items-center bg-gray-heading px-2 py-4 justify-between rounded-lg mb-2 flex-wrap">
                                            <div className="flex gap-4 items-center">
                                                <SlCalender className="hover:cursor-pointer" />
                                                <p>Monday, 14 October 2024</p>
                                                <IoIosArrowDown className="hover:cursor-pointer" />  
                                            </div>
                                            <div className="flex gap-6">
                                                <BsArrowLeft className="hover:cursor-pointer" />
                                                <BsArrowRight className="hover:cursor-pointer" />
                                            </div>
                                            </div>
                                        {/* Body of the card */}
                                        <Schedule/>
                                    </Card>
                                </div>

                                <div className=" w-[100%] 2xl:w-[40%] px-4">
                                    <Card style={`w-full py-2 px-2 mb-8`}>
                                        <Features/>
                                    </Card>
                                </div>
                                
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


{/* <div className="w-full h-full flex relative">
        <div className=" bg-white-bg w-full absolute top-[160px] h-full border-8 border-solid border-gray-500">
            Hey I am main
        </div>
        <div className="fixed h-full bg-[#FFFFFF] text-black w-[27%] border-r-[3px] bord-solid border-gray">
            <div className="px-6 py-6">
                <Brand></Brand>
                <NavList style={`mt-10`}></NavList>
                
            </div>
        </div>

       
       
        </div> */}