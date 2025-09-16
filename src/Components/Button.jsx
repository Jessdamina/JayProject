// button reusable component

export const Button =({ buttonTitle, arrange, imagesrc }) =>{
    return (
        <button class='bg-purple-500 shadow-md shadow-gray-900 text-sm w-30 h-8.5 rounded-xs cursor-pointer font-medium hover:scale-95'>
            {arrange ?<>{buttonTitle} <img src={imagesrc} class='w-4 h-4'/></>:<>{buttonTitle}</>}
        </button>
    )
}
export default Button;