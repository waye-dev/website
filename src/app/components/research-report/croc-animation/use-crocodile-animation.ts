import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useCrocodileAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const crocRef = useRef<HTMLSpanElement>(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Set initial jaw positions (open)
            gsap.set("#top-jaw", { transformOrigin: "right center", rotation: -15, y: -90 })
            gsap.set("#bottom-jaw", { transformOrigin: "right center", rotation: 15, y: 150, x: -26 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                }
            })

            // Move crocodile from left (hidden) to right edge of container (40% of timeline)
            tl.fromTo(crocRef.current,
                {
                    x: () => {
                        const croc = crocRef.current
                        if (!croc) return "-100%"
                        return `-${croc.offsetWidth}px`
                    }
                },
                {
                    x: () => {
                        const container = containerRef.current
                        const croc = crocRef.current
                        if (!container || !croc) return "0px"
                        // Stop when right edge of croc touches right edge of container
                        return `${container.offsetWidth - croc.offsetWidth}px`
                    },
                    ease: "none",
                    duration: 0.4
                },
                0
            )

            // Bottom jaw closes at 50% of timeline
            .to("#bottom-jaw", {
                rotation: 0,
                x: 0,
                ease: "power2.inOut",
                duration: 0.2
            }, 0.5)
            .to("#bottom-jaw", {
                y: 0,
                ease: "power2.inOut",
                duration: 0.18
            }, 0.5)

            // Top jaw closes at 75% of timeline
            .to("#top-jaw", {
                rotation: 0,
                y: 0,
                ease: "power2.inOut",
                duration: 0.2
            }, 0.75)
        })

        return () => ctx.revert()
    }, [])

    return {
        containerRef,
        crocRef
    }
}
