"use client"

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react' 

import BackdropImage from '../../assets/images/Hill-backdrop.png'
import GirlRip from '../../assets/images/girl-rip.png'
import RipLargeL from '../../assets/images/rip-large-l.png'
import RipLargeR from '../../assets/images/rip-large-r.png'

gsap.registerPlugin(ScrollTrigger)

export const RecommendationReveal = () => {
    const container = useRef<HTMLDivElement>(null)
    const girlRip = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: container.current,
            start: 'top top',
            end: '+=200%',
            pin: true,
            // pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress
                const y = progress * 2000

                gsap.set(girlRip.current, { y, ease: "none" })
            }
        })
    }, { scope: container })

    return (
        <div ref={container} className="h-screen w-full relative">
            <div ref={container}>
                <div className="absolute h-full w-full">
                    <Image src={BackdropImage} alt="" fill className="object-cover" />
                </div>
                <div className="absolute h-full w-full flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">
                        Recommendations
                    </div>
                </div>
            </div>

            <div ref={girlRip} className='absolute -top-[67rem]'>
                <Image src={GirlRip} alt=''/>
            </div>

            {/* <div className=' h-full w-full flex items-center justify-between'>
                <div>
                    <Image src={RipLargeL} alt='' fill/>
                </div>
                <div>
                    <Image src={RipLargeR} alt='' fill/>
                </div>
            </div> */}
            
        </div>
    )
}