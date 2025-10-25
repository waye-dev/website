"use client"

import { useRef, useState, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Folder } from "./folder"
import { FolderContentOne } from "./folder-content-one"
import { FolderContentTwo } from "./folder-content-two"
import { FolderContentThree } from "./folder-content-three"
import { FolderContentFour } from "./folder-content-four"
import {
    setInitialState,
    createZoomInAnimation,
    createFolderTransitions,
    createZoomOutAnimation,
    calculateTotalDuration,
    calculateScrollPositionForFolder
} from "./animations"

const FOLDER_CONFIG = [
    {
        label: "Ideological Factors",
        fillColor: "#f1ecd6",
        backgroundColor: "bg-[#f1ecd6]",
        content: FolderContentOne,
    },
    {
        label: "Structural Factors",
        fillColor: "#ffffff",
        backgroundColor: "bg-white",
        content: FolderContentTwo,
    },
    {
        label: "Financial Factors",
        fillColor: "#d9d9d9",
        backgroundColor: "bg-[#d9d9d9]",
        content: FolderContentThree,
    },
    {
        label: "Practical Factors",
        fillColor: "#c4def8",
        backgroundColor: "bg-[#c4def8]",
        content: FolderContentFour,
    }
]

const TAB_CONFIG = {
    TOTAL_WIDTH_PERCENTAGE: 95,
    OVERLAP_PERCENTAGE: 15,
} as const

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP)

function calculateTabLayout(folderCount: number, containerWidth: number, folderWidthPercent: number = 0.88) {
    const { TOTAL_WIDTH_PERCENTAGE, OVERLAP_PERCENTAGE } = TAB_CONFIG
    const actualFolderWidth = containerWidth * folderWidthPercent
    const totalAvailableWidth = (actualFolderWidth * TOTAL_WIDTH_PERCENTAGE) / 100
    const tabWidth = totalAvailableWidth / (folderCount - OVERLAP_PERCENTAGE / 100 * (folderCount - 1))
    const overlapPx = (tabWidth * OVERLAP_PERCENTAGE) / 100

    const tabs = []
    let currentPosition = 0

    for (let i = 0; i < folderCount; i++) {
        tabs.push({
            width: tabWidth,
            leftPosition: currentPosition
        })
        currentPosition += tabWidth - overlapPx
    }

    return tabs
}

export const Folders = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const foldersWrapperRef = useRef<HTMLDivElement>(null)
    const folderRefs = useRef<(HTMLDivElement | null)[]>([])
    const contentRefs = useRef<(HTMLDivElement | null)[]>([])

    const [tabLayout, setTabLayout] = useState(() =>
        calculateTabLayout(FOLDER_CONFIG.length, 1200)
    )
    const [navbarHeight, setNavbarHeight] = useState(0)

    useEffect(() => {
        const updateLayout = () => {
            setTabLayout(calculateTabLayout(FOLDER_CONFIG.length, window.innerWidth * 0.92))

            // Measure navbar height
            const navbar = document.querySelector('nav')
            if (navbar) {
                setNavbarHeight(navbar.offsetHeight)
            }
        }

        updateLayout()
        window.addEventListener('resize', updateLayout)
        return () => window.removeEventListener('resize', updateLayout)
    }, [])

    const handleTabClick = (folderIndex: number) => {
        const contents = contentRefs.current.filter((ref): ref is HTMLDivElement => ref !== null)
        if (!containerRef.current || contents.length === 0) return

        const scrollTrigger = ScrollTrigger.getById("folders-animation")
        if (!scrollTrigger) return

        const targetProgress = calculateScrollPositionForFolder(folderIndex, contents)
        const totalDuration = calculateTotalDuration(contents)
        const progress = targetProgress / totalDuration

        const scrollPosition = scrollTrigger.start + (scrollTrigger.end - scrollTrigger.start) * progress

        gsap.to(window, {
            scrollTo: scrollPosition,
            duration: 1,
            ease: "power2.inOut"
        })
    }

    useGSAP(() => {
        if (!containerRef.current || !foldersWrapperRef.current) return

        const folders = folderRefs.current.filter((ref): ref is HTMLDivElement => ref !== null)
        const contents = contentRefs.current.filter((ref): ref is HTMLDivElement => ref !== null)

        if (folders.length === 0) return

        const refs = {
            wrapper: foldersWrapperRef.current,
            folders,
            contents
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                id: "folders-animation",
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${calculateTotalDuration(contents) * window.innerHeight}`,
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        })

        setInitialState(refs)

        createZoomInAnimation(tl, refs)
        createFolderTransitions(tl, refs)
        createZoomOutAnimation(tl, refs)

        return () => {
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
                        const tabDimensions = tabLayout[index]

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
                                tabWidth={tabDimensions.width}
                                tabLeftPosition={tabDimensions.leftPosition}
                                navbarHeight={navbarHeight}
                                onTabClick={() => handleTabClick(index)}
                            >
                                <ContentComponent />
                            </Folder>
                        )
                    })}
            </div>
        </div>
    )
}