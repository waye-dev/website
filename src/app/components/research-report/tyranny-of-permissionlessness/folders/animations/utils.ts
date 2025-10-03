export function getContentHeight(content: HTMLDivElement): number {
    const inner = content.querySelector('.content-inner') as HTMLElement
    if (!inner) return window.innerHeight
    const scrollHeight = inner.scrollHeight || window.innerHeight * 2
    const isMobile = window.innerWidth < 768
    const minHeight = isMobile ? window.innerHeight * 0.8 : window.innerHeight * 0.5
    return Math.max(scrollHeight, minHeight)
}

export function calculateTotalDuration(contents: HTMLDivElement[]): number {
    const isMobile = window.innerWidth < 768
    let totalDuration = isMobile ? 1.5 : 1.2 // Initial zoom in

    contents.forEach((content, index) => {
        const contentHeight = getContentHeight(content)
        const scrollDuration = (contentHeight / window.innerHeight) * 0.75
        // Only add transition buffer if there's a next folder
        const transitionBuffer = index < contents.length - 1 ? 0.4 : 0
        totalDuration += scrollDuration + transitionBuffer
    })

    totalDuration += isMobile ? 1.5 : 1.2 // Final zoom out
    return totalDuration
}

export function calculateScrollPositionForFolder(
    folderIndex: number,
    contents: HTMLDivElement[]
): number {
    const isMobile = window.innerWidth < 768
    let scrollPosition = isMobile ? 1.5 : 1.2 // Initial zoom in duration

    // Add duration for all previous folders
    for (let i = 0; i < folderIndex; i++) {
        const content = contents[i]
        if (!content) continue

        const contentHeight = getContentHeight(content)
        const scrollDuration = (contentHeight / window.innerHeight) * 0.75
        const transitionBuffer = 0.4 // Time for folder transition

        scrollPosition += scrollDuration + transitionBuffer
    }


    scrollPosition += 0.2

    return scrollPosition
}
