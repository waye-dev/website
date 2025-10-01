'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { paradoxData, avatars } from '../data'
import { ParadoxDataItem, Avatar } from '../types'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const MobileParadoxPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const items = containerRef.current.querySelectorAll('[data-index]')

    items.forEach((item, index) => {
      const bars = item.querySelectorAll('[data-bar]')

      ScrollTrigger.create({
        trigger: item,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          bars.forEach((bar, barIndex) => {
            gsap.to(bar, {
              scaleX: 1,
              duration: 1,
              delay: barIndex * 0.2,
              ease: 'power2.out',
              transformOrigin: 'left center'
            })
          })
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, { scope: containerRef })

  const getAvatarConfig = (avatarId: string) => {
    const configs = {
      new: { color: '#C4DEF8', name: 'Junior' },
      mid: { color: '#0F172A', name: 'Mid' },
      senior: { color: '#F9D483', name: 'Expert' }
    }
    return configs[avatarId as keyof typeof configs]
  }

  const isLongText = (text: string) => {
    return text.length > 20
  }

  return (
    <div ref={containerRef} className="w-full">
      <div className="grid grid-cols-3 gap-0 mb-8">
        {avatars.map((avatar: Avatar) => (
          <div key={avatar.id} className="aspect-square relative overflow-hidden">
            <Image
              src={`/svgs/research/paradox-graph/mobile/${avatar.id}.svg`}
              alt={avatar.name}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="px-2 space-y-0 pb-12">
        {paradoxData.map((item: ParadoxDataItem, index: number) => {
          return (
            <div
              key={item.Index}
              data-index={index}
              className="p-2"
            >
              <div className="flex items-center gap-4">
                <div className={`${isLongText(item.Term1) ? 'text-xs' : 'text-sm'} font-inknutAntiqua text-left flex-shrink-0 w-24`}>
                  {item.Term1}
                </div>

                <div className="flex-1 space-y-1">
                  {avatars.map((avatar: Avatar, avatarIndex: number) => {
                    const value = item[avatar.id as keyof typeof item] as number
                    const percentage = (value / 10) * 100
                    const config = getAvatarConfig(avatar.id)

                    return (
                      <div
                        key={avatar.id}
                        className="relative h-1.5 rounded-full overflow-hidden"
                        style={{
                          backgroundColor: config.color === '#0F172A' ? `${config.color}30` : `${config.color}40`
                        }}
                      >
                        <div
                          data-bar
                          className="absolute left-0 top-0 h-full rounded-full"
                          style={{
                            backgroundColor: config.color,
                            width: `${percentage}%`,
                            opacity: config.color === '#C4DEF8' ? 0.9 : 1,
                            transform: 'scaleX(0)'
                          }}
                        />

                        <div
                          className="absolute left-0 top-0 h-full rounded-full opacity-20 pointer-events-none"
                          style={{
                            background: `linear-gradient(90deg, transparent 0%, white 100%)`,
                            width: `${percentage}%`
                          }}
                        />
                      </div>
                    )
                  })}
                </div>

                <div className={`${isLongText(item.Term2) ? 'text-xs' : 'text-sm'} font-inknutAntiqua text-left flex-shrink-0 w-24`}>
                  {item.Term2}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MobileParadoxPage