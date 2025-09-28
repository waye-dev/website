"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./card";
import { ExperienceParadoxesData } from "./types";

gsap.registerPlugin(ScrollTrigger);

export const ExperienceParadoxes = ({ data }: { data: ExperienceParadoxesData }) => {
  const [currentStage, setCurrentStage] = useState<'new' | 'mid' | 'expert'>('new');

  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const currentLevel = data[currentStage];

  // Get stage from progress
  const getStageFromProgress = (progress: number) => {
    if (progress < 0.33) return 'new';
    if (progress < 0.85) return 'mid';
    return 'expert';
  };

  // Get avatar position
  const getAvatarPosition = (progress: number, containerWidth: number) => {
    const avatarWidth = 128;
    const startX = -avatarWidth / 2;
    const midX = (containerWidth - avatarWidth) / 2;
    const endX = containerWidth - avatarWidth / 2;

    if (progress < 0.33) {
      const localProgress = progress / 0.33;
      return startX + (midX - startX) * localProgress;
    } else if (progress < 0.85) {
      const localProgress = (progress - 0.33) / (0.85 - 0.33);
      return midX + (endX - midX) * localProgress;
    } else {
      return endX;
    }
  };

  useEffect(() => {
    if (!containerRef.current || !avatarRef.current || !lineRef.current) return;

    // Wait for next tick to ensure DOM is ready
    const timer = setTimeout(() => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      let lastStage = 'new';

      try {
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000vh",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const newStage = getStageFromProgress(progress);

            // Update avatar position with error checking
            if (avatarRef.current && lineRef.current && avatarRef.current.parentNode) {
              try {
                const lineWidth = lineRef.current.offsetWidth;
                const avatarX = getAvatarPosition(progress, lineWidth);
                gsap.set(avatarRef.current, { x: avatarX });
              } catch (error) {
                console.warn('GSAP avatar positioning error:', error);
              }
            }

            // Update stage if changed
            if (newStage !== lastStage) {
              lastStage = newStage;
              setCurrentStage(newStage);
            }
          }
        });
      } catch (error) {
        console.warn('ScrollTrigger creation error:', error);
      }
    }, 10);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen flex flex-col justify-center items-center px-4 relative z-10">
      <div className="flex flex-col items-center gap-8 mb-16">
        <h2 className="text-[28px] font-inknutAntiqua font-bold text-center pb-24">
          Experience the paradoxes
        </h2>

        <div ref={lineRef} className="w-full max-w-7xl relative">
          <Image
            src="/svgs/experience-the-paradoxes/line.svg"
            alt="horizontal line"
            width={800}
            height={4}
            className="w-full h-auto"
          />

          {/* Static labels */}
          <div className="absolute top-16 left-0 w-full h-16">
            {(['new', 'mid', 'expert'] as const).map((stage, index) => {
              const levelData = data[stage];
              const positions = ['left-0', 'left-1/2', 'right-0'];
              const transforms = [
                'translate(calc(-50% + var(--offset-x)), var(--offset-y))',
                'translate(calc(-50% + var(--offset-x)), var(--offset-y))',
                'translate(calc(50% + var(--offset-x)), var(--offset-y))'
              ];

              return (
                <div
                  key={stage}
                  className={`absolute ${positions[index]} transition-opacity duration-500`}
                  style={{
                    opacity: currentStage === stage ? 1 : 0.4,
                    transform: transforms[index],
                    '--offset-x': `${levelData.labelOffset.x}px`,
                    '--offset-y': `${levelData.labelOffset.y}px`,
                  } as React.CSSProperties}
                >
                  <div className="text-center">
                    <p className="text-sm font-josefinSans font-bold uppercase tracking-wide text-gray-800 leading-tight">
                      {levelData.label1}
                    </p>
                    <p className="text-sm font-josefinSans font-bold uppercase tracking-wide text-gray-800 leading-tight">
                      {levelData.label2}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Animated avatar */}
          <div className="absolute top-0 left-0 w-full h-40 overflow-visible">
            <div ref={avatarRef} className="absolute w-32 h-32 will-change-transform">
              <div className="w-32 h-32 mb-3">
                <Image
                  src={currentLevel.avatar}
                  alt={currentLevel.alt}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {currentLevel.cards.map((card: any, index: number) => (
            <div key={`${currentStage}-card-${index}`} className="card">
              <Card
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                alt={card.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};