// hero section
import {Button} from "./Button";

function Hero () {
    return (
        <section class='w-100vw h-100vh max-w-100vw pt-10 pb-10 bg-gray-900'>
            <img src="./Ellipse 3.png" alt="Hero-gradient" class='absolute top-15 right-0 z-1'/>
            <img src="./Ellipse 4.png" alt="Hero-gradient" class='absolute top-0 right-0 z-1 w-80 h-300'/>
            <img src="./Ellipse 1.png" alt="Hero-gradient" class='absolute top-0 left-0 z-1 w-350 h-150'/>
            <div class='justify-center align-middle flex gap-30'>
                <div class='justify-center pt-5'>
                    <h1 class='font-bold text-5xl text-purple-500'>Hello, I'm</h1>
                    <h1 class='font-bold text-5xl text-purple-500 pb-5'>Jessica Damina</h1>
                    <p class='max-w-100 text-sm'>Your journey to excellence starts here. I am a 
                        dedicated and passionate web developer with over
                        5 years of excellent experience in creating 
                        stunning and functional websites. Let's build 
                        something amazing together.
                    </p>
                    <div class='pt-5 hover:scale-95 cursor-pointer'>
                        <Button buttonTitle={"Say Hello"} />
                    </div>
                    <div class='flex gap-5 pt-8 text-center'>
                        <div className='hero-stat'>
                            <h3 class='font-bold text-purple-500 text-3xl'>5Y</h3>
                            <p class='text-sm text-gray-500'>Experience</p>
                        </div>
                        <div>
                            <h3 class='font-bold text-purple-500 text-3xl'>110+</h3>
                            <p class='text-sm text-gray-500'>Projects Completed</p>
                        </div>
                        <div>
                            <h3 class='font-bold text-purple-500 text-3xl'>38</h3>
                            <p class='text-sm text-gray-500'>Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./hero2.jpg" alt="Hero-Image" class='w-90 h-100 object-cover rounded-md'/>
                </div>
            </div>
        </section>
    )
}
export default Hero;