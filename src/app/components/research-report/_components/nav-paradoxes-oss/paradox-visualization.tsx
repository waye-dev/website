import React from 'react'
import { paradoxData, avatars } from './data'
import { useParadoxAnimation } from './use-paradox-animation'
import AvatarHeader from './avatar-header'
import MovingAvatars from './moving-avatars'
import ParadoxLine from './paradox-line'

const ParadoxVisualization: React.FC = () => {
  const {
    scrollProgress,
    isAnimating,
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

      {/* Legend */}
      <div ref={legendRef} className="mt-24 pb-24 flex justify-center space-x-8 relative z-5">
        {avatars.map((avatar) => (
          <div key={avatar.id} className="flex items-center space-x-3">
            <div className="w-8 h-8 relative">
              <img
                src={`/svgs/research/paradox-graph/${avatar.id}.svg`}
                alt={avatar.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: avatar.color }} />
            <span className="text-sm">{avatar.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ParadoxVisualization