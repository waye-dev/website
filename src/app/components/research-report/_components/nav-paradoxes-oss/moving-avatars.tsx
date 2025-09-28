import React, { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Avatar } from './types'
import { AVATAR_SIZE } from './data'

interface MovingAvatarsProps {
  avatars: Avatar[]
  isAnimating: boolean
  isInFooter: boolean
  isTransitioning?: boolean
  getAvatarPosition: (avatarId: string) => { xPercent: number; yPixels?: number; isAtFooter: boolean } | null
}

const MovingAvatars: React.FC<MovingAvatarsProps> = ({ avatars, isAnimating, isInFooter, isTransitioning, getAvatarPosition }) => {
  const avatarRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  const animationFrame = useRef<number | null>(null)
  const targetPositions = useRef<Map<string, { x: number; y: number }>>(new Map())
  const currentPositions = useRef<Map<string, { x: number; y: number }>>(new Map())

  const animateAvatars = useCallback(() => {
    const LERP_FACTOR = 0.15

    avatars.forEach((avatar) => {
      const element = avatarRefs.current.get(avatar.id)
      const target = targetPositions.current.get(avatar.id)
      const current = currentPositions.current.get(avatar.id)

      if (!element || !target || !current) return

      const newX = current.x + (target.x - current.x) * LERP_FACTOR
      const newY = current.y + (target.y - current.y) * LERP_FACTOR

      currentPositions.current.set(avatar.id, { x: newX, y: newY })

      element.style.transform = `translate(${newX}px, ${newY}px)`
    })

    if (isAnimating) {
      animationFrame.current = requestAnimationFrame(animateAvatars)
    }
  }, [avatars, isAnimating])

  useEffect(() => {
    if (!isAnimating) return

    avatars.forEach((avatar) => {
      const position = getAvatarPosition(avatar.id)
      if (!position) return

      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const targetX = (position.xPercent / 100) * windowWidth - (AVATAR_SIZE + 24) / 2
      const targetY = position.isAtFooter && position.yPixels
        ? position.yPixels - (AVATAR_SIZE + 24) / 2
        : windowHeight / 2 - (AVATAR_SIZE + 24) / 2

      targetPositions.current.set(avatar.id, { x: targetX, y: targetY })

      if (!currentPositions.current.has(avatar.id)) {
        currentPositions.current.set(avatar.id, { x: targetX, y: targetY })
      }
    })
  }, [avatars, getAvatarPosition, isAnimating])

  useEffect(() => {
    if (isAnimating && !animationFrame.current) {
      animationFrame.current = requestAnimationFrame(animateAvatars)
    }

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
        animationFrame.current = null
      }
    }
  }, [isAnimating, animateAvatars])

  if (!isAnimating || isInFooter || isTransitioning) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {avatars.map((avatar) => {
        const position = getAvatarPosition(avatar.id)
        if (!position) return null

        return (
          <div
            key={`moving-${avatar.id}`}
            ref={(el) => {
              if (el) {
                avatarRefs.current.set(avatar.id, el)
              }
            }}
            className="absolute flex items-center justify-center"
            style={{
              width: `${AVATAR_SIZE + 24}px`,
              height: `${AVATAR_SIZE + 24}px`,
              willChange: 'transform',
              left: 0,
              top: 0
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
