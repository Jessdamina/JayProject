import {Button} from "./Button";
import { Newsletterscard} from "./Newsletterscard.jsx";

// Newsletters section
function Newsletters() {
    return (
        <div className='relative'>
            <div className='max-w-210 m-auto pl-5 pr-5 pb-5 pt-10 rounded-md grid grid-cols-2 bg-purple-500'>
                <div>
                    <div>
                        <h2 className='text-3xl font-bold pb-3 text-gray-900'>Let's discuss your project</h2>
                        <p className='max-w-120 pb-5 m-auto text-sm'>We are here to help your business grow. Subscribe to our newsletter to get the latest updates and offers.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="bg-gray-700 p-1 shadow-md shadow-gray-900 rounded-sm h-15 w-70 justify-center items-center">
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
                    <div class='flex items-center gap-5 mt-5 rounded-sm h-fit max-w-fit shadow-md shadow-gray-900 bg-amber-50 p-2 object-cover'>
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
                        <p className='max-w-120 pb-5 m-auto text-sm'>Subscribe to our newsletter for the latest updates! Don't miss out on our exclusive offers.</p>
                        <form>
                            <div className="flex flex-col gap-3 rounded-md">
                                <div className="bg-gray-800 p-1 rounded-sm h-10 w-100 justify-center content-center items-center">
                                    <label className="font-bold text-xs text-purple-500">Name*</label>
                                    <input type="text" placeholder="Enter your name" className='text-xs w-85 h-8' />
                                </div>
                                <div className="bg-gray-800 p-1 rounded-sm h-10 w-100 justify-center content-center items-center">
                                    <label className="font-bold text-xs text-purple-500">Email*</label>
                                    <input type="text" placeholder="Enter your email" className='text-xs italic w-85 h-8' />
                                </div>
                                <div className="bg-gray-800 p-1 rounded-sm h-10 w-100 justify-center content-center items-center">
                                    <label className="font-bold text-xs text-purple-500">Location*</label>
                                    <input type="text" placeholder="Enter your location" className='text-xs italic w-83 h-8' />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-800 p-1 rounded-sm h-10 w-48 justify-center content-center items-center">
                                        <label className="font-bold text-xs text-purple-500">Contact*</label>
                                        <input type="text" placeholder="Enter your phone number" className='text-xs italic' />
                                    </div>
                                    <div className="bg-gray-800 p-1 rounded-sm h-10 w-48 justify-center content-center items-center">
                                        <label className="font-bold text-xs text-purple-500">Budget*</label>
                                        <input type="text" placeholder="Enter your budget" className='text-xs italic' />
                                    </div>
                                </div>
                                <div className="bg-gray-800 p-1 rounded-sm h-10 w-100 justify-center content-center items-center">
                                    <label className="font-bold text-xs text-purple-500">Message*</label>
                                    <input type="text" placeholder="Enter your message" className='text-xs italic w-80 h-8' />
                                </div>
                            </div>
                            <div className="pt-3 max-w-fit">
                                <Button arrange                                
                                buttonTitle="Submit" 
                                imagesrc="Paper Plane.png"
                                backgroundColor="#111827"
                                color="#A53DFF"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newsletters;