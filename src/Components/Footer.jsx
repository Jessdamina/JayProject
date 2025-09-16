function Footer() {
    return (
        <div className="bg-gray-800 h-40 m-0 absolute top-1185 w-full -z-10">
            <div class='m-auto max-w-220 pt-20 flex gap-15 justify-center align-middle h-15'>
                <div class='flex align-middle'>
                    <img src="./A (1).png" alt="Header Image" class='w-15 h-15 object-cover'/>
                    <h1 className='font-bold text-xl text-purple-500 pt-3'>Jess Damina</h1>
                </div>
                {/* Menu */}
                <nav class='pt-4'>
                    <ul class='flex gap-5'>
                        {/* <li className='text-purple-500 hover:bg-amber-900 cursor-pointer'>Test run</li> */}
                        <li class='text-purple-500 font-bold cursor-pointer'>Home</li>
                        <li class='text-purple-500 font-bold cursor-pointer'>About</li>
                        <li class='text-purple-500 font-bold cursor-pointer'>Services</li>
                        <li class='text-purple-500 font-bold cursor-pointer'>Portfolio</li>
                        <li class='text-purple-500 font-bold cursor-pointer'>Blog</li>
                        <li class='text-purple-500 font-bold cursor-pointer'>Contact</li>
                    </ul>
                </nav>
                <p className="text-md text-purple-500  pt-4 font-bold">Copyright © 2025</p>
            </div>
        </div>
    )
}
export default Footer;