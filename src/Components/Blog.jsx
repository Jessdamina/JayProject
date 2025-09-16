import { Blogcard } from './Blogcard';
// Blog section
function Blog() {
    return (
        <div class='w-100vw h-100vh content-center pt-5 relative'>
            <div class='max-w-210 pt-5 pb-15 relative justify-center items-center m-auto'>
                <h1 className='font-bold text-3xl text-center pb-3 text-purple-500'>Blog</h1>
                <p class='text-sm max-w-100 text-center m-auto'>
                    Latest updates, insights, and stories, behind the scenes,
                    lessons learned, and ideas worth sharing — all in one place
                </p>
                <div class='flex gap-4 pt-5'>
                    <Blogcard
                        imagesrc="./blog1.png"
                        category="18th Jul, 2019/150 comments"
                        description="Café views, cobblestone dreams, and timeless style."
                    />
                    <Blogcard
                        imagesrc="./blog2.png"
                        category="5th Aug, 2022/103 comments"
                        description="Sandy toes, sun-kissed dreams, Waves, wind, and wardrobe goals."
                    />
                     <Blogcard
                        imagesrc="./blog3.png"
                        category="11th Jan, 2025/85 comments"
                        description="Lights, lens, and magic in motion, behind the scenes of beauty and style."
                    />
                     <Blogcard
                        imagesrc="./blog4.png"
                        category="25th Sept, 2020/120 comments"
                        description="From streetwear to statement pieces, style speaks louder in every stitch."
                    />
                </div>
            </div>
        </div>
    )
}
export default Blog;