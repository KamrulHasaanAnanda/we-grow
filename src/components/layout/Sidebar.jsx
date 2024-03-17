import React from 'react'

function Sidebar() {
    return (
        <div className='hidden sm:block fixed left-0 w-[240px] h-screen min-h-full  bg-[#212124] px-4 py-8'>

            <div className='flex gap-3 items-center'>
                <div className='rounded-[50%] bg-[#63676F] h-10 w-10 text-base flex justify-center items-center cursor-pointer font-extralight'>
                    WG
                </div>
                <p>Hello</p>
            </div>


            <div className=' mt-9'>
                <ul>
                    <li className=' font-medium text-sm text-[#00FFFF]'>
                        Home
                    </li>
                    <li className=' font-medium text-sm text-[#FFF] mt-5'>
                        Recommended
                    </li>

                    <li className=' font-medium text-sm text-[#FFF] mt-5'>
                        Trending
                    </li>



                </ul>
            </div>

        </div>
    )
}

export default Sidebar
