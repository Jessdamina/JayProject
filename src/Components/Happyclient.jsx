import {Button} from "./Button";
// happy clients section
function Happyclient() {
    return (
        <div className='w-100vw h-100vh relative pt-15'>
            <div className='justify-center max-w-210 m-auto flex flex-col'>
                <h2 className='text-3xl font-bold pb-5 text-purple-500 text-center'>Happy Clients</h2>
                <p className='max-w-110 text-center m-auto text-sm'>There’s nothing more fulfilling than seeing our work leave a lasting impression
                    and bring genuine satisfaction to the people we serve.
                </p>
                <div className='flex m-auto'>
                    <img src="./google.png" className='w-30 h-30'/>
                    <img src="./dribbble.png" className='w-30 h-30'/>
                    <img src="./linkedin.png" className='w-30 h-30'/>
                    <img src="./amazon.png" className='w-30 h-30'/>
                    <img src="./medium.png" className='w-30 h-30'/>
                    <img src="./spotify.png" className='w-30 h-30'/>
                </div>
                <h2 className='text-3xl font-bold pb-5 text-purple-500 text-center'>Testimonials</h2>
                <p className='max-w-120 pb-5 text-center m-auto text-sm'>
                    From the first idea to the final cut, we pour passion into every frame, and our clients feel it.
                    Thank you for choosing us, believing in us, and sharing your joy. Your smiles and feedback are what keep us going.
                </p>
                <p className='max-w-160 pb-5 italic text-center m-auto text-sm'>
                    "Working with JessDee was an absolute game-changer for my brand. I had a vision in my head, and they
                    brought it to life even better than I imagined. The editing was clean, creative, and perfectly
                    captured the mood I wanted. They were professional, timely, and really paid attention to detail.
                    Every revision was handled with care, and the final result blew me away. I’ve received
                    so many compliments on my content—and it’s all thanks to you."
                </p>
                <h4 class='font-bold text-center text-lg text-purple-500'>Marsia Martins</h4>
                <p className='text-center text-xs text-gray-600'>CEO Camberwall</p>
                <div class='align-middle pt-5'>
                    {/* <Button buttonTitle={"More"} color={"blueviolet"} /> */}
                </div>
                <div class='pt-4 pb-20 m-auto'>
                    <Button buttonTitle={"More"} />
                </div>
            </div>
        </div>
    )
}
export default Happyclient;