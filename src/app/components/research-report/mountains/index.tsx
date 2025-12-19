"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const RecommendationReveal = () => {
  const container = useRef<HTMLDivElement>(null);
  const girlRip = useRef<HTMLDivElement>(null);
  const wallLeft = useRef<HTMLDivElement>(null);
  const wallRight = useRef<HTMLDivElement>(null);
  const mountains = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLDivElement>(null);


  useGSAP(
    () => {
      const getResponsiveValues = () => {
        const vh = window.visualViewport?.height || window.innerHeight;
        const vw = window.innerWidth;
        const distance = vh * 2;
        const widthRatio = vw / 1920;
        const heightRatio = vh / 1080;
        const scaleFactor = Math.min(widthRatio, heightRatio, 1);

        const aspectRatio = vw / vh;

        let girlSpeed, wallSpeed;
        if (aspectRatio < 0.8) {
          girlSpeed = 1.35;
          wallSpeed = 1.2;
        } else if (aspectRatio < 1.2) {
          girlSpeed = 1.05;
          wallSpeed = 0.9;
        } else if (vw >= 1280) {
          girlSpeed = 1.3;
          wallSpeed = 1.05;
        } else if (vw >= 1024) {
          girlSpeed = 1.3;
          wallSpeed = 1.0;
        } else {
          girlSpeed = 1.3;
          wallSpeed = 1.2;
        }

        const girlXSpeed = 0.2 * scaleFactor;
        const mountainSpeed = 0.3 * scaleFactor;
        const mountainXSpeed = 0.2 * scaleFactor;

        const baseGirlScale = 0.8 + (scaleFactor * 0.5);
        const girlScale = Math.max(0.8, Math.min(baseGirlScale, 1.3));
        const mountainScale = Math.max(2, 4 * scaleFactor);

        return {
          distance,
          girlSpeed,
          girlXSpeed,
          wallSpeed,
          mountainSpeed,
          mountainXSpeed,
          girlScale,
          mountainScale,
        };
      };

      ScrollTrigger.create({
        id: "recommendation-reveal",
        trigger: container.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const { distance, girlSpeed, girlXSpeed, wallSpeed, mountainSpeed, mountainXSpeed, girlScale, mountainScale } = getResponsiveValues();

          const girlY = progress * distance * girlSpeed;
          const girlX = progress * distance * -girlXSpeed;
          const wallY = progress * distance * wallSpeed;

          const mountainRevealStart = 0.65;
          const mountainY = progress < mountainRevealStart ? 0 : (progress - mountainRevealStart) * distance * mountainSpeed * (1 / (1 - mountainRevealStart));
          const mountainX = progress < mountainRevealStart ? 0 : (progress - mountainRevealStart) * distance * -mountainXSpeed * (1 / (1 - mountainRevealStart));
          const mountainScaleValue = progress < mountainRevealStart ? 1 : 1 + (progress - mountainRevealStart) * mountainScale * (1 / (1 - mountainRevealStart));

          const girlScaleValue = 1 + progress * girlScale;

          const fadeStart = 0.95;
          const fadeOpacity = progress < fadeStart ? 1 : 1 - ((progress - fadeStart) / (1 - fadeStart));

          const bgProgress = progress < fadeStart ? 0 : (progress - fadeStart) / (1 - fadeStart);
          const bgColor = `rgb(${255 + (252 - 255) * bgProgress}, ${255 + (247 - 255) * bgProgress}, ${255 + (237 - 255) * bgProgress})`;

          gsap.set(girlRip.current, { y: girlY, x: girlX, scale: girlScaleValue, opacity: fadeOpacity, ease: "none", overwrite: 'auto' });
          gsap.set(wallLeft.current, { y: wallY, opacity: fadeOpacity, ease: "none", overwrite: 'auto' });
          gsap.set(wallRight.current, { y: wallY, opacity: fadeOpacity, ease: "none", overwrite: 'auto' });
          gsap.set(mountains.current, { y: mountainY, x: mountainX, scale: mountainScaleValue, opacity: fadeOpacity, ease: "none", overwrite: 'auto' });
          gsap.set(background.current, { backgroundColor: bgColor, ease: "none", overwrite: 'auto' });
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className='h-screen-dynamic w-full relative overflow-hidden' data-section="recommendations">
      <div ref={background} className='absolute inset-0 bg-white' />

      <div className='absolute h-full w-full'>
        <div ref={mountains} className='absolute h-full w-full'>
          <Image src="/svgs/research/mountains/mountains.svg" alt='' fill className='object-cover object-center' />
        </div>
        <div className='absolute h-full w-full flex items-center justify-center'>
          <div className='text-center space-y-3 text-black font-inknutAntiqua'>
            <h3 className='text-lg md:text-xl lg:text-2xl'>Recommendations:</h3>
            <p className='text-xl md:text-2xl lg:text-[32px] leading-[120%]'>
              From tyranny to sustainable <br /> permissionlessness
            </p>
          </div>
        </div>
      </div>

      <div ref={wallLeft} className='absolute bottom-0 left-[-1px] z-10 w-[51%] h-[120vh] sm:h-[143vh] md:h-[165vh] lg:h-[180vh] xl:h-[225vh] [@media(min-aspect-ratio:4/5)_and_(max-aspect-ratio:6/5)]:h-[160vh]'>
        <Image src="/svgs/research/mountains/wall-left.svg" alt='' fill className='object-cover object-bottom' style={{ objectPosition: 'left bottom' }} />
      </div>

      <div ref={wallRight} className='absolute bottom-0 right-[-1px] z-10 w-[53%] h-[120vh] sm:h-[143vh] md:h-[165vh] lg:h-[180vh] xl:h-[220vh] [@media(min-aspect-ratio:4/5)_and_(max-aspect-ratio:6/5)]:h-[160vh]'>
        <Image src="/svgs/research/mountains/wall-right.svg" alt='' fill className='object-cover object-bottom' style={{ objectPosition: 'right bottom' }} />
      </div>

      <div ref={girlRip} className='absolute -top-7 sm:-top-10 md:-top-12 left-[30%] sm:left-[32%] lg:left-[37%] xl:left-[37%] -translate-x-1/2 z-30 w-[250px] sm:w-[300px] md:w-[440px] xl:w-[520px]'>
        <Image src="/svgs/research/mountains/girl.svg" alt='' width={400} height={400} className='w-full h-auto' />
      </div>
    </div>
  );
};
