import { Downloadbutton } from './Downloadbutton';
// Let's work together section
function Worktogether() {
    return(
        <div class='bg-purple-500 justify-center h-70 items-center'>
            <div class='justify-center pt-10 m-auto items-center'>
                <h2 class='text-3xl pb-5 font-bold text-center text-gray-900'>
                    Do you have any project idea? <br />    
                    Let's discuss your project together.
                </h2>
                <p class='max-w-80 text-sm text-center m-auto'>I'm here to help you bring your ideas to life.
                    Feel free to reach out for a chat!
                </p>
                <div class='pt-5 flex justify-center'>
                    <Downloadbutton
                        buttonTitle="Let's Work Together"
                        backgroundColor="#111827"
                        imagesrc="./arrow.png"
                        color="white"
                    />
                </div>
            </div>
        </div>
    )
}
export default Worktogether;