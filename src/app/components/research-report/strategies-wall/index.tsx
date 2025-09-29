'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JuniorCoreDev } from './junior-core-dev';
import { SeniorCoreDev } from './senior-core-dev';
import { JuniorAppDev } from './junior-app-dev';
import { SeniorAppDev } from './senior-app-dev';

gsap.registerPlugin(ScrollTrigger);

export function StrategiesWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const windowsGridRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentGridRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (showOverlay) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        pointerEvents: 'auto'
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.in',
        pointerEvents: 'none'
      });
    }
  }, [showOverlay]);

  useEffect(() => {
    if (!containerRef.current || !windowsGridRef.current || !contentGridRef.current) return;

    const ctx = gsap.context(() => {
      // Initial state for overlay
      gsap.set(overlayRef.current, { 
        opacity: 0, 
        y: 50,
        scale: 0.95,
        pointerEvents: 'none'
      });

      // Get all content layers
      const contentLayers = contentGridRef.current!.querySelectorAll('.content-layer');
      
      // Set initial positions for content layers
      contentLayers.forEach((layer, index) => {
        if (index > 0) {
          gsap.set(layer, { y: '100%' });
        }
      });

      // Main timeline for window animations
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1000%',
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            
            if (progress < 0.05) {
              setShowContent(false);
              setShowOverlay(false);
            } else if (progress >= 0.05 && progress < 0.9) {
              setShowContent(true);
              setShowOverlay(true);
            } else {
              setShowContent(false);
              setShowOverlay(false);
            }
          }
        }
      });

      const gridWidth = 800;
      const gridHeight = 600;
      const gap = 24;
      const windowWidth = (gridWidth - gap) / 2;
      const windowHeight = (gridHeight - gap) / 2;

      const scaleX = window.innerWidth / windowWidth;
      const scaleY = window.innerHeight / windowHeight;
      const scale = Math.min(scaleX, scaleY) * 0.9;

      const positions = [
        { 
          x: (windowWidth + gap/2) * scale / 2, 
          y: (windowHeight + gap/2) * scale / 2 
        },
        { 
          x: (windowWidth + gap/2) * scale / 2 + (windowWidth + gap) * scale, 
          y: (windowHeight + gap/2) * scale / 2 
        },
        { 
          x: (windowWidth + gap/2) * scale / 2, 
          y: (windowHeight + gap/2) * scale / 2 + (windowHeight + gap) * scale 
        },
        { 
          x: (windowWidth + gap/2) * scale / 2 + (windowWidth + gap) * scale, 
          y: (windowHeight + gap/2) * scale / 2 + (windowHeight + gap) * scale 
        }
      ];

      // Window zoom to first position
      mainTl.to([windowsGridRef.current, backgroundRef.current], {
        scale: scale,
        x: positions[0].x,
        y: positions[0].y,
        duration: 0.5,
        ease: 'power2.inOut'
      });

      // Hold for content scrolling
      mainTl.to({}, { duration: 2 });

      // Move to second window
      mainTl.to([windowsGridRef.current, backgroundRef.current], {
        x: positions[1].x,
        y: positions[1].y,
        duration: 0.5,
        ease: 'power2.inOut'
      });
      
      // Hold for content scrolling
      mainTl.to({}, { duration: 2 });

      // Move to third window
      mainTl.to([windowsGridRef.current, backgroundRef.current], {
        x: positions[2].x,
        y: positions[2].y,
        duration: 0.5,
        ease: 'power2.inOut'
      });
      
      // Hold for content scrolling
      mainTl.to({}, { duration: 2 });

      // Move to fourth window
      mainTl.to([windowsGridRef.current, backgroundRef.current], {
        x: positions[3].x,
        y: positions[3].y,
        duration: 0.5,
        ease: 'power2.inOut'
      });
      
      // Hold for content scrolling
      mainTl.to({}, { duration: 2 });

      // Zoom back out
      mainTl.to([windowsGridRef.current, backgroundRef.current], {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      });

      // Create a separate timeline for content layers
      // This runs independently based on the same scroll position
      const contentTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1000%',
          scrub: 1,
        }
      });

      // Add a delay before content animations start
      contentTl.to({}, { duration: 0.5 });

      // Animate each content layer with proper spacing
      contentLayers.forEach((layer, index) => {
        if (index > 0) {
          // Each layer gets 2 units of timeline space
          // First unit: hold previous layer
          // Second unit: animate in new layer
          const startTime = 0.5 + (index * 2);
          
          contentTl.to(layer, {
            y: '0%',
            duration: 0.8,
            ease: 'power2.out'
          }, startTime);
        }
      });

      // Add final hold
      contentTl.to({}, { duration: 1 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden"
        style={{ backgroundColor: '#031C51' }}
      >
        <div
          ref={backgroundRef}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/svgs/research/strategies/bg.svg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div
          ref={windowsGridRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="grid grid-cols-2 gap-6 w-[800px] h-[600px]">
            <div className="relative w-full h-full" style={{ backgroundColor: '#FBF7EE' }}>
              <Image
                src="/svgs/research/strategies/window.svg"
                alt="Window frame"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src="/svgs/research/strategies/1.svg"
                  alt="Window 1"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="relative w-full h-full" style={{ backgroundColor: '#FBF7EE' }}>
              <Image
                src="/svgs/research/strategies/window.svg"
                alt="Window frame"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src="/svgs/research/strategies/2.svg"
                  alt="Window 2"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="relative w-full h-full" style={{ backgroundColor: '#FBF7EE' }}>
              <Image
                src="/svgs/research/strategies/window.svg"
                alt="Window frame"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src="/svgs/research/strategies/3.svg"
                  alt="Window 3"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="relative w-full h-full" style={{ backgroundColor: '#FBF7EE' }}>
              <Image
                src="/svgs/research/strategies/window.svg"
                alt="Window frame"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src="/svgs/research/strategies/4.svg"
                  alt="Window 4"
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content layers */}
        <div
          ref={overlayRef}
          className="fixed inset-0"
          style={{ 
            opacity: 0,
            transform: 'translateY(50px) scale(0.95)',
            pointerEvents: 'none'
          }}
        >
          <div 
            ref={contentGridRef}
            className="grid w-full h-full relative"
            style={{ isolation: 'isolate' }}
          >
            <div
              className="content-layer col-start-1 row-start-1 relative"
              style={{
                backgroundColor: '#FBF7EE',
                zIndex: 10,
                height: '100vh',
                overflowY: 'auto'
              }}
            >
              <JuniorCoreDev />
            </div>
            
            <div
              className="content-layer col-start-1 row-start-1 relative"
              style={{
                backgroundColor: '#FBF7EE',
                zIndex: 20,
                height: '100vh',
                overflowY: 'auto'
              }}
            >
              <SeniorCoreDev />
            </div>
            
            <div
              className="content-layer col-start-1 row-start-1 relative"
              style={{
                backgroundColor: '#FBF7EE',
                zIndex: 30,
                height: '100vh',
                overflowY: 'auto'
              }}
            >
              <JuniorAppDev />
            </div>
            
            <div
              className="content-layer col-start-1 row-start-1 relative"
              style={{
                backgroundColor: '#FBF7EE',
                zIndex: 40,
                height: '100vh',
                overflowY: 'auto'
              }}
            >
              <SeniorAppDev />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}