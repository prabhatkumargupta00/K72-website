import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {
  
  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg'
  ]
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger: imageDivRef.current,
        // markers: true,
        start:"top 15%",
        end: "top -92%",
        scrub: 2,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        anticipatePin:true,
        onUpdate: function(elem){
          let imageIndex = (Math.floor(elem.progress * (imageArray.length)));
          if (imageIndex < 1){
            imageRef.current.src = imageArray[imageIndex]
          }else{
            imageRef.current.src = imageArray[imageIndex -1]
          }
        }
      }
    })
  })




  return (
    <div>
      <div className='section1 relative py-1'>
        <div ref={imageDivRef} className='py-1 lg:h-[20vw] lg:w-[15vw] h-50 w-35 rounded-2xl lg:rounded-4xl overflow-hidden  absolute lg:top-[18%] left-[35%]'>
          <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className=' relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[25vh]' >
            <h1 className='text-[17vw] text-center uppercase leading-[18vw]' >
              Soixan7e douze
            </h1>
          </div>
          <div className='lg:pl-[45%] not-lg:px-2 mt-18'>
            <p className='lg:text-4xl text-xl not-lg:leading-6 '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C'est pour ça qu'on s'engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">
      </div>
    </div>
  )
}

export default Agence