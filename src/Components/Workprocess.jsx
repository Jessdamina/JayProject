// Work Process Section
import { Workcard } from './Workcard';
function Workprocess() {
    return (
        <section class='w-100vw h-120vh pt-15 relative -top-5 bg-gray-800'>
            <div class='flex gap-20 justify-center h-110'>
                <div class='justify-center content-center'>
                    <h2 class='font-bold text-4xl text-purple-500 pb-8'>Work Process</h2>
                    <p class='max-w-80 text-sm pb-5'>
                        As a freelancer, delivering high-quality and effective
                        results starts with a structured, strategic workflow. My
                        process is designed to ensure clarity, creativity, and measurable
                        impact at every stage of the project.
                    </p><br></br>
                    <p class='max-w-80 text-sm pb-5'>Our work process is designed to ensure efficiency and quality at every stage.</p>
                </div>
                {/* work process steps */}
                <div class='flex gap-3'>
                    <div class='flex flex-col gap-3'>
                        <Workcard
                            imagesrc="./work1.png"
                            title="1. Research"
                            backgroundColor="#A53DFF"
                            description="We begin by understanding your needs and goals through comprehensive research."
                        />
                        <Workcard
                            imagesrc="./work2.png"
                            title="2. Analyse"
                           backgroundColor="#2d3748"                                
                           description="Identify patterns, opportunities, and challenges. Define the project scope and key deliverables."
                        />
                    </div>
                    <div class='flex flex-col gap-3 pt-3'>
                        <Workcard
                            imagesrc="./work3.png"
                            title="3. Design"
                            backgroundColor="#2d3748"
                            description="Start designing the actual solution, be it a visual concept, written content, a product prototype, or a digital asset."
                        />
                        <Workcard
                            imagesrc="./work4.png"
                            title="4. Launch"
                            backgroundColor="#2d3748"
                            description="Finalize the work and prepare for launch or delivery, quality checks and final revisions."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Workprocess;