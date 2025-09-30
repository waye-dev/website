"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DataCircleProps {
  percentage: string;
  bgColor: string;
  textColor: string;
  size: number;
  fontSize: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  onRef: (el: HTMLDivElement | null) => void;
}

const DataCircle = ({ percentage, bgColor, textColor, size, fontSize, position, onRef }: DataCircleProps) => {
  return (
    <div
      ref={onRef}
      data-color={bgColor}
      className='absolute rounded-full flex items-center justify-center shadow-lg'
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: bgColor,
        ...position,
      }}
    >
      <span className={`font-inknutAntiqua ${fontSize}`} style={{ color: textColor }}>
        {percentage}
      </span>
    </div>
  );
};

export const DemographicsMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const legendRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!mapRef.current) return;

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;

        gsap.fromTo(
          circle,
          {
            scale: 0,
            backgroundColor: "#D9D9D9",
          },
          {
            scale: 1,
            backgroundColor: circle.dataset.color,
            duration: 1.2,
            delay: index * 0.25,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: mapRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Animate legend items
      if (legendRef.current) {
        const legendItems = legendRef.current.querySelectorAll('.legend-item');
        gsap.fromTo(
          legendItems,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: mapRef }
  );

  const circles = [
    // Light blue circle (North America)
    { percentage: "30.8%", bgColor: "#C4DEF8", textColor: "#031C51", size: 90, fontSize: "text-xl", position: { top: "20%", left: "10%" } },
    // Dark blue circle (Europe)
    { percentage: "26.9%", bgColor: "#031C51", textColor: "#FFFFFF", size: 80, fontSize: "text-md", position: { top: "15%", left: "52%" } },
    // Yellow circle (Africa)
    { percentage: "23.1%", bgColor: "#F9D483", textColor: "#C4960F", size: 65, fontSize: "text-md", position: { bottom: "40%", left: "55%" } },
    // Green circle (South America)
    { percentage: "3.8%", bgColor: "#D6F8C4", textColor: "#2D5F1E", size: 35, fontSize: "text-xs", position: { bottom: "23%", left: "25%" } },
    // Gray circle (Not Disclosed)
    { percentage: "7.7%", bgColor: "#D9D9D9", textColor: "#4A4A4A", size: 50, fontSize: "text-xs", position: { bottom: "5%", right: "25%" } },
    // Red circle (Asia)
    { percentage: "7.7%", bgColor: "#FF9999", textColor: "#CC0000", size: 50, fontSize: "text-xs", position: { top: "45%", right: "7%" } },
  ];

  return (
    <div className='w-full flex flex-col gap-10 items-center'>
      <div ref={mapRef} className='relative w-full max-w-[700px]'>
        <Image src='/svgs/research/empty-map.svg' alt='world map' width={700} height={560} className='w-full h-auto' />

        {circles.map((circle, index) => (
          <DataCircle
            key={index}
            {...circle}
            onRef={(el) => el && (circlesRef.current[index] = el)}
          />
        ))}
      </div>

      <div ref={legendRef} className='flex flex-row gap-6 justify-between flex-wrap'>
        {regionLegend.map((region) => (
          <div key={region.name} className='legend-item flex flex-row gap-2 items-center opacity-0'>
            <div className='w-4 h-4 rounded-full' style={{ backgroundColor: region.color }} />
            <p className='font-inknutAntiqua text-xs'>{region.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const regionLegend = [
  { name: "North America", color: "#C4DEF8" },
  { name: "South America", color: "#D6F8C4" },
  { name: "Europe", color: "#031C51" },
  { name: "Africa", color: "#F9D483" },
  { name: "Asia", color: "#FF9999" },
  { name: "Not Disclosed", color: "#D9D9D9" },
];