// button reusable component

export const Button =({buttonTitle}) =>{
    return (
        <button class='bg-purple-500 text-sm w-30 h-8.5 rounded-xs cursor-pointer font-medium hover:scale-95'>{buttonTitle}</button>
    )
}
export default Button;