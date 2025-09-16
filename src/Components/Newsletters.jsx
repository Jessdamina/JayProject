import {Button} from "./Button";
import { Newsletterscard} from "./Newsletterscard.jsx";

// Newsletters section
function Newsletters() {
    return (
        <div className='relative'>
            <div className='max-w-210 m-auto pb-5 pt-10 rounded-md grid grid-cols-2 bg-amber-950'>
                <div>
                    <div>
                        <h2 className='text-3xl font-bold pb-3 text-purple-500'>Let's discuss your project</h2>
                        <p className='max-w-120 pb-5 m-auto text-sm'>We are here to help your business grow. Subscribe to our newsletter to get the latest updates and offers.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="bg-gray-700 p-1 rounded-sm h-15 w-70 justify-center items-center">
                            <Newsletterscard
                                imagesrc="Vector copy.png"
                                title="Address:"
                                description="123 Main St, Anytown, USA"
                                backgroundColor="#A53DFF"
                            />
                        </div>
                        <div className="p-1 rounded-sm h-15 w-70 justify-center items-center">
                            <Newsletterscard
                                imagesrc="Vector.png"
                                title="Email:"
                                description="jessicadamina4@gmail.com"
                                backgroundColor="#2d3748"
                            />
                        </div>
                        <div className="p-1 rounded-sm h-15 w-70 justify-center items-center">
                            <Newsletterscard
                                imagesrc="Vector.png"
                                title="Call Me Now:"
                                description="+1 (555) 123-4567"
                                backgroundColor="#2d3748"
                            />
                        </div>
                    </div>
                    <div class='flex items-center gap-5 rounded-sm h-fit max-w-fit bg-amber-50 p-2 object-cover'>
                        <div class='bg-purple-500 w-8 justify-center items-center h-8 p-1.5 object-cover rounded-sm'>
                            <img src="Vector (1).png" alt="Social Media" class='h-4 w-2 justify-center items-center m-auto pt-0.5'/>
                        </div>
                        <img src="social2.png" alt="Social Media" class='h-4 w-4'/>
                        <img src="social3.png" alt="Social Media" class='h-4 w-4'/>
                        <img src="social5.png" alt="Social Media" class='h-4 w-4'/>
                        <img src="Social (1).png" alt="Social Media" class='h-4 w-4'/>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Subscribe to our newsletter for the latest updates! Don't miss out on our exclusive offers.</p>
                        <form>
                            <div>
                                <div>
                                    <label>Name:</label>
                                    <input type="text" placeholder="Enter your name" />
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <input type="text" placeholder="Enter your email" />
                                </div>
                                <div>
                                    <label>Location:</label>
                                    <input type="text" placeholder="Enter your location" />
                                </div>
                                <div>
                                    <div>
                                        <label>Phone Number:</label>
                                        <input type="text" placeholder="Enter your phone number" />
                                    </div>
                                    <div>
                                        <label>Budget:</label>
                                        <input type="text" placeholder="Enter your budget" />
                                    </div>
                                </div>
                                <div>
                                    <label>Message:</label>
                                    <textarea placeholder="Enter your message"></textarea>
                                </div>
                            </div>
                            <div>
                                <Button buttonTitle={"Submit"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newsletters;