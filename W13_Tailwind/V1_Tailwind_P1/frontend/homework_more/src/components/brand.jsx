import { GiHamburgerMenu } from "react-icons/gi";
import { ImMenu } from "react-icons/im";

export const Brand = ({
    style
}) => {
    return (
        <div className={`flex items-center justify-between ${style} `}>
            <div className="lg:w-[90%] w-[0%] overflow-hidden">
                <div className="bg-blue-accent w-fit flex px-4 py-2 text-[#FFFFFF] rounded-xl justify-center font-[10px] hover:cursor-pointer ">
                    <img src="/vite.svg" className="w-4 mr-2"></img>
                    <span>Webinar</span>
                    <span className="text-green-accent">.gg</span>
                </div>

            </div>

            <div className=" overflow-hidden cursor-pointer flex items-center justify-center lg:w-fit w-[0%] ">
                <img src="/profile.png" className="rounded-lg w-10 h-10"></img>
            </div>
            <div className="lg:hidden w-[100%] text-gray-text hover:text-blue-accent hover:cursor-pointer flex justify-center   ">
                {/* <GiHamburgerMenu /> */}
                <ImMenu />
            </div>
        </div>
        // border border-solid border-black
    )
}