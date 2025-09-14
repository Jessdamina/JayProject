import { Portfoliocard } from './Portfoliocard';
import {Button} from "./Button";
// portfolio section
function Portfolio() {
    return (
        <section class='w-100vw h-100vh content-center pt-5 relative'>
            <div class='max-w-210 relative justify-center items-center m-auto'>
                <h1 class='font-bold pb-4 text-4xl text-center text-purple-500'>Portfolio</h1>
                <div class='text-center text-sm pb-5'>
                    <p class='max-w-140 m-auto'>
                        This is the portfolio section where I showcase my work.
                        Here you can find a selection of my projects and accomplishments.
                        Each work reflects a blend of innovation, functionality, and purposeful execution designed to meet real
                        needs and leave a lasting impact.
                    </p>
                </div>
                <div>
                    <div class='flex gap-3 pt-5'>
                        <Portfoliocard
                            imagesrc="mieducation.png" 
                            category="E-commerce website"
                            title="Mieducationng"
                            description="A platform designed for educational purposes, connecting students and educators."
                            buttonTitle="Case Study"
                        />
                        <Portfoliocard
                            imagesrc="ashren.png" 
                            category="E-commerce website"
                            title="Ashren"
                            description="An e-commerce platform offering a seamless ready-to-wear shopping experience."
                            buttonTitle="Case Study"
                        />
                        <Portfoliocard 
                            imagesrc="./latoy.png" 
                            category="Social media page" 
                            title="Latoy Catering Service" 
                            description="A social media platform designed for event planning and catering services." 
                            buttonTitle="Case Study"
                        />
                    </div>
                    <div class='flex gap-3 pt-3'>
                        <Portfoliocard
                            imagesrc="./Lonani.png"
                            category="Social media page"
                            title="Lonani Allure"
                            description="A platform showcasing a unique clothing line with a focus on sustainability and style."
                            buttonTitle="Case Study"
                        />
                        <Portfoliocard
                            imagesrc="./estava.png"
                            category="Social media page"
                            title="Estava"
                            description="One stop online shopping store for children school supplies."
                            buttonTitle="Case Study"
                        />
                        <Portfoliocard
                            imagesrc="./jess.jpeg"
                            category="Web Developer"
                            title="Jess Damina"
                            description="A web developer specializing in creating responsive and user-friendly websites."
                            buttonTitle="Case Study"
                        />
                    </div>
                </div>
                <div class='flex justify-center items-center pt-5'>
                    <Button buttonTitle={"More"} />
                </div>
            </div>
        </section>
    )
}
export default Portfolio;