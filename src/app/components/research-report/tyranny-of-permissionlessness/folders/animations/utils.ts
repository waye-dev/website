export function getContentHeight(content: HTMLDivElement): number {
    const scrollHeight = content.scrollHeight
    const isMobile = window.innerWidth < 768
    const minHeight = isMobile ? window.innerHeight * 1.2 : window.innerHeight * 1
    return Math.max(scrollHeight, minHeight)
}

export function calculateTotalDuration(contents: HTMLDivElement[]): number {
    const isMobile = window.innerWidth < 768
    let totalDuration = isMobile ? 1.5 : 1.2

    contents.forEach((content, index) => {
        const contentHeight = getContentHeight(content)
        const scrollDuration = contentHeight / window.innerHeight
        const adjustedScrollDuration = Math.max(scrollDuration * 0.3, 0.5)
        const transitionBuffer = index < contents.length - 1 ? 0.6 : 0
        totalDuration += adjustedScrollDuration + transitionBuffer
    })

    totalDuration += isMobile ? 1.5 : 1.2
    return totalDuration
}

export function calculateScrollPositionForFolder(
    folderIndex: number,
    contents: HTMLDivElement[]
): number {
    const isMobile = window.innerWidth < 768
    let scrollPosition = isMobile ? 1.5 : 1.2

    for (let i = 0; i < folderIndex; i++) {
        const content = contents[i]
        if (!content) continue

        const contentHeight = getContentHeight(content)
        const scrollDuration = contentHeight / window.innerHeight
        const adjustedScrollDuration = Math.max(scrollDuration * 0.3, 0.5)
        const transitionBuffer = 0.6

        scrollPosition += adjustedScrollDuration + transitionBuffer
    }

    scrollPosition += 0.1

    return scrollPosition
}