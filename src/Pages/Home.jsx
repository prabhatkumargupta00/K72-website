import React from 'react'
import Video from '../Components/Home/Video'
import HomeHeroText from '../Components/Home/HomeHeroText'
import HomeButtonText from '../Components/Home/HomeButtonText'

const Home = () => {
  return (
    <div className='text-white'>
        <div className='h-screen w-screen fixed'>
            <Video />
        </div>
        <div className=' h-screen  w-screen relative flex flex-col justify-between'>
            <HomeHeroText/>
            <HomeButtonText/>
        </div>

    </div>
  )
}

export default Home