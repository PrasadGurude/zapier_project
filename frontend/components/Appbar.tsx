"use client"

import React from 'react'
import { LinkButton } from './buttons/LinkButton'
import { useRouter } from 'next/navigation'
import { PrimaryButton } from './buttons/PrimaryButton'

export const Appbar = () => {
    const router = useRouter()
  return (
    <div className='flex justify-between items-center bg-slate-50 p-4 border-b-1'>
        <div className='hover:cursor-pointer text-2xl font-extrabold' onClick={()=>{router.push("/")}}>
            Zapier
        </div>
        <div className='flex gap-4'>
            <LinkButton onClick={()=>{ router.push('/contact-sales') }} >Contact Sales</LinkButton>
            <LinkButton onClick={()=>{router.push('/login')}} >Login</LinkButton>
            <PrimaryButton onClick={()=>{router.push("/signup")}}>Sign Up</PrimaryButton>
        </div>
    </div>
  )
}
