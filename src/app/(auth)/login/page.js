
"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Login() {
    let router = useRouter()
    const [data, setdata] = useState({
        email: '',
        password: ''
    })
    let submitData = () => {
        let storeLogins = localStorage.getItem("weGrow");
        // console.log('storeLogins', storeLogins)
        if (storeLogins) {
            let storeLoginArray = JSON.parse(storeLogins);
            let filterData = storeLoginArray.filter(storeLogin => storeLogin?.email === data?.email);
            if (filterData.length > 0) {
                toast.success("Login successful")
                localStorage.setItem("weGrow", JSON.stringify(filterData))
                router.push("/")
                setdata({
                    email: '',
                    password: ''
                })
            } else {
                toast.success("Login successful")

                setdata({
                    email: '',
                    password: ''
                })
                router.push("/")
                storeLoginArray.push(data);
                localStorage.setItem("weGrow", JSON.stringify(storeLoginArray));
            }


        } else {
            toast.success("Login successful")
            setdata({
                email: '',
                password: ''
            })
            localStorage.setItem("weGrow", JSON.stringify([data]));
            // router.push("/")
        }
    }
    return (
        <div className='flex flex-col items-center justify-center h-full w-full mb-2 mt-28 sm:mt-0' >
            <div className=''>
                <p className='text-base font-medium'>Email</p>
                <input value={data?.email} name='email' onChange={(e) => {
                    setdata({
                        ...data,
                        email: e.target.value
                    })
                }} type='text' className=' text-sm text-black font-normal mt-2 p-4 h-10 min-w-[300px] rounded-xl ' placeholder='Enter your email' />
            </div>
            <div className='my-4'>
                <p>Password</p>
                <input type='password'
                    value={data?.password} name='password' onChange={(e) => {
                        setdata({
                            ...data,
                            password: e.target.value
                        })
                    }}
                    className=' text-sm font-normal text-black mt-2 p-4 h-10 min-w-[300px] rounded-xl ' placeholder='Enter your password' />

            </div>
            <button onClick={submitData} className='bg-blue-500 text-white text-sm font-semibold w-[300px] rounded-xl shadow  h-10'>
                Sign In
            </button>

        </div>
    )
}

export default Login
