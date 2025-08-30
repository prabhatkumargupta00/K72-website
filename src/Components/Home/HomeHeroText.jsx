import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-5 text-center'>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]' >
                L'étincelle
            </div>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]' >
                qui
                <div className='h-[7vw] mb-5 overflow-hidden rounded-full'>
                    <Video ClassName='rounded-full'/>
                </div>
                génère
            </div>
            <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]' >
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText