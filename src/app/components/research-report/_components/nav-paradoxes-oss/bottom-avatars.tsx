import React, { forwardRef } from 'react'
import Image from 'next/image'
import { Avatar } from './types'
import { AVATAR_SIZE } from './data'

interface BottomAvatarsProps {
  avatars: Avatar[]
  scrollProgress: number
}

const BottomAvatars = forwardRef<HTMLDivElement, BottomAvatarsProps>(
  ({ avatars, scrollProgress }, ref) => {
    return (
      <div ref={ref} className="mt-16 flex justify-center space-x-16">
        {avatars.map((avatar) => {
          const isAtBottom = scrollProgress >= 0.98
          
          return (
            <div
              key={`bottom-${avatar.id}`}
              className={`flex flex-col items-center transition-opacity duration-500 ${
                isAtBottom ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                style={{ 
                  width: `${AVATAR_SIZE}px`,
                  height: `${AVATAR_SIZE}px`
                }}
              >
                <Image
                  src={`/svgs/research/paradox-graph/${avatar.id}.svg`}
                  alt={avatar.name}
                  width={AVATAR_SIZE}
                  height={AVATAR_SIZE}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="mt-2 text-sm font-medium">{avatar.name}</span>
            </div>
          )
        })}
      </div>
    )
  }
)

BottomAvatars.displayName = 'BottomAvatars'

export default BottomAvatars
