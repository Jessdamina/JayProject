// Newsletters card component
export const Newsletterscard = ({ imagesrc, title, description, backgroundColor }) => {
    return (
        <div className="flex gap-3 rounded-md p-2 items-center">
            <div className={`w-10 h-10 rounded-sm p-1 items-center justify-center shadow-md shadow-gray-900`} style={{ backgroundColor }}>
                <img src={imagesrc} alt="Location Pin" className="justify-center items-center m-auto p-1" />
            </div>
            <div>
                <h5 className="text-sm text-gray-900 font-medium">{title}</h5>
                <p className="text-sm text-gray-900 font-bold">{description}</p>
            </div>
        </div>
    )
}