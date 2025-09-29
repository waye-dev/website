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

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
        className="absolute transition-all duration-300 ease-out" 
        style={{ 
          top: '28.5%', 
          left: '50%',
          transform: 'translateX(calc(-50% + var(--eye-offset, 0px)))'
        }}
      >
        <Image
          src={eyesImageSrc}
          alt="Eyes"
          width={eyesWidth}
          height={eyesHeight}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}
