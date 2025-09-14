// hero2 section
import {Button} from "./Button";
import { Downloadbutton } from './Downloadbutton';

function Hero2() {
    return (
        <section class='w-100vw h-100vh pt-8 bg-gray-900'>
            <div class='flex gap-25 pr-20 bg-gray-700 max-w-250 relative z-1 rounded-r-sm h-120 pb-5'> 
                <div class='pt-15 pl-25'> 
                    <img src="./hero1.jpg" alt="hero2-image" class='w-70 h-90 object-cover rounded-md'/>
                    <div class='flex top-100 left-40 max-w-fit items-center absolute gap-3 rounded-sm bg-amber-50 p-2'>
                        <img src="./Social.png" alt="Social-Image" class='h-4 w-4'/>
                        <img src="./social2.png" alt="Social-Image" class='h-4 w-4'/>
                        <img src="./social3.png" alt="Social-Image" class='h-4 w-4'/>
                        <div class='bg-purple-500 p-1 rounded-sm'>
                            <img src="./social4.png" alt="Social-Image" class='h-4 w-4'/>
                        </div>
                        <img src="./social5.png" alt="Social-Image" class='h-4 w-4'/>
                    </div>
                </div>
                {/* hero2 text section */}
                <div class='content-center'>
                    <h1 class='font-bold text-4xl text-purple-500'>I am Professional SMM,</h1>
                    <h1 class='font-bold text-4xl text-purple-500'>Graphics Designer and</h1>
                    <h1 class='font-bold text-4xl text-purple-500 pb-5'>Web Developer.</h1>
                    <div className='hero2-description'>
                        <p class='max-w-100 text-sm pb-5'>with a passion for creating visually compelling content
                            that captures attention and drives results. I help top
                            brands tell their stories and connect with their potential
                            audience effectively.
                        </p>
                    </div>
                    <div class='flex gap-5'>
                        <Button buttonTitle={"My Projects"} />
                        <Downloadbutton
                            buttonTitle="Download CV"
                            imagesrc="./download.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero2;