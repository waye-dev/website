"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { useMediaQuery } from "../../../../../hooks/window-dimensions"
import { QuoteCard, Quote } from "./quote-card"
import { getCardColor, getTextColor, getCardAngle, getCardZIndex } from "./utils"
import { CardColor } from "./utils"

interface QuoteCardsProps {
  quotes: Quote[]
  firstColor?: CardColor
}


export function QuoteCards({
  quotes,
  firstColor = "white",
}: QuoteCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 767px)")

  const displayQuotes = quotes.slice(0, 3)

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return
      const angle = getCardAngle(index, currentIndex, isMobile)
      const zIndex = getCardZIndex(index, currentIndex)
      const isActive = index === currentIndex
      
      const tl = gsap.timeline()

      if (isActive) {
        tl.to(card, {
          rotation: angle,
          zIndex: zIndex,
          scale: 1.02, 
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.2)",
        })
        .to(card, {
          scale: 1, 
          duration: 0.2,
          ease: "power2.out",
        }, "-=0.1")
      } else {

        tl.to(card, {
          rotation: angle,
          zIndex: zIndex,
          scale: 0.98, 
          opacity: 0.7,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(card, {
          scale: 1, 
          duration: 0.15,
          ease: "power2.out",
        }, "-=0.1")
      }
    })
  }, [currentIndex])

  const switchToNext = () => {
    if (displayQuotes.length <= 1 || isAnimating) return

    setIsAnimating(true)
    const nextIndex = (currentIndex + 1) % displayQuotes.length
    
    const currentCard = cardsRef.current[currentIndex]
    const nextCard = cardsRef.current[nextIndex]
    
    if (currentCard && nextCard) {
      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentIndex(nextIndex)
          setIsAnimating(false)
        }
      })

      tl.to(currentCard, {
        scale: 0.95,
        opacity: 0.8,
        duration: 0.15,
        ease: "power2.in"
      })
      
      .to(containerRef.current, {
        filter: "brightness(1.1)",
        duration: 0.05,
        ease: "power2.out"
      }, "-=0.05")
      
      .to(containerRef.current, {
        filter: "brightness(1)",
        duration: 0.1,
        ease: "power2.out"
      })
      
      .call(() => {
      }, [], 0.1)
    } else {
      setTimeout(() => {
        setCurrentIndex(nextIndex)
        setIsAnimating(false)
      }, 150)
    }
  }

  if (displayQuotes.length === 0) return null

  return (
    <div className="group flex w-full flex-col items-center space-y-4 px-2 py-12">
      <div 
        ref={containerRef} 
        className="relative w-full h-56 md:h-32 cursor-pointer transition-all duration-200" 
        onClick={switchToNext}
        style={{ 
          pointerEvents: isAnimating ? 'none' : 'auto',
          transform: isAnimating ? 'scale(0.99)' : 'scale(1)'
        }}
      >
        {displayQuotes.map((quote, index) => {
          const backgroundColor = getCardColor(index, firstColor)
          
          return (
            <QuoteCard
              key={quote.id}
              quote={quote}
              isActive={index === currentIndex}
              angle={getCardAngle(index, currentIndex, isMobile)}
              zIndex={getCardZIndex(index, currentIndex)}
              backgroundColor={backgroundColor}
              textColor={getTextColor(backgroundColor)}
              cardRef={(el) => { cardsRef.current[index] = el; }}
            />
          )
        })}
      </div>

      {displayQuotes.length > 1 && (
        <div className="flex items-center pt-4 space-x-2 text-sm opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
          <img 
            src="/svgs/research/quotes/cursor-switch.svg" 
            alt="arrow" 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            style={{ filter: "invert(1)" }} 
          />
          <span className="font-inknut-antiqua" style={{ fontFamily: "var(--font-inknut-antiqua)" }}>
            tap to switch
          </span>
        </div>
      )}
    </div>
  )
}