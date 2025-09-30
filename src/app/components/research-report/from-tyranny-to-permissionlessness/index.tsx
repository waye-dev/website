import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FromTyrannyToPermissionlessness() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch('/svgs/research/from-tyranny-to-permissionlessness/full.svg');
        const svgText = await response.text();
        
        if (containerRef.current) {
          containerRef.current.innerHTML = svgText;
          setSvgLoaded(true);
        }
      } catch (error) {
        console.error('Failed to load SVG:', error);
      }
    };

    loadSvg();
  }, []);

  useGSAP(() => {
    if (!svgLoaded) return;

    const svg = containerRef.current?.querySelector('svg');
    if (!svg) return;

    const strokeElements = svg.querySelectorAll('path[stroke]');
    const fillElements = svg.querySelectorAll('path[fill]:not([stroke])');
    
    console.log(`Found ${strokeElements.length} stroke elements and ${fillElements.length} fill elements`);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    strokeElements.forEach((element: Element, index: number) => {
      try {
        const pathElement = element as SVGPathElement;
        const length = pathElement.getTotalLength();
        
        gsap.set(element, {
          strokeDasharray: length,
          strokeDashoffset: length
        });

        tl.to(element, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut"
        }, index * 0.2);
      } catch (error) {
        console.log('Skipping stroke element');
      }
    });

    fillElements.forEach((element: Element, index: number) => {
      gsap.set(element, {
        opacity: 0,
        scale: 0.8
      });

      tl.to(element, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, 2 + (index * 0.05));
    });

    tl.to(svg, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.5")
    .to(svg, {
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut"
    });
  }, { scope: containerRef, dependencies: [svgLoaded] });

  return (
    <div>
      <div 
        ref={containerRef} 
        style={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: '#ffffff'
        }} 
      />
      
    </div>
  );
}