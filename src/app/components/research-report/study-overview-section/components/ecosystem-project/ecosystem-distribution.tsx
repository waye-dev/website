"use client";

import { ResponsiveCircleRow } from "./responsive-circle-row";
import { ecosystemDistribution } from "./ecosystem-data";

interface EcosystemDistributionProps {
  availableWidth: number;
  dotsRef: React.MutableRefObject<HTMLDivElement[]>;
}

export const EcosystemDistribution = ({ availableWidth, dotsRef }: EcosystemDistributionProps) => {
  return (
    <section className='flex flex-col gap-10 text-xl font-inter font-normal items-center'>
      <div className='flex flex-col gap-10 items-center'>
        <ResponsiveCircleRow availableWidth={availableWidth} dotsRef={dotsRef} />

        <section className='flex flex-row gap-20 justify-between w-full max-w-[600px]'>
          {ecosystemDistribution.map((distribution) => (
            <div key={distribution.title} className='flex flex-col gap-2 items-center'>
              <p className='text-center font-inknutAntiqua text-3xl'>{distribution.value}</p>
              <p className='text-center'>{distribution.title}</p>
            </div>
          ))}
        </section>
      </div>

      <p className='text-center'>Nostr developers cluster primarily in applications.</p>
    </section>
  );
};