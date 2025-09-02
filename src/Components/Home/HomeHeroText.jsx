import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] lg:pt-5 pt-80 text-center'>
            <div className='lg:text-[9vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[9vw] leading-10' >
                L'étincelle
            </div>
            <div className='lg:text-[9vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[9vw] leading-10' >
                qui
                <div className='h-[7vw] lg:mb-5 mb-1 overflow-hidden rounded-full'>
                    <Video ClassName='rounded-full'/>
                </div>
                génère
            </div>
            <div className='lg:text-[9vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[9vw] leading-10' >
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText