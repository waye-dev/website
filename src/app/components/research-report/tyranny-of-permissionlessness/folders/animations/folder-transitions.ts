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

        const inner = content.querySelector('.content-inner') as HTMLElement
        const contentHeight = getContentHeight(content)
        const scrollDuration = contentHeight / window.innerHeight
        // Use the same adjusted duration as in utils
        const adjustedScrollDuration = Math.max(scrollDuration * 0.3, 0.5)

        // Scroll through the content
        if (inner && contentHeight > window.innerHeight) {
            tl.to(inner, {
                yPercent: -((contentHeight - window.innerHeight) / contentHeight) * 100,
                duration: adjustedScrollDuration,
                ease: 'none'
            })
        } else {
            tl.to({}, { duration: adjustedScrollDuration })
        }

        if (nextFolder) {
            const transitionDuration = 0.4

            tl.set(nextContent, {
                pointerEvents: 'none',
                overflowY: 'hidden',
                opacity: 0,
                visibility: 'hidden'
            })

            tl.to(nextFolder, {
                yPercent: 0,
                duration: transitionDuration,
                ease: "power1.inOut"
            })

            tl.to(folder, {
                yPercent: 0,
                duration: transitionDuration,
                ease: "power1.inOut"
            }, "<")

            tl.to(content, {
                pointerEvents: 'none',
                overflowY: 'hidden',
                opacity: 0,
                visibility: 'hidden',
                duration: 0.3,
                ease: "power2.in"
            }, "<0.1")

            tl.to(nextContent, {
                opacity: 1,
                visibility: 'visible',
                duration: 0.3,
                ease: "power2.out"
            })

            tl.set(nextContent, {
                pointerEvents: 'auto',
                overflowY: 'auto',
                scrollTop: 0,
                userSelect: 'text',
                touchAction: 'auto'
            })
        }
    })
}
