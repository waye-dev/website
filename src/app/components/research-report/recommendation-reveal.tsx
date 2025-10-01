"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GirlRip from "../../assets/images/girl-rip.png";
import BackdropImage from "../../assets/images/Hill-backdrop.png";

gsap.registerPlugin(ScrollTrigger);

export const RecommendationReveal = () => {
  const container = useRef<HTMLDivElement>(null);
  const girlRip = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        id: "recommendation-reveal",
        trigger: container.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        // pinSpacing: false,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const y = progress * 2000;

          gsap.set(girlRip.current, { y, ease: "none", overwrite: 'auto' });
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className='h-screen w-full relative'>
      <div ref={container}>
        <div className='absolute h-full w-full'>
          <Image src={BackdropImage} alt='' fill className='object-cover object-center' />
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

      <div ref={girlRip} className='absolute -top-[67rem]'>
        <Image src={GirlRip} alt='' />
      </div>
    </div>
  );
};
