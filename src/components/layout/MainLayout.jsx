import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function MainLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <div className='bg-black ml-[240px] px-3' style={{

                width: "calc(100% - 240px)",
                height: "100vh"
            }} >
                <Header />
                {children}
            </div>
        </div>
    )
}

export default MainLayout
