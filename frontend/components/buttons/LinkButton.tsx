import React, { ReactNode } from 'react'

export const LinkButton = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className= "  hover:bg-slate-200 hover:cursor-pointer text-sm py-1 px-2 rounded"
            >
                {children}
            </button>
        </div>
    )
}
