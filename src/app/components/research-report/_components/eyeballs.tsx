"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  const idleTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (!eyesRef.current) return;

    const isTouchDevice = 'ontouchstart' in window;
    let isInteracting = false;
    let interactionTimeout: NodeJS.Timeout;

    gsap.set(eyesRef.current, { x: 0, y: 0 });

    const startRandomMove = () => {
      if (idleTimelineRef.current) {
        idleTimelineRef.current.kill();
      }

      idleTimelineRef.current = gsap.timeline({
        repeat: -1,
        repeatRefresh: true
      });

      idleTimelineRef.current.to(eyesRef.current, {
        x: () => gsap.utils.random(-6, 6),
        duration: () => gsap.utils.random(2, 3),
        ease: "power1.inOut"
      });
    };

    startRandomMove();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isInteracting) {
        isInteracting = true;
        idleTimelineRef.current?.kill();
      }

      clearTimeout(interactionTimeout);

      const rect = eyesRef.current?.getBoundingClientRect();
      if (!rect) return;

      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;

      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 30, 8);
      const yDistance = Math.min(distance, 3);

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * yDistance;

      gsap.to(eyesRef.current, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true
      });

      interactionTimeout = setTimeout(() => {
        isInteracting = false;
        startRandomMove();
      }, 2000);
    };

    const handleScroll = () => {
      if (!isInteracting) {
        isInteracting = true;
        idleTimelineRef.current?.kill();
      }

      clearTimeout(interactionTimeout);

      const x = Math.sin(window.scrollY * 0.01) * 4;
      gsap.to(eyesRef.current, {
        x,
        y: 0,
        duration: 0.2,
        ease: "power1.out",
        overwrite: true
      });

      interactionTimeout = setTimeout(() => {
        isInteracting = false;
        startRandomMove();
      }, 2000);
    };

    if (isTouchDevice) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      clearTimeout(interactionTimeout);
      if (idleTimelineRef.current) {
        idleTimelineRef.current.kill();
      }
      if (isTouchDevice) {
        window.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  });

  return (
    <div className={`relative flex justify-center ${className}`}>
      <Image
        src={guyImageSrc}
        alt="Guy illustration"
        width={390}
        height={350}
        className="w-auto h-auto"
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
          className="w-auto h-auto scale-75 md:scale-100"
        />
      </div>
    </div>
  );
}
