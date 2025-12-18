"use client";

import { GLOSSARY_LIST } from "../glossary/constants";
import React, { useState, useEffect } from "react";

interface StickyNavigationProps {
  className?: string;
}

const sectionSelectors = {
  1: '[data-section="study-overview"]',
  2: '[data-section="top-level-analysis"]',
  3: '[data-section="tyranny-of-permissionlessness"]',
  4: '[data-section="four-strategies-for-chaos"]',
  5: '[data-section="beyond-financial-sustainability"]',
  6: '[data-section="recommendations"]',
  7: '[data-section="toward-sustainable-permissionlessness"]',
} as const;

const isDarkBackground = (activeSection: number): boolean => {
  // Primary method: Check the active section's background directly
  // This ensures we get the section background, not overlaying quote cards
  const activeSelector = sectionSelectors[activeSection as keyof typeof sectionSelectors];
  if (activeSelector) {
    const activeElement = document.querySelector(activeSelector);
    if (activeElement) {
      // First, check if the element with data-section itself has a background class
      let checkElement: Element | null = activeElement;
      
      // Also check the immediate parent (in case data-section is on a child)
      // and traverse up to find the container with background classes
      if (!checkElement.classList.contains('bg-blue-custom-1200') && 
          !checkElement.classList.contains('bg-blue-custom-1100') &&
          !checkElement.classList.contains('bg-gray-custom-400')) {
        checkElement = activeElement.parentElement;
      }
      while (checkElement && checkElement !== document.documentElement) {
        const classes = checkElement.classList;
        
        // Check for dark blue background classes first (highest priority)
        if (classes.contains('bg-blue-custom-1200') || 
            classes.contains('bg-blue-custom-1100') ||
            classes.contains('bg-blue-900') ||
            classes.contains('bg-gray-900') ||
            classes.contains('bg-slate-900')) {
          return true; // Dark background
        }
        
        // Check for light background classes
        if (classes.contains('bg-white') || 
            classes.contains('bg-gray-custom-400') ||
            classes.contains('bg-gray-50') ||
            classes.contains('bg-cream')) {
          return false; // Light background
        }
        
        checkElement = checkElement.parentElement;
      }

      // Fallback: Check computed background color by traversing up from section element
      let currentElement: Element | null = activeElement;
      while (currentElement && currentElement !== document.documentElement) {
        const computedBg = window.getComputedStyle(currentElement).backgroundColor;
        if (computedBg && computedBg !== 'transparent' && !computedBg.includes('rgba(0, 0, 0, 0)')) {
          const match = computedBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (match) {
            const [_, r, g, b] = match.map(Number);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            // If we find a solid background color from the section, use it
            // This avoids picking up white quote cards or other overlays
            if (luminance < 0.5) return true;
            if (luminance > 0.5) return false;
          }
        }
        currentElement = currentElement.parentElement;
      }
    }
  }

  // Fallback: Sample background at left edge, far from where quotes typically are
  // Only use this if section detection fails
  const samplePoints = [
    { x: 20, y: 150 },   // Far left, avoiding quote cards
    { x: 30, y: 300 },   // Further down, still left edge
  ];

  for (const point of samplePoints) {
    const element = document.elementFromPoint(point.x, point.y);
    if (!element) continue;

    // Aggressively skip white/light colored elements (likely quote cards)
    const rect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element);
    const bgColor = computedStyle.backgroundColor;
    
    // Skip elements with white/light backgrounds (quote cards)
    if (bgColor) {
      const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        const [_, r, g, b] = match.map(Number);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        // Skip very light elements (likely quote cards)
        if (luminance > 0.8) continue;
      }
    }

    const isSmallElement = rect.width < 500 && rect.height < 400;
    const isAbsoluteOrFixed = computedStyle.position === 'absolute' || 
                               computedStyle.position === 'fixed';
    
    // Skip small positioned elements (likely quote cards)
    if (isSmallElement && isAbsoluteOrFixed) continue;

    let currentElement: Element | null = element;

    while (currentElement && currentElement !== document.documentElement) {
      const computedBg = window.getComputedStyle(currentElement).backgroundColor;

      // Skip the nav bar itself
      if (currentElement.classList?.contains('fixed') && currentElement.classList?.contains('top-[90px]')) {
        currentElement = currentElement.parentElement;
        continue;
      }

      if (computedBg && computedBg !== 'transparent' && !computedBg.includes('rgba(0, 0, 0, 0)')) {
        const match = computedBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const [_, r, g, b] = match.map(Number);
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          // Only return if we find a clear dark or light background
          if (luminance < 0.45) return true;
          if (luminance > 0.55) return false;
        }
      }

      currentElement = currentElement.parentElement;
    }
  }

  return false;
};

export const StickyNavigation: React.FC<StickyNavigationProps> = ({ className = "" }) => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDarkBg, setIsDarkBg] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const studyOverview = document.querySelector(sectionSelectors[1]);

          if (studyOverview) {
            const rect = studyOverview.getBoundingClientRect();
            setIsVisible(scrollTop >= rect.top + scrollTop - 300);
          }

          let currentSection = 1;
          Object.entries(sectionSelectors).forEach(([id, selector]) => {
            const element = document.querySelector(selector);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 200) {
                currentSection = parseInt(id);
              }
            }
          });

          setActiveSection(currentSection);
          setIsDarkBg(isDarkBackground(currentSection));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: number) => {
    const selector = sectionSelectors[sectionId as keyof typeof sectionSelectors];
    const element = document.querySelector(selector);

    if (element) {
      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY - 100;

      window.scrollTo({ top, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  if (!isVisible) return null;

  const totalSections = GLOSSARY_LIST.length;
  const progress = (activeSection / totalSections) * 100;

  // Adaptive colors based on background
  const bgColor = isDarkBg 
    ? "bg-gray-900/95 backdrop-blur-sm" 
    : "bg-white/95 backdrop-blur-sm";
  const borderColor = isDarkBg 
    ? "border-gray-700/50" 
    : "border-gray-200/50";
  const textColor = isDarkBg ? "text-gray-100" : "text-gray-600";
  const progressBg = isDarkBg ? "bg-gray-700" : "bg-gray-200";
  const progressFill = isDarkBg ? "bg-white" : "bg-gray-900";
  const dotActive = isDarkBg ? "bg-white" : "bg-gray-900";
  const dotPast = isDarkBg ? "bg-gray-400" : "bg-gray-600";
  const dotFuture = isDarkBg ? "bg-gray-600" : "bg-gray-400";

  return (
    <div
      className={`fixed top-[90px] left-4 z-[9999] hidden md:block transition-colors duration-300 ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Collapsed state: Compact progress indicator */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className={`${bgColor} rounded-lg shadow-lg border ${borderColor} p-3`}>
          {/* Progress bar */}
          <div className="relative mb-2">
            <div className={`h-1.5 ${progressBg} rounded-full overflow-hidden`}>
              <div 
                className={`h-full ${progressFill} rounded-full transition-all duration-300 ease-out`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Section dots */}
          <div className="flex items-center gap-1.5">
            {GLOSSARY_LIST.map((section) => {
              const isActive = section.id === activeSection;
              const isPast = section.id < activeSection;
              return (
                <button
                  key={section.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSectionClick(section.id);
                  }}
                  className={`relative transition-all duration-200 ${
                    isActive 
                      ? "scale-125" 
                      : isPast 
                        ? "opacity-60 hover:opacity-80" 
                        : "opacity-30 hover:opacity-50"
                  }`}
                  title={section.title}
                  aria-label={`Navigate to ${section.title}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? dotActive
                        : isPast
                          ? dotPast
                          : dotFuture
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active section number */}
          <div className="mt-2 text-center">
            <span className={`text-xs font-josefinSans font-medium ${textColor}`}>
              {activeSection} of {totalSections}
            </span>
          </div>
        </div>
      </div>

      {/* Expanded state: Full navigation menu */}
      <div
        className={`absolute top-0 left-0 ${isDarkBg ? "bg-gray-900" : "bg-white"} rounded-lg shadow-xl border ${borderColor} overflow-hidden transition-all duration-300 ${
          isOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
        style={{ width: '320px' }}
      >
        {/* Navigation items */}
        <div className="py-2 max-h-[70vh] overflow-y-auto">
          {GLOSSARY_LIST.map((section) => {
            const isActive = section.id === activeSection;
            const activeBg = isDarkBg ? "bg-gray-800" : "bg-gray-100";
            const activeBorder = isDarkBg ? "border-white" : "border-gray-900";
            const hoverBg = isDarkBg ? "hover:bg-gray-800" : "hover:bg-gray-50";
            const activeText = isDarkBg ? "text-white" : "text-gray-900";
            const inactiveText = isDarkBg ? "text-gray-400" : "text-gray-400";
            const hoverText = isDarkBg ? "group-hover:text-gray-200" : "group-hover:text-gray-600";
            const titleInactive = isDarkBg ? "text-gray-300" : "text-gray-600";
            const titleHover = isDarkBg ? "group-hover:text-white" : "group-hover:text-gray-900";
            
            return (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`w-full text-left px-4 py-2.5 transition-all duration-200 group ${
                  isActive 
                    ? `${activeBg} border-l-2 ${activeBorder}` 
                    : `${hoverBg} border-l-2 border-transparent`
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Section number */}
                  <span
                    className={`text-xs font-josefinSans font-bold uppercase tracking-wider min-w-[2em] transition-colors ${
                      isActive ? activeText : `${inactiveText} ${hoverText}`
                    }`}
                  >
                    {section.id}.
                  </span>
                  
                  {/* Section title */}
                  <span
                    className={`text-sm font-josefinSans font-medium uppercase tracking-wide transition-colors flex-1 ${
                      isActive 
                        ? `${activeText} font-semibold` 
                        : `${titleInactive} ${titleHover}`
                    }`}
                  >
                    {section.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress indicator at bottom */}
        <div className={`px-4 py-2.5 ${isDarkBg ? "bg-gray-800" : "bg-gray-50"} ${isDarkBg ? "border-gray-700" : "border-gray-200"} border-t`}>
          <div className="flex items-center justify-between text-xs">
            <span className={`font-josefinSans font-medium ${textColor}`}>
              Section {activeSection} of {totalSections}
            </span>
            <span className={`font-josefinSans font-medium ${isDarkBg ? "text-gray-400" : "text-gray-400"}`}>
              {Math.round(progress)}%
            </span>
          </div>
          <div className={`mt-2 h-1 ${progressBg} rounded-full overflow-hidden`}>
            <div 
              className={`h-full ${progressFill} rounded-full transition-all duration-300`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
