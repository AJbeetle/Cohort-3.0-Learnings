export const Button = ({
    children,
    style,
    state,
    onClick,
    reference
}) => {
    let action = "";
    if (state) action="active:scale-95 bg-green-accent text-black cursor-pointer "
    else action="bg-gray-box text-white cursor-not-allowed"
    return <div className={style}>
        <button ref={reference} onClick={onClick} className={`py-2 px-4 w-80 h-12 rounded-lg ${action}`} disabled={state? false:true}>
            {children}
        </button>
    </div>
}