export const Blogcard = ({ category, imagesrc, description }) => {
    return (
        <div class='w-50 h-55 shadow-md shadow-purple-900 hover:-translate-1.5 rounded-md bg-gray-800'>
            <img src={imagesrc} alt="blog-image" class='h-30 rounded-t-md w-50'/>
            <p class='text-xs italic text-gray-600 pl-3 pt-2'>{category}</p>
            <p class='text-xs pt-2 pl-3 max-w-50'>{description}</p>
        </div>
    )
}