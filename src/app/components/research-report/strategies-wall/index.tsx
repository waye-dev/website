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
  const contentSectionsRef = useRef<HTMLDivElement>(null);
  const [currentStrategy, setCurrentStrategy] = useState(1);
  const [showContent, setShowContent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const contentLayerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (showOverlay) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out'
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.5,
        ease: 'power2.in'
      });
    }
  }, [showOverlay]);

  useEffect(() => {
    if (!contentLayerRefs.current.length || !showOverlay) return;

    contentLayerRefs.current.forEach((layer, index) => {
      if (layer) {
        const strategyIndex = index + 1;

        if (strategyIndex === currentStrategy) {
          gsap.fromTo(layer,
            {
              y: window.innerHeight,
              opacity: 0,
              scale: 0.95
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.4,
              ease: 'power2.out',
              zIndex: 10 + strategyIndex
            }
          );
        } else if (strategyIndex < currentStrategy) {
          gsap.to(layer, {
            y: -window.innerHeight * 0.15 * (currentStrategy - strategyIndex),
            opacity: 0.8 - (currentStrategy - strategyIndex) * 0.2,
            scale: 0.98 - (currentStrategy - strategyIndex) * 0.02,
            duration: 1.2,
            ease: 'power2.out',
            zIndex: 10 - (currentStrategy - strategyIndex)
          });
        } else {
          gsap.set(layer, {
            y: window.innerHeight,
            opacity: 0,
            scale: 0.95,
            zIndex: strategyIndex
          });
        }
      }
    });
  }, [currentStrategy, showOverlay]);


  useEffect(() => {
    if (!containerRef.current || !windowsGridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { 
        opacity: 0, 
        y: 50,
        scale: 0.95
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=600%',
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.1) {
              setCurrentStrategy(1);
              setShowContent(false);
              setShowOverlay(false);
            } else if (progress < 0.25) {
              setCurrentStrategy(1);
              setShowContent(true);
              setShowOverlay(true);
            } else if (progress < 0.4) {
              setCurrentStrategy(2);
              setShowContent(true);
              setShowOverlay(true);
            } else if (progress < 0.55) {
              setCurrentStrategy(3);
              setShowContent(true);
              setShowOverlay(true);
            } else if (progress < 0.7) {
              setCurrentStrategy(4);
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

      tl.to([windowsGridRef.current, backgroundRef.current], {
        scale: scale,
        x: positions[0].x,
        y: positions[0].y,
        duration: 1,
        ease: 'power2.inOut'
      })
      
      .to({}, { duration: 1.5 })

      .to([windowsGridRef.current, backgroundRef.current], {
        x: positions[1].x,
        y: positions[1].y,
        duration: 0.8,
        ease: 'power2.inOut'
      })
      .to({}, { duration: 1.5 })

      .to([windowsGridRef.current, backgroundRef.current], {
        x: positions[2].x,
        y: positions[2].y,
        duration: 0.8,
        ease: 'power2.inOut'
      })
      .to({}, { duration: 1.5 })

      .to([windowsGridRef.current, backgroundRef.current], {
        x: positions[3].x,
        y: positions[3].y,
        duration: 0.8,
        ease: 'power2.inOut'
      })
      .to({}, { duration: 1.5 })

      .to([windowsGridRef.current, backgroundRef.current], {
        scale: 1,
        x: 0,
        y: 0,
        duration: 1.5,
        ease: 'power2.inOut'
      });

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

        <div
          ref={overlayRef}
          className="fixed inset-0 flex items-center justify-center pointer-events-none"
          style={{ backgroundColor: '#FBF7EE' }}
        >
          <div className="w-full h-full overflow-y-auto relative">
            <div
              ref={el => { contentLayerRefs.current[0] = el; }}
              className="absolute inset-0 w-full h-full"
              style={{ backgroundColor: '#FBF7EE' }}
            >
              <JuniorCoreDev />
            </div>
            <div
              ref={el => { contentLayerRefs.current[1] = el; }}
              className="absolute inset-0 w-full h-full"
              style={{ backgroundColor: '#FBF7EE' }}
            >
              <SeniorCoreDev />
            </div>
            <div
              ref={el => { contentLayerRefs.current[2] = el; }}
              className="absolute inset-0 w-full h-full"
              style={{ backgroundColor: '#FBF7EE' }}
            >
              <JuniorAppDev />
            </div>
            <div
              ref={el => { contentLayerRefs.current[3] = el; }}
              className="absolute inset-0 w-full h-full"
              style={{ backgroundColor: '#FBF7EE' }}
            >
              <SeniorAppDev />
            </div>
          </div>
        </div>
      </div>


   </div>
 );
}