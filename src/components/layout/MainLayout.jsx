import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function MainLayout({ children }) {

    return (
        <div>
            <Sidebar />
            <div className='bg-black  sm:ml-[240px] px-3' style={{


                height: "100vh"
            }} >
                <Header />
                {children}
            </div>
        </div>
    )
}

export default MainLayout
