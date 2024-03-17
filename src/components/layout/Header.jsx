
"use client"

import searchStore from '@/store/searchStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useDebounce } from '../useDebounce';

function Header() {
    let pathname = usePathname()
    const { searchValue, searchValueChange } = searchStore();

    // const [inputValue, setInputValue] = useState('');
    // // console.log('first', first)
    // const debouncedSearchTerm = useDebounce(inputValue, 500);
    // useEffect(() => {
    //     if (debouncedSearchTerm) {
    //         searchValueChange(debouncedSearchTerm)
    //         // Implement your search logic here using debouncedSearchTerm
    //         console.log("dddd", debouncedSearchTerm);
    //         // For example, fetch data from an API
    //     }
    // }, [debouncedSearchTerm]);
    console.log('searchValue :>> ', searchValue);
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
                <input onChange={(e) => searchValueChange(e.target.value)} type="text" placeholder="Search your favourite music " className='rounded-xl bg-[#1F1F22] text-[#fff] border text-sm font-normal h-10  sm:min-w-[250px] md:min-w-[350px] min-w-full p-4' />

            </div>

            <div className=' mt-9 flex items-center gap-5'>
                <Link href={"/"}>
                    <p className={`text-sm font-medium text-[#F9FAFB] ${pathname === "/" && `border-b border-[#F9FAFB]`} pb-3 cursor-pointer`}>
                        Recommended
                    </p>
                </Link>
                <Link href={"/trending"}>
                    <p className={`text-[#9CA3AF] text-sm font-normal pb-3 cursor-pointer ${pathname === "/trending" && `border-b border-[#F9FAFB]`} `}>
                        Trending
                    </p>
                </Link>

            </div>

        </div>
    )
}

export default Header
