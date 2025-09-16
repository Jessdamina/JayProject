// button reusable component

export const Button =({ buttonTitle, arrange, imagesrc, backgroundColor, color }) =>{
    return (
        <button class='bg-purple-500 shadow-md shadow-gray-900 text-sm w-30 h-8.5 rounded-xs cursor-pointer font-medium hover:scale-95 flex gap-4 items-center justify-center' style={{ backgroundColor, color }}>
            {arrange ?<>{buttonTitle} <img src={imagesrc} className="w-4 h-4"/></>:<>{buttonTitle}</>}
        </button>
    )
}
export default Button;