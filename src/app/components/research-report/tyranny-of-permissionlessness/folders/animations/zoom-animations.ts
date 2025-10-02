import gsap from "gsap"
import { AnimationRefs, CONFIG, INITIAL_STATE } from "./initial-state"

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

export function createZoomOutAnimation(
    tl: gsap.core.Timeline,
    { wrapper, folders, contents }: AnimationRefs
) {
    const isMobile = window.innerWidth < 768
    const zoomOutDuration = isMobile ? 1.5 : 1.2

    // Hide last folder's content BEFORE zoom-out starts
    const lastContent = contents[contents.length - 1]
    if (lastContent) {
        tl.to(lastContent, {
            pointerEvents: 'none',
            overflowY: 'hidden',
            opacity: 0,
            visibility: 'hidden',
            duration: 0.3,
            ease: "power2.in"
        })
    }

    // Move folders back to center position (0) before scaling out
    // This creates smooth reverse: last folder slides down in reverse order
    folders.forEach((folder, i) => {
        if (i > 0) {
            tl.to(folder, {
                yPercent: 0,
                duration: 0.6,
                ease: "power2.in"
            }, i === 1 ? undefined : "<") // Stagger in reverse (4th, 3rd, 2nd)
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
