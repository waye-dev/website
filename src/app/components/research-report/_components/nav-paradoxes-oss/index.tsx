'use client'

import React, { useState, useEffect } from 'react'
import { paradoxData, avatars } from './data'
import { useParadoxAnimation } from './use-paradox-animation'
import AvatarHeader from './avatar-header'
import MovingAvatars from './moving-avatars'
import ParadoxLine from './paradox-line'
import FooterAvatars from './footer-avatars'
import MobileParadoxPage from './mobile'
import ConnectingLines from './connecting-lines'

const ParadoxVisualization: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const {
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
  } = useParadoxAnimation()

  useEffect(() => {
    setIsClient(true)

    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  if (!isClient) {
    return null
  }

  if (isMobile) {
    return <MobileParadoxPage />
  }

  return (
    <section ref={containerRef} className="w-full mx-auto relative pt-0">
      <AvatarHeader
        ref={headerRef}
        avatars={avatars}
        isAnimating={isAnimating}
        isInFooter={isInFooter}
        isTransitioning={isTransitioning}
      />

      <MovingAvatars
        avatars={avatars}
        isAnimating={isAnimating}
        isInFooter={isInFooter}
        isTransitioning={isTransitioning}
        getAvatarPosition={getAvatarPosition}
      />

      <div ref={linesRef} className="space-y-12 relative z-10 max-w-6xl mx-auto">
        <ConnectingLines
          paradoxData={paradoxData}
          avatars={avatars}
          passedLines={passedLines}
          isAnimating={isAnimating}
          scrollProgress={scrollProgress}
        />
        {paradoxData.map((item, index) => (
          <ParadoxLine
            key={item.Index}
            item={item}
            index={index}
            avatars={avatars}
            hasPassedLine={passedLines.has(index)}
          />
        ))}
      </div>

      <FooterAvatars
        ref={legendRef}
        avatars={avatars}
        isInFooter={isInFooter}
      />
    </section>
  )
}

export default ParadoxVisualization