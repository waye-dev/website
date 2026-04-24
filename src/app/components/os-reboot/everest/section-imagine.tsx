import React from "react";
import Image from "next/image";

export function EverestSectionImagine() {
  return (
    <section className='pt-12 sm:pt-16 pb-12 sm:pb-16'>
      <div className='rounded-[10px] border-2 border-black bg-blue-custom-800 p-6 sm:p-8 md:p-10'>
        <h2 className='text-2xl sm:text-3xl font-medium leading-tight mb-8'>
          Could you imagine?
        </h2>
        <div className='flex flex-col gap-6 text-lg leading-[160%]'>
          <p>
            We know the strug. Sometimes, it feels like a bunch of decentralized ants fighting against a dictator giant. The fight we are up against is HUGE.
          </p>
          <p>
            How are you supposed to turn off your laptop at the end of the day, let alone your mind?
          </p>
          <p className='leading-[1.6]'>
            But what if…<br />
            You don&apos;t just <em>feel guilty</em> about not doing enough.<br />
            You <em>know</em> you moved the mission forward in a meaningful way.
          </p>
          <p>
            Is that even possible? OS Reboot is a space for us to explore this question together.
          </p>
        </div>
        <div className='mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6'>
          <div className='shrink-0 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-square flex items-center justify-center [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]'>
            <Image
              src='/images/am-i-doing-enough.png'
              alt='Am I doing enough?'
              width={400}
              height={400}
              className='w-full h-full object-contain object-center drop-shadow-sm'
              unoptimized
            />
          </div>
          <div className='shrink-0 py-3 px-0 sm:py-0 sm:px-0 flex items-center justify-center' aria-hidden>
            <svg className='w-12 h-8 sm:w-16 sm:h-9 text-black rotate-90 sm:rotate-0' viewBox='0 0 48 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <path d='M2 12h40M38 8l4 4-4 4' />
            </svg>
          </div>
          <div className='shrink-0 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-square flex items-center justify-center [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]'>
            <Image
              src='/images/accomplished-a-lot.png'
              alt='I made meaningful progress today'
              width={400}
              height={400}
              className='w-full h-full object-contain object-center drop-shadow-sm'
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
