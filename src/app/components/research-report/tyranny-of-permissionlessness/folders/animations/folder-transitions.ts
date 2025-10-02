import gsap from "gsap"
import { AnimationRefs } from "./initial-state"
import { getContentHeight } from "./utils"

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
