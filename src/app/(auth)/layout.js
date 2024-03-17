import React from 'react'

function layout({ children }) {
    return (
        <div className='flex'>
            <div className=' sm:w-[50%] w-[30%] h-screen min-h-full p-8 bg-white hidden sm:flex justify-center items-center'>
                <h1 className=' text-5xl  lg:text-8xl  text-black font-semibold'>
                    Welcome to WeGro Audio
                </h1>
            </div>
            <div className='p-4  sm:w-[50%] w-full'>
                <p className='text-end cursor-pointer  '>Login</p>
                {children}
            </div>

        </div>
    )
}

export default layout
