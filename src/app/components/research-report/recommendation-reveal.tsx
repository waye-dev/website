"use client"

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import BackdropImage from '../../assets/images/Hill-backdrop.png'
import Girl from '../../assets/images/Girl.png'
import RipLargeL from '../../assets/images/rip-large-l.png'
import RipLargeR from '../../assets/images/rip-large-r.png'

gsap.registerPlugin(ScrollTrigger)

export const RecommendationReveal = () => {
    const container = useRef<HTMLDivElement>(null)
    const girlRip = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const initScrollTrigger = () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top top',
                    end: '+=200%',
                    pin: true,
                    scrub: true,
                    // markers: true,
                },
            })

            tl.to(girlRip.current, {
                y: 2000,
                ease: 'none',
                duration: 1,
            })
        }

        if (container.current && girlRip.current) {
            setTimeout(() => {
                initScrollTrigger()
                ScrollTrigger.refresh()
            }, 100)
        }
    }, { scope: container, dependencies: [] })

    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div ref={container} className="h-screen w-full relative">
            <div>
                <div className="absolute h-full w-full">
                    <Image src={BackdropImage} alt="" fill className="object-cover" />
                </div>
                <div className="absolute h-full w-full flex items-center justify-center">
                    <div className="text-center text-blue-custom-900 space-y-1 md:space-y-3 font-inknutAntiqua">
                        <h3 className='text-[28px]'>Recommendations</h3>
                        <p className='text-[24px] md:text-[32px]'>
                            From Tyranny to sustainable <br />Permissionlessness
                        </p>
                    </div>
                </div>
            </div>

            <div ref={girlRip} className='absolute top-0 left-1/2 -translate-x-1/2 will-change-transform'>
                <Image src={Girl} width={280} height={180} alt='border' />
            </div>

            {/* Uncomment if needed */}
            {/* <div className='h-full w-full flex items-center justify-between'>
                <div>
                    <Image src={RipLargeL} alt='' fill />
                </div>
                <div>
                    <Image src={RipLargeR} alt='' fill />
                </div>
            </div> */}
        </div>
    )
}