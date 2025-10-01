import React, { useEffect, useRef } from 'react'
import { ParadoxDataItem, Avatar } from './types'

interface ConnectingLinesProps {
  paradoxData: ParadoxDataItem[]
  avatars: Avatar[]
  passedLines: Set<number>
  isAnimating: boolean
  scrollProgress?: number
}

const ConnectingLines: React.FC<ConnectingLinesProps> = ({ paradoxData, avatars, passedLines, isAnimating, scrollProgress = 0 }) => {
  const svgRef = useRef<SVGSVGElement>(null)

  const generatePath = (roleId: string) => {
    if (!isAnimating) return ''

    const points: { x: number; y: number }[] = []
    const lines = document.querySelectorAll('[data-line]')
    const svgContainer = svgRef.current?.parentElement

    if (!svgContainer || lines.length === 0) return ''

    const svgRect = svgContainer.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const absoluteMiddleY = windowHeight / 2

    const firstLine = lines[0]?.getBoundingClientRect()
    const lastLine = lines[lines.length - 1]?.getBoundingClientRect()

    if (!firstLine || !lastLine) return ''

    const sectionTop = firstLine.top
    const sectionHeight = lastLine.bottom - firstLine.top
    const viewportProgress = Math.max(0, Math.min(1, (absoluteMiddleY - sectionTop) / sectionHeight))

    const totalLines = lines.length
    const currentLineFloat = viewportProgress * (totalLines - 1)

    const trailBehind = 15
    const trailAhead = 0.1

    const endLineFloat = currentLineFloat + trailAhead
    const startLineFloat = Math.max(0, currentLineFloat - trailBehind)

    const startIndex = Math.floor(startLineFloat)
    const endIndex = Math.min(totalLines - 1, Math.ceil(endLineFloat))

    const lineContainers = document.querySelectorAll('[data-line-container]')

    for (let index = startIndex; index <= endIndex; index++) {
      if (index >= lineContainers.length || index >= paradoxData.length) continue

      const lineContainer = lineContainers[index]
      const value = paradoxData[index][roleId as keyof ParadoxDataItem] as number
      const xPercent = Math.max(0, Math.min(100, (value / 10) * 100))

      const lineRect = lineContainer.getBoundingClientRect()

      const lineWidth = lineRect.width
      const absoluteX = lineRect.left + (xPercent / 100) * lineWidth

      const relativeX = absoluteX - svgRect.left
      const relativeY = lineRect.top - svgRect.top + lineRect.height / 2

      points.push({
        x: relativeX,
        y: relativeY
      })
    }

    if (points.length < 2) return ''

    let path = `M ${points[0].x} ${points[0].y}`

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1]
      const curr = points[i]

      const midY = (prev.y + curr.y) / 2
      const cp1x = prev.x
      const cp1y = midY
      const cp2x = curr.x
      const cp2y = midY

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`
    }

    return path
  }

  const updatePaths = () => {
    if (!svgRef.current) return

    avatars.forEach((avatar) => {
      const pathElement = svgRef.current?.querySelector(`#path-${avatar.id}`) as SVGPathElement
      if (pathElement) {
        const newPath = generatePath(avatar.id)
        if (newPath) {
          pathElement.setAttribute('d', newPath)
        }
      }
    })
  }

  useEffect(() => {
    let animationFrame: number

    const handleUpdate = () => {
      updatePaths()
      if (isAnimating) {
        animationFrame = requestAnimationFrame(handleUpdate)
      }
    }

    if (isAnimating) {
      animationFrame = requestAnimationFrame(handleUpdate)
    } else {
      updatePaths()
    }

    const handleResize = () => {
      updatePaths()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [paradoxData, passedLines, isAnimating, scrollProgress])

  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800
  const svgContainer = svgRef.current?.parentElement
  const absoluteViewportMiddle = windowHeight / 2

  let relativeMiddleY = absoluteViewportMiddle
  if (svgContainer) {
    const containerRect = svgContainer.getBoundingClientRect()
    relativeMiddleY = absoluteViewportMiddle - containerRect.top
  }

  const gradientHeight = windowHeight * 0.4

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        willChange: 'contents', // GPU
        transform: 'translate3d(0, 0, 0)'
      }}
      suppressHydrationWarning
    >
      <svg
        ref={svgRef}
        className="w-full h-full"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          willChange: 'auto',
          transform: 'translate3d(0, 0, 0)'
        }}
        preserveAspectRatio="none"
        suppressHydrationWarning
      >
        <defs>
          <linearGradient id="trail-reveal-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.1" />
            <stop offset="20%" stopColor="white" stopOpacity="0.4" />
            <stop offset="40%" stopColor="white" stopOpacity="0.7" />
            <stop offset="60%" stopColor="white" stopOpacity="0.9" />
            <stop offset="70%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="1" />
            <stop offset="85%" stopColor="white" stopOpacity="0.5" />
            <stop offset="90%" stopColor="white" stopOpacity="0.2" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="smooth-trail-mask" suppressHydrationWarning>
            <rect width="100%" height="100%" fill="black" />
            <rect
              x="0"
              y={Math.max(0, relativeMiddleY - gradientHeight * 0.9)}
              width="100%"
              height={gradientHeight}
              fill="url(#trail-reveal-gradient)"
              suppressHydrationWarning
            />
          </mask>
        </defs>
        {avatars.map((avatar) => (
          <path
            key={`line-${avatar.id}`}
            id={`path-${avatar.id}`}
            stroke={avatar.color}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.8}
            mask="url(#smooth-trail-mask)"
            style={{
              transition: 'opacity 0.3s ease'
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default ConnectingLines