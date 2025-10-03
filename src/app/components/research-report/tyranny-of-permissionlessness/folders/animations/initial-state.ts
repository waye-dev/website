import gsap from "gsap"

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

export const CONFIG = {
    INITIAL_SCALE: isMobile ? 0.8 : 0.6,
    INITIAL_STACK_OFFSET: 2,
    NEXT_FOLDER_Y_OFFSET: 85,
    SCALED_FOLDER_WIDTH: 88,
} as const

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
    gsap.set(wrapper, INITIAL_STATE.wrapper)

    folders.forEach((folder, i) => {
        gsap.set(folder, {
            ...INITIAL_STATE.folder,
            zIndex: 100 + i,
        })
    })

    contents.forEach((content) => {
        gsap.set(content, INITIAL_STATE.content)
    })
}
