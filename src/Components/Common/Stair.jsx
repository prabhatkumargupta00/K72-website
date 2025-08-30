import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {

    const locate = useLocation()

    const pageRef = useRef(null);

    // console.log(locate.pathname)
    console.log(props)

    const StairParentRef = useRef(null);
    useGSAP(function () {
        const tl = gsap.timeline()
        tl.to(StairParentRef.current, {
            display: 'block'
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25
            },
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(StairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: "0%"
        })

        gsap.from(pageRef.current,{
            opacity:0,
            delay:1.2,
            scale: 1.2
        })
    }, [locate.pathname])

    return (

        <div>
            <div ref={StairParentRef} className='h-screen w-full fixed z-30 top-0'>
                <div className='h-screen w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stair