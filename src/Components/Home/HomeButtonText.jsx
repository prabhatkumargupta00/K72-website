import React from 'react'
import { Link } from 'react-router-dom'

const HomeButtonText = () => {
  return (
    <div className=' relative font-[font2] flex items-center justify-center lg:gap-6 gap-4 cursor-pointer '>
      <p className=' absolute lg:text-base text-[13px] w-80 right-4  lg:bottom-[24vh] bottom-20   font-[font1] leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
      <div className='text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase lg:border-5 border-2 mb-3 lg:pt-4 pt-0.5 leading-[6vw] border-white rounded-full lg:px-10 px-4' >
        <Link className='text-[6vw]' to="/projects" >Projects</Link>
      </div>
      <div className='text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]  uppercase lg:border-5 border-2 mb-3 lg:pt-4 pt-0.5 leading-[6vw] border-white rounded-full lg:px-10 px-4' >
        <Link className='text-[6vw]' to="/agence" >Agence</Link>

      </div>
    </div>
  )
}

export default HomeButtonText