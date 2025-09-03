import React from 'react'
import ProjectCard from '../Components/Projects/ProjectCard'

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
  },{
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, ]

  // gsap.registerPlugin(ScrollTrigger)

  // useGSAP(function () {
  //   gsap.from('.hero', {
  //     height: '100px',
  //     stagger:{
  //       amount: 1
  //     },
  //     scrollTrigger: {
  //       trigger: ".lol",
  //       markers: true,
  //       start: "top 100%",
  //       end: 'bottom -1000px',
  //       scrub: 1
  //     }
  //   })
  // })



  return (
    <div className='lg:p-4 '>
      <div className=' pt-[45vh] '>
        <h1 className='uppercase lg:text-[9vw] text-[20vw] lg:text-left text-center font-[font2] '>Projets</h1>
      </div>

      <div className='lg:-mt-10 -mt-6 lol'>
        {
          projects.map((elem,idx) => {
            return <div key={idx} className=' hero w-full lg:h-[600px] h-[500px] lg:gap-4 gap-2 lg:mb-4 flex lg:flex-row flex-col '   >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Projects