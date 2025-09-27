"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./card";
import { ExperienceIndicator } from "./experience-indicator";

gsap.registerPlugin(ScrollTrigger);

enum ExperienceLevel {
  New = 'new',
  Medium = 'mid',
  Expert = 'expert',
}

interface CardData {
  preference: {
    title: string;
    subtitle: string;
    image: string;
  };
  work: {
    title: string;
    subtitle: string;
    image: string;
  };
  rhythm: {
    title: string;
    subtitle: string;
    image: string;
  };
}

export const ExperienceParadoxes = ({ data }: { data: Record<ExperienceLevel, CardData> }) => {
  const [currentState, setCurrentState] = useState<ExperienceLevel>(ExperienceLevel.New);
  const containerRef = useRef<HTMLDivElement>(null);
  const singleAvatarRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLImageElement>(null);
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const setCardRef = useCallback((index: number) => {
    return (el: HTMLDivElement | null) => {
      cardRefs.current[index] = el;
    };
  }, []);

  const getAvatarData = (state: ExperienceLevel) => {
    switch (state) {
      case ExperienceLevel.New:
        return {
          avatar: "/svgs/experience-the-paradoxes/new-avatar.svg",
          alt: "New Contributor",
          label1: "New",
          label2: "Contributor"
        };
      case ExperienceLevel.Medium:
        return {
          avatar: "/svgs/experience-the-paradoxes/mid-avatar.svg",
          alt: "Medium Experience",
          label1: "Medium",
          label2: "Experience"
        };
      case ExperienceLevel.Expert:
        return {
          avatar: "/svgs/experience-the-paradoxes/expert-avatar.svg",
          alt: "Experienced Contributor",
          label1: "Experienced",
          label2: "Contributor"
        };
    }
  };

  const calculatePositions = useCallback(() => {
    if (!lineContainerRef.current || !singleAvatarRef.current) return [0, 0, 0];
    
    const lineContainer = lineContainerRef.current;
    const avatar = singleAvatarRef.current;
    
    const containerRect = lineContainer.getBoundingClientRect();
    const avatarRect = avatar.getBoundingClientRect();
    
    const avatarWidth = 128;
    const availableWidth = containerRect.width - avatarWidth;
    
    return [
      0,
      availableWidth * 0.5,
      availableWidth
    ];
  }, []);

  useEffect(() => {
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }

    const timer = setTimeout(() => {
      if (!containerRef.current || !singleAvatarRef.current || !lineContainerRef.current) return;

      const container = containerRef.current;
      const singleAvatar = singleAvatarRef.current;
      const cards = cardRefs.current.filter(Boolean);

      if (cards.length === 0) return;

      const states = [ExperienceLevel.New, ExperienceLevel.Medium, ExperienceLevel.Expert];
      let currentIndex = 0;

      let positions = calculatePositions();

      try {
        gsap.set(singleAvatar, { 
          x: positions[0], 
          y: -60, 
          scale: 1.5,
          transformOrigin: "center center",
          force3D: true
        });

        cards.forEach((card, i) => {
          if (card) {
            gsap.set(card, {
              rotation: 0,
              x: 0,
              y: 0,
              scale: 1,
              transformOrigin: "center center",
              zIndex: 1,
              force3D: true
            });
          }
        });

        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "+=1000vh",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          refreshPriority: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            
            let newIndex = 0;
            let avatarX = positions[0];

            if (progress < 0.33) {
              newIndex = 0;
              const moveProgress = progress / 0.33;
              avatarX = positions[0] + (positions[1] - positions[0]) * moveProgress;
            } else if (progress < 0.9) {
              newIndex = 1;
              const moveProgress = (progress - 0.33) / (0.9 - 0.33);
              avatarX = positions[1] + (positions[2] - positions[1]) * moveProgress;
            } else {
              newIndex = 2;
              avatarX = positions[2];
            }

            if (newIndex !== currentIndex) {
              currentIndex = newIndex;
              setCurrentState(states[currentIndex]);
            }

            if (singleAvatar) {
              gsap.set(singleAvatar, {
                x: avatarX,
                force3D: true
              });
            }

            const validCards = cards.filter(card => card && card.parentNode);
            
            const isTransitioning = (progress > 0.31 && progress < 0.35) || 
                                   (progress > 0.88 && progress < 0.92);
            
            if (isTransitioning) {
              validCards.forEach((card, index) => {
                if (card) {
                  const rotationAmount = Math.sin(progress * Math.PI * 8 + index) * 20;
                  const scaleAmount = 0.95 + Math.sin(progress * Math.PI * 6 + index) * 0.05;
                  
                  gsap.set(card, {
                    rotation: rotationAmount,
                    scale: scaleAmount,
                    force3D: true
                  });
                }
              });
            } else {
              validCards.forEach((card, index) => {
                if (card) {
                  const waveY = Math.sin(progress * Math.PI * 4 + index * 1.2) * 10;
                  const waveRotation = Math.sin(progress * Math.PI * 3 + index * 0.8) * 3;
                  
                  gsap.set(card, {
                    y: waveY,
                    rotation: waveRotation,
                    scale: 1,
                    force3D: true
                  });
                }
              });
            }
          },
          onRefresh: () => {
            positions = calculatePositions();
          }
        });

      } catch (error) {
        console.error('GSAP setup error:', error);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (scrollTriggerRef.current) {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentData = data[currentState];
  const avatarData = getAvatarData(currentState);

  return (
    <div ref={containerRef} id="experience-paradoxes" className="h-screen flex flex-col justify-center items-center px-4 relative z-10">
      <div className="flex flex-col items-center gap-8 mb-16">
        <h2 className="text-[28px] font-inknutAntiqua font-bold text-center pb-24">
          Experience the paradoxes
        </h2>

        <div ref={lineContainerRef} className="w-full max-w-6xl relative">
          <Image
            ref={lineRef}
            src="/svgs/experience-the-paradoxes/line.svg"
            alt="horizontal line"
            width={800}
            height={4}
            className="w-full h-auto"
          />

          <div className="absolute top-0 left-0 w-full h-32 overflow-visible">
            <div ref={singleAvatarRef} className="absolute w-32 h-32 will-change-transform">
              <ExperienceIndicator
                avatar={avatarData.avatar}
                alt={avatarData.alt}
                label1={avatarData.label1}
                label2={avatarData.label2}
                isActive={true}
                size="large"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="card-set grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4" style={{ perspective: "1000px" }}>
          <div ref={setCardRef(0)} className="card will-change-transform">
            <Card
              title={currentData.preference.title}
              subtitle={currentData.preference.subtitle}
              image={currentData.preference.image}
              alt={currentData.preference.title}
            />
          </div>

          <div ref={setCardRef(1)} className="card will-change-transform">
            <Card
              title={currentData.work.title}
              subtitle={currentData.work.subtitle}
              image={currentData.work.image}
              alt={currentData.work.title}
            />
          </div>

          <div ref={setCardRef(2)} className="card will-change-transform">
            <Card
              title={currentData.rhythm.title}
              subtitle={currentData.rhythm.subtitle}
              image={currentData.rhythm.image}
              alt={currentData.rhythm.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};