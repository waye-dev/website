import React from 'react'
import { ParadoxDataItem, Avatar } from './types'
import { TERM_WIDTH, LINE_WIDTH } from './data'

interface ParadoxLineProps {
  item: ParadoxDataItem
  index: number
  avatars: Avatar[]
  hasPassedLine: boolean
}

const ParadoxLine: React.FC<ParadoxLineProps> = ({ item, index, avatars, hasPassedLine }) => {
  return (
    <div data-line className="relative mb-16">
      <div className="flex items-center justify-center max-w-6xl mx-auto">
        <div className="text-right break-words leading-tight pr-3 md:pr-6 flex-shrink-0 w-20 sm:w-28 md:w-40 lg:w-52">
          <span className="text-sm md:text-base font-400 font-inknutAntiqua md:text-[18.33px]">{item.Term1}</span>
        </div>

        <div
          data-line-container
          className="relative flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl"
        >
          <div className="h-px w-full bg-gray-400" />

          <div className="absolute inset-0 flex items-center">
            {avatars.map((avatar) => {
              const value = item[avatar.id as keyof ParadoxDataItem] as number
              const xPercent = Math.max(0, Math.min(100, (value / 10) * 100))

              return (
                <div
                  key={`circle-${avatar.id}-${index}`}
                  className={`absolute w-4 h-4 md:w-6 md:h-6 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    hasPassedLine ? 'scale-100 opacity-80' : 'scale-0 opacity-0'
                  }`}
                  style={{
                    backgroundColor: avatar.color,
                    left: `${xPercent}%`,
                    top: '50%',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
              )
            })}
          </div>
        </div>

        <div className="text-left break-words leading-tight pl-3 md:pl-6 flex-shrink-0 w-20 sm:w-28 md:w-40 lg:w-52">
          <span className="text-sm md:text-base font-400 font-inknutAntiqua md:text-[18.33px]">{item.Term2}</span>
        </div>
      </div>
    </div>
  )
}

export default ParadoxLine
