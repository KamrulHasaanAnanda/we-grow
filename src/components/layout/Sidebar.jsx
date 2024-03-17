"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {

    let pathname = usePathname()

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
                    <Link href="/">
                        <li className={`font-medium text-sm ${pathname === "/" ? "text-[#00FFFF]" : "text-[#FFF]"} `}>
                            Recommended
                        </li>
                    </Link>

                    <Link href="/trending">

                        <li className={`font-medium mt-5 text-sm ${pathname === "/trending" ? "text-[#00FFFF]" : "text-[#FFF]"}`} >
                            Trending
                        </li>
                    </Link>



                </ul>
            </div>

        </div>
    )
}

export default Sidebar
