'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JuniorCoreDev } from './junior-core-dev';
import { SeniorCoreDev } from './senior-core-dev';
import { JuniorAppDev } from './junior-app-dev';
import { SeniorAppDev } from './senior-app-dev';


const strategyImages = [
  {
    src: "/svgs/strategy-image-1.svg",
    alt: "strategy image 1",
  },
  {
    src: "/svgs/strategy-image-2.svg",
    alt: "strategy image 2",
  },
  {
    src: "/svgs/strategy-image-3.svg",
    alt: "strategy image 3",
  },
  {
    src: "/svgs/strategy-image-4.svg",
    alt: "strategy image 4",
  },
];

interface ContentLayerProps {
  children: React.ReactNode;
  zIndex: number;
}

export const ContentLayer: React.FC<ContentLayerProps> = ({
  children,
  zIndex
}) => {
  return (
    <div
      className="content-layer col-start-1 row-start-1 relative overflow-hidden"
      style={{
        backgroundColor: '#FBF7EE',
        zIndex,
        height: '100vh',
        boxShadow: '0 -5px 5px rgba(0, 0, 0, 0.03)',
      }}
    >
        <div className="content-inner w-full max-w-[1000px] xl:max-w-[1250px] mx-auto px-8 my-[150px]">
          {children}
      </div>
    </div>
  );
};

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function StrategiesWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const windowsGridRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentGridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !windowsGridRef.current || !contentGridRef.current || !overlayRef.current) return;

    // Initial state for overlay
    gsap.set(overlayRef.current, { 
      opacity: 0, 
      scale: 0.95
    });

    // Get all content layers
    const contentLayers = contentGridRef.current.querySelectorAll('.content-layer');
    
    // Set initial positions for content layers
    contentLayers.forEach((layer, index) => {
      const inner = layer.querySelector('.content-inner') as HTMLElement;
      if (index === 0) {
        // First layer starts visible but scrolled to top
        gsap.set(layer, { yPercent: 0 });
        gsap.set(inner, { yPercent: 0 });
      } else {
        // Other layers start below
        gsap.set(layer, { yPercent: 100 });
        gsap.set(inner, { yPercent: 0 });
      }
    });

    // Calculate window positions for zooming
    const gridWidth = 960; // 800 * 1.2
    const gridHeight = 720; // 600 * 1.2
    const gap = 28.8; // 24 * 1.2
    const windowWidth = (gridWidth - gap) / 2;
    const windowHeight = (gridHeight - gap) / 2;

    const scaleX = window.innerWidth / windowWidth;
    const scaleY = window.innerHeight / windowHeight;
    const baseScale = Math.min(scaleX, scaleY);
    const scale = baseScale * 0.9; // scaleMultiplier = 0.9

    const positions = [
      { 
        x: (windowWidth + gap/2) * scale / 2 + 0, // xOffset = 0
        y: (windowHeight + gap/2) * scale / 2 + 100 // yOffset = 100
      },
      { 
        x: (windowWidth + gap/2) * scale / 2 + (windowWidth + gap) * scale + 0, // xOffset = 0
        y: (windowHeight + gap/2) * scale / 2 + 100 // yOffset = 100
      },
      { 
        x: (windowWidth + gap/2) * scale / 2 + 0, // xOffset = 0
        y: (windowHeight + gap/2) * scale / 2 + (windowHeight + gap) * scale + 100 // yOffset = 100
      },
      { 
        x: (windowWidth + gap/2) * scale / 2 + (windowWidth + gap) * scale + 0, // xOffset = 0
        y: (windowHeight + gap/2) * scale / 2 + (windowHeight + gap) * scale + 100 // yOffset = 100
      }
    ];

    // Calculate content heights dynamically
    const getContentHeight = (layer: Element) => {
      const inner = layer.querySelector('.content-inner') as HTMLElement;
      if (!inner) return window.innerHeight;
      // Get the actual content height
      const contentHeight = inner.scrollHeight || window.innerHeight * 2;
      // Return how many viewport heights this content spans
      return Math.max(window.innerHeight * 2, contentHeight);
    };

    // Calculate total timeline duration
    let totalDuration = 1; // Entry
    contentLayers.forEach((layer) => {
      totalDuration += getContentHeight(layer) / window.innerHeight + 0.5; // Content + transition
    });
    totalDuration += 1; // Exit

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${totalDuration * window.innerHeight}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Entry: Zoom to first window
    tl.to([windowsGridRef.current, backgroundRef.current], {
      scale: scale,
      x: positions[0].x,
      y: positions[0].y,
      duration: 0.8,
      ease: 'power2.inOut'
    });

    // Show overlay
    tl.to(overlayRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'power1.out'
    }, '-=0.3');

    // Animate each content layer
    contentLayers.forEach((layer, index) => {
      const inner = layer.querySelector('.content-inner') as HTMLElement;
      const contentHeight = getContentHeight(layer);
      const scrollDuration = contentHeight / window.innerHeight;
      
      if (index === 0) {
        // First layer: just scroll through its content
        if (inner && contentHeight > window.innerHeight) {
          tl.to(inner, {
            yPercent: -((contentHeight - window.innerHeight) / contentHeight) * 100,
            duration: scrollDuration,
            ease: 'none'
          });
        } else {
          tl.to({}, { duration: scrollDuration });
        }
      } else {
        // Transition to next window position
        const windowIndex = index % 4;
        tl.to([windowsGridRef.current, backgroundRef.current], {
          x: positions[windowIndex].x,
          y: positions[windowIndex].y,
          duration: 1.2,
          ease: 'power2.inOut'
        });

        // Slide in the new layer
        tl.to(layer, {
          yPercent: 0,
          duration: 2.5,
          ease: 'power1.out'
        }, '-=0.6');
        
        // Scroll through its content
        if (inner && contentHeight > window.innerHeight) {
          tl.to(inner, {
            yPercent: -((contentHeight - window.innerHeight) / contentHeight) * 100,
            duration: scrollDuration,
            ease: 'none'
          });
        } else {
          tl.to({}, { duration: scrollDuration });
        }
      }
    });

    // Exit: Hide overlay first
    tl.to(overlayRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: 'power1.in'
    });

    // Then zoom back out
    tl.to([windowsGridRef.current, backgroundRef.current], {
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    }, '-=0.1');

  }, { scope: containerRef, dependencies: [] });

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
          <div className="grid grid-cols-2 gap-6 max-w-7xl w-full h-full max-h-[800px] items-center justify-items-center p-4 md:p-8">
            {strategyImages.map((image) => (
              <div key={image.alt} className="flex items-center justify-center">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={426} 
                  height={358} 
                  className="object-contain" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content layers */}
        <div
          ref={overlayRef}
          className="fixed inset-0 pointer-events-auto"
          style={{ 
            opacity: 0,
          }}
        >
          <div 
            ref={contentGridRef}
            className="grid w-full h-full relative"
            style={{ isolation: 'isolate' }}
          >
            <ContentLayer zIndex={10}>
              <JuniorCoreDev />
            </ContentLayer>

            <ContentLayer zIndex={20}>
              <SeniorCoreDev />
            </ContentLayer>

            <ContentLayer zIndex={30}>
              <JuniorAppDev />
            </ContentLayer>

            <ContentLayer zIndex={40}>
              <SeniorAppDev />
            </ContentLayer>
          </div>
        </div>
      </div>
    </div>
  );
}