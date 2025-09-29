import { useState, useEffect, useRef, useCallback } from "react"
import { useMediaQuery } from "../../../../../hooks/window-dimensions"

interface ResponsiveQuoteConfig {
  isMobile: boolean
  optimalFontSize: number
  cardHeight: number
  threeLineHeight: number
  needsRecalculation: boolean
}

interface UseResponsiveQuoteOptions {
  text: string
  isActive: boolean
  isExpanded: boolean
}

export const useResponsiveQuote = ({ 
  text, 
  isActive, 
  isExpanded 
}: UseResponsiveQuoteOptions): ResponsiveQuoteConfig & {
  contentRef: React.RefObject<HTMLDivElement | null>
  calculateExpandedHeight: () => number
  checkNeedsExpansion: () => boolean
} => {
  const isMobile = useMediaQuery("(max-width: 767px)")
  const contentRef = useRef<HTMLDivElement>(null)
  
  const [optimalFontSize, setOptimalFontSize] = useState(isMobile ? 14 : 12.58)
  const [needsRecalculation, setNeedsRecalculation] = useState(false)
  
  const cardHeight = isMobile ? 220 : 136
  const threeLineHeight = isMobile ? 120 : 45
  
  const calculateTextHeight = useCallback((fontSize: number, width?: number): number => {
    if (!contentRef.current) return 0
    
    const tempDiv = document.createElement('div')
    tempDiv.style.cssText = `
      position: absolute;
      visibility: hidden;
      width: ${width || contentRef.current.offsetWidth}px;
      font-size: ${fontSize}px;
      line-height: 115%;
      font-family: Inter, sans-serif;
      font-style: italic;
    `
    tempDiv.textContent = text
    
    document.body.appendChild(tempDiv)
    const height = tempDiv.offsetHeight
    document.body.removeChild(tempDiv)
    
    return height
  }, [text])
  
  const findOptimalFontSize = useCallback((): number => {
    if (!contentRef.current) return isMobile ? 14 : 12.58
    
    const targetLines = isMobile ? 6 : 2
    const baseFontSize = isMobile ? 14 : 12.58
    const maxFontSize = isMobile ? 20 : 18
    const lineHeight = 1.15
    const containerWidth = contentRef.current.offsetWidth
    
    const singleLineHeight = baseFontSize * lineHeight
    const targetHeight = targetLines * singleLineHeight
    const baseHeight = calculateTextHeight(baseFontSize, containerWidth)
    
    if (baseHeight > targetHeight) return baseFontSize
    
    let minSize = baseFontSize
    let maxSize = maxFontSize
    let optimalSize = baseFontSize
    
    while (maxSize - minSize > 0.1) {
      const midSize = (minSize + maxSize) / 2
      const height = calculateTextHeight(midSize, containerWidth)
      const midLineHeight = midSize * lineHeight
      const midTargetHeight = targetLines * midLineHeight
      
      if (height <= midTargetHeight) {
        optimalSize = midSize
        minSize = midSize
      } else {
        maxSize = midSize
      }
    }
    
    return optimalSize
  }, [isMobile, calculateTextHeight])
  
  const calculateExpandedHeight = useCallback((): number => {
    if (!contentRef.current) return 200
    
    const fullHeight = calculateTextHeight(optimalFontSize)
    const baseHeight = isMobile ? 220 : 200
    return Math.max(fullHeight + 102, baseHeight)
  }, [calculateTextHeight, optimalFontSize, isMobile])
  
  const checkNeedsExpansion = useCallback((): boolean => {
    if (!contentRef.current) return false
    
    const fullHeight = calculateTextHeight(optimalFontSize)
    return fullHeight > threeLineHeight
  }, [calculateTextHeight, optimalFontSize, threeLineHeight])
  
  useEffect(() => {
    if (contentRef.current && isActive) {
      const newFontSize = findOptimalFontSize()
      setOptimalFontSize(newFontSize)
      setNeedsRecalculation(prev => !prev)
    }
  }, [text, isActive, isMobile, findOptimalFontSize])
  
  return {
    isMobile,
    optimalFontSize,
    cardHeight,
    threeLineHeight,
    needsRecalculation,
    contentRef,
    calculateExpandedHeight,
    checkNeedsExpansion
  }
}
