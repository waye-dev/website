import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getStageFromProgress, getAvatarPosition, getAvatarVerticalPosition, getMobileAvatarTransform } from "./utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const useExperienceScroll = () => {
  const [currentStage, setCurrentStage] = useState<'new' | 'mid' | 'expert'>('new');
  const [previousStage, setPreviousStage] = useState<'new' | 'mid' | 'expert' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetStage, setTargetStage] = useState<'new' | 'mid' | 'expert'>('new');
  const [progress, setProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const mobileAvatarRef = useRef<HTMLDivElement>(null);
  const mobileAvatarNewRef = useRef<HTMLDivElement>(null);
  const mobileAvatarMidRef = useRef<HTMLDivElement>(null);
  const mobileAvatarExpertRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lastProgressRef = useRef(0);
  const lastStageRef = useRef<'new' | 'mid' | 'expert'>('new');
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Kill all ScrollTriggers before cleanup
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.id?.includes('experience-paradoxes')) {
          st.kill(true);
        }
      });
    };
  }, []);

  useGSAP(() => {
    if (!containerRef.current || !avatarRef.current || !lineRef.current) return;

    // Debounce resize events
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    const mm = gsap.matchMedia();

    // Kill existing ScrollTriggers before creating new ones
    ScrollTrigger.getAll().forEach(st => {
      if (st.vars.id?.includes('experience-paradoxes')) {
        st.kill(true);
      }
    });
    mm.add("(min-width: 768px)", () => {
      if (!avatarRef.current || !lineRef.current) return;

      // Initialize desktop avatar position
      const lineWidth = lineRef.current.offsetWidth;
      const initialX = getAvatarPosition(0, lineWidth);
      const initialY = getAvatarVerticalPosition(0);
      gsap.set(avatarRef.current, {
        x: initialX,
        y: initialY,
        force3D: true
      });

      // Create desktop ScrollTrigger
      ScrollTrigger.create({
        id: "experience-paradoxes-desktop",
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000vh",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const currentProgress = self.progress;
          const newStage = getStageFromProgress(currentProgress);

          const currentScrollDirection = currentProgress > lastProgressRef.current ? 'down' : 'up';
          setScrollDirection(currentScrollDirection);
          lastProgressRef.current = currentProgress;
          setProgress(currentProgress);

          if (avatarRef.current && lineRef.current) {
            const lineWidth = lineRef.current.offsetWidth;
            const avatarX = getAvatarPosition(currentProgress, lineWidth);
            const avatarY = getAvatarVerticalPosition(currentProgress);

            gsap.set(avatarRef.current, {
              x: avatarX,
              y: avatarY,
              force3D: true,
              overwrite: 'auto'
            });
          }

          if (newStage !== lastStageRef.current) {
            setPreviousStage(lastStageRef.current);
            setTargetStage(newStage);
            setIsAnimating(true);
            lastStageRef.current = newStage;
          }
        }
      });
    });

    // Mobile animations
    mm.add("(max-width: 767px)", () => {
      const mobileAvatarRefs = [
        { ref: mobileAvatarNewRef, stage: 'new' as const },
        { ref: mobileAvatarMidRef, stage: 'mid' as const },
        { ref: mobileAvatarExpertRef, stage: 'expert' as const }
      ];

      // Initialize mobile avatars
      mobileAvatarRefs.forEach(({ ref, stage }) => {
        if (ref.current) {
          const initialTransform = getMobileAvatarTransform(0, stage, 'down');
          gsap.set(ref.current, {
            opacity: initialTransform.opacity,
            x: initialTransform.x,
            y: 0,
            force3D: true
          });
        }
      });

      // Create mobile ScrollTrigger
      ScrollTrigger.create({
        id: "experience-paradoxes-mobile",
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000vh",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const currentProgress = self.progress;
          const newStage = getStageFromProgress(currentProgress);

          const currentScrollDirection = currentProgress > lastProgressRef.current ? 'down' : 'up';
          setScrollDirection(currentScrollDirection);
          lastProgressRef.current = currentProgress;
          setProgress(currentProgress);

          mobileAvatarRefs.forEach(({ ref, stage }) => {
            if (ref.current) {
              const transform = getMobileAvatarTransform(currentProgress, stage, currentScrollDirection);
              gsap.set(ref.current, {
                opacity: transform.opacity,
                x: transform.x,
                y: 0,
                force3D: true,
                overwrite: 'auto'
              });
            }
          });

          if (newStage !== lastStageRef.current) {
            setPreviousStage(lastStageRef.current);
            setTargetStage(newStage);
            setIsAnimating(true);
            lastStageRef.current = newStage;
          }
        }
      });
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      mm.revert();
    };
  }, {
    scope: containerRef,
    dependencies: []
  });

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
    scrollDirection,
    containerRef,
    avatarRef,
    mobileAvatarRef,
    mobileAvatarNewRef,
    mobileAvatarMidRef,
    mobileAvatarExpertRef,
    lineRef,
    handleAnimationComplete
  };
};
