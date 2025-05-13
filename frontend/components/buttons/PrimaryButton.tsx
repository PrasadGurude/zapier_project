"use client"

import React, { ReactNode } from 'react'

export const PrimaryButton = ({ children, onClick, size = "small" }: { children: ReactNode, onClick: () => void, size?: "big" | "small" }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={`bg-orange-500 hover:bg-orange-700 hover:cursor-pointer text-white ${
                    size === "big" 
                        ? 'font-bold py-2 px-4' 
                        : 'py-1 px-2 text-sm'
                } rounded-2xl`}
            >
                {children}
            </button>
        </div>
    )
}