import { useState, useEffect, useRef } from 'react'
import { paradoxData } from './data'

export const useParadoxAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isInFooter, setIsInFooter] = useState(false)
  const [passedLines, setPassedLines] = useState<Set<number>>(new Set())

  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<HTMLDivElement>(null)
  const legendRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !headerRef.current || !linesRef.current || !legendRef.current) return

      const headerRect = headerRef.current.getBoundingClientRect()
      const legendRect = legendRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const middleLine = windowHeight / 2

      const shouldAnimate = headerRect.bottom < middleLine

      const shouldStop = middleLine >= legendRect.top

      if (shouldStop) {
        setIsAnimating(false)
        setIsInFooter(true)
        // Keep all lines as passed when in footer
        const allLines = new Set<number>()
        for (let i = 0; i < paradoxData.length; i++) {
          allLines.add(i)
        }
        setPassedLines(allLines)
      } else if (shouldAnimate) {
        setIsAnimating(true)
        setIsInFooter(false)

        const lines = linesRef.current.querySelectorAll('[data-line]')
        const newPassedLines = new Set<number>()

        lines.forEach((line, index) => {
          const lineRect = line.getBoundingClientRect()
          const lineMiddle = lineRect.top + lineRect.height / 2

          if (middleLine > lineMiddle) {
            newPassedLines.add(index)
          }
        })

        setPassedLines(newPassedLines)

        if (lines.length > 0) {
          const firstLine = lines[0].getBoundingClientRect()
          const lastLine = lines[lines.length - 1].getBoundingClientRect()

          const totalRange = lastLine.top - firstLine.top
          const currentPosition = Math.max(0, middleLine - firstLine.top)
          const progress = Math.min(1, Math.max(0, currentPosition / totalRange))
          setScrollProgress(progress)
        }
      } else {
        setScrollProgress(0)
        setIsAnimating(false)
        setIsInFooter(false)
        setPassedLines(new Set())
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getAvatarPosition = (avatarId: string) => {
    // Only show moving avatars during animation, not in footer
    if (!isAnimating || !linesRef.current) return null

    const lines = linesRef.current.querySelectorAll('[data-line-container]')
    if (lines.length === 0) return null

    const totalLines = paradoxData.length
    const currentLineProgress = scrollProgress * (totalLines - 1)
    const currentLineIndex = Math.floor(currentLineProgress)
    const lineProgress = currentLineProgress - currentLineIndex

    const currentValue = currentLineIndex < totalLines
      ? paradoxData[currentLineIndex][avatarId as keyof typeof paradoxData[0]] as number
      : paradoxData[totalLines - 1][avatarId as keyof typeof paradoxData[0]] as number

    const nextValue = currentLineIndex + 1 < totalLines
      ? paradoxData[currentLineIndex + 1][avatarId as keyof typeof paradoxData[0]] as number
      : currentValue

    const interpolatedValue = currentValue + (nextValue - currentValue) * lineProgress

    const currentLineContainer = lines[Math.min(currentLineIndex, lines.length - 1)] as HTMLElement
    const lineRect = currentLineContainer.getBoundingClientRect()

    const valuePercent = Math.max(0, Math.min(100, (interpolatedValue / 10) * 100))
    const pixelPosition = lineRect.left + (valuePercent / 100) * lineRect.width

    const xPercent = (pixelPosition / window.innerWidth) * 100

    return {
      xPercent: Math.max(0, Math.min(100, xPercent)),
      isAtBottom: false
    }
  }

  return {
    scrollProgress,
    isAnimating,
    isInFooter,
    passedLines,
    containerRef,
    headerRef,
    linesRef,
    legendRef,
    getAvatarPosition
  }
}