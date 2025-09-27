import React from 'react'
import Image from 'next/image'
import { Avatar } from './types'
import { AVATAR_SIZE } from './data'

interface MovingAvatarsProps {
  avatars: Avatar[]
  isAnimating: boolean
  isInFooter: boolean
  getAvatarPosition: (avatarId: string) => { xPercent: number; yPixels?: number; isAtFooter: boolean } | null
}

const MovingAvatars: React.FC<MovingAvatarsProps> = ({ avatars, isAnimating, isInFooter, getAvatarPosition }) => {
  if (!isAnimating) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {avatars.map((avatar) => {
        const position = getAvatarPosition(avatar.id)
        if (!position) return null

        return (
          <div
            key={`moving-${avatar.id}`}
            className="absolute flex items-center justify-center transition-all duration-600 ease-out"
            style={{
              left: `${position.xPercent}%`,
              top: position.isAtFooter && position.yPixels
                ? `${position.yPixels}px`
                : '50%',
              transform: position.isAtFooter
                ? `translate(-50%, -50%)`
                : `translate(-50%, -50%)`,
              width: `${AVATAR_SIZE + 24}px`,
              height: `${AVATAR_SIZE + 24}px`
            }}
          >
            <Image
              src={`/svgs/research/paradox-graph/${avatar.id}.svg`}
              alt={avatar.name}
              width={AVATAR_SIZE + 24}
              height={AVATAR_SIZE + 24}
              className="w-full h-full object-contain"
            />
          </div>
        )
      })}
    </div>
  )
}

export default MovingAvatars
