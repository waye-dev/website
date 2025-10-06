"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Lazy load GSAP to reduce initial bundle
const gsap = typeof window !== 'undefined' ? require('gsap').default : null;

interface EyeballsProps {
  guyImageSrc?: string;
  eyesImageSrc?: string;
  className?: string;
}

export default function Eyeballs({
  guyImageSrc = "/svgs/research-intro/guy.svg",
  eyesImageSrc = "/svgs/research-intro/eyes.svg",
  className = "",
}: EyeballsProps) {
  const eyesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gsap) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !eyesRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const relativeX = (e.clientX - containerCenterX) / (containerRect.width / 2);
      const clampedX = Math.max(-1, Math.min(1, relativeX));
      const eyeMovement = clampedX * 8;

      gsap.to(eyesRef.current, {
        x: eyeMovement,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className={`relative flex justify-center ${className}`}>
      <Image
        src={guyImageSrc}
        alt="Guy illustration"
        width={390}
        height={350}
        priority
        style={{ width: 'auto', height: 'auto' }}
      />
      <div
        ref={eyesRef}
        className="absolute top-[27.5%] md:top-[28.5%] left-1/2 -translate-x-1/2"
      >
        <Image
          src={eyesImageSrc}
          alt="Eyes"
          width={147}
          height={20}
          style={{ width: 'auto', height: 'auto' }}
          className="scale-75 md:scale-100"
        />
      </div>
    </div>
  );
}
