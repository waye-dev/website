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
  const lineRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!containerRef.current || !avatarRef.current || !lineRef.current) return;

    const timer = setTimeout(() => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      // Set initial position for desktop avatar
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

            console.log('ScrollTrigger progress:', progress);

            // Update progress state for labels
            setProgress(progress);

            if (avatarRef.current && lineRef.current && avatarRef.current.parentNode) {
              try {
                const lineWidth = lineRef.current.offsetWidth;
                const isMobile = window.innerWidth < 768;

                if (!isMobile) {
                  // Desktop: Move avatar horizontally across the timeline AND vertically
                  const avatarX = getAvatarPosition(progress, lineWidth);
                  const avatarY = getAvatarVerticalPosition(progress);
                  gsap.set(avatarRef.current, {
                    x: avatarX,
                    y: avatarY,
                    force3D: true
                  });
                  console.log('Desktop avatar position:', {
                    progress: progress.toFixed(3),
                    x: avatarX.toFixed(1),
                    y: avatarY.toFixed(1),
                    lineWidth
                  });
                } else {
                  // Mobile: Keep avatar stationary, no movement
                  gsap.set(avatarRef.current, { x: 0, y: 0 });
                }
              } catch (error) {
                console.warn('GSAP avatar positioning error:', error);
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

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    setPreviousStage(null);
    // Update the stage after animation completes
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
    lineRef,
    handleAnimationComplete
  };
};
