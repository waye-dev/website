import { useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useCrocodileAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const crocRef = useRef<HTMLSpanElement>(null)

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach(st => {
                if (st.vars.id === 'crocodile-animation') {
                    st.kill(true)
                }
            })
        }
    }, [])

    useGSAP(() => {
        if (typeof window === 'undefined') return
        if (!containerRef.current || !crocRef.current) return

        // Kill existing crocodile ScrollTriggers
        ScrollTrigger.getAll().forEach(st => {
            if (st.vars.id === 'crocodile-animation') {
                st.kill(true)
            }
        })

        const ctx = gsap.context(() => {
            if (!containerRef.current || !crocRef.current) return

            // Set initial jaw positions (open) - scoped to crocRef
            const topJaw = crocRef.current.querySelector("#top-jaw")
            const bottomJaw = crocRef.current.querySelector("#bottom-jaw")

            if (!topJaw || !bottomJaw) return

            gsap.set(topJaw, { transformOrigin: "right center", rotation: -15, y: -90 })
            gsap.set(bottomJaw, { transformOrigin: "right center", rotation: 15, y: 150, x: -26 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'crocodile-animation',
                    trigger: containerRef.current,
                    scroller: window,
                    start: "bottom bottom",
                    end: "+=100%",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                    preventOverlaps: true,
                    fastScrollEnd: true,
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
                        return `${container.offsetWidth - croc.offsetWidth - 380}px`
                    },
                    ease: "none",
                    duration: 0.4
                },
                0
            )

            // Bottom jaw closes at 40% of crocodile movement (16% of timeline)
            .to(bottomJaw, {
                rotation: 0,
                x: 0,
                ease: "power2.inOut",
                duration: 0.1
            }, 0.20)
            .to(bottomJaw, {
                y: 0,
                ease: "power2.inOut",
                duration: 0.08
            }, 0.20)

            // Top jaw closes at 60% of crocodile movement (24% of timeline)
            .to(topJaw, {
                rotation: 0,
                y: 0,
                ease: "power2.inOut",
                duration: 0.1
            }, 0.30)
        }, containerRef)

        return () => {
            ctx.revert()
            ScrollTrigger.getAll().forEach(st => {
                if (st.vars.id === 'crocodile-animation') {
                    st.kill(true)
                }
            })
        }
    }, [])

    // Force refresh on dependencies change
    useEffect(() => {
        if (containerRef.current) {
            ScrollTrigger.refresh()
        }
    }, [containerRef])

    return {
        containerRef,
        crocRef
    }
}
