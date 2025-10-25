import gsap from "gsap"

export const CONFIG = {
    INITIAL_STACK_OFFSET: 2,
    NEXT_FOLDER_Y_OFFSET: 85,
} as const

export function getInitialScale() {
    if (typeof window === 'undefined') return 0.6
    const isMobile = window.innerWidth < 768
    return isMobile ? 1 : 0.6
}

export function getScaledFolderWidth() {
    if (typeof window === 'undefined') return 88
    const isMobile = window.innerWidth < 768
    return isMobile ? 95 : 88
}

export function getInitialHeightScale() {
    if (typeof window === 'undefined') return 1
    const isMobile = window.innerWidth < 768
    return isMobile ? 0.7 : 1
}

export const INITIAL_STATE = {
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
    const initialScale = getInitialScale()
    const folderWidth = getScaledFolderWidth()
    const heightScale = getInitialHeightScale()
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    gsap.set(wrapper, { scale: initialScale, x: 0, y: 0 })

    folders.forEach((folder, i) => {
        // Center all folders (both mobile and desktop)
        gsap.set(folder, {
            yPercent: 0,
            width: `${folderWidth}%`,
            left: '50%',
            right: 'auto',
            xPercent: -50,
            zIndex: 200 + i,
        })

        // Apply height scale to folder inner container (includes tab + body)
        const folderInner = folder.querySelector('.folder-inner-container') as HTMLElement
        if (folderInner) {
            gsap.set(folderInner, {
                scaleY: isMobile ? heightScale : 1,
                transformOrigin: 'bottom center'
            })
        }

        // Compensate tab label text scale on mobile to restore normal proportions
        const tabLabel = folder.querySelector('.tab-label') as HTMLElement
        if (tabLabel && isMobile) {
            gsap.set(tabLabel, {
                scaleY: 1 / heightScale, // If container is 0.7, text should be 1/0.7 ≈ 1.43
                transformOrigin: 'center'
            })
        }
    })

    contents.forEach((content) => {
        gsap.set(content, INITIAL_STATE.content)
    })
}
