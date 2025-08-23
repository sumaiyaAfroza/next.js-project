'use client'

import React from 'react'
import {FaGoogle} from "react-icons/fa";
import {signIn} from "next-auth/react";
import {redirect} from "next/navigation";


export default function SocialLogin() {
const handleGoogle =async providerName => {
    // console.log(providerName)
    const result = await  signIn(providerName,{callbackUrl: '/'})
    console.log(result)
}

    return (
        <div className='mx-auto' >
        <button className='border-2 p-2 gap-2 flex justify-center items-center' onClick={() => handleGoogle('google')}>
            <FaGoogle></FaGoogle>   Login With Google
        </button>
        </div>
    )
}
