import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext, useRef } from 'react'
import { NavBarContext } from '../../Context/NavContext';

const FullNav = () => {

  const [navOpen, setNavOpen] = useContext(NavBarContext);

  const fullScreenRef = useRef(false)
  const fullNavLinksRef = useRef(null);

  // useGSAP(function () {
  //   const tl = gsap.timeline()
  //   tl.from('.stairing', {
  //     height: 0,
  //     stagger: {
  //       amount: -0.25
  //     },
  //   })
  //   tl.from(fullNavLinksRef.current, {
  //     opacity: 0
  //   })
  //   tl.from('.link', {
  //     opacity: 0,
  //     rotateX: 90,
  //     stagger: {
  //       amount: 0.25
  //     },
  //   })

  //   tl.pause()

  //   if(navOpen){
  //     fullScreenRef.current.style.display = 'block',
  //     tl.play()
  //   }else{
  //     fullScreenRef.current.style.display = 'none',
  //     tl.reverse()
  //   }



  // },[navOpen])

  function gsapAnimation(){
    const tl= gsap.timeline();
    gsap.to('.fullScreenNav', {
      display: 'block'
    })
    tl.to('.stairing',{
      height: '100%',
      stagger:{
        amount: 0.2
      }
    })
    tl.to('.navLink',{
      delay: -0.5,
      opacity: 1
    })
    tl.to(".link",{
      opacity: 1,
      rotateX : 0,
      stagger:{
        amount :0.2
      }
    })
  }

  function gsapAnimationReverse(){
    const tl= gsap.timeline();
    tl.to(".link",{
      opacity: 0,
      rotateX : 90,
      stagger:{
        amount :0.1
      }
    })
    tl.to('.stairing',{
      height: 0,
      stagger:{
        amount: 0.1
      }
    })
    gsap.to('.navLink',{
      opacity: 0
    })
    tl.to('.fullScreenNav',{
      display: 'none',
    })
  }

  useGSAP(function(){
    if(navOpen){
      gsapAnimation()
    }else{
      gsapAnimationReverse()
    }
  },[navOpen])



  return (
    <div ref={fullScreenRef} id='fullScreenNav' className=" fullScreenNav overflow-hidden text-white h-screen w-full absolute z-50">
      <div className='h-screen w-full fixed'>
        <div className='h-full w-full flex'>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className='relative'>
        <div className=' navLink flex w-full justify-between items-start p-2' >
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
              <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </div>
          <div onClick={()=>{
            setNavOpen(false)
          }} className='h-22 w-22 relative m-1 cursor-pointer '>
            <div className='h-30 w-1 absolute -rotate-45 origin-top bg-[#D3FD50]'></div>
            <div className='h-30 w-1 absolute rotate-45 origin-top bg-[#D3FD50] right-0'></div>
          </div>
        </div>
        <div className='py-16' id='all-links'>
          <div className='link origin-top relative  border-t-1 border-white'>
            <h1 className='text-center  font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase '>Projects</h1>
            <div className=' moveLink bg-[#d3fd50] text-black absolute flex top-0'>
              <div className=' moveX flex flex-nowrap w-full' >
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour tout voir</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour tout voir</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
              <div className=' moveX flex flex-nowrap w-full' >
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour tout voir</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour tout voir</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>

            </div>
          </div>
          <div className='link origin-top relative  border-t-1 border-white'>
            <h1 className='text-center  font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase '>agence</h1>
            <div className=' moveLink bg-[#d3fd50] text-black absolute flex top-0'>
              <div className=' moveX flex flex-nowrap w-full' >
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour tout savoir</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour tout savoir</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
              <div className=' moveX flex flex-nowrap w-full' >
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour tout savoir</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour tout savoir</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>

            </div>
          </div>
          <div className='link origin-top relative  border-t-1 border-white'>
            <h1 className='text-center  font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase '>contact</h1>
            <div className=' moveLink bg-[#d3fd50] text-black absolute flex top-0'>
              <div className=' moveX flex flex-nowrap w-full' >
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour envoyer un fax</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour envoyer un fax</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
              <div className=' moveX flex flex-nowrap w-full' >
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour envoyer un fax</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>pour envoyer un fax</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>

            </div>
          </div>
          <div className='link origin-top relative  border-y-1 border-white'>
            <h1 className='text-center  font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase '>Bogue</h1>
            <div className=' moveLink bg-[#d3fd50] text-black absolute flex top-0'>
              <div className=' moveX flex flex-nowrap w-full' >
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>lire les articles</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>lire les articles</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
              <div className=' moveX flex flex-nowrap w-full' >
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>lire les articles</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase'>lire les articles</h2>
                <img className='shrink-0 rounded-full mt-2 h-24 w-72 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullNav