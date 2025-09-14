// Workcard Component
export const Workcard = ({ imagesrc, title, description, backgroundColor }) => {
    return (
        <div class='bg-gray-900 h-45 pt-4 pb-4 pl-4 rounded-md'>
            <div class={`w-10 h-10 p-1`} style={{backgroundColor}}>
                <img src={imagesrc} alt="Work process image"/>
            </div>
            <div className="work-text">
                <h2 class='text-purple-500 font-medium pt-2 pb-2'>{title}</h2>
                <p class='max-w-50 text-sm pb-5'>
                    {description}
                </p>
            </div>
        </div>
    )
}