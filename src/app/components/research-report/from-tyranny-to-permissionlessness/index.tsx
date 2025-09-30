"use client";

import { useState, useRef } from "react";
import { AnimatedSVG } from "./animated-svg";
import { TextSection } from "./text-section";
import { sections } from "./sections-data";

export const FromTyrannyToPermissionlessness = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [sectionKeys, setSectionKeys] = useState<number[]>(sections.map(() => 0));
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSectionChange = (newIndex: number) => {
    if (newIndex === activeIndex || isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);
    // Increment key for the new section to restart its animation
    setSectionKeys(prev => {
      const newKeys = [...prev];
      newKeys[newIndex] = newKeys[newIndex] + 1;
      return newKeys;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleAnimationReplay = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setReplayKey(prev => prev + 1);
    // Also increment the active section's key
    setSectionKeys(prev => {
      const newKeys = [...prev];
      newKeys[activeIndex] = newKeys[activeIndex] + 1;
      return newKeys;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getTextAnimation = (index: number) => {
    const isActive = index === activeIndex;
    return {
      opacity: isActive ? 1 : 0,
      transform: `translateY(${isActive ? 0 : -500}px) scale(${isActive ? 1 : 0.9})`,
    };
  };

  const getSVGAnimation = (index: number) => {
    const isActive = index === activeIndex;
    return {
      opacity: isActive ? 1 : 0,
    };
  };

  return (
    <div className='font-inter min-h-screen relative'>
      <div className="fixed top-40 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          {sections.map((section, index) => (
            <button
              key={section.id}
              className={`py-2 px-10 rounded-full text-xs font-medium transition-all duration-300 ${
                index === activeIndex ? 'bg-black text-white' : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
              onClick={() => handleSectionChange(index)}
              disabled={isAnimating}
            >
              {section.title}
            </button>
          ))}
          <button
            onClick={handleAnimationReplay}
            disabled={isAnimating}
            className="ml-2 px-4 rounded-full text-xs font-medium transition-all duration-300 bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-50"
          >
            ↻
          </button>
        </div>
      </div>

          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="absolute inset-0"
            >
              <TextSection
                isActive={index === activeIndex}
                style={getTextAnimation(index)}
              >
                {section.textContent}
              </TextSection>
              <div
                className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
                style={getSVGAnimation(index)}
              >
                {section.animation && (
                  <AnimatedSVG
                    key={sectionKeys[index]}
                    stage={section.animation}
                    replayKey={sectionKeys[index]}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
  );
};