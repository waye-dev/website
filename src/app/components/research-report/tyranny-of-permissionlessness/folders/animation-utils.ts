import gsap from "gsap"

// Configuration constants
export const CONFIG = {
    INITIAL_SCALE: 0.6,
    INITIAL_STACK_OFFSET: 2,
    NEXT_FOLDER_Y_OFFSET: 85,
} as const

// Initial state definition
export const INITIAL_STATE = {
    wrapper: { scale: CONFIG.INITIAL_SCALE, x: 0, y: 0 },
    folder: { yPercent: 0 },
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

    // Zoom in to full screen
    tl.to(wrapper, {
        scale: zoomPosition.scale,
        x: zoomPosition.x,
        y: zoomPosition.y,
        duration: 1,
        ease: "power2.inOut"
    })

    // After zoom: position future folders at bottom, show first folder content
    tl.call(() => {
        // Position all future folders (except first) at bottom
        folders.forEach((folder, i) => {
            if (i > 0) {
                gsap.set(folder, { yPercent: CONFIG.NEXT_FOLDER_Y_OFFSET })
            }
        })

        // Show and enable scrolling on first folder
        if (contents[0]) {
            gsap.set(contents[0], {
                pointerEvents: 'auto',
                overflowY: 'auto',
                opacity: 1,
                visibility: 'visible',
                scrollTop: 0
            })
        }
    })
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
            const transitionDuration = 1.2

            // Hide and disable current content
            tl.call(() => {
                gsap.set(content, {
                    pointerEvents: 'none',
                    overflowY: 'hidden',
                    opacity: 0,
                    visibility: 'hidden'
                })
            })

            // Slide next folder up from bottom to center
            tl.to(nextFolder, {
                yPercent: 0,
                duration: transitionDuration,
                ease: "power1.inOut"
            })

            // Keep current folder centered while next folder slides over it
            tl.to(folder, {
                yPercent: 0,
                duration: transitionDuration,
                ease: "power1.inOut"
            }, "<")

            // Show and enable scrolling on next folder
            tl.call(() => {
                if (nextContent) {
                    gsap.set(nextContent, {
                        pointerEvents: 'auto',
                        overflowY: 'auto',
                        opacity: 1,
                        visibility: 'visible',
                        scrollTop: 0
                    })
                }
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

    // Reset all content to initial state BEFORE zoom out
    tl.call(() => {
        contents.forEach((content) => {
            gsap.set(content, INITIAL_STATE.content)
        })

        // CRITICAL FIX: Reset folder positions BEFORE animating
        // Otherwise folders animate from yPercent: 85 instead of 0
        folders.forEach((folder) => {
            gsap.set(folder, { yPercent: 0 })
        })
    })

    // Animate wrapper scale down to exact initial state
    tl.to(wrapper, {
        ...INITIAL_STATE.wrapper,
        duration: zoomOutDuration,
        ease: "power2.inOut"
    })

    // Folders are already at yPercent: 0, so they stay centered during zoom out
}

export function calculateTotalDuration(contents: HTMLDivElement[]): number {
    const isMobile = window.innerWidth < 768
    let totalDuration = isMobile ? 1.5 : 1.2 // Initial zoom in

    contents.forEach((content, index) => {
        const contentHeight = getContentHeight(content)
        const scrollDuration = contentHeight / window.innerHeight
        // Only add transition buffer if there's a next folder
        const transitionBuffer = index < contents.length - 1 ? 1.2 : 0
        totalDuration += scrollDuration + transitionBuffer
    })

    totalDuration += isMobile ? 1.5 : 1.2 // Final zoom out
    return totalDuration
}
