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
