import React from 'react'
import { paradoxData, avatars } from './data'
import { useParadoxAnimation } from './use-paradox-animation'
import AvatarHeader from './avatar-header'
import MovingAvatars from './moving-avatars'
import ParadoxLine from './paradox-line'
import FooterAvatars from './footer-avatars'

const ParadoxVisualization: React.FC = () => {
  const {
    scrollProgress,
    isAnimating,
    isInFooter,
    passedLines,
    containerRef,
    headerRef,
    linesRef,
    legendRef,
    getAvatarPosition
  } = useParadoxAnimation()

  return (
    <section ref={containerRef} className="w-full mx-auto px-4 relative pt-8">
      <AvatarHeader
        ref={headerRef}
        avatars={avatars}
        isAnimating={isAnimating}
      />

      <MovingAvatars
        avatars={avatars}
        isAnimating={isAnimating}
        isInFooter={isInFooter}
        getAvatarPosition={getAvatarPosition}
      />

      <div ref={linesRef} className="space-y-12 relative z-10 max-w-6xl mx-auto">
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