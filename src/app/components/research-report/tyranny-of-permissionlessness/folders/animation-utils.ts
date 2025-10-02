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

    // Position future folders at bottom - use fromTo for reversibility
    folders.forEach((folder, i) => {
        if (i > 0) {
            tl.fromTo(folder,
                { yPercent: 0 },
                {
                    yPercent: CONFIG.NEXT_FOLDER_Y_OFFSET,
                    duration: 0.01,
                    ease: "none"
                }
            )
        }
    })

    // Show first folder content - use fromTo for reversibility
    if (contents[0]) {
        tl.fromTo(contents[0],
            {
                pointerEvents: 'none',
                overflowY: 'hidden',
                opacity: 0,
                visibility: 'hidden',
            },
            {
                pointerEvents: 'auto',
                overflowY: 'auto',
                opacity: 1,
                visibility: 'visible',
                duration: 0.01,
                ease: "none"
            }, "<"
        )
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

    // Reset all content - use fromTo for reversibility
    contents.forEach((content) => {
        tl.fromTo(content,
            {
                pointerEvents: 'auto',
                overflowY: 'auto',
                opacity: 1,
                visibility: 'visible',
            },
            {
                ...INITIAL_STATE.content,
                duration: 0.01,
                ease: "none"
            }
        )
    })

    // Reset folder positions - use fromTo for reversibility
    folders.forEach((folder, i) => {
        if (i > 0) {
            tl.fromTo(folder,
                { yPercent: CONFIG.NEXT_FOLDER_Y_OFFSET },
                {
                    yPercent: 0,
                    duration: 0.01,
                    ease: "none"
                }, "<"
            )
        }
    })

    // Animate wrapper scale down to exact initial state
    tl.to(wrapper, {
        ...INITIAL_STATE.wrapper,
        duration: zoomOutDuration,
        ease: "power2.inOut"
    })
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
