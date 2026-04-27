import React from "react";
import { DetailsCard, RebootImage } from "../cards";

export function EverestSectionHeroDetails() {
  return (
    <>
      <div className='flex gap-4 flex-col sm:flex-row sm:relative justify-between'>
        <section className='flex flex-col sm:absolute top-0 left-0'>
          <h1 className='text-[38px] lg:text-[52px] leading-[120%] lg:leading-[62.4px]'>
            OS Reboot
          </h1>
        </section>

        <section className='flex justify-end items-end w-full min-w-0 flex-1 sm:mt-10 md:mt-0'>
          <RebootImage />
        </section>
      </div>

      <section className='pt-12 sm:pt-16 pb-12 sm:pb-16'>
        <DetailsCard
          tldrFirst
          intro={
            <div className='flex flex-col gap-2'>
              <p className='text-2xl sm:text-3xl font-medium leading-tight text-black'>
                You&apos;re committed to building freedom tech.
              </p>
              <p className='text-2xl sm:text-3xl font-medium leading-tight text-black'>
                We&apos;re committed to helping you build systems that lasts.
              </p>
            </div>
          }
          timeline={
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <p className='text-lg font-medium leading-[160%] text-black'>
                  8 sessions · May–November 2026
                </p>
                <p className='text-lg leading-[160%] text-black'>
                  We are offering two cohorts across different time zones to support our global team.
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='rounded-lg border border-black/20 bg-white/[0.35] px-3.5 py-3 sm:px-4 sm:py-3.5'>
                  <p className='text-lg font-semibold leading-[160%] text-black'>
                    Macchu Picchu Cohort
                  </p>
                  <p className='mt-1 text-lg font-medium leading-[160%] text-black'>
                    Tuesdays 12:30pm EST / 4:30pm GMT / 6:30pm CET
                  </p>
                  <p className='mt-2 text-lg leading-[160%] text-black'>
                    May 19 ✧ Jun 30 ✧ Jul 21 ✧ Aug 11 ✧ Sep 1 ✧ Sep 22 ✧ Oct 13 ✧ Nov 3
                  </p>
                </div>
                <div className='rounded-lg border border-black/20 bg-white/[0.35] px-3.5 py-3 sm:px-4 sm:py-3.5'>
                  <p className='text-lg font-semibold leading-[160%] text-black'>
                    Kilimanjaro Cohort
                  </p>
                  <p className='mt-1 text-lg font-medium leading-[160%] text-black'>
                    Thursdays 8pm EST / Fri 6:30am IST / Fri 9am HKT / Fri 10am JST
                  </p>
                  <p className='mt-2 text-lg leading-[160%] text-black'>
                    May 21 ✧ Jul 2 ✧ Jul 23 ✧ Aug 13 ✧ Sep 3 ✧ Sep 24 ✧ Oct 15 ✧ Nov 5
                  </p>
                </div>
              </div>
            </div>
          }
          tldr={
            <>
              Upgrade your mental OS through this structured protocol designed specifically for freedom tech builders. If you are looking to{" "}
              <span className='font-semibold'>increase flow state</span> and <span className='font-semibold'>prevent burnout</span>, this program is for you.
            </>
          }
        />
      </section>
    </>
  );
}
