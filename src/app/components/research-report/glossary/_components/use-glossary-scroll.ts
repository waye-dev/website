import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TOTAL_PARTS } from "../constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Calculate which part should be active based on scroll progress
const getPartFromProgress = (progress: number): number => {
  if (progress <= 0) return 1;
  if (progress >= 1) return TOTAL_PARTS;

  // Divide scroll into equal parts with slight overlap for smooth transitions
  const partIndex = Math.floor(progress * TOTAL_PARTS);
  return Math.min(Math.max(partIndex + 1, 1), TOTAL_PARTS);
};

export const useGlossaryScroll = () => {
  const [activePart, setActivePart] = useState<number>(1);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lastPartRef = useRef<number>(1);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useGSAP(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    // Kill any existing glossary ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach(st => {
      if (st.vars.id?.includes('glossary-scroll')) {
        st.kill(true);
      }
    });

    // Main ScrollTrigger - pins the section and tracks progress with snap
    ScrollTrigger.create({
      id: "glossary-scroll-main",
      trigger: containerRef.current,
      start: "top top",
      end: `+=${TOTAL_PARTS * 100}vh`, // 100vh per part
      scrub: 1,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      snap: {
        snapTo: 1 / (TOTAL_PARTS - 1), // Snap to each part
        duration: { min: 0.5, max: 1 },
        ease: "power2.inOut"
      },
      onEnter: () => {
        setActivePart(1);
        lastPartRef.current = 1;
        setProgress(0);
      },
      onUpdate: (self) => {
        const currentProgress = self.progress;
        setProgress(currentProgress);

        const newPart = getPartFromProgress(currentProgress);

        // Update active part if it changed
        if (newPart !== lastPartRef.current) {
          setActivePart(newPart);
          lastPartRef.current = newPart;
        }
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, {
    scope: containerRef,
    dependencies: []
  });

  return {
    activePart,
    progress,
    containerRef,
    cardsRef,
  };
};
