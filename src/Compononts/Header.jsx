function Header() {
    return (
        <header class='bg-gray-900 p-0 m-0' className="header">
            <div class='m-0 p-0 flex gap-60 justify-center align-middle h-15' className="header-container">
                <div class='flex align-middle' className='header-content'>
                    <img src="./A (1).png" alt="Header Image" class='w-15 h-15 object-cover' className="header-image"/>
                    <h1 className='font-bold text-4xl text-fuchsia-700 pt-3'>Jess Damina</h1>
                </div>
                {/* Menu */}
                <nav class='pt-5' className="header-nav">
                    <ul class='flex gap-5'>
                        <li class='text-fuchsia-700 font-bold hover:bg-fuchsia-700 hover:text-gray-900'>Home</li>
                        <li class='text-fuchsia-700 font-bold hover:bg-fuchsia-700 hover:text-gray-900'>About</li>
                        <li class='text-fuchsia-700 font-bold hover:bg-fuchsia-700 hover:text-gray-900'>Services</li>
                        <li class='text-fuchsia-700 font-bold hover:bg-fuchsia-700 hover:text-gray-900'>Portfolio</li>
                        <li class='text-fuchsia-700 font-bold hover:bg-fuchsia-700 hover:text-gray-900'>Blog</li>
                        <li class='bg-fuchsia-700 font-bold text-gray-900'>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;