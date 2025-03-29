export function SidebarClass1(){
    return <div className="flex">
        {/* <div className="bg-red-200 md:w-96 w-0 h-dvh md:flex transition-all delay-0 duration-1000 hover:bg-gray-200 md:p-2 "> */}
        <div className="bg-red-200 h-dvh md:flex transition-all delay-150 duration-1000 hover:bg-gray-200 md:p-2 -translate-x-96 md:translate-x-0 md:w-96 w-0 ">
            Sidebar
        </div>
        <div className="bg-green-200 duration-1000 w-full h-dvh p-6 hover:p-2">
            Content
        </div>
    </div>
}

