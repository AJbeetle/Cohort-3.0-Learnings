export const Brand = ({
    variant
}) => {
    let sizeClass = `w-${variant}`

    return (
        <div className={`text-2xl text-white flex justify-center items-center mb-[70px]`}>
            <img src="/vite.svg" className={`${sizeClass} pr-2`}></img>
            <span className="text-green-accent">Webinar</span>
            <span>.gg</span>
        </div>
    )
}