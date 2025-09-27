import React, { forwardRef } from 'react'
import Image from 'next/image'
import { Avatar } from './types'
import { AVATAR_SIZE } from './data'
import { paradoxData } from './data'

interface FooterAvatarsProps {
  avatars: Avatar[]
  isInFooter: boolean
}

const FooterAvatars = forwardRef<HTMLDivElement, FooterAvatarsProps>(
  ({ avatars, isInFooter }, ref) => {
    return (
      <div ref={ref} className="mt-24 pb-24 flex justify-center space-x-8 relative z-5">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`flex items-center space-x-3 transition-opacity duration-700 ${
              isInFooter ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-8 h-8 relative">
              <Image
                src={`/svgs/research/paradox-graph/${avatar.id}.svg`}
                alt={avatar.name}
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: avatar.color }} />
            <span className="text-sm">{avatar.name}</span>
          </div>
        ))}
      </div>
    )
  }
)

FooterAvatars.displayName = 'FooterAvatars'

export default FooterAvatars