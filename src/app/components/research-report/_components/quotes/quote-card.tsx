import { useState, useRef } from "react"
import { QuoteAuthor } from "./quote-author"

export type AuthorType = "new" | "experienced" | "mid"

export interface Quote {
  id: string
  text: string
  author: {
    type?: AuthorType
    respondentNumber?: number
  }
}

interface QuoteCardProps {
  quote: Quote
  index: number
  isActive: boolean
  angle: number
  zIndex: number
  backgroundColor: string
  textColor: string
  cardRef: (el: HTMLDivElement | null) => void
}

export function QuoteCard({ 
  quote, 
  index, 
  isActive, 
  angle, 
  zIndex, 
  backgroundColor, 
  textColor, 
  cardRef 
}: QuoteCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedHeight, setExpandedHeight] = useState(200)
  const contentRef = useRef<HTMLDivElement>(null)

  const actualIsExpanded = isActive ? isExpanded : false

  const calculateExpandedHeight = (): number => {
    if (!contentRef.current) return 200
    
    const tempDiv = document.createElement('div')
    tempDiv.style.position = 'absolute'
    tempDiv.style.visibility = 'hidden'
    tempDiv.style.width = contentRef.current.offsetWidth + 'px'
    tempDiv.style.fontSize = '12.58px'
    tempDiv.style.lineHeight = '115%'
    tempDiv.style.fontFamily = 'Inter, sans-serif'
    tempDiv.style.fontStyle = 'italic'
    tempDiv.textContent = quote.text
    
    document.body.appendChild(tempDiv)
    const fullHeight = tempDiv.offsetHeight
    document.body.removeChild(tempDiv)
    
    return Math.max(fullHeight + 102, 200)
  }

  const checkNeedsExpansion = (): boolean => {
    if (!contentRef.current) return false
    
    const tempDiv = document.createElement('div')
    tempDiv.style.position = 'absolute'
    tempDiv.style.visibility = 'hidden'
    tempDiv.style.width = contentRef.current.offsetWidth + 'px'
    tempDiv.style.fontSize = '12.58px'
    tempDiv.style.lineHeight = '115%'
    tempDiv.style.fontFamily = 'Inter, sans-serif'
    tempDiv.style.fontStyle = 'italic'
    tempDiv.textContent = quote.text
    
    document.body.appendChild(tempDiv)
    const fullHeight = tempDiv.offsetHeight
    document.body.removeChild(tempDiv)
    
    return fullHeight > 45
  }

  const handleToggleExpansion = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isActive) {
      if (!isExpanded) {
        const newHeight = calculateExpandedHeight()
        setExpandedHeight(newHeight)
      }
      setIsExpanded(!isExpanded)
    }
  }

  const getGradientStyle = () => {
    const isDark = backgroundColor === "#1B1F35"
    const isCream = backgroundColor === "#F1ECD6"
    
    if (isDark) {
      return `linear-gradient(to bottom, 
        rgba(27, 31, 53, 0) 0%, 
        rgba(27, 31, 53, 0.3) 60%, 
        rgba(27, 31, 53, 0.8) 85%, 
        rgba(27, 31, 53, 1) 100%)`
    } else if (isCream) {
      return `linear-gradient(to bottom, 
        rgba(241, 236, 214, 0) 0%, 
        rgba(241, 236, 214, 0.3) 60%, 
        rgba(241, 236, 214, 0.8) 85%, 
        rgba(241, 236, 214, 1) 100%)`
    } else {
      return `linear-gradient(to bottom, 
        rgba(255, 255, 255, 0) 0%, 
        rgba(255, 255, 255, 0.3) 60%, 
        rgba(255, 255, 255, 0.8) 85%, 
        rgba(255, 255, 255, 1) 100%)`
    }
  }

  const needsExpansion = isActive ? checkNeedsExpansion() : false
  
  const showGradient = needsExpansion && !actualIsExpanded

  const threeLineHeight = 45

  return (
    <div
      ref={cardRef}
      className="absolute inset-0 rounded-[25px] py-4 px-6 shadow-lg will-change-transform space-y-1 transition-all duration-300 ease-in-out"
      style={{
        backgroundColor,
        color: textColor,
        transform: `rotate(${angle}deg)`,
        zIndex,
        opacity: isActive ? 1 : 0.7,
        height: actualIsExpanded ? `${expandedHeight}px` : "136px",
        minHeight: actualIsExpanded ? `${expandedHeight}px` : "136px",
      }}
    >
      <div className="absolute top-3 right-5 z-20">
        <span className="text-2xl font-bold font-inknutAntiqua">
        “
        </span>
      </div>

      <div className="absolute bottom-0 left-5 z-20">
        <span className="text-2xl font-bold font-inknutAntiqua">
          ”
        </span>
      </div>

      <QuoteAuthor author={quote.author} />

      <div className="relative group">
        <div 
          ref={contentRef}
          className="relative transition-all duration-300 ease-in-out"
          style={{ 
            maxHeight: actualIsExpanded ? `${expandedHeight - 80}px` : `${threeLineHeight}px`,
            overflow: "hidden"
          }}
        >
          <p
            className="text-xs font-inter italic"
            style={{ 
              fontFamily: "Inter, sans-serif",
              fontSize: "12.58px",
              lineHeight: "115%"
            }}
          >
            {quote.text}
          </p>
        </div>
        
        <div 
          className={`absolute left-0 right-0 pointer-events-none transition-opacity duration-300 ${
            showGradient ? "opacity-100" : "opacity-0"
          }`}
          style={{
            bottom: 0,
            height: "28px",
            background: getGradientStyle()
          }}
        />
      </div>

      {isActive && needsExpansion && (
        <button
          onClick={handleToggleExpansion}
          className="absolute bottom-4 right-5 text-xs underline hover:no-underline 
                     transition-all duration-200 z-10"
          style={{ 
            fontSize: "13px",
            color: textColor,
            textDecoration: "underline",
            fontFamily: "var(--font-inter)"
          }}
        >
          {actualIsExpanded ? "show less" : "continue reading →"}
        </button>
      )}
    </div>
  )
}