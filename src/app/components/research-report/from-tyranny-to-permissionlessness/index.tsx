import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sections } from './sections-data';

gsap.registerPlugin(ScrollTrigger);

export default function FromTyrannyToPermissionlessness() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch('/svgs/research/from-tyranny-to-permissionlessness/full.svg');
        const svgText = await response.text();
        
        if (svgRef.current) {
          svgRef.current.innerHTML = svgText;
          
          const svg = svgRef.current.querySelector('svg');
          if (svg) {
            svg.style.width = '100%';
            svg.style.height = 'auto';
            svg.style.display = 'block';
            svg.style.margin = '0 auto';
          }
          
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

    const svg = svgRef.current?.querySelector('svg');
    if (!svg) return;

    const strokeElements = svg.querySelectorAll('path[stroke]');
    const fillElements = svg.querySelectorAll('path[fill]:not([stroke])');
    
    console.log(`Found ${strokeElements.length} stroke elements and ${fillElements.length} fill elements`);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${sections.length * 100}%`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        markers: false
      }
    });

    const textSectionDuration = 2;
    const totalTimelineDuration = sections.length * textSectionDuration;
    
    const svgAnimationEndTime = totalTimelineDuration * 0.8;

    const strokeAnimationDuration = svgAnimationEndTime * 0.6;
    const fillAnimationStartTime = svgAnimationEndTime * 0.4;
    
    // Find the index of section with id '08' (assuming it's the last one)
    const lastSectionIndex = sections.findIndex(section => section.id === '08');
    const swapStartTime = lastSectionIndex * textSectionDuration;
    
    strokeElements.forEach((element: Element, index: number) => {
      try {
        const pathElement = element as SVGPathElement;
        const length = pathElement.getTotalLength();
        
        gsap.set(element, {
          strokeDasharray: length,
          strokeDashoffset: length
        });

        const strokeStartTime = (index / strokeElements.length) * strokeAnimationDuration;
        const strokeDuration = strokeAnimationDuration / strokeElements.length * 2;
        
        tl.to(element, {
          strokeDashoffset: 0,
          duration: Math.min(strokeDuration, 1.5),
          ease: "power2.inOut"
        }, strokeStartTime);
      } catch (error) {
        console.log('Skipping stroke element');
      }
    });

    fillElements.forEach((element: Element, index: number) => {
      gsap.set(element, {
        opacity: 0,
        scale: 0.8
      });

      const fillStartTime = fillAnimationStartTime + (index / fillElements.length) * (svgAnimationEndTime - fillAnimationStartTime);
      
      tl.to(element, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, fillStartTime);
    });

    tl.to(svg, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    }, svgAnimationEndTime - 0.6)
    .to(svg, {
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut"
    }, svgAnimationEndTime - 0.3);

    // Animate position swap for the last section
    if (lastSectionIndex >= 0) {
      // Animate SVG moving from bottom to top position
      tl.to(svgRef.current, {
        y: '-45vh', // Move SVG up to where text typically appears
        duration: 1,
        ease: "power2.inOut"
      }, swapStartTime);
    }

    textRefs.current.forEach((textEl, index) => {
      if (!textEl) return;

      gsap.set(textEl, {
        opacity: 0,
        y: 100
      });

      const startTime = index * textSectionDuration;

      tl.to(textEl, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, startTime);

      // Special handling for the last section (id: 08)
      if (sections[index]?.id === '08') {
        // Move this text section down to where SVG was
        tl.to(textEl, {
          y: '35vh', // Move text down to SVG's original position
          duration: 1,
          ease: "power2.inOut"
        }, startTime);
        
        // Keep it visible for the remaining duration
        tl.to(textEl, {
          opacity: 1,
          duration: textSectionDuration - 0.8
        }, startTime + 1);
      } else {
        // Normal animation for other sections
        tl.to(textEl, {
          opacity: 1,
          y: 0,
          duration: textSectionDuration - 1.6
        }, startTime + 0.8);

        if (index < sections.length - 1) {
          tl.to(textEl, {
            opacity: 0,
            y: -150,
            duration: 0.8,
            ease: "power2.in"
          }, startTime + textSectionDuration - 0.8);
        }
      }
    });

  }, { scope: containerRef, dependencies: [svgLoaded] });

  return (
    <div>
      <div 
        ref={containerRef} 
        className="min-h-screen flex items-center justify-center relative"
      >
        <div 
          ref={svgRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 scale-125 flex justify-center items-center"
        />

        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full z-20">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={el => { textRefs.current[index] = el; }}
              className="absolute w-full flex justify-center items-center"
            >
              {section.textContent}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}