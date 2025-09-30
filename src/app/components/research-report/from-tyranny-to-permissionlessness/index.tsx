import React, { useRef, useState, useEffect } from 'react';

// Extend Window interface for GSAP
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export default function FromTyrannyToPermissionlessness() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    // Load GSAP core and ScrollTrigger
    const loadGSAP = async () => {
      try {
        // Load GSAP core
        const gsapScript = document.createElement('script');
        gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
        
        await new Promise((resolve, reject) => {
          gsapScript.onload = resolve;
          gsapScript.onerror = reject;
          document.head.appendChild(gsapScript);
        });

        // Load ScrollTrigger
        const scrollTriggerScript = document.createElement('script');
        scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
        
        await new Promise((resolve, reject) => {
          scrollTriggerScript.onload = resolve;
          scrollTriggerScript.onerror = reject;
          document.head.appendChild(scrollTriggerScript);
        });

        // Register ScrollTrigger
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
        }

        setGsapLoaded(true);
      } catch (error) {
        console.error('Failed to load GSAP:', error);
      }
    };

    loadGSAP();

    // Load SVG
    fetch('/svgs/research/from-tyranny-to-permissionlessness/full.svg')
      .then(response => response.text())
      .then(svgText => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svgText;
          setIsLoaded(true);
        }
      })
      .catch(error => {
        console.error('Failed to load SVG:', error);
      });

    return () => {
      // Cleanup scripts
      const scripts = document.querySelectorAll('script[src*="gsap"]');
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !gsapLoaded || !window.gsap || !window.ScrollTrigger) return;

    const svg = containerRef.current?.querySelector('svg');
    if (!svg) return;

    // Get all elements for animation
    const strokeElements = svg.querySelectorAll('path[stroke]');
    const fillElements = svg.querySelectorAll('path[fill]:not([stroke])');
    
    console.log(`Found ${strokeElements.length} stroke elements and ${fillElements.length} fill elements to animate`);

    // Create main timeline
    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%', // Scroll 3x viewport height for smooth animation
        scrub: 1.5, // Smooth scrubbing with 1.5 second delay (less sensitive)
        pin: true, // Pin the section while animating
        anticipatePin: 1,
        markers: false // Set to true for debugging
      }
    });

    // Stage 1: Animate stroke elements (main structure)
    strokeElements.forEach((element: Element, index: number) => {
      try {
        const pathElement = element as SVGPathElement;
        const length = pathElement.getTotalLength();
        
        // Set initial state
        window.gsap.set(element, {
          strokeDasharray: length,
          strokeDashoffset: length
        });

        // Add to timeline
        tl.to(element, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut"
        }, index * 0.2); // 0.2 second stagger
      } catch (error) {
        console.log('Skipping stroke element:', element);
      }
    });

    // Stage 2: Animate fill elements (details) - fade in with stagger
    fillElements.forEach((element: Element, index: number) => {
      // Set initial state - invisible
      window.gsap.set(element, {
        opacity: 0,
        scale: 0.8
      });

      // Add to timeline with delay after stroke elements
      tl.to(element, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, 2 + (index * 0.05)); // Start after stroke animation + stagger
    });

    // Stage 3: Final polish - slight scale animation for the whole SVG
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

    // Cleanup
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };

  }, [isLoaded, gsapLoaded]);

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