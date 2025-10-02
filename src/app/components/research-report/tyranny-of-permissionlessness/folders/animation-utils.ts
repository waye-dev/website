import gsap from "gsap"

// Configuration constants
export const CONFIG = {
    INITIAL_SCALE: 0.6,
    INITIAL_STACK_OFFSET: 2,
    NEXT_FOLDER_Y_OFFSET: 85,
    SCALED_FOLDER_WIDTH: 88, // Width percentage when folders are scaled out
} as const

// Initial state definition
export const INITIAL_STATE = {
    wrapper: { scale: CONFIG.INITIAL_SCALE, x: 0, y: 0 },
    folder: { yPercent: 0, width: `${CONFIG.SCALED_FOLDER_WIDTH}%` },
    content: {
        pointerEvents: 'none' as const,
        overflowY: 'hidden' as const,
        opacity: 0,
        visibility: 'hidden' as const,
        scrollTop: 0
    }
} as const

export interface AnimationRefs {
    wrapper: HTMLDivElement
    folders: HTMLDivElement[]
    contents: HTMLDivElement[]
}

export function setInitialState({ wrapper, folders, contents }: AnimationRefs) {
    // Set initial wrapper scale
    gsap.set(wrapper, INITIAL_STATE.wrapper)

    // Initial state: All folders centered and stacked
    // Future folders need higher z-index so they slide over previous ones
    folders.forEach((folder, i) => {
        gsap.set(folder, {
            ...INITIAL_STATE.folder,
            zIndex: 100 + i,
        })
    })

    // Disable pointer events and hide content initially
    contents.forEach((content) => {
        gsap.set(content, INITIAL_STATE.content)
    })
}


export function createZoomInAnimation(
    tl: gsap.core.Timeline,
    { wrapper, folders, contents }: AnimationRefs
) {
    const zoomPosition = { scale: 1, x: 0, y: 0 }

    const zoomDuration = 1

    // Ensure first folder content is hidden during scale
    if (contents[0]) {
        tl.set(contents[0], {
            pointerEvents: 'none',
            overflowY: 'hidden',
            opacity: 0,
            visibility: 'hidden'
        })
    }

    // Zoom in to full screen and expand folders to 100% width simultaneously
    tl.to(wrapper, {
        scale: zoomPosition.scale,
        x: zoomPosition.x,
        y: zoomPosition.y,
        duration: zoomDuration,
        ease: "power2.inOut"
    })

    folders.forEach((folder) => {
        tl.to(folder, {
            width: "100%",
            duration: zoomDuration,
            ease: "power2.inOut"
        }, "<")
    })

    // Position future folders at bottom - use fromTo for reversibility
    // Animate all folders at once with smooth duration
    folders.forEach((folder, i) => {
        if (i > 0) {
            tl.fromTo(folder,
                { yPercent: 0 },
                {
                    yPercent: CONFIG.NEXT_FOLDER_Y_OFFSET,
                    duration: 0.6,
                    ease: "power2.out"
                },
                "<" // Start at the same time for all folders
            )
        }
    })

    // Make first folder content visible ONLY after y-transition completes
    if (contents[0]) {
        // First show content visually
        tl.to(contents[0], {
            opacity: 1,
            visibility: 'visible',
            duration: 0.3,
            ease: "power2.out"
        })

        // Then enable scrolling after visibility completes
        tl.set(contents[0], {
            pointerEvents: 'auto',
            overflowY: 'auto'
        })
    }
}


export function getContentHeight(content: HTMLDivElement): number {
    const scrollHeight = content.scrollHeight
    const isMobile = window.innerWidth < 768
    const minHeight = isMobile ? window.innerHeight * 2 : window.innerHeight * 1.5
    return Math.max(scrollHeight, minHeight)
}


export function createFolderTransitions(
    tl: gsap.core.Timeline,
    { folders, contents }: AnimationRefs
) {
    folders.forEach((folder, index) => {
        const content = contents[index]
        const nextFolder = folders[index + 1]
        const nextContent = contents[index + 1]

        if (!content) return

        const contentHeight = getContentHeight(content)
        const scrollDuration = contentHeight / window.innerHeight

        // Add scroll duration to timeline (user scrolls naturally)
        tl.to({}, { duration: scrollDuration })

        // Transition to next folder
        if (nextFolder) {
            const transitionDuration = 0.8

            // Ensure next content is completely locked before transition starts
            tl.set(nextContent, {
                pointerEvents: 'none',
                overflowY: 'hidden',
                opacity: 0,
                visibility: 'hidden'
            })

            // Hide current content and slide next folder simultaneously
            tl.to(content, {
                pointerEvents: 'none',
                overflowY: 'hidden',
                opacity: 0,
                visibility: 'hidden',
                duration: 0.3,
                ease: "power2.in"
            })

            // Slide next folder up from bottom to center
            tl.to(nextFolder, {
                yPercent: 0,
                duration: transitionDuration,
                ease: "power1.inOut"
            }, "<0.2")

            // Keep current folder centered while next folder slides over it
            tl.to(folder, {
                yPercent: 0,
                duration: transitionDuration,
                ease: "power1.inOut"
            }, "<")

            // AFTER y-transition completes, show content visually
            tl.to(nextContent, {
                opacity: 1,
                visibility: 'visible',
                duration: 0.3,
                ease: "power2.out"
            })

            // Enable scrolling ONLY after all visual transitions complete
            tl.set(nextContent, {
                pointerEvents: 'auto',
                overflowY: 'auto',
                scrollTop: 0
            })
        }
    })
}

export function createZoomOutAnimation(
    tl: gsap.core.Timeline,
    { wrapper, folders, contents }: AnimationRefs
) {
    const isMobile = window.innerWidth < 768
    const zoomOutDuration = isMobile ? 1.5 : 1.2

    // Hide content BEFORE zoom-out starts
    contents.forEach((content) => {
        tl.to(content, {
            pointerEvents: 'none',
            overflowY: 'hidden',
            opacity: 0,
            visibility: 'hidden',
            duration: 0.3,
            ease: "power2.in"
        })
    })

    // Reset folder positions
    folders.forEach((folder, i) => {
        if (i > 0) {
            tl.fromTo(folder,
                { yPercent: CONFIG.NEXT_FOLDER_Y_OFFSET },
                {
                    yPercent: 0,
                    duration: 0.01,
                    ease: "none"
                }
            )
        }
    })

    // Animate wrapper scale down and folders width simultaneously
    tl.to(wrapper, {
        ...INITIAL_STATE.wrapper,
        duration: zoomOutDuration,
        ease: "power2.inOut"
    })

    folders.forEach((folder) => {
        tl.to(folder, {
            width: `${CONFIG.SCALED_FOLDER_WIDTH}%`,
            duration: zoomOutDuration,
            ease: "power2.inOut"
        }, "<")
    })
}

export function calculateTotalDuration(contents: HTMLDivElement[]): number {
    const isMobile = window.innerWidth < 768
    let totalDuration = isMobile ? 1.5 : 1.2 // Initial zoom in

    contents.forEach((content, index) => {
        const contentHeight = getContentHeight(content)
        const scrollDuration = contentHeight / window.innerHeight
        // Only add transition buffer if there's a next folder - reduced from 1.2 to 0.8
        const transitionBuffer = index < contents.length - 1 ? 0.8 : 0
        totalDuration += scrollDuration + transitionBuffer
    })

    totalDuration += isMobile ? 1.5 : 1.2 // Final zoom out
    return totalDuration
}
