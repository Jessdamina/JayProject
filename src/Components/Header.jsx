// header section
import './Header'
function Header() {
    return (
        <header class='bg-gray-900 p-0 m-0'>
            <div class='m-0 p-0 flex gap-60 justify-center align-middle h-15'>
                <div class='flex align-middle'>
                    <img src="./A (1).png" alt="Header Image" class='w-15 h-15 object-cover'/>
                    <h1 className='font-bold text-3xl text-purple-500 pt-3'>Jess Damina</h1>
                </div>
                {/* Menu */}
                <nav class='pt-5'>
                    <ul class='flex gap-5'>
                        {/* <li className='text-purple-500 hover:bg-amber-900 cursor-pointer'>Test run</li> */}
                        <li class='text-purple-500 font-bold bg-transparent hover:bg-purple-500 hover:text-gray-900'>Home</li>
                        <li class='text-purple-500 font-bold hover:bg-purple-500 hover:text-gray-900'>About</li>
                        <li class='text-purple-500 font-bold hover:bg-purple-500 hover:text-gray-900'>Services</li>
                        <li class='text-purple-500 font-bold hover:bg-purple-500 hover:text-gray-900'>Portfolio</li>
                        <li class='text-purple-500 font-bold hover:bg-purple-500 hover:text-gray-900'>Blog</li>
                        <li class='bg-purple-500 font-bold text-gray-900'>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
        // <h1 className='text-blue-600 hover:text-green-700'>Testing</h1>
    )
}
export default Header;