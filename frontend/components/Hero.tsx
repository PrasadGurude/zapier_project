"use client"
import React from 'react'
import { PrimaryButton } from './buttons/PrimaryButton'
import { LinkButton } from './buttons/LinkButton'

export const Hero = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center h-auto'>
            <div className=' text-center text-5xl font-semibold text-gray-900 w-5/6 pt-10'>
                Automate as fast as you can type
            </div>
            <div className=' text-center text-gray-900 pt-7'>
                The most connected AI orchestration platform
                Build and ship AI workflows in minutes—no IT bottlenecks, no complexity. Just results.
            </div>
            <div className="flex pt-10 gap-4 justify-center items-center">
                <PrimaryButton size='big' onClick={()=>{}} >Get Started free</PrimaryButton>
                <LinkButton onClick={()=>{}}> <button className='font-bold bg-slate-200 py-2 px-4 rounded-2xl'>Contact Sales </button> </LinkButton>
            </div>
        </div>
    )
}
