'use client'

import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function SocialLogin() {
    const handleGoogle = async providerName => {
        const result = await signIn(providerName, { callbackUrl: '/' })
        console.log(result)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Welcome Back
                </h2>
                <p className="text-gray-500 mb-8 text-sm">
                    Sign in with your Google account to continue
                </p>

                <button
                    onClick={() => handleGoogle('google')}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 px-4
          hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                    <FaGoogle className="text-red-500 text-xl" />
                    <span className="font-medium text-gray-700">Continue with Google</span>
                </button>

                <p className="text-xs text-gray-400 mt-6">
                    By signing in, you agree to our{" "}
                    <span className="text-blue-500 hover:underline cursor-pointer">Terms</span>
                    {" "}and{" "}
                    <span className="text-blue-500 hover:underline cursor-pointer">Privacy Policy</span>.
                </p>
            </div>
        </div>
    )
}













// 'use client'
//
// import React from 'react'
// import {FaGoogle} from "react-icons/fa";
// import {signIn} from "next-auth/react";
//
// export default function SocialLogin() {
// const handleGoogle =async providerName => {
//     // console.log(providerName)
//     const result = await  signIn(providerName,{callbackUrl: '/'})
//     console.log(result)
//
//     return (
//         <div className='mx-auto' >
//         <button className='border-2 p-2 gap-2 flex justify-center items-center' onClick={() => handleGoogle('google')}>
//             <FaGoogle></FaGoogle>   Login With Google
//         </button>
//         </div>
//     )
// }
