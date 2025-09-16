import {Button} from "./Button";
import { Whatidocard } from "./Whatidocard";
// what i do section
function Whatido() {
    return (
        <div class='w-100vw h-100vh pt-15 relative bg-gray-800'>
            <div class='flex gap-18 pb-15 justify-center max-w-210 m-auto'>
                <div class='justify-center content-center'>
                    <h2 class='font-bold text-4xl text-purple-500'>What I Do?</h2>
                    <p class='max-w-200 text-sm pt-5'>
                        I create stunning and functional web applications that provide
                        real value to users. My focus is on delivering high-quality
                        solutions that meet the needs of my clients.
                    </p>
                    <br></br>
                    <p class='max-w-200 text-sm'>
                        Also help brands stand out, connect with audience, and tell their
                        story in the most impactful way. Creating bold graphics, creating
                        scroll-stopping videos or managing social platforms with strategy
                        and style.
                    </p>
                    <div class='pt-5 pl-3'>
                        <Button buttonTitle={"say hello!"} />
                    </div>
                </div>
                <div class='flex flex-col gap-4 pt-5'>
                    <Whatidocard
                        imagesrc="./Rectangle 5.png"
                        title="Web Development (WD)"
                        description="I build responsive and user-friendly websites and web applications using the latest technologies and best practices. Let's create something amazing together."
                    />
                    <Whatidocard
                        title="Graphics Design (GD)"
                        description="I help businesses and individuals bring their ideas to life through impactful and professional designs. Let's turn your vision into visuals that stand out."
                    />
                    <Whatidocard
                        title="Social Media Management (SMM)"
                        description="I help brands grow their online presence and connect with their audience through strategic social media management."
                    />
                </div>
            </div>
        </div>
    )
}
export default Whatido;