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
            // Set initial jaw positions
            gsap.set("#top", { transformOrigin: "bottom left", rotation: -14, y: 5 })
            gsap.set("#bottom", { transformOrigin: "top left", rotation: 30 })

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

            // Move crocodile from left to right across the screen
            tl.fromTo(crocRef.current,
                { x: "-100%" },
                {
                    x: () => {
                        const container = containerRef.current
                        const croc = crocRef.current
                        if (!container || !croc) return "0"
                        const gap = window.innerWidth < 768 ? 0 : 0
                        return `${container.offsetWidth - croc.offsetWidth + gap}px`
                    },
                    ease: "none"
                },
                0
            )
            // Animate bottom jaw closing
            .to("#bottom", {
                rotation: -2,
                ease: "power2.inOut"
            }, 0.3)
            // Animate top jaw closing
            .to("#top", {
                rotation: 8,
                ease: "power2.inOut"
            }, 0.3)
        })

        return () => ctx.revert()
    }, [])

    return {
        containerRef,
        crocRef
    }
}
