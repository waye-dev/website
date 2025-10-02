export function getContentHeight(content: HTMLDivElement): number {
    const scrollHeight = content.scrollHeight
    const isMobile = window.innerWidth < 768
    const minHeight = isMobile ? window.innerHeight * 2 : window.innerHeight * 1.5
    return Math.max(scrollHeight, minHeight)
}

export function calculateTotalDuration(contents: HTMLDivElement[]): number {
    const isMobile = window.innerWidth < 768
    let totalDuration = isMobile ? 1.5 : 1.2 // Initial zoom in

    contents.forEach((content, index) => {
        const contentHeight = getContentHeight(content)
        const scrollDuration = contentHeight / window.innerHeight
        // Only add transition buffer if there's a next folder
        const transitionBuffer = index < contents.length - 1 ? 0.8 : 0
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
        const scrollDuration = contentHeight / window.innerHeight
        const transitionBuffer = 0.8 // Time for folder transition

        scrollPosition += scrollDuration + transitionBuffer
    }


    scrollPosition += 0.2

    return scrollPosition
}
