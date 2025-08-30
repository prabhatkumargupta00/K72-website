import React from 'react'
 
const Video = ({ClassName = ""}) => {

  return (
    
    <div className={`h-full w-full overflow-hidden ${ClassName} `}>
        <video className='h-full w-full object-cover' autoPlay loop muted src="/videoPlay.mp4"></video>
    </div>
  )
}

export default Video