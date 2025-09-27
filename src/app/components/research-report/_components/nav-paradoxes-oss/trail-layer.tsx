import React from 'react'
import { Avatar, AvatarState } from './types'
import { createSmoothPath } from './utils'

interface TrailLayerProps {
  avatars: Avatar[]
  avatarStates: AvatarState[]
}

const TrailLayer: React.FC<TrailLayerProps> = ({ avatars, avatarStates }) => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 40 }}>
      <svg className="w-full h-full">
        {avatarStates.map((state) => {
          const avatar = avatars.find(a => a.id === state.id)
          if (!avatar || state.trail.length < 2) return null

          const pathData = createSmoothPath(state.trail)

          return (
            <g key={`trail-${avatar.id}`}>
              <path
                d={pathData}
                stroke={avatar.color}
                strokeWidth="2"
                fill="none"
                opacity="0.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default TrailLayer
