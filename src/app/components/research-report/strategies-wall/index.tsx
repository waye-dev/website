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
import { ContentLayer } from './content-layer';


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
        gsap.set(layer, { yPercent: 0 });
        gsap.set(inner, { yPercent: 0 });
      } else {
        gsap.set(layer, { yPercent: 100 });
        gsap.set(inner, { yPercent: 0 });
      }
    });

    const isMobile = window.innerWidth < 768;

    // Configuration
    const config = {
      desktop: {
        zoomInScale: 0.9,
        enterY: 100,
        enterX: 0,
        exitX: -900,
        exitY: -900,
      },
      mobile: {
        zoomInScale: 2.15,
        enterY: 50,
        enterX: -340,
        exitX: -1420,
        exitY: -600,
      }
    };

    const currentConfig = isMobile ? config.mobile : config.desktop;

    const gap = 28.8;
    const windowWidth = (960 - gap) / 2;
    const windowHeight = (720 - gap) / 2;

    const scaleX = window.innerWidth / windowWidth;
    const scaleY = window.innerHeight / windowHeight;
    const baseScale = Math.min(scaleX, scaleY);
    const scale = baseScale * currentConfig.zoomInScale;

    const positions = [
      {
        x: (windowWidth + gap/2) * scale / 2 + currentConfig.enterX,
        y: (windowHeight + gap/2) * scale / 2 + currentConfig.enterY
      },
      {
        x: (windowWidth + gap/2) * scale / 2 + (windowWidth + gap) * scale + currentConfig.enterX,
        y: (windowHeight + gap/2) * scale / 2 + currentConfig.enterY
      },
      {
        x: (windowWidth + gap/2) * scale / 2 + currentConfig.enterX,
        y: (windowHeight + gap/2) * scale / 2 + (windowHeight + gap) * scale + currentConfig.enterY
      },
      {
        x: (windowWidth + gap/2) * scale / 2 + (windowWidth + gap) * scale + currentConfig.enterX,
        y: (windowHeight + gap/2) * scale / 2 + (windowHeight + gap) * scale + currentConfig.enterY
      }
    ];

    const getContentHeight = (layer: Element) => {
      const inner = layer.querySelector('.content-inner') as HTMLElement;
      if (!inner) return window.innerHeight;
      const contentHeight = inner.scrollHeight || window.innerHeight * 2;
      const minHeight = isMobile ? window.innerHeight * 2.5 : window.innerHeight * 2;
      return Math.max(minHeight, contentHeight);
    };

    let totalDuration = isMobile ? 1.2 : 1;
    contentLayers.forEach((layer) => {
      const extraBuffer = isMobile ? 1.2 : 0.5;
      totalDuration += getContentHeight(layer) / window.innerHeight + extraBuffer;
    });
    totalDuration += isMobile ? 1.2 : 1;

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

    tl.to([windowsGridRef.current, backgroundRef.current], {
      scale: scale,
      x: positions[0].x,
      y: positions[0].y,
      duration: isMobile ? 1 : 0.8,
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
          duration: isMobile ? 1.5 : 1.2,
          ease: 'power2.inOut'
        });

        // Slide in the new layer
        tl.to(layer, {
          yPercent: 0,
          duration: isMobile ? 3 : 2.5,
          ease: 'power1.out'
        }, isMobile ? '-=0.8' : '-=0.6');
        
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

    const exitX = -(window.innerWidth - windowWidth * scale - (windowWidth + gap/2) * scale / 2) + currentConfig.exitX;
    const exitY = -(window.innerHeight - windowHeight * scale - (windowHeight + gap/2) * scale / 2 - currentConfig.enterY) + currentConfig.exitY;

    // Prepare zoom-out position before overlay starts fading
    tl.to([windowsGridRef.current, backgroundRef.current], {
      x: exitX,
      y: exitY,
      duration: isMobile ? 0.8 : 0.6,
      ease: 'power2.inOut'
    });

    // EXIT: Start overlay fade after zoom-out position is ready
    tl.to(overlayRef.current, {
      opacity: 0,
      scale: isMobile ? 0.9 : 0.95,
      duration: isMobile ? 0.5 : 0.4,
      ease: 'power1.in'
    }, isMobile ? '-=0.3' : '-=0.2');

    tl.to([windowsGridRef.current, backgroundRef.current], {
      scale: 1,
      x: 0,
      y: 0,
      duration: isMobile ? 1 : 0.8,
      ease: 'power2.inOut'
    });

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