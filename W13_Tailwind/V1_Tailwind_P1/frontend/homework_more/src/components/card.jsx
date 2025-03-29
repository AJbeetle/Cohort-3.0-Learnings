export const Card = ({
    style,
    children
}) => {
    return(
        <div className={`h-fit  py-4 px-4 rounded-xl shadow-lg shadow-gray-200 bg-white-bg border border-solid border-gray ${style}`}>
            {children}
        </div>
    )
}