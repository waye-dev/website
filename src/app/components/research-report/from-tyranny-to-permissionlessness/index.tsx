import React, { useEffect, useRef, useState } from 'react';

// Extend Window interface for GSAP
declare global {
  interface Window {
    gsap: any;
  }
}

// Extend HTMLElement for animation timeline
interface ExtendedHTMLElement extends HTMLElement {
  _animationTimeline?: any;
}

export default function FromTyrannyToPermissionlessness() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    // Load GSAP core only (DrawSVG is premium)
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
    if (!isLoaded || !gsapLoaded || !window.gsap) return;

    const svg = containerRef.current?.querySelector('svg');
    if (!svg) return;

    // Get all elements for animation
    const strokeElements = svg.querySelectorAll('path[stroke]');
    const fillElements = svg.querySelectorAll('path[fill]:not([stroke])');
    
    console.log(`Found ${strokeElements.length} stroke elements and ${fillElements.length} fill elements to animate`);

    // Create main timeline
    const tl = window.gsap.timeline();

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

    // Store timeline reference for replay
    if (containerRef.current) {
      (containerRef.current as ExtendedHTMLElement)._animationTimeline = tl;
    }

  }, [isLoaded, gsapLoaded]);

  const handleReplay = () => {
    if (!containerRef.current) return;
    
    const timeline = (containerRef.current as ExtendedHTMLElement)._animationTimeline;
    if (!timeline) return;
    
    // Restart the animation
    timeline.restart();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div ref={containerRef} style={{ maxWidth: '800px', margin: '0 auto' }} />
      <div style={{ 
        marginTop: '1rem', 
        display: 'flex', 
        gap: '1rem', 
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={handleReplay}
          disabled={!isLoaded || !gsapLoaded}
          style={{ 
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoaded && gsapLoaded ? 'pointer' : 'not-allowed',
            opacity: isLoaded && gsapLoaded ? 1 : 0.5,
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          🔄 Replay Animation
        </button>
        {isLoaded && gsapLoaded && (
          <div style={{ 
            fontSize: '12px', 
            color: '#666', 
            alignSelf: 'center',
            textAlign: 'center'
          }}>
            ✨ Full SVG Animation with 3 stages
          </div>
        )}
      </div>
    </div>
  );
}