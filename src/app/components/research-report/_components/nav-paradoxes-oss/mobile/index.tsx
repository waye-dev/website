'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { paradoxData, avatars } from '../data'
import { ParadoxDataItem, Avatar } from '../types'

const MobileParadoxPage: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.3 }
    )

    const elements = document.querySelectorAll('[data-index]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const getAvatarConfig = (avatarId: string) => {
    const configs = {
      new: { color: '#C4DEF8', name: 'Junior' },
      mid: { color: '#0F172A', name: 'Mid' },
      senior: { color: '#F9D483', name: 'Expert' }
    }
    return configs[avatarId as keyof typeof configs]
  }

  const isLongText = (text: string) => {
    return text.length > 20 // Adjust threshold as needed
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-0 mb-8">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src="/svgs/research/paradox-graph/mobile/junior.svg"
            alt="Junior"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-square relative overflow-hidden">
          <Image
            src="/svgs/research/paradox-graph/mobile/mid.svg"
            alt="Mid"
            fill
            className="object-cover"
          />
        </div>
        <div className="aspect-square relative overflow-hidden">
          <Image
            src="/svgs/research/paradox-graph/mobile/senior.svg"
            alt="Expert"
            fill
            className="object-cover"
          />
        </div>
      </div>


      <div className="px-2 space-y-0 pb-12">
        {paradoxData.map((item: ParadoxDataItem, index: number) => {
          const isVisible = visibleItems.has(index)

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
                          className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            backgroundColor: config.color,
                            width: isVisible ? `${percentage}%` : '0%',
                            transitionDelay: `${avatarIndex * 200}ms`,
                            opacity: config.color === '#C4DEF8' ? 0.9 : 1
                          }}
                        />

                        <div
                          className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out opacity-20"
                          style={{
                            background: `linear-gradient(90deg, transparent 0%, white 100%)`,
                            width: isVisible ? `${percentage}%` : '0%',
                            transitionDelay: `${avatarIndex * 200}ms`
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