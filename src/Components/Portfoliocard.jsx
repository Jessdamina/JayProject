import { Downloadbutton } from './Downloadbutton';
// portfoloio card reusable component
export const Portfoliocard = ({ imagesrc, category, title, description, arrange, buttonTitle, backgroundColor }) => {
    return (
        <div class='border-1 w-70 h-68 shadow-md shadow-gray-950 hover:scale-105 rounded-md border-gray-600 bg-gray-800'>
            <img src={imagesrc} alt="mieducation-image" class='h-30 rounded-t-md w-70 object-cover'/>
            <p class='text-sm italic text-gray-600 pl-3 pt-2'>{category}</p>
            <h3 class='font-medium pl-3 text-purple-500'>{title}</h3>
            <p class='text-xs pl-3 max-w-70'>
                {description}
            </p>
            <div class='pl-3 pt-5'>
                <Downloadbutton arrange
                buttonTitle="Case Study"
                imagesrc="./arrow.png"
                />
            </div>
        </div>
    )
}