"use client";

import Image from "next/image";
import { useEffect } from "react";

interface EyeballsProps {
  guyImageSrc?: string;
  eyesImageSrc?: string;
  guyWidth?: number;
  guyHeight?: number;
  eyesWidth?: number;
  eyesHeight?: number;
  className?: string;
}

export default function Eyeballs({
  guyImageSrc = "/svgs/research-intro/guy.svg",
  eyesImageSrc = "/svgs/research-intro/eyes.svg",
  guyWidth = 390,
  guyHeight = 350,
  eyesWidth = 147,
  eyesHeight = 20,
  className = "",
}: EyeballsProps) {
    
  useEffect(() => {
    let rafId: number;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const screenWidth = window.innerWidth;
        const centerX = screenWidth / 2;
        const mouseOffset = e.clientX - centerX;
        const clampedOffset = Math.max(-20, Math.min(20, (mouseOffset / centerX) * 20));

        document.documentElement.style.setProperty('--eye-offset', `${clampedOffset}px`);
        rafId = 0;
      });
    };

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;

        const frequency = 0.01;
        const offset = Math.sin(scrollPosition * frequency) * 5;

        document.documentElement.style.setProperty('--eye-offset', `${offset}px`);
        rafId = 0;
      });
    };

    if (isTouchDevice) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={`relative flex justify-center ${className}`}>
      <Image
        src={guyImageSrc}
        alt="Guy illustration"
        width={guyWidth}
        height={guyHeight}
        className="w-auto h-auto"
      />
      <div
        className="absolute transition-all duration-300 ease-out top-[27.5%] md:top-[28.5%]"
        style={{
          left: '50%',
          transform: 'translateX(calc(-50% + var(--eye-offset, 0px)))'
        }}
      >
        <Image
          src={eyesImageSrc}
          alt="Eyes"
          width={eyesWidth}
          height={eyesHeight}
          className="w-auto h-auto scale-75 md:scale-100"
        />
      </div>
    </div>
  );
}
