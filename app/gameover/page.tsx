'use client'

import React, { useEffect, useState } from 'react'
import Button from '../components/ui/Button'
import Image from 'next/image'

const GameOver: React.FC = () => {
    const [award, setAward] = useState(0)

    useEffect(() => {
        const storedAward = sessionStorage.getItem('totalAward')
        if (storedAward) {
            setAward(parseInt(storedAward))
        }
    }, [])

    return (
        <div className="bg-[white] flex items-center justify-center h-screen max-sm:flex-col max-sm:text-center">
            <Image
                src="/hand.png"
                alt="logo"
                width={200}
                height={150}
                className="lg:w-[440px] lg:h-[350px] md:w-[300px] md:h-[250px] sm:w-[250px] sm:h-[200px]"
            />
            <div className="lg:flex lg:flex-col items-start lg:ml-[120px] md:ml-[60px] sm:ml-[40px] max-sm:mt-[42px] max-sm:w-full">
                <p className="text-[#1C1C21]/[.5] font-semibold text-[32px]">
                    Total score:
                </p>
                <h1 className="lg:text-[60px] font-bold lg:mb-[64px] lg:leading-[65px] md:text-[40px] md:mb-[40px] md:leading-[45px] sm:text-[30px] max-sm:text-[32px] max-sm:mb-[100px] sm:mb-[30px] sm:leading-[35px] max-sm:leading-[40px]">
                    ${award} earned
                </h1>
                <Button href="/quiz">Start</Button>
            </div>
        </div>
    )
}

export default GameOver
