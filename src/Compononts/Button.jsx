// button reusable component

export const Button =({buttonTitle}) =>{
    return (
        <button class='bg-fuchsia-700 w-30 h-8 rounded-xs cursor-pointer font-medium hover:scale-95'>{buttonTitle}</button>
    )
}
export default Button;