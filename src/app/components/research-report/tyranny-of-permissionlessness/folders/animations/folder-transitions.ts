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

        tl.to({}, { duration: scrollDuration })

        if (nextFolder) {
            const transitionDuration = 0.8

            tl.set(nextContent, {
                pointerEvents: 'none',
                overflowY: 'hidden',
                opacity: 0,
                visibility: 'hidden'
            })

            tl.to(content, {
                pointerEvents: 'none',
                overflowY: 'hidden',
                opacity: 0,
                visibility: 'hidden',
                duration: 0.3,
                ease: "power2.in"
            })

            tl.to(nextFolder, {
                yPercent: 0,
                duration: transitionDuration,
                ease: "power1.inOut"
            }, "<0.2")

            tl.to(folder, {
                yPercent: 0,
                duration: transitionDuration,
                ease: "power1.inOut"
            }, "<")

            tl.to(nextContent, {
                opacity: 1,
                visibility: 'visible',
                duration: 0.3,
                ease: "power2.out"
            })

            tl.set(nextContent, {
                pointerEvents: 'auto',
                overflowY: 'auto',
                scrollTop: 0
            })
        }
    })
}
