export const UserInput = ({
    placeholder,
    style,
    onChange
}) => {
    return <div className={`${style}`}>
        <input onChange={(e) => onChange(e)} placeholder={`${placeholder}`} className="outline-none border-4 border-solid border-blue-lessFaded bg-blue-faded py-2 px-4 rounded-lg w-80 h-12 text-white"></input>
    </div>
}