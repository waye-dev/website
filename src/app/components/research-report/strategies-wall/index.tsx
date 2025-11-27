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
  const windowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const calculateZoomPosition = (windowIndex: number) => {
    if (!windowsGridRef.current || !windowRefs.current[windowIndex]) return null;

    const windowElement = windowRefs.current[windowIndex];
    if (!windowElement) return null;

    const windowRect = windowElement.getBoundingClientRect();
    const gridRect = windowsGridRef.current.getBoundingClientRect();
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    
    const scaleX = viewportWidth / windowRect.width;
    const scaleY = viewportHeight / windowRect.height;
    
    const isMobile = viewportWidth < 768;
    const isTablet = viewportWidth >= 768 && viewportWidth < 1024;
    
    let targetScale: number;
    
    if (isMobile) {
      targetScale = scaleX * 0.9; // Slight padding
    } else if (isTablet) {
      targetScale = Math.min(scaleX, scaleY) * 1.05;
    } else {
      targetScale = Math.min(scaleX * 1.2, scaleY * 1.2);
      targetScale = Math.min(targetScale, 2.5);
    }
    
    const windowCenterX = windowRect.left + windowRect.width / 2 - gridRect.left;
    const windowCenterY = windowRect.top + windowRect.height / 2 - gridRect.top;
    
    const gridCenterX = gridRect.width / 2;
    const gridCenterY = gridRect.height / 2;
    
    const translateX = (gridCenterX - windowCenterX) * targetScale;
    const translateY = (gridCenterY - windowCenterY) * targetScale;
    
    return {
      scale: targetScale,
      x: translateX,
      y: translateY
    };
  };

  useGSAP(() => {
    if (!containerRef.current || !windowsGridRef.current || !contentGridRef.current || !overlayRef.current) return;

    gsap.set(backgroundRef.current, { scale: 1, x: 0, y: 0 });
    gsap.set(windowsGridRef.current, { scale: 1, x: 0, y: 0 });
    gsap.set(overlayRef.current, { 
      opacity: 0, 
      scale: 0.95
    });

    const contentLayers = contentGridRef.current.querySelectorAll('.content-layer');
    
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

    const getContentHeight = (layer: Element) => {
      const inner = layer.querySelector('.content-inner') as HTMLElement;
      const vh = window.visualViewport?.height || window.innerHeight;
      if (!inner) return vh;
      const contentHeight = inner.scrollHeight || vh * 2;
      const isMobile = window.innerWidth < 768;
      const minHeight = isMobile ? vh * 2.5 : vh * 2;
      return Math.max(minHeight, contentHeight);
    };

    const mm = gsap.matchMedia();

    mm.add({
      isMobile: "(max-width: 767px)",
      isDesktop: "(min-width: 768px)"
    }, (context) => {
      const { isMobile } = context.conditions as { isMobile: boolean };

      const vh = window.visualViewport?.height || window.innerHeight;
      let totalDuration = isMobile ? 1.5 : 1;
      contentLayers.forEach((layer) => {
        const extraBuffer = isMobile ? 1.5 : 0.5;
        totalDuration += getContentHeight(layer) / vh + extraBuffer;
      });
      totalDuration += isMobile ? 1.5 : 1;

      const positions = [0, 1, 2, 3].map(index => calculateZoomPosition(index));

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "strategies-wall",
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${totalDuration * vh}`,
          scrub: isMobile ? 1 : 0.5,
          pin: true,
          pinType: "fixed",
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
          refreshPriority: 0,
        }
      });

    const firstPosition = positions[0];
    if (firstPosition) {
      tl.to([windowsGridRef.current, backgroundRef.current], {
        scale: firstPosition.scale,
        x: firstPosition.x,
        y: firstPosition.y,
        duration: isMobile ? 1.2 : 0.8,
        ease: 'power2.inOut'
      });
    }

    tl.to(overlayRef.current, {
      opacity: 1,
      scale: 1,
      duration: isMobile ? 0.5 : 0.4,
      ease: 'power1.out',
      onStart: () => {
        if (overlayRef.current) {
          overlayRef.current.style.pointerEvents = 'auto';
        }
      }
    }, isMobile ? '-=0.4' : '-=0.3');

    // Animate each content layer
    contentLayers.forEach((layer, index) => {
      const inner = layer.querySelector('.content-inner') as HTMLElement;
      const contentHeight = getContentHeight(layer);
      const scrollDuration = contentHeight / vh;

      if (index === 0) {
        // First layer: just scroll through its content
        if (inner && contentHeight > vh) {
          tl.to(inner, {
            yPercent: -((contentHeight - vh) / contentHeight) * 100,
            duration: scrollDuration,
            ease: 'none'
          });
        } else {
          tl.to({}, { duration: scrollDuration });
        }
      } else {
        // Transition to next window position
        const windowIndex = index % 4;
        const position = positions[windowIndex];

        if (position) {
          tl.to([windowsGridRef.current, backgroundRef.current], {
            x: position.x,
            y: position.y,
            scale: position.scale,
            duration: isMobile ? 1.8 : 1.2,
            ease: 'power2.inOut'
          });
        }

        tl.to(layer, {
          yPercent: 0,
          duration: isMobile ? 3.5 : 2.5,
          ease: 'power1.out'
        }, isMobile ? '-=1' : '-=0.6');

        // Scroll through its content
        if (inner && contentHeight > vh) {
          tl.to(inner, {
            yPercent: -((contentHeight - vh) / contentHeight) * 100,
            duration: scrollDuration,
            ease: 'none'
          });
        } else {
          tl.to({}, { duration: scrollDuration });
        }
      }
    });

    const lastPosition = positions[3];
    if (lastPosition) {
      tl.to([windowsGridRef.current, backgroundRef.current], {
        x: lastPosition.x,
        y: lastPosition.y,
        scale: lastPosition.scale,
        duration: isMobile ? 1 : 0.6,
        ease: 'power2.inOut'
      });
    }

    tl.to(overlayRef.current, {
      opacity: 0,
      scale: isMobile ? 0.9 : 0.95,
      duration: isMobile ? 0.6 : 0.4,
      ease: 'power1.in',
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.pointerEvents = 'none';
        }
      }
    }, isMobile ? '-=0.4' : '-=0.2');

      tl.to([windowsGridRef.current, backgroundRef.current], {
        scale: 1,
        x: 0,
        y: 0,
        duration: isMobile ? 1.2 : 0.8,
        ease: 'power2.inOut'
      });
    });

    return () => mm.revert();
  }, { scope: containerRef, dependencies: [] });

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative w-full h-screen-dynamic overflow-hidden gsap-no-drag"
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
          <div className="grid grid-cols-2 gap-6 max-w-7xl w-full h-full items-center justify-items-center p-4 md:p-48">
            {strategyImages.map((image, index) => (
              <div 
                key={image.alt} 
                ref={(el) => {
                  windowRefs.current[index] = el;
                }}
                className="flex items-center justify-center w-full h-full"
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  width={426} 
                  height={358} 
                  className="object-contain w-full h-full" 
                />
              </div>
            ))}
          </div>
        </div>

        <div
          ref={overlayRef}
          className="fixed inset-0"
          style={{
            opacity: 0,
            pointerEvents: 'none',
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