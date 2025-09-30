"use client";

import { GLOSSARY_LIST } from "../glossary-section";
import React, { useState, useEffect, useCallback } from "react";

interface StickyNavigationProps {
  className?: string;
}

export const StickyNavigation: React.FC<StickyNavigationProps> = ({ className = "" }) => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isNavigationVisible, setIsNavigationVisible] = useState<boolean>(false);
  const [visibleSections, setVisibleSections] = useState<typeof GLOSSARY_LIST>([]);

  // Map section IDs to their corresponding DOM element selectors
  const sectionSelectors = {
    1: '[data-section="study-overview"]',
    2: '[data-section="top-level-analysis"]',
    3: '[data-section="tyranny-of-permissionlessness"]',
    4: '[data-section="strategies"]',
    5: '[data-section="beyond-financial-sustainability"]',
    6: '[data-section="toward-sustainable-permissionlessness"]',
  };

  // Update visible sections based on active section
  useEffect(() => {
    const getVisibleSections = (activeId: number) => {
      const totalSections = GLOSSARY_LIST.length;
      let startIndex, endIndex;

      if (activeId === 1) {
        // Show sections 1, 2, 3
        startIndex = 0;
        endIndex = 2;
      } else if (activeId === totalSections) {
        // Show sections 4, 5, 6 (last three)
        startIndex = totalSections - 3;
        endIndex = totalSections - 1;
      } else {
        // Show active section in the middle with one before and one after
        startIndex = activeId - 2;
        endIndex = activeId;
      }

      return GLOSSARY_LIST.slice(startIndex, endIndex + 1);
    };

    setVisibleSections(getVisibleSections(activeSection));
  }, [activeSection]);

  // track active sections
  useEffect(() => {
    const sectionIdMap: Record<string, number> = {
      "study-overview": 1,
      "top-level-analysis": 2,
      "tyranny-of-permissionlessness": 3,
      strategies: 4,
      "beyond-financial-sustainability": 5,
      "toward-sustainable-permissionlessness": 6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let visibleSections: Array<{ id: number; ratio: number }> = [];

      entries.forEach((entry) => {
        const sectionElement = entry.target as HTMLElement;
        const sectionName = sectionElement.getAttribute("data-section");

        if (entry.isIntersecting && sectionName && sectionIdMap[sectionName]) {
          visibleSections.push({
            id: sectionIdMap[sectionName],
            ratio: entry.intersectionRatio,
          });
        }
      });

      // Sort by intersection ratio and pick the most visible one
      if (visibleSections.length > 0) {
        visibleSections.sort((a, b) => b.ratio - a.ratio);
        setActiveSection(visibleSections[0].id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    });

    // Wait for DOM to be ready, then observe sections
    const initializeObserver = () => {
      Object.values(sectionSelectors).forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          observer.observe(element);
        });
      });
    };

    // Use a longer delay to ensure all components are mounted
    const timeoutId = setTimeout(initializeObserver, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Scroll-based fallback for section detection
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return; // Don't interfere with programmatic scrolling

      const sectionElements = Object.entries(sectionSelectors)
        .map(([id, selector]) => ({
          id: parseInt(id),
          element: document.querySelector(selector) as HTMLElement,
        }))
        .filter(({ element }) => element !== null);

      // Find which section is most visible in the viewport
      let currentSection = 1;
      const scrollTop = window.pageYOffset;

      // Check if Study Overview section is visible to show/hide navigation
      const studyOverviewElement = document.querySelector('[data-section="study-overview"]');
      if (studyOverviewElement) {
        const studyOverviewRect = studyOverviewElement.getBoundingClientRect();
        const studyOverviewTop = studyOverviewRect.top + scrollTop;

        // Show navigation when user has scrolled to or past the Study Overview section
        setIsNavigationVisible(scrollTop >= studyOverviewTop - 300);
      }

      for (const { id, element } of sectionElements) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollTop;

        // Check if this section is in the upper part of the viewport
        if (scrollTop >= elementTop - 200) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", throttledScroll);

    // Initial check
    setTimeout(handleScroll, 1000);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  // Handle navigation click
  const handleNavigationClick = useCallback((sectionId: number) => {
    const selector = sectionSelectors[sectionId as keyof typeof sectionSelectors];
    const element = document.querySelector(selector);

    if (element) {
      setIsScrolling(true);
      setActiveSection(sectionId);

      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const scrollToPosition = absoluteElementTop - 100; // 100px offset for header

      window.scrollTo({
        top: Math.max(0, scrollToPosition),
        behavior: "smooth",
      });

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, []);

  if (!isNavigationVisible) {
    return null;
  }

  return (
    <div
      className={`fixed top-[120px] left-8 lg:left-8 xl:left-14 w-fit z-[9999] hidden md:block transition-all duration-500 ease-in-out border-2 border-blue-custom-900 rounded-xl ${
        isNavigationVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      } ${className}`}
    >
      <div className='bg-gray-custom-400 rounded-xl p-5 transition-all duration-300 hover:shadow-2xl'>
        <div className='flex flex-col gap-[5px]'>
          {visibleSections.map((section) => {
            const isActive = section.id === activeSection;
            return (
              <div
                key={section.id}
                onClick={() => handleNavigationClick(section.id)}
                className={`flex items-start gap-2 py-[5px] text-base uppercase font-josefinSans font-medium tracking-wide cursor-pointer transition-all duration-300 hover:scale-105 hover:translate-x-1 ${
                  isActive ? "opacity-100 text-blue-custom-900 font-bold transform scale-105" : "opacity-50 hover:opacity-75 text-gray-700"
                }`}
              >
                <span className='text-blue-custom-900 font-bold min-w-[1.2em]'>{section.id}.</span>
                <span className='font-josefinSans line-clamp-2'>{section.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
