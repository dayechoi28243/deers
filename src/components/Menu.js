function Menu({ menuBtnClick, menuBtn }) {
    return (
        <div
            style={menuBtn ? { top: '0%' } : { top: '-100%' }}
            className='w-full h-full fixed left-0 z-20 bg-[#f4f0e8] transition-all duration-300'>
            <div
                onClick={menuBtnClick}
                className='w-10 h-20 absolute top-0 right-8 md:top-10 md:right-16 cursor-pointer'>
                <div className='w-10 h-[5px] bg-black rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                <div className='w-10 h-[5px] bg-black -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            </div>

            <ul className='text-center md:text-start absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-32 lg:left-52 text-3xl md:text-5xl lg:text-7xl font-bold'>
                <li className='pb-10 hover:pb-0 md:hover:pb-10 relative md:w-[650px] cursor-pointer group hover:text-[#f6c12a]'>
                    <h1 className='md:group-hover:ml-8 transition-all duration-200'>ABOUT</h1>
                    <div className='md:absolute md:top-[30px] lg:top-[40%] md:left-[230px] lg:left-1/2'>
                        <div className='hidden md:block w-0 group-hover:w-32 h-[3px] bg-black transition-all duration-200 opacity-0 group-hover:opacity-100'></div>
                        <ul className='group-hover:my-6 md:group-hover:my-0 text-xl md:absolute top-[-13px] left-[calc(100%+35px)] w-[150px] h-0 group-hover:h-full transition-all'>
                            <li className='text-black hover:text-[#f6c12a] w-0 overflow-hidden group-hover:w-full group-hover:transition-all duration-200 group-hover:block hidden md:opacity-0 md:group-hover:opacity-100 whitespace-nowrap font-medium md:font-semibold'><a href="#">MISSION</a></li>
                            <li className='text-black hover:text-[#f6c12a] w-0 overflow-hidden group-hover:w-full group-hover:transition-all duration-200 group-hover:block hidden md:opacity-0 md:group-hover:opacity-100 whitespace-nowrap font-medium md:font-semibold'><a href="#">CEO</a></li>
                            <li className='text-black hover:text-[#f6c12a] w-0 overflow-hidden group-hover:w-full group-hover:transition-all duration-200 group-hover:block hidden md:opacity-0 md:group-hover:opacity-100 whitespace-nowrap font-medium md:font-semibold'>
                                <a href="#">HISTORY</a></li>
                        </ul>
                    </div>
                </li>
                <li className='pb-10 hover:pb-0 md:hover:pb-10 relative md:w-[650px] cursor-pointer group hover:text-[#f6c12a]'>
                    <h1 className='md:group-hover:ml-8 transition-all duration-200'>WITH</h1>
                    <div className='md:absolute md:top-[30px] lg:top-[40%] md:left-[230px] lg:left-1/2'>
                        <div className='hidden md:block w-0 group-hover:w-32 h-[3px] bg-black transition-all duration-200 opacity-0 group-hover:opacity-100'></div>
                        <ul className='group-hover:my-6 md:group-hover:my-0 text-xl md:absolute top-[-13px] left-[calc(100%+35px)] w-[150px] h-0 group-hover:h-full transition-all'>
                            <li className='text-black hover:text-[#f6c12a] w-0 overflow-hidden group-hover:w-full group-hover:transition-all duration-200 group-hover:block hidden md:opacity-0 md:group-hover:opacity-100 whitespace-nowrap font-medium md:font-semibold'><a href="#">DEERS I</a></li>
                            <li className='text-black hover:text-[#f6c12a] w-0 overflow-hidden group-hover:w-full group-hover:transition-all duration-200 group-hover:block hidden md:opacity-0 md:group-hover:opacity-100 whitespace-nowrap font-medium md:font-semibold'><a href="#">DEERS M</a></li>
                            <li className='text-black hover:text-[#f6c12a] w-0 overflow-hidden group-hover:w-full group-hover:transition-all duration-200 group-hover:block hidden md:opacity-0 md:group-hover:opacity-100 whitespace-nowrap font-medium md:font-semibold'><a href="#">DEERS E&C</a></li>
                        </ul>
                    </div>
                </li>
                <li className='pb-10 hover:pb-0 md:hover:pb-10 relative md:w-[650px] cursor-pointer group hover:text-[#f6c12a]'>
                    <h1 className='md:group-hover:ml-8 transition-all duration-200'>SEARCH</h1>
                    <div className='md:absolute md:top-[30px] lg:top-[40%] md:left-[calc(230px+30px)] lg:left-[calc(50%+30px)]'>
                        <div className='hidden md:block w-0 group-hover:w-[calc(8rem-30px)] md:group-hover:w-[calc(8rem-30px)] h-[3px] bg-black transition-all duration-200 opacity-0 group-hover:opacity-100'></div>
                        <ul className='group-hover:my-6 md:group-hover:my-0 text-xl md:absolute top-[-13px] left-[calc(100%+35px)] w-[150px] h-0 group-hover:h-full transition-all'>
                            <li className='text-black hover:text-[#f6c12a] w-0 overflow-hidden group-hover:w-full group-hover:transition-all duration-200 group-hover:block hidden md:opacity-0 md:group-hover:opacity-100 whitespace-nowrap font-medium md:font-semibold'><a href="#">PRODUCT</a></li>
                            <li className='text-black hover:text-[#f6c12a] w-0 overflow-hidden group-hover:w-full group-hover:transition-all duration-200 group-hover:block hidden md:opacity-0 md:group-hover:opacity-100 whitespace-nowrap font-medium md:font-semibold'><a href="#">PROJECT</a></li>
                        </ul>
                    </div>
                </li>
                <li className='relative md:w-[650px] cursor-pointer group hover:text-[#f6c12a]'>
                    <h1 className='md:group-hover:ml-8 transition-all duration-200'>CI</h1></li>
            </ul>
        </div>
    )
}

export default Menu;
