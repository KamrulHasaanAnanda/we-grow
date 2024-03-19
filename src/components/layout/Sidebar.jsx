"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Sidebar() {
    const [auth, setauth] = useState(null)
    const [name, setname] = useState(null)

    let router = useRouter()
    useEffect(() => {
        let localStorageData = localStorage.getItem("weGrow")
        if (localStorageData) {
            let localValue = JSON.parse(localStorageData)[0]
            setauth(localValue)
            let localName = localValue?.email.split("@")[0].charAt(0).toUpperCase() + localValue.email.split("@")[0].slice(1)
            setname(localName)

        }
    }, [])

    let pathname = usePathname()
    let logout = () => {
        if (name) {
            localStorage.removeItem("weGrow")
            setauth(null)
            toast.success("Logged out successfully")
            router.push("/login")
        } else {
            // console.log('first')
            toast.success("Login first")

            router.push("/login")

        }
    }

    return (
        <div className='hidden sm:block fixed left-0 w-[240px] h-screen min-h-full  bg-[#212124] px-4 py-8'>

            <div className='flex gap-3 items-center'>
                <div onClick={logout} className='rounded-[50%] bg-[#63676F] h-10 w-10 text-base flex justify-center items-center cursor-pointer font-extralight'>
                    WG
                </div>
                <p>Hello{auth && <span className=" font-normal">,{name}
                </span>}</p>
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
