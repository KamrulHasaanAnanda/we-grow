import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
function Header() {
    return (
        <div className='pt-4'>
            <div className=' flex items-center justify-between gap-3'>
                <div className='hidden sm:flex gap-3 items-center'>
                    <div className='bg-[#1F1F22] h-10 w-10 flex justify-center items-center rounded-[50%] '>
                        <FaAngleLeft />
                    </div>
                    <div className='bg-[#1F1F22] h-10 w-10 flex justify-center items-center rounded-[50%] '>
                        <FaAngleRight />
                    </div>
                </div>
                <input type="text" placeholder="Search your favourite music " className='rounded-xl bg-[#1F1F22] text-[#1F1F22] border text-sm font-normal h-10  sm:min-w-[250px] md:min-w-[350px] min-w-full p-4' />

            </div>

            <div className=' mt-9 flex items-center gap-5'>

                <p className='text-sm font-medium text-[#F9FAFB] border-b border-[#F9FAFB] pb-3 cursor-pointer'>
                    Recommended
                </p>
                <p className='text-[#9CA3AF] text-sm font-normal pb-3 cursor-pointer'>
                    Trending
                </p>

            </div>

        </div>
    )
}

export default Header
