import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: 0,
      stagger:{
        amount: 0.4
      },
      scrollTrigger: {
        trigger: ".lol",
        markers: true,
        start: "top 100%",
        end: 'top -300%',
        scrub: true
      }
    })
  })



  return (
    <div className='p-4 '>
      <div className=' pt-[45vh] '>
        <h1 className='uppercase text-[9vw] font-[font2] '>Projets</h1>
      </div>

      <div className='-mt-10 lol'>
        {
          projects.map((elem,index) => {
            return <div key={index} className=' hero w-full h-[65vh] gap-4 mb-4 flex'  >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Projects