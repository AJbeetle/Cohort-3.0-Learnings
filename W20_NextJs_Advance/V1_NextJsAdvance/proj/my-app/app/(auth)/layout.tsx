import {ReactNode} from "react"
export default function LayoutForAuth({children}:Readonly<{
    children:ReactNode
}>){
    return(
        <div className="">
            <p className="text-2xl flex justify-center">
                This is Header inside Layout
            </p>
            {children}
            <p  className="text-2xl flex justify-center">
                This is footer inside Layout
            </p>

        </div>
    )
}