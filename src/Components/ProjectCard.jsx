import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className=' group relative transition-all hover:rounded-[4vw] overflow-hidden lg:w-1/2 w-full h-full' >
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='absolute opacity-0 transition-all bg-black/20 group-hover:opacity-100 top-0 left-0 flex items-center justify-center w-full h-full '>
                    <h2 className='font-[font1] px-8 pt-2 uppercase text-6xl border-4 rounded-full border-white text-white' > voir le projet</h2>
                </div>
            </div>
            <div className=' group relative transition-all hover:rounded-[4vw] overflow-hidden lg:w-1/2 w-full h-full' >
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='absolute opacity-0 transition-all bg-black/20 group-hover:opacity-100 top-0 left-0 flex items-center justify-center w-full h-full '>
                    <h2 className='font-[font1] px-8 pt-2 uppercase text-6xl border-4 rounded-full border-white text-white' > voir le projet</h2>
                </div>
            </div>
        </>
       
    )
}

export default ProjectCard