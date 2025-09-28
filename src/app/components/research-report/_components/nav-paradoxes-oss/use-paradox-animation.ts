import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
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

  const cachedRects = useRef<{
    container?: DOMRect
    header?: DOMRect
    legend?: DOMRect
    lines?: DOMRect[]
    timestamp?: number
  }>({})

  const rafRef = useRef<number | null>(null)
  const lastScrollTime = useRef<number>(0)

  const getCachedRects = useCallback(() => {
    const now = Date.now()
    const CACHE_DURATION = 16

    if (!cachedRects.current.timestamp || now - cachedRects.current.timestamp > CACHE_DURATION) {
      if (containerRef.current && headerRef.current && legendRef.current && linesRef.current) {
        cachedRects.current = {
          container: containerRef.current.getBoundingClientRect(),
          header: headerRef.current.getBoundingClientRect(),
          legend: legendRef.current.getBoundingClientRect(),
          lines: Array.from(linesRef.current.querySelectorAll('[data-line]')).map(el => el.getBoundingClientRect()),
          timestamp: now
        }
      }
    }

    return cachedRects.current
  }, [])

  const handleScrollThrottled = useCallback(() => {
    const now = Date.now()
    const THROTTLE_MS = 8

    if (now - lastScrollTime.current < THROTTLE_MS) return
    lastScrollTime.current = now

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      const rects = getCachedRects()
      if (!rects.container || !rects.header || !rects.legend) return

      const windowHeight = window.innerHeight
      const middleLine = windowHeight / 2

      const isCompletelyPastSection = rects.container.bottom < middleLine
      const isBeforeSection = rects.header.top > middleLine
      const shouldAnimate = rects.header.bottom < middleLine && !isCompletelyPastSection
      const shouldShowFooter = middleLine >= rects.legend.top && middleLine <= rects.legend.bottom && !isCompletelyPastSection

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

        const lines = rects.lines || []
        const newPassedLines = new Set<number>()

        lines.forEach((lineRect, index) => {
          const lineMiddle = lineRect.top + lineRect.height / 2
          if (middleLine > lineMiddle) {
            newPassedLines.add(index)
          }
        })

        setPassedLines(newPassedLines)

        if (lines.length > 0) {
          const firstLine = lines[0]
          const lastLine = lines[lines.length - 1]

          const totalRange = lastLine.top - firstLine.top
          const currentPosition = Math.max(0, middleLine - firstLine.top)
          const progress = Math.min(1, Math.max(0, currentPosition / totalRange))
          setScrollProgress(progress)
        }
      }
    })
  }, [getCachedRects, isInFooter, isTransitioning])

  useEffect(() => {
    window.addEventListener('scroll', handleScrollThrottled, { passive: true })
    handleScrollThrottled()

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScrollThrottled])

  const getAvatarPosition = useCallback((avatarId: string) => {
    if (!isAnimating || !linesRef.current || isInFooter || isTransitioning) return null

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
  }, [isAnimating, isInFooter, isTransitioning, scrollProgress])

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