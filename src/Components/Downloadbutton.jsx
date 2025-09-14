// Download and Case study buttons
export const Downloadbutton = ({ buttonTitle, backgroundColor, imagesrc, color }) => {
    return (
        <div>
            <button className='hero2-download-button' class='flex items-center justify-center w-30 text-sm hover:bg-purple-500 hover:text-gray-900 hover:scale-95 gap-1.5 border-1 border-purple-500 rounded-sm p-1 text-purple-500 font-medium cursor-pointer ' style={{ backgroundColor, color }}>
                <img src={imagesrc} class='w-4 h-4'/>
                {buttonTitle}
            </button>
        </div>
    );
};