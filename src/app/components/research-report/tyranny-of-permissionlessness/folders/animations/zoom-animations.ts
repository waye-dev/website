import gsap from "gsap"
import { AnimationRefs, CONFIG, INITIAL_STATE, getInitialScale, getScaledFolderWidth, getInitialHeightScale } from "./initial-state"

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
            left: 0,
            right: 0,
            xPercent: 0,
            duration: zoomDuration,
            ease: "power2.inOut"
        }, "<")

        // Also animate the folder inner container back to full height
        const folderInner = folder.querySelector('.folder-inner-container') as HTMLElement
        if (folderInner) {
            tl.to(folderInner, {
                scaleY: 1,
                duration: zoomDuration,
                ease: "power2.inOut"
            }, "<")
        }

        // Reset tab label scale to normal
        const tabLabel = folder.querySelector('.tab-label') as HTMLElement
        if (tabLabel) {
            tl.to(tabLabel, {
                scaleY: 1,
                duration: zoomDuration,
                ease: "power2.inOut"
            }, "<")
        }
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
            overflowY: 'auto',
            userSelect: 'text',
            touchAction: 'auto'
        })
    }
}

export function createZoomOutAnimation(
    tl: gsap.core.Timeline,
    { wrapper, folders, contents }: AnimationRefs
) {
    const isMobile = window.innerWidth < 768
    const zoomOutDuration = isMobile ? 1.5 : 1.2

    const initialScale = getInitialScale()
    const folderWidth = getScaledFolderWidth()
    const heightScale = getInitialHeightScale()

    tl.to(wrapper, {
        scale: initialScale,
        x: 0,
        y: 0,
        duration: zoomOutDuration,
        ease: "power2.inOut"
    })

    folders.forEach((folder, i) => {
        tl.to(folder, {
            width: `${folderWidth}%`,
            left: '50%',
            right: 'auto',
            xPercent: -50,
            yPercent: 0,
            duration: zoomOutDuration,
            ease: "power2.inOut"
        }, "<")

        const folderInner = folder.querySelector('.folder-inner-container') as HTMLElement
        if (folderInner) {
            tl.to(folderInner, {
                scaleY: isMobile ? heightScale : 1,
                duration: zoomOutDuration,
                ease: "power2.inOut"
            }, "<")
        }

        const tabLabel = folder.querySelector('.tab-label') as HTMLElement
        if (tabLabel) {
            tl.to(tabLabel, {
                scaleY: isMobile ? 1 / heightScale : 1,
                duration: zoomOutDuration,
                ease: "power2.inOut"
            }, "<")
        }
    })

    const lastContent = contents[contents.length - 1]
    if (lastContent) {
        tl.to(lastContent, {
            pointerEvents: 'none',
            overflowY: 'hidden',
            opacity: 0,
            visibility: 'hidden',
            duration: 0.3,
            ease: "power2.in"
        }, "<0.5")
    }
}
