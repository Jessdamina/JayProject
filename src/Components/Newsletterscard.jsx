// Newsletters card component
export const Newsletterscard = ({ imagesrc, title, description, backgroundColor }) => {
    return (
        <div className="flex gap-3 rounded-md p-2 items-center">
            <div className={`w-10 h-10 rounded-sm p-1 items-center justify-center`} style={{ backgroundColor }}>
                <img src={imagesrc} alt="Location Pin" className="justify-center items-center m-auto p-1" />
            </div>
            <div>
                <h5 className="text-sm">{title}</h5>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}