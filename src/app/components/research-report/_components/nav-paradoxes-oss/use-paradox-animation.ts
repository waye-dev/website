import { useState, useEffect, useRef } from 'react'
import { paradoxData } from './data'

export const useParadoxAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isInFooter, setIsInFooter] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [passedLines, setPassedLines] = useState<Set<number>>(new Set())

  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<HTMLDivElement>(null)
  const legendRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !headerRef.current || !linesRef.current || !legendRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const headerRect = headerRef.current.getBoundingClientRect()
      const legendRect = legendRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const middleLine = windowHeight / 2

      const isCompletelyPastSection = containerRect.bottom < middleLine

      const isBeforeSection = headerRect.top > middleLine

      const shouldAnimate = headerRect.bottom < middleLine && !isCompletelyPastSection
      const shouldShowFooter = middleLine >= legendRect.top && middleLine <= legendRect.bottom && !isCompletelyPastSection

      if (isCompletelyPastSection) {
        setScrollProgress(1)
        setIsAnimating(false)
        setIsInFooter(true)
        setIsTransitioning(false)

        const allLines = new Set<number>()
        for (let i = 0; i < paradoxData.length; i++) {
          allLines.add(i)
        }
        setPassedLines(allLines)
      } else if (isBeforeSection) {
        setScrollProgress(0)
        setIsAnimating(false)
        setIsInFooter(false)
        setIsTransitioning(false)
        setPassedLines(new Set())
      } else if (shouldShowFooter) {
        if (!isTransitioning && !isInFooter) {
          setIsTransitioning(true)
          setIsAnimating(true)

          setTimeout(() => {
            setIsAnimating(false)
            setIsInFooter(true)
            setIsTransitioning(false)
          }, 600)
        }

        const allLines = new Set<number>()
        for (let i = 0; i < paradoxData.length; i++) {
          allLines.add(i)
        }
        setPassedLines(allLines)
      } else if (shouldAnimate) {
        if (isInFooter || isTransitioning) {
          setIsInFooter(false)
          setIsTransitioning(false)
        }

        setIsAnimating(true)

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
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isInFooter, isTransitioning])

  const getAvatarPosition = (avatarId: string) => {
    if (!isAnimating || !linesRef.current || isInFooter) return null

    if (isTransitioning && legendRef.current) {
      const footerAvatars = legendRef.current.querySelectorAll('[data-avatar]')
      const avatarIndex = ['new', 'mid', 'senior'].indexOf(avatarId)

      if (avatarIndex !== -1 && footerAvatars[avatarIndex]) {
        const footerAvatarRect = footerAvatars[avatarIndex].getBoundingClientRect()
        const footerXPercent = ((footerAvatarRect.left + footerAvatarRect.width / 2) / window.innerWidth) * 100
        const footerYPixels = footerAvatarRect.top + footerAvatarRect.height / 2

        return {
          xPercent: footerXPercent,
          yPixels: footerYPixels,
          isAtFooter: true
        }
      }
    }

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
      isAtFooter: false
    }
  }

  return {
    scrollProgress,
    isAnimating,
    isInFooter,
    isTransitioning,
    passedLines,
    containerRef,
    headerRef,
    linesRef,
    legendRef,
    getAvatarPosition
  }
}