export const Whatidocard = ({ imagesrc, title, description }) => {
    return (
        <div class='flex gap-2 h-28 bg-gray-700 rounded-md shadow-md shadow-gray-900 hover:scale-105'>
            <img src={imagesrc} class='h-28 rounded-md'/>
            <div>
                <h3 class='text-lg font-bold text-purple-500'>{title}</h3>
                <p class='max-w-180 pt-2 text-sm'>{description}</p>
            </div>
        </div>
    )
}