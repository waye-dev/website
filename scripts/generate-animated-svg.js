#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the full SVG file
const svgPath = path.join(__dirname, '../public/svgs/research/from-tyranny-to-permissionlessness/full.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

// Parse SVG content to extract paths
function parseSVG(svgContent) {
  const pathRegex = /<path[^>]*d="([^"]*)"[^>]*>/g;
  const circleRegex = /<circle[^>]*cx="([^"]*)"[^>]*cy="([^"]*)"[^>]*r="([^"]*)"[^>]*>/g;
  const lineRegex = /<line[^>]*x1="([^"]*)"[^>]*y1="([^"]*)"[^>]*x2="([^"]*)"[^>]*y2="([^"]*)"[^>]*>/g;
  
  const paths = [];
  const circles = [];
  const lines = [];
  
  let match;
  
  // Extract paths
  while ((match = pathRegex.exec(svgContent)) !== null) {
    const fullMatch = match[0];
    const d = match[1];
    
    // Extract attributes
    const strokeMatch = fullMatch.match(/stroke="([^"]*)"/);
    const strokeWidthMatch = fullMatch.match(/stroke-width="([^"]*)"/);
    const fillMatch = fullMatch.match(/fill="([^"]*)"/);
    
    paths.push({
      d,
      stroke: strokeMatch ? strokeMatch[1] : 'black',
      strokeWidth: strokeWidthMatch ? strokeWidthMatch[1] : '1',
      fill: fillMatch ? fillMatch[1] : 'none'
    });
  }
  
  // Extract circles
  while ((match = circleRegex.exec(svgContent)) !== null) {
    const fullMatch = match[0];
    const cx = match[1];
    const cy = match[2];
    const r = match[3];
    
    const strokeMatch = fullMatch.match(/stroke="([^"]*)"/);
    const strokeWidthMatch = fullMatch.match(/stroke-width="([^"]*)"/);
    const fillMatch = fullMatch.match(/fill="([^"]*)"/);
    
    circles.push({
      cx,
      cy,
      r,
      stroke: strokeMatch ? strokeMatch[1] : 'black',
      strokeWidth: strokeWidthMatch ? strokeWidthMatch[1] : '1',
      fill: fillMatch ? fillMatch[1] : 'none'
    });
  }
  
  return { paths, circles, lines };
}

// Generate React component
function generateComponent(svgData) {
  const { paths, circles } = svgData;
  
  // Create refs for each path and circle
  const pathRefs = paths.map((_, index) => `path${index}Ref`);
  const circleRefs = circles.map((_, index) => `circle${index}Ref`);
  
  const componentCode = `'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSVGProps {
  stage: 'framesOnly' | 'innerOnly' | 'complete';
  replayKey: number;
}

export const AnimatedSVG = ({ stage, replayKey }: AnimatedSVGProps) => {
  // Create refs for all paths and circles
  ${pathRefs.map(ref => `const ${ref} = useRef<SVGPathElement>(null);`).join('\n  ')}
  ${circleRefs.map(ref => `const ${ref} = useRef<SVGCircleElement>(null);`).join('\n  ')}
  
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Get all path and circle elements
    const allPaths = [${pathRefs.map(ref => `${ref}.current`).join(', ')}].filter(Boolean);
    const allCircles = [${circleRefs.map(ref => `${ref}.current`).join(', ')}].filter(Boolean);
    
    // Initialize stroke dash arrays for all paths
    allPaths.forEach(path => {
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = \`\${pathLength}\`;
      path.style.strokeDashoffset = stage === 'innerOnly' ? '0' : \`\${pathLength}\`;
    });

    // Initialize circles
    allCircles.forEach(circle => {
      circle.style.fill = 'none';
    });

    // Create scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          if (stage === 'framesOnly') {
            // Animate only frame paths (first 3 paths)
            allPaths.slice(0, 3).forEach((path, index) => {
              const pathLength = path.getTotalLength();
              const offset = pathLength * (1 - progress);
              path.style.strokeDashoffset = \`\${offset}\`;
            });
          } else if (stage === 'innerOnly') {
            // Animate only inner elements (paths 3+ and circles)
            allPaths.slice(3).forEach((path, index) => {
              const pathLength = path.getTotalLength();
              const offset = pathLength * (1 - progress);
              path.style.strokeDashoffset = \`\${offset}\`;
            });
            
            // Fill circles after stroke animation
            allCircles.forEach((circle, index) => {
              if (progress > 0.7) {
                circle.style.fill = 'black';
              }
            });
          } else if (stage === 'complete') {
            // Animate all elements in sequence
            const totalElements = allPaths.length + allCircles.length;
            const elementsPerStage = totalElements / 3;
            
            allPaths.forEach((path, index) => {
              const stageProgress = Math.max(0, Math.min(1, (progress * 3) - (index / elementsPerStage)));
              const pathLength = path.getTotalLength();
              const offset = pathLength * (1 - stageProgress);
              path.style.strokeDashoffset = \`\${offset}\`;
            });
            
            allCircles.forEach((circle, index) => {
              const stageProgress = Math.max(0, Math.min(1, (progress * 3) - ((allPaths.length + index) / elementsPerStage)));
              if (stageProgress > 0.5) {
                circle.style.fill = 'black';
              }
            });
          }
        }
      }
    });

  }, { dependencies: [stage, replayKey] });

  return (
    <div ref={containerRef} className="w-full h-auto">
      <svg width="1397" height="568" viewBox="0 0 1397 568" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${paths.map((path, index) => `
        <path
          ref={path${index}Ref}
          d="${path.d}"
          stroke="${path.stroke}"
          strokeWidth="${path.strokeWidth}"
          fill="${path.fill}"
        />`).join('')}
        ${circles.map((circle, index) => `
        <circle
          ref={circle${index}Ref}
          cx="${circle.cx}"
          cy="${circle.cy}"
          r="${circle.r}"
          stroke="${circle.stroke}"
          strokeWidth="${circle.strokeWidth}"
          fill="${circle.fill}"
        />`).join('')}
      </svg>
    </div>
  );
};`;

  return componentCode;
}

// Main execution
try {
  console.log('Parsing SVG file...');
  const svgData = parseSVG(svgContent);
  
  console.log(`Found ${svgData.paths.length} paths and ${svgData.circles.length} circles`);
  
  console.log('Generating React component...');
  const componentCode = generateComponent(svgData);
  
  // Write the component file
  const outputPath = path.join(__dirname, '../src/app/components/research-report/from-tyranny-to-permissionlessness/animated-svg.tsx');
  fs.writeFileSync(outputPath, componentCode);
  
  console.log(`Component generated successfully at: ${outputPath}`);
  console.log('You can now use the AnimatedSVG component in your application.');
  
} catch (error) {
  console.error('Error generating component:', error);
  process.exit(1);
}
