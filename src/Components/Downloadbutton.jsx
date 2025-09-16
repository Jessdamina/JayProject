// Download and Case study buttons
export const Downloadbutton = ({ buttonTitle, backgroundColor, arrange, imagesrc, color }) => {
    return (
        <div>
            <button class='flex items-center shadow-md shadow-gray-900 justify-center w-40 text-sm hover:bg-purple-500 hover:text-gray-900 hover:scale-95 gap-1.5 border-1 border-purple-500 rounded-sm p-1 text-purple-500 font-medium cursor-pointer ' style={{ backgroundColor, color }}>
                {arrange ?<>{buttonTitle} <img src={imagesrc} class='w-4 h-4'/></>:<><img src={imagesrc} class='w-4 h-4'/> {buttonTitle}</>}
            </button>
        </div>
    );
};