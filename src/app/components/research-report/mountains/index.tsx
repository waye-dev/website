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

  // Speed multipliers
  const GIRL_SPEED = 1.25;
  const GIRL_X_SPEED = 0.2;
  const WALL_SPEED = 1;
  const MOUNTAIN_SPEED = 0.3;
  const MOUNTAIN_X_SPEED = 0.2;

  useGSAP(
    () => {
      ScrollTrigger.create({
        id: "recommendation-reveal",
        trigger: container.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;

          const girlY = progress * 2000 * GIRL_SPEED;
          const girlX = progress * 2000 * -GIRL_X_SPEED;
          const wallY = progress * 2000 * WALL_SPEED;
          // Mountain movement and scale start at 0.5 progress (when walls are halfway down)
          const mountainY = progress < 0.5 ? 0 : (progress - 0.5) * 2000 * MOUNTAIN_SPEED * 2;
          const mountainX = progress < 0.5 ? 0 : (progress - 0.5) * 2000 * -MOUNTAIN_X_SPEED * 2;
          const mountainScale = progress < 0.5 ? 1 : 1 + (progress - 0.5) * 4;
          const girlScale = 1 + progress * 1.5;

          gsap.set(girlRip.current, { y: girlY, x: girlX, scale: girlScale, ease: "none", overwrite: 'auto' });
          gsap.set(wallLeft.current, { y: wallY, ease: "none", overwrite: 'auto' });
          gsap.set(wallRight.current, { y: wallY, ease: "none", overwrite: 'auto' });
          gsap.set(mountains.current, { y: mountainY, x: mountainX, scale: mountainScale, ease: "none", overwrite: 'auto' });
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className='h-screen w-full relative overflow-y-hidden bg-white border-white border-t'>
      <div className='absolute h-full w-full'>
        <div ref={mountains} className='absolute h-full w-full'>
          <Image src="/svgs/research/mountains/mountains.svg" alt='' fill className='object-cover object-center' />
        </div>
        <div className='absolute h-full w-full flex items-center justify-center'>
          <div className='text-center space-y-3 text-black font-inknutAntiqua'>
            <h3 className='text-2xl'>Recommendations:</h3>
            <p className='text-[34px]'>
              From tyranny to sustainable <br /> permissionlessness
            </p>
          </div>
        </div>
      </div>

      <div ref={wallLeft} className='absolute bottom-0 left-0 z-10 w-1/2 h-[222vh]'>
        <Image src="/svgs/research/mountains/wall-left.svg" alt='' fill className='object-cover object-bottom' style={{ objectPosition: 'left bottom' }} />
      </div>

      <div ref={wallRight} className='absolute bottom-0 right-0 z-10 w-1/2 h-[228vh]'>
        <Image src="/svgs/research/mountains/wall-right.svg" alt='' fill className='object-cover object-bottom' style={{ objectPosition: 'right bottom' }} />
      </div>

      <div ref={girlRip} className='absolute top-0 left-[41%] -translate-x-1/2 z-30 w-[440px]'>
        <Image src="/svgs/research/mountains/girl.svg" alt='' width={400} height={400} className='w-full h-auto' />
      </div>
    </div>
  );
};
