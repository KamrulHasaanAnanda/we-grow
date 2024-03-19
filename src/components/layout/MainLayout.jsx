'use client'
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { usePathname } from 'next/navigation'

function MainLayout({ children }) {
    let pathname = usePathname()
    let unAuthUrl = ["/login", "/register"];
    let components = "";
    if (unAuthUrl.includes(pathname)) {
        components = <div>{children}</div>;
    } else {
        components = <div>
            <Sidebar />
            <div className='bg-black  sm:ml-[240px] px-3 h-screen' >
                <Header />
                {children}
            </div>
        </div>
    }
    return components
}

export default MainLayout
