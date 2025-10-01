"use client";

import { GLOSSARY_LIST } from "../glossary-section";
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
  6: '[data-section="toward-sustainable-permissionlessness"]',
} as const;

const isDarkBackground = (): boolean => {
  const samplePoints = [
    { x: window.innerWidth / 2, y: 140 },
    { x: 200, y: 140 },
    { x: window.innerWidth - 200, y: 140 },
  ];

  for (const point of samplePoints) {
    const element = document.elementFromPoint(point.x, point.y);
    if (!element) continue;

    let currentElement: Element | null = element;

    while (currentElement && currentElement !== document.documentElement) {
      const computedBg = window.getComputedStyle(currentElement).backgroundColor;

      if (currentElement.classList?.contains('fixed') && currentElement.classList?.contains('top-[120px]')) {
        currentElement = currentElement.parentElement;
        continue;
      }

      if (computedBg && computedBg !== 'transparent' && !computedBg.includes('rgba(0, 0, 0, 0)')) {
        const match = computedBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const [_, r, g, b] = match.map(Number);

          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

          return luminance < 0.5;
        }
        break;
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
          setIsDarkBg(isDarkBackground());
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

  const visibleSections = GLOSSARY_LIST.filter((section) => {
    const isPrevious = section.id === activeSection - 1;
    const isActive = section.id === activeSection;
    const isNext = section.id === activeSection + 1;
    return isPrevious || isActive || isNext;
  });

  const textColor = isDarkBg ? "text-white" : "text-gray-900";

  return (
    <div
      className={`fixed top-[90px] left-4 z-[9999] hidden md:block transition-colors duration-300 ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`transition-opacity duration-200 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col gap-2">
          {visibleSections.map((section) => {
            const isActive = section.id === activeSection;
            return (
              <div
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`flex items-start gap-2 text-base uppercase font-josefinSans font-medium tracking-wide cursor-pointer transition-all duration-200 ${
                  isActive ? "font-bold opacity-100" : "opacity-40"
                } ${textColor}`}
              >
                <div className="font-bold min-w-[1.2em] px-1 rounded">
                  {section.id}.
                </div>
                <div className="line-clamp-2 max-w-[200px] px-1 rounded">
                  {section.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 px-3 py-2 rounded-md transition-all duration-200 bg-[#FCF7ED] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          {GLOSSARY_LIST.map((section) => {
            const isActive = section.id === activeSection;
            return (
              <div
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className="group cursor-pointer"
              >
                <div
                  className={`px-2 py-1 rounded transition-all duration-200 flex items-start gap-2 text-base uppercase font-josefinSans font-medium tracking-wide ${
                    isActive ? "font-bold opacity-100" : "opacity-50"
                  } text-gray-900 group-hover:bg-[#E7D7B4] ${!isActive && 'group-hover:opacity-100'}`}
                >
                  <span className="font-bold min-w-[1.2em]">
                    {section.id}.
                  </span>
                  <span className="line-clamp-2 max-w-[200px]">
                    {section.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
