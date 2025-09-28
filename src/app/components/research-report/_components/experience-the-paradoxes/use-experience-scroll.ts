import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getStageFromProgress, getAvatarPosition, getAvatarVerticalPosition } from "./utils";

gsap.registerPlugin(ScrollTrigger);

export const useExperienceScroll = () => {
  const [currentStage, setCurrentStage] = useState<'new' | 'mid' | 'expert'>('new');
  const [previousStage, setPreviousStage] = useState<'new' | 'mid' | 'expert' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetStage, setTargetStage] = useState<'new' | 'mid' | 'expert'>('new');
  const [progress, setProgress] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const mobileAvatarRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!containerRef.current || !avatarRef.current || !lineRef.current) return;

    const timer = setTimeout(() => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      
      const isMobile = window.innerWidth < 768;
      if (!isMobile && avatarRef.current && lineRef.current) {
        const lineWidth = lineRef.current.offsetWidth;
        const initialX = getAvatarPosition(0, lineWidth);
        const initialY = getAvatarVerticalPosition(0);
        gsap.set(avatarRef.current, {
          x: initialX,
          y: initialY,
          force3D: true
        });
      }

      let lastStage = 'new';

      try {
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000vh",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const newStage = getStageFromProgress(progress);

            setProgress(progress);

            if (avatarRef.current && lineRef.current && avatarRef.current.parentNode) {
              try {
                const lineWidth = lineRef.current.offsetWidth;
                const isMobile = window.innerWidth < 768;

                if (!isMobile) {
                  const avatarX = getAvatarPosition(progress, lineWidth);
                  const avatarY = getAvatarVerticalPosition(progress);
                  gsap.set(avatarRef.current, {
                    x: avatarX,
                    y: avatarY,
                    force3D: true
                  });
                } else {
                  if (mobileAvatarRef.current) {
                    gsap.set(mobileAvatarRef.current, { x: 0, y: 0 });
                  }
                }
              } catch (error) {
                console.error('GSAP avatar positioning error:', error);
              }
            }

            if (newStage !== lastStage) {
              setPreviousStage(lastStage as 'new' | 'mid' | 'expert' | null);
              setTargetStage(newStage);
              setIsAnimating(true);
              lastStage = newStage;
            }
          }
        });
      } catch (error) {
        console.error('ScrollTrigger creation error:', error);
      }
    }, 10);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    setPreviousStage(null);
    setCurrentStage(targetStage);
  };

  return {
    currentStage,
    previousStage,
    isAnimating,
    targetStage,
    progress,
    containerRef,
    avatarRef,
    mobileAvatarRef,
    lineRef,
    handleAnimationComplete
  };
};
