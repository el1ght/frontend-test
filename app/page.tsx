import Image from 'next/image'
import Button from './components/ui/Button'
import React from 'react'

const Home: React.FC = () => {
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
                <h1 className="lg:text-[60px] font-bold lg:mb-[64px] lg:leading-[65px] md:text-[40px] md:mb-[40px] md:leading-[45px] sm:text-[30px] max-sm:text-[32px] max-sm:mb-[100px] sm:mb-[30px] sm:leading-[35px] max-sm:leading-[40px]">
                    Who wants to be <br /> a millionaire?
                </h1>
                <Button href="/quiz">Start</Button>
            </div>
        </div>
    )
}

export default Home
