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

//usage
{/* <QuoteCards quotes={[
{
  id: "quote-1",
  text: "",
  author: {
    type: "mid",
    respondentNumber: 1,
  },
},
{
  id: "quote-2",
  text: "",
  author: {
    type: "new",
    respondentNumber: 20,
  },
},
..
},
]} /> */}

export function QuoteCards({
  quotes,
  firstColor = "white",
}: QuoteCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 767px)")

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return
      const angle = getCardAngle(index, currentIndex, isMobile, quotes.length)
      const zIndex = getCardZIndex(index, currentIndex, quotes.length)
      const isActive = index === currentIndex
      const isVisible = zIndex >= 0 // Cards with negative z-index should be hidden

      const tl = gsap.timeline()

      if (isActive && isVisible) {
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
      } else if (isVisible) {
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
      } else {
        // Hide invisible cards
        tl.to(card, {
          opacity: 0,
          zIndex: -1,
          duration: 0.1,
          ease: "power2.out",
        })
      }
    })
  }, [currentIndex, quotes.length])

  const switchToNext = () => {
    if (quotes.length <= 1 || isAnimating) return

    setIsAnimating(true)
    const nextIndex = (currentIndex + 1) % quotes.length
    
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

  if (quotes.length === 0) return null

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
        {quotes.map((quote, index) => {
          const backgroundColor = getCardColor(index, firstColor)
          
          return (
            <QuoteCard
              key={quote.id}
              quote={quote}
              isActive={index === currentIndex}
              angle={getCardAngle(index, currentIndex, isMobile, quotes.length)}
              zIndex={getCardZIndex(index, currentIndex, quotes.length)}
              backgroundColor={backgroundColor}
              textColor={getTextColor(backgroundColor)}
              cardRef={(el) => { cardsRef.current[index] = el; }}
            />
          )
        })}
      </div>

      {quotes.length > 1 && (
        <div
          className="flex items-center pt-4 space-x-2 text-sm opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 cursor-pointer"
          onClick={switchToNext}
        >
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