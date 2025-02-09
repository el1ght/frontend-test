import Link from 'next/link'
import React from 'react'

import { ButtonProps } from '@/app/types'

const Button: React.FC<ButtonProps> = ({ children, href }) => {
    return (
        <Link
            href={href}
            className="transition bg-[#FF8B37] text-white font-[600] hover:bg-[#FFAC70] disabled:bg-[#FF8B37] active:bg-[#E87928] lg:px-[140px] lg:py-[20px] rounded-[12px] md:px-[100px] md:py-[15px] sm:px-[60px] sm:py-[10px] max-sm:px-[100px] max-sm:py-[16px] max-sm:flex-1 "
        >
            {children}
        </Link>
    )
}

export default Button
