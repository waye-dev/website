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
                        // Stop before reaching the right edge of container
                        return `${container.offsetWidth - croc.offsetWidth - 400}px`
                    },
                    ease: "none",
                    duration: 0.4
                },
                0
            )

            // Bottom jaw closes at 40% of crocodile movement (16% of timeline)
            .to("#bottom-jaw", {
                rotation: 0,
                x: 0,
                ease: "power2.inOut",
                duration: 0.1
            }, 0.20)
            .to("#bottom-jaw", {
                y: 0,
                ease: "power2.inOut",
                duration: 0.08
            }, 0.20)

            // Top jaw closes at 60% of crocodile movement (24% of timeline)
            .to("#top-jaw", {
                rotation: 0,
                y: 0,
                ease: "power2.inOut",
                duration: 0.1
            }, 0.30)
        })

        return () => ctx.revert()
    }, [])

    return {
        containerRef,
        crocRef
    }
}
