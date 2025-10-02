"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Folder } from "./folder"
import { FolderContentOne } from "./folder-content-one"
import { FolderContentTwo } from "./folder-content-two"
import { FolderContentThree } from "./folder-content-three"
import { FolderContentFour } from "./folder-content-four"

// Folder configuration data
const FOLDER_CONFIG = [
    {
        label: "Ideological Factors",
        fillColor: "#f1ecd6",
        backgroundColor: "bg-[#f1ecd6]",
        content: FolderContentOne,
        xPosition: 50 // Center by default
    },
    {
        label: "Structural Factors", 
        fillColor: "#ffffff",
        backgroundColor: "bg-white",
        content: FolderContentTwo,
        xPosition: 100 // Center by default
    },
    {
        label: "Financial Factors",
        fillColor: "#d9d9d9", 
        backgroundColor: "bg-[#d9d9d9]",
        content: FolderContentThree,
        xPosition: 50 // Center by default
    },
    {
        label: "Practical Factors",
        fillColor: "#c4def8",
        backgroundColor: "bg-[#c4def8]", 
        content: FolderContentFour,
        xPosition: 50 // Center by default
    }
]

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Configuration constants - adjust these to control the animation
const CONFIG = {
    INITIAL_SCALE: 0.6, // Scale of folders before zoom (0.6 = 60%)
    INITIAL_STACK_OFFSET: 2, // Small offset for stacked folders before zoom (in %)
    NEXT_FOLDER_Y_OFFSET: 85, // How much of next folder is visible at bottom after zoom (in %)
} as const

export const Folders = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const foldersWrapperRef = useRef<HTMLDivElement>(null)
    const folderRefs = useRef<(HTMLDivElement | null)[]>([])
    const contentRefs = useRef<(HTMLDivElement | null)[]>([])

    const calculateZoomPosition = () => {
        // Simply return scale 1 to fill viewport
        return {
            scale: 1,
            x: 0,
            y: 0
        }
    }

    useGSAP(() => {
        if (!containerRef.current || !foldersWrapperRef.current) return

        const folders = folderRefs.current.filter((ref): ref is HTMLDivElement => ref !== null)
        const contents = contentRefs.current.filter((ref): ref is HTMLDivElement => ref !== null)

        if (folders.length === 0) return

        // Calculate scroll heights for each folder's content
        const getContentHeight = (content: HTMLDivElement) => {
            const scrollHeight = content.scrollHeight
            const isMobile = window.innerWidth < 768
            const minHeight = isMobile ? window.innerHeight * 2 : window.innerHeight * 1.5
            return Math.max(scrollHeight, minHeight)
        }

        // Calculate total scroll distance with proper buffers
        const calculateTotalDuration = () => {
            const isMobile = window.innerWidth < 768
            let totalDuration = isMobile ? 1.5 : 1.2 // Initial zoom in

            contents.forEach((content) => {
                const contentHeight = getContentHeight(content)
                const scrollDuration = contentHeight / window.innerHeight
                const transitionBuffer = isMobile ? 1 : 0.8 // Buffer for folder transitions
                totalDuration += scrollDuration + transitionBuffer
            })

            totalDuration += isMobile ? 1.5 : 1.2 // Final zoom out
            return totalDuration
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                id: "folders-animation",
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${calculateTotalDuration() * window.innerHeight}`,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        })

        // Set initial wrapper scale
        gsap.set(foldersWrapperRef.current, { scale: CONFIG.INITIAL_SCALE })

        // Initial state: Stack all folders together behind each other
        // Future folders need higher z-index so they slide over previous ones
        folders.forEach((folder, i) => {
            gsap.set(folder, {
                yPercent: i === 0 ? 0 : CONFIG.NEXT_FOLDER_Y_OFFSET, // First folder centered, rest at bottom
                zIndex: 100 + i, // Higher number = higher z-index, future folders always on top
            })
        })

        // Disable pointer events and hide content initially
        contents.forEach((content) => {
            gsap.set(content, {
                pointerEvents: 'none',
                overflowY: 'hidden',
                opacity: 0 // Hide content until zoomed
            })
        })

        // Get zoom position (scale 1 = full screen)
        const zoomPosition = calculateZoomPosition()

        // Zoom in to full screen
        tl.to(foldersWrapperRef.current, {
            scale: zoomPosition.scale,
            x: zoomPosition.x,
            y: zoomPosition.y,
            duration: 1,
            ease: "power2.inOut"
        })

        // Show and enable scrolling on first folder
        tl.call(() => {
            if (contents[0]) {
                gsap.set(contents[0], {
                    pointerEvents: 'auto',
                    overflowY: 'auto',
                    opacity: 1
                })
            }
        })

        // Animate through each folder
        folders.forEach((folder, index) => {
            const content = contents[index]
            const nextFolder = folders[index + 1]
            const nextContent = contents[index + 1]

            if (content) {
                const contentHeight = getContentHeight(content)
                const scrollDuration = contentHeight / window.innerHeight

                // Scroll through content
                tl.to(content, {
                    scrollTop: contentHeight - content.clientHeight,
                    duration: scrollDuration,
                    ease: "none"
                })

                // Transition to next folder
                if (nextFolder) {
                    // Hide and disable current content
                    tl.call(() => {
                        gsap.set(content, {
                            pointerEvents: 'none',
                            overflowY: 'hidden',
                            opacity: 0
                        })
                    })

                    // Slide next folder up from bottom to center (0%)
                    // and slide current folder up as well to keep it centered
                    tl.to(nextFolder, {
                        yPercent: 0,
                        duration: 0.6,
                        ease: "power2.inOut"
                    }, "+=0.2")

                    // Keep current folder centered while next folder slides over it
                    tl.to(folder, {
                        yPercent: 0,
                        duration: 0.6,
                        ease: "power2.inOut"
                    }, "<") // "<" means start at same time as previous animation

                    // Show and enable scrolling on next folder
                    tl.call(() => {
                        if (nextContent) {
                            gsap.set(nextContent, {
                                pointerEvents: 'auto',
                                overflowY: 'auto',
                                opacity: 1
                            })
                        }
                    })
                }
            }
        })

        // Hide last content
        tl.call(() => {
            if (contents[contents.length - 1]) {
                gsap.set(contents[contents.length - 1], {
                    pointerEvents: 'none',
                    overflowY: 'hidden',
                    opacity: 0
                })
            }
        })

        // Zoom out animation back to initial scale
        const zoomOutDuration = window.innerWidth < 768 ? 1.5 : 1.2
        tl.to(foldersWrapperRef.current, {
            scale: CONFIG.INITIAL_SCALE,
            x: 0,
            y: 0,
            duration: zoomOutDuration,
            ease: "power2.inOut"
        })

        return () => {
            // Cleanup ScrollTrigger on unmount
            ScrollTrigger.getById("folders-animation")?.kill()
        }
    }, { scope: containerRef, dependencies: [] })

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-blue-custom-1200"
            style={{ isolation: 'isolate' }}
        >
            <div
                ref={foldersWrapperRef}
                className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
                style={{ isolation: 'isolate' }}
            >
                    {FOLDER_CONFIG.map((config, index) => {
                        const ContentComponent = config.content
                        return (
                            <Folder
                                key={index}
                                ref={(el) => {
                                    if (el) {
                                        folderRefs.current[index] = el.folderRef
                                        contentRefs.current[index] = el.contentRef
                                    }
                                }}
                                position={index}
                                label={config.label}
                                fillColor={config.fillColor}
                                backgroundColor={config.backgroundColor}
                                xPosition={config.xPosition}
                            >
                                <ContentComponent />
                            </Folder>
                        )
                    })}
            </div>
        </div>
    )
}