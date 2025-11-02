"use client"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CrocAnimation } from "./croc-animation";
import { SimpleShareButton } from "@/app/components/share-mode/simple-share-button";
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';

gsap.registerPlugin(ScrollTrigger);

export const CoreFindingsTheTyrany = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textToFadeRef = useRef<HTMLDivElement>(null);
  const textToPinRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (typeof window === 'undefined') return;
    if (!sectionRef.current || !textToFadeRef.current || !textToPinRef.current) return;

    const ctx = gsap.context(() => {
      // Fade out the first section (title and first two paragraphs)
      gsap.to(textToFadeRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "top -20%",
          scrub: true,
        },
        opacity: 0,
        y: -50,
      });

      // Pin the "We call this..." text
      ScrollTrigger.create({
        trigger: textToPinRef.current,
        start: "top 30%",
        end: "+=200%",
        pin: true,
        pinSpacing: false,
      });

      // Fade out the pinned text after a while
      gsap.to(textToPinRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -115%",
          end: "top -165%",
          scrub: true,
        },
        opacity: 0,
        y: -30,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
    <div className='flex flex-col gap-12 px-12 lg:px-56 pb-12'>
      <div ref={textToFadeRef} className='flex flex-col gap-12'>
        <div className='flex flex-col gap-4'>
          <p className='font-inknutAntiqua text-xl text-center'>Core findings: </p>
          <h5 className='text-xl md:text-2xl lg:text-4xl leading-[120%] font-inknutAntiqua text-center'>
            The tyranny of permissionlessness
          </h5>
        </div>

        <section className='flex flex-col gap-8 text-lg'>
          <p>
            The paradoxes revealed in our opening exercise — between commons and commerce, sustainability and experience, autonomy and isolation — all
            point to a deeper structural tension, revealed by our interviews.
          </p>
          <strong>{`Permissionlessness — the defining principle of Bitcoin and the broader OSS ecosystem — becomes oppressive when applied to human work systems.`}</strong>
        </section>
      </div>

      <p ref={textToPinRef} className='text-lg'>
        We call this <strong>"the tyranny of permissionlessness."</strong> <SimpleShareButton shareId={SHAREABLE_description_IDS.PERMISSIONLESSNESS_ISOLATION} />
      </p>
    </div>

<CrocAnimation />
  </section>
)
}