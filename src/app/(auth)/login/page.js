import React from 'react'

function Login() {
    return (
        <div className='flex flex-col items-center justify-center h-full w-full mb-2 mt-28 sm:mt-0' >
            <div className=''>
                <p className='text-base font-medium'>Email</p>
                <input type='text' className=' text-sm font-normal mt-2 p-4 h-10 min-w-[300px] rounded-xl ' placeholder='Enter your email' />
            </div>
            <div className='my-4'>
                <p>Password</p>
                <input type='password' className=' text-sm font-normal mt-2 p-4 h-10 min-w-[300px] rounded-xl ' placeholder='Enter your password' />

            </div>
            <button className='bg-blue-500 text-white text-sm font-semibold w-[300px] rounded-xl shadow  h-10'>
                Sign In
            </button>

        </div>
    )
}

export default Login
