import React, { forwardRef } from 'react'
import Image from 'next/image'
import { Avatar } from './types'
import { AVATAR_SIZE } from './data'

interface AvatarHeaderProps {
  avatars: Avatar[]
  isAnimating: boolean
}

const AvatarHeader = forwardRef<HTMLDivElement, AvatarHeaderProps>(
  ({ avatars, isAnimating }, ref) => {
    return (
      <div ref={ref} className="sticky top-0 z-20 pb-12">
        <div className="flex justify-center space-x-20 max-w-6xl mx-auto">
          {avatars.map((avatar) => (
            <div
              key={avatar.id}
              data-avatar={avatar.id}
              className={`flex flex-col items-center transition-opacity duration-700 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div
                className="flex items-center justify-center"
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
              <span className="mt-3 text-base font-medium">{avatar.name}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
)

AvatarHeader.displayName = 'AvatarHeader'

export default AvatarHeader
