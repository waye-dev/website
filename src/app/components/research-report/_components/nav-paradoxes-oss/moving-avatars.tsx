import React from 'react'
import Image from 'next/image'
import { Avatar } from './types'
import { AVATAR_SIZE } from './data'

interface MovingAvatarsProps {
  avatars: Avatar[]
  isAnimating: boolean
  getAvatarPosition: (avatarId: string) => { xPercent: number; isAtBottom: boolean } | null
}

const MovingAvatars: React.FC<MovingAvatarsProps> = ({ avatars, isAnimating, getAvatarPosition }) => {
  if (!isAnimating) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {avatars.map((avatar) => {
        const position = getAvatarPosition(avatar.id)
        if (!position) return null

        return (
          <div
            key={`moving-${avatar.id}`}
            className={`absolute flex items-center justify-center transition-all duration-300 ease-out ${
              position.isAtBottom ? 'bottom-24' : 'top-1/2 -translate-y-1/2'
            }`}
            style={{
              left: `${position.xPercent}%`,
              transform: position.isAtBottom
                ? `translateX(-50%)`
                : `translate(-50%, -50%)`,
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
        )
      })}
    </div>
  )
}

export default MovingAvatars
