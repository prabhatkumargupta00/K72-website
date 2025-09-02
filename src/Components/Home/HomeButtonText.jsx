import React from 'react'
import { Link } from 'react-router-dom'

const HomeButtonText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-6 cursor-pointer '>
      <div className='text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase border-5 lg:pt-4 leading-[6vw] border-white rounded-full px-10' >
        <Link className='text-[6vw]' to="/projects" >Projects</Link>
      </div>
      <div className='text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]  uppercase border-5 lg:pt-4 leading-[6vw] border-white rounded-full px-10' >
        <Link className='text-[6vw]' to="/agence" >Agence</Link>

      </div>
    </div>
  )
}

export default HomeButtonText